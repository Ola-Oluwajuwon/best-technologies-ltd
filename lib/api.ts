import { z } from "zod";
import { API_CONFIG, ENDPOINTS, FEATURES } from "./config";

// Base API response type
export interface ApiResponse<T = unknown> {
  statusCode: number;
  success: boolean;
  message: string;
  length?: number;
  data?: T;
}

// Newsletter subscription types
export const NewsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type NewsletterRequest = z.infer<typeof NewsletterSchema>;

export interface NewsletterData {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

// Get in touch form types
export const GetInTouchSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  companyName: z.string().min(1, "Company name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  subject: z
    .enum(
      [
        "general_enquiry",
        "sales_and_partnership",
        "technical_support",
        "careers_and_hr",
        "media_and_press",
      ],
      {
        errorMap: () => ({ message: "Please select a valid subject" }),
      }
    )
    .optional(),
  projectType: z.enum(
    [
      "ai_ml_development",
      "web_development",
      "full_stack_marketing",
      "mobile_app_development",
      "it_solutions",
      "bootcamps_and_training",
      "desktop_app_development",
      "website_development",
      "e_commerce_development",
      "saas_development",
      "blockchain_development",
      "data_science_and_analytics",
      "general_enquiry",
    ],
    {
      errorMap: () => ({ message: "Please select a valid project type" }),
    }
  ),
  proposedBudget: z.enum(
    [
      "five_hundred_thousand",
      "one_million",
      "three_million",
      "five_million",
      "ten_million",
      "thwenty_five_million",
      "fifty_million",
      "hundred_million",
    ],
    {
      errorMap: () => ({ message: "Please select a budget range" }),
    }
  ),
  projectTimeline: z.enum(
    [
      "asap",
      "one_to_three_months",
      "three_to_six_months",
      "six_to_twelve_months",
      "flexible",
    ],
    {
      errorMap: () => ({ message: "Please select a project timeline" }),
    }
  ),
  projectDetails: z.string().min(1, "Project details are required"),
});

export type GetInTouchRequest = z.infer<typeof GetInTouchSchema>;

export interface ContactFormData {
  id: string;
  fullName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  subject?: string;
  projectType: string;
  proposedBudget: string;
  projectTimeline: string;
  projectDetails: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

// API Error types
export interface ApiError {
  statusCode: number;
  message: string;
  error?: string;
}

// Custom error class
export class ApiException extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public originalError?: unknown
  ) {
    super(message);
    this.name = "ApiException";
  }
}

// Generic API request handler with retry logic
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {},
  retryCount = 0
): Promise<ApiResponse<T>> {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;

  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const data = await response.json();

    // If response is not ok, throw an error
    if (!response.ok) {
      throw new ApiException(
        response.status,
        data.message || `HTTP error! status: ${response.status}`,
        data
      );
    }

    return data;
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof ApiException) {
      // Retry logic for certain errors
      if (
        retryCount < API_CONFIG.RETRY_ATTEMPTS &&
        (error.statusCode >= 500 || error.statusCode === 429)
      ) {
        await new Promise((resolve) =>
          setTimeout(resolve, API_CONFIG.RETRY_DELAY * (retryCount + 1))
        );
        return apiRequest(endpoint, options, retryCount + 1);
      }
      throw error;
    }

    // Handle network errors or other exceptions
    if (error instanceof Error && error.name === "AbortError") {
      throw new ApiException(
        408,
        "Request timeout. Please check your connection and try again.",
        error
      );
    }

    throw new ApiException(
      500,
      "Network error occurred. Please check your connection and try again.",
      error
    );
  }
}

// Newsletter API functions
export const newsletterApi = {
  subscribe: async (email: string): Promise<ApiResponse<NewsletterData>> => {
    // Validate input
    const validatedData = NewsletterSchema.parse({ email });

    return apiRequest<NewsletterData>(ENDPOINTS.NEWSLETTER_SUBSCRIBE, {
      method: "POST",
      body: JSON.stringify(validatedData),
    });
  },
};

// Get in touch API functions
export const contactApi = {
  submitForm: async (
    formData: GetInTouchRequest
  ): Promise<ApiResponse<ContactFormData>> => {
    // Validate input
    const validatedData = GetInTouchSchema.parse(formData);

    // Check if contact API is enabled
    if (FEATURES.ENABLE_CONTACT_API) {
      return apiRequest<ContactFormData>(ENDPOINTS.CONTACT_SUBMIT, {
        method: "POST",
        body: JSON.stringify(validatedData),
      });
    } else {
      // Simulate API call for development/testing
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            statusCode: 201,
            success: true,
            message: "Contact us entry created successfully",
            data: {
              id: `temp_${Date.now()}`,
              ...validatedData,
              status: "initiated",
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            } as ContactFormData,
          });
        }, 2000); // Simulate network delay
      });
    }
  },
};

// Utility function to handle API errors and extract user-friendly messages
export function getErrorMessage(error: unknown): string {
  if (error instanceof ApiException) {
    switch (error.statusCode) {
      case 400:
        return "Invalid request. Please check your input and try again.";
      case 409:
        return "This email is already subscribed to our newsletter.";
      case 429:
        return "Too many requests. Please try again later.";
      case 500:
        return "Server error. Please try again later.";
      default:
        return (
          error.message || "An unexpected error occurred. Please try again."
        );
    }
  }

  if (error instanceof z.ZodError) {
    return error.errors[0]?.message || "Invalid input provided.";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "An unexpected error occurred. Please try again.";
}
