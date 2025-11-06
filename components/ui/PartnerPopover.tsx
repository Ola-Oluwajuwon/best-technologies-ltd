"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { X } from "lucide-react";

const PartnerPopover: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();
  const { navigateAndScroll } = useSmoothScroll();

  // Define excluded routes
  const excludedRoutes = [
    "/partnerwithus",
    "/trainings/bootcamp/ai-ml",
    "/trainings/bootcamp/backend-development",
    "/trainings/bootcamp/cloud-devops",
    "/trainings/bootcamp/cybersecurity",
    "/trainings/bootcamp/data-analysis",
    "/trainings/bootcamp/data-science",
    "/trainings/bootcamp/frontend-development",
    "/trainings/bootcamp/growth-marketing",
    "/trainings/bootcamp/mobile-app",
    "/trainings/bootcamp/software-engineering",
    "/trainings/bootcamp/ui-ux",
  ];

  // Check if current route should show popover
  const shouldShowPopover = !excludedRoutes.includes(pathname);

  // Check if popover was dismissed
  const isPopoverDismissed = () => {
    if (typeof window === "undefined") return false;
    const dismissed = localStorage.getItem("partnerPopoverDismissed");
    const dismissedDate = localStorage.getItem("partnerPopoverDismissedDate");

    // Reset dismissal after 7 days
    if (dismissed && dismissedDate) {
      const daysSinceDismissed =
        (Date.now() - parseInt(dismissedDate)) / (1000 * 60 * 60 * 24);
      if (daysSinceDismissed > 7) {
        localStorage.removeItem("partnerPopoverDismissed");
        localStorage.removeItem("partnerPopoverDismissedDate");
        return false;
      }
    }

    return dismissed === "true";
  };

  // Handle popover visibility
  useEffect(() => {
    if (!shouldShowPopover || isPopoverDismissed()) {
      return;
    }

    // Show popover after page loads with delay
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Auto-hide after 20 seconds
    const autoHideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 23000);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(showTimer);
      clearTimeout(autoHideTimer);
    };
  }, [shouldShowPopover, pathname]);

  // Handle dismiss
  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("partnerPopoverDismissed", "true");
    localStorage.setItem("partnerPopoverDismissedDate", Date.now().toString());
  };

  // Handle CTA click
  const handleCTAClick = () => {
    setIsVisible(false);
    navigateAndScroll("/partnerwithus", "partner-contact-form", 100);
  };

  // Don't render if conditions not met
  if (!isLoaded || !shouldShowPopover || isPopoverDismissed()) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 transform transition-all duration-500 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-4 opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="bg-gradient-to-br from-brand-secondary to-gray-900 text-white rounded-lg shadow-2xl p-4 md:p-5 w-72 md:w-80 max-w-sm relative border border-brand-primary/30">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 md:top-3 md:right-3 text-white/80 hover:text-white transition-colors duration-200"
          aria-label="Close partner program notification"
        >
          <X size={16} className="md:w-[18px] md:h-[18px] cursor-pointer" />
        </button>

        {/* Content */}
        <div className="pr-6 md:pr-6">
          <h3 className="font-bold text-base md:text-lg mb-2">
            Join Our Partner Program
          </h3>

          <div className="text-xs md:text-sm mb-3 md:mb-4 space-y-1">
            <p className="font-medium">Ready to Earn Extra Income?</p>
            <p>Refer Clients and Earn 15% Commission</p>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleCTAClick}
            className="w-full bg-brand-primary font-semibold py-2 md:py-2.5 px-3 md:px-4 rounded-md hover:bg-brand-accent transition-colors duration-200 text-xs md:text-sm shadow-sm text-white cursor-pointer"
          >
            Click here to get started
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-brand-primary rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default PartnerPopover;
