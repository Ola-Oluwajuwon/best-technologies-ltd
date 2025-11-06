"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowLeft,
  Users,
  Shield,
} from "lucide-react";

const StaffLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
      console.log("Staff login:", { email, password });
    }, 2000);
  };

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

          {/* Login Card */}
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent pb-1">
                Staff Login
              </h1>
              <p className="text-gray-400">
                Access your staff dashboard and management tools
              </p>
            </div>

            {/* Login Form */}
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
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 pr-12 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-brand-primary focus:ring-brand-primary/20"
                    placeholder="Enter your password"
                    required
                  />
                  <Button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-0 h-auto bg-transparent hover:bg-transparent text-gray-400 hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 text-brand-primary bg-gray-700 border-gray-600 rounded focus:ring-brand-primary focus:ring-2"
                  />
                  <Label htmlFor="remember" className="text-sm text-gray-300">
                    Remember me
                  </Label>
                </div>
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-brand-primary hover:text-brand-accent transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-brand-primary hover:bg-brand-primary/80 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            {/* Additional Options */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <div className="text-center">
                <p className="text-gray-400 mb-4">Need access?</p>
                <div className="space-y-2">
                  <Link
                    href="/contact"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    Contact Administrator
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-6 bg-gray-800/20 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
            <div className="flex items-center text-gray-400 text-sm">
              <Shield className="w-4 h-4 mr-2 text-brand-primary" />
              Your login information is encrypted and secure
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StaffLoginPage;
