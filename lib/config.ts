// API Configuration
export const API_CONFIG = {
  BASE_URL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://best-tech-nestjs.onrender.com/api/v1",
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 2,
  RETRY_DELAY: 1000, // 1 second
} as const;

// Endpoints
export const ENDPOINTS = {
  NEWSLETTER_SUBSCRIBE: "/newsletter/subscribe",
  CONTACT_SUBMIT: "/admin/contact-us",
} as const;

// Environment-specific settings
export const isDevelopment = process.env.NODE_ENV === "development";
export const isProduction = process.env.NODE_ENV === "production";

// Feature flags
export const FEATURES = {
  ENABLE_CONTACT_API: process.env.NEXT_PUBLIC_ENABLE_CONTACT_API === "true",
  ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
  ENABLE_ERROR_REPORTING:
    process.env.NEXT_PUBLIC_ENABLE_ERROR_REPORTING === "true",
} as const;
