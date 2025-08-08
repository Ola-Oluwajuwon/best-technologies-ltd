"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Bootcamp/Navbar";
import BootcampOverlay from "@/components/Bootcamp/BootcampOverlay";
import { FaLaptopCode } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";
import ContentSection from "@/components/Bootcamp/SE/SEBody";
import PricingModal from "@/components/Bootcamp/PricingModal";

export default function SoftwareEngineeringBootcampPage() {
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
        title="Software Engineering"
        description="Become a software engineer with our comprehensive bootcamp covering HTML, CSS, JavaScript, React, Node.js, and more"
        icon={<FaLaptopCode className="text-white text-base md:text-2xl" />}
        backgroundImage="/bootcamp/software-development.jpg"
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
