"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Bootcamp/Navbar";
import BootcampOverlay from "@/components/Bootcamp/BootcampOverlay";
import { BarChart3 } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import ContentSection from "@/components/Bootcamp/DA/DABody";
import PricingModal from "@/components/Bootcamp/PricingModal";

export default function DataAnalysisBootcampPage() {
  const [showPricingModal, setShowPricingModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPricingModal(true);
    }, 2000); // Show modal 2 seconds after page loads

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-white text-[#161a25]">
      <Navbar />
      <BootcampOverlay
        title="Data Analysis"
        description="Transform raw data into actionable insights with our comprehensive 26-week data analysis program. Master Python, SQL, Machine Learning, and business intelligence tools."
        icon={<BarChart3 className="text-white text-base md:text-2xl" />}
        backgroundImage="/bootcamp/data-analysis.jpg"
      />
      <ContentSection />
      <Footer />

      <PricingModal
        isOpen={showPricingModal}
        onClose={() => setShowPricingModal(false)}
      />
    </div>
  );
}
