# API Integration Documentation

This document outlines the backend API integrations implemented for the Best Technologies Ltd website.

## Overview

The project includes robust API integration for:

1. Newsletter subscription
2. Contact form submission (ready for future backend implementation)

## Architecture

### Core Components

- **`lib/api.ts`** - Main API client with error handling, retry logic, and type safety
- **`lib/config.ts`** - Configuration management and feature flags
- **`hooks/useApiRequest.ts`** - Custom React hook for API state management
- **`components/ui/ApiModal.tsx`** - Reusable modal components for success/error states

### Features

- ✅ Type-safe API calls with Zod validation
- ✅ Comprehensive error handling with user-friendly messages
- ✅ Loading states and disabled form controls
- ✅ Retry logic for failed requests
- ✅ Request timeout handling
- ✅ Environment-based configuration
- ✅ Feature flags for API endpoints
- ✅ Reusable modal components
- ✅ Form validation and sanitization

## API Endpoints

### Newsletter Subscription

**Endpoint:** `POST /newsletter/subscribe`
**Status:** ✅ Implemented and Active

```typescript
// Request
{
  "email": "john.doe@example.com"
}

// Success Response (201)
{
  "statusCode": 201,
  "success": true,
  "message": "Successfully subscribed to newsletter",
  "length": 1,
  "data": {
    "id": "cmdyayw2f0000ar20gc4113ve",
    "email": "john.doe@example.com",
    "createdAt": "Aug 5, 2025, 8:54 AM",
    "updatedAt": "Aug 5, 2025, 8:54 AM"
  }
}
```

**Error Handling:**

- `400` - Bad request (invalid email format)
- `409` - Email already subscribed
- `429` - Too many requests
- `500` - Server error

### Contact Form Submission

**Endpoint:** `POST /contact/submit`
**Status:** 🚧 Ready for Implementation (Currently Simulated)

```typescript
// Request
{
  "name": "John Doe",
  "phone": "+1234567890",
  "email": "john.doe@example.com",
  "company": "Acme Corp", // optional
  "service": "Web Development",
  "projectDetails": "I need a custom web application..."
}
```

## Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=https://best-tech-nestjs.onrender.com/api/v1

# Feature Flags
NEXT_PUBLIC_ENABLE_CONTACT_API=false  # Set to true when backend is ready
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_ERROR_REPORTING=true
```

### Feature Flags

- **`ENABLE_CONTACT_API`** - Enables real API calls for contact form (currently false, uses simulation)
- **`ENABLE_ANALYTICS`** - Enables analytics tracking
- **`ENABLE_ERROR_REPORTING`** - Enables error reporting to monitoring services

## Usage Examples

### Newsletter Component

```tsx
import { newsletterApi } from "@/lib/api";
import { useApiRequest } from "@/hooks/useApiRequest";

const { loading, error, execute } = useApiRequest(newsletterApi.subscribe);

const handleSubmit = async (email: string) => {
  const result = await execute(email);
  if (result?.success) {
    // Handle success
  }
};
```

### Contact Form Component

```tsx
import { contactApi } from "@/lib/api";
import { useApiRequest } from "@/hooks/useApiRequest";

const { loading, error, execute } = useApiRequest(contactApi.submitForm);

const handleSubmit = async (formData: GetInTouchRequest) => {
  const result = await execute(formData);
  if (result?.success) {
    // Handle success
  }
};
```

## Error Handling

### API Error Types

```typescript
interface ApiException {
  statusCode: number;
  message: string;
  originalError?: any;
}
```

### Error Messages

The system provides user-friendly error messages:

- **400** - "Invalid request. Please check your input and try again."
- **409** - "This email is already subscribed to our newsletter."
- **429** - "Too many requests. Please try again later."
- **500** - "Server error. Please try again later."
- **Timeout** - "Request timeout. Please check your connection and try again."
- **Network** - "Network error occurred. Please check your connection and try again."

## Testing

### Newsletter API

1. Valid email submission
2. Invalid email format
3. Duplicate email subscription
4. Network error simulation
5. Loading states

### Contact Form API

1. All required fields validation
2. Service selection requirement
3. Email format validation
4. Loading states during submission
5. Success/error modal display

## Future Enhancements

1. **Implement Contact API Backend**

   - Create the actual `/contact/submit` endpoint
   - Set `NEXT_PUBLIC_ENABLE_CONTACT_API=true`
   - Test real API integration

2. **Add Authentication**

   - Implement Auth.js for user authentication
   - Add protected routes for admin features
   - User session management

3. **Enhanced Analytics**

   - Track form submissions
   - Monitor API response times
   - Error rate monitoring

4. **Additional Features**
   - File upload support for contact form
   - Email templates for confirmations
   - Admin dashboard for managing submissions

## Deployment Checklist

- [ ] Set production API URLs in environment variables
- [ ] Enable contact API when backend is ready
- [ ] Configure error monitoring (Sentry, LogRocket, etc.)
- [ ] Set up analytics tracking
- [ ] Test all error scenarios in production
- [ ] Monitor API response times and error rates

## Maintenance

### Regular Tasks

- Monitor API response times
- Review error logs and user feedback
- Update error messages based on user experience
- Test API integrations after backend updates

### Code Quality

- All API calls are type-safe with Zod validation
- Comprehensive error handling with retry logic
- Reusable components and hooks
- Clear separation of concerns
- Well-documented code with TypeScript interfaces
