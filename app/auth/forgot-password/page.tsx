"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import {
  Mail,
  ArrowLeft,
  KeyRound,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userType, setUserType] = useState<"student" | "staff">("student");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log("Password reset requested for:", { email, userType });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <NavBar />

        {/* Background Effects */}
        <div className="fixed inset-0 z-[-1]">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          <svg
            className="absolute inset-0 w-full h-full opacity-5"
            viewBox="0 0 100 100"
          >
            <defs>
              <pattern
                id="techGrid"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="1" fill="#9ef01a" opacity="0.3" />
                <path
                  d="M10,0 L10,20 M0,10 L20,10"
                  stroke="#9ef01a"
                  strokeWidth="0.3"
                  opacity="0.2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#techGrid)" />
          </svg>
        </div>

        <main className="relative z-10 pt-24 md:pt-32 pb-16 px-4 md:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Check Your Email
              </h1>

              <p className="text-gray-300 mb-6 leading-relaxed">
                We&apos;ve sent a password reset link to{" "}
                <span className="text-brand-primary font-medium">{email}</span>.
                Please check your email and follow the instructions to reset
                your password.
              </p>

              <div className="space-y-4">
                <Button
                  asChild
                  className="w-full bg-brand-primary hover:bg-brand-primary/80 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  <Link href={`/auth/login/${userType}`}>Back to Sign In</Link>
                </Button>

                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="ghost"
                  className="w-full text-gray-400 hover:text-white"
                >
                  Try Different Email
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <p className="text-gray-400 text-sm">
                  Didn&apos;t receive the email? Check your spam folder or{" "}
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand-primary hover:text-brand-accent transition-colors"
                  >
                    try again
                  </button>
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="techGrid"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="1" fill="#9ef01a" opacity="0.3" />
              <path
                d="M10,0 L10,20 M0,10 L20,10"
                stroke="#9ef01a"
                strokeWidth="0.3"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGrid)" />
        </svg>
      </div>

      <main className="relative z-10 pt-24 md:pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-md mx-auto">
          {/* Back Navigation */}
          <div className="flex items-center mb-6 md:mb-8">
            <Button
              onClick={() => window.history.back()}
              variant="ghost"
              className="text-gray-400 hover:text-white mr-4 p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <span className="text-gray-400">Back</span>
          </div>

          {/* Reset Password Card */}
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <KeyRound className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent pb-1">
                Reset Password
              </h1>
              <p className="text-gray-400">
                Enter your email address and we&apos;ll send you a link to reset
                your password
              </p>
            </div>

            {/* User Type Selection */}
            <div className="mb-6">
              <Label className="text-white font-medium mb-3 block">
                Account Type
              </Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUserType("student")}
                  className={`p-3 rounded-xl border transition-all duration-200 ${
                    userType === "student"
                      ? "bg-brand-primary/20 border-brand-primary text-white"
                      : "bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  Student
                </button>
                <button
                  type="button"
                  onClick={() => setUserType("staff")}
                  className={`p-3 rounded-xl border transition-all duration-200 ${
                    userType === "staff"
                      ? "bg-brand-primary/20 border-brand-primary text-white"
                      : "bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  Staff
                </button>
              </div>
            </div>

            {/* Reset Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-brand-primary focus:ring-brand-primary/20"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-brand-primary hover:bg-brand-primary/80 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Sending Reset Link...
                  </div>
                ) : (
                  "Send Reset Link"
                )}
              </Button>
            </form>

            {/* Additional Options */}
            <div className="mt-8 pt-6 border-t border-gray-700/50 text-center">
              <p className="text-gray-400 mb-4">Remember your password?</p>
              <div className="space-y-2">
                <Link
                  href="/auth/login/student"
                  className="block text-brand-primary hover:text-brand-accent transition-colors"
                >
                  Student Login
                </Link>
                <Link
                  href="/auth/login/staff"
                  className="block text-brand-primary hover:text-brand-accent transition-colors"
                >
                  Staff Login
                </Link>
              </div>
            </div>
          </div>

          {/* Help Notice */}
          <div className="mt-6 bg-gray-800/20 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
            <div className="flex items-start text-gray-400 text-sm">
              <AlertCircle className="w-4 h-4 mr-2 text-brand-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-white mb-1">Need help?</p>
                <p>
                  If you continue to have trouble accessing your account, please{" "}
                  <Link
                    href="/contact"
                    className="text-brand-primary hover:text-brand-accent transition-colors"
                  >
                    contact our support team
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;
