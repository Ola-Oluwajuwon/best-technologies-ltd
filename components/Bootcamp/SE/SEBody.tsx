"use client";

import React, { useState, useEffect } from "react";
import SideNavigation from "./SideNavigation";
import SoftwareEngineeringExperience from "./sections/SoftwareEngineeringExperience";
import WhatYoullLearn from "./sections/WhatYoullLearn";
import TuitionDates from "./sections/TuitionDates";
import Projects from "./sections/Projects";
import CareerPrep from "./sections/CareerPrep";
import Admissions from "./sections/Admissions";
import Testimonials from "./sections/Testimonials";
import FAQs from "./sections/FAQs";

const ContentSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState("fullstack-experience");

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "fullstack-experience",
        "what-youll-learn",
        "tuition-dates",
        "projects",
        "career-prep",
        "admissions",
        "testimonials",
        "faqs",
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-8">
        <div className="w-full lg:w-1/4">
          <SideNavigation
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />
        </div>
        <div className="w-full lg:w-3/4 lg:ps-8 xl:ps-16">
          <SoftwareEngineeringExperience />
          <WhatYoullLearn />
          <TuitionDates />
          <Projects />
          <CareerPrep />
          <Admissions />
          <Testimonials />
          <FAQs />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
