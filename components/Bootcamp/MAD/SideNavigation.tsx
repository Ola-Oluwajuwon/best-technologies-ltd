"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/ui/button";
import { ChevronRight } from "lucide-react";

interface SideNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: "mobile-experience", title: "Mobile Experience" },
  { id: "what-youll-learn", title: "What You'll Learn" },
  { id: "tuition-dates", title: "Tuition & Dates" },
  { id: "projects", title: "Projects" },
  { id: "career-prep", title: "Career Prep" },
  { id: "admissions", title: "Admissions" },
  { id: "testimonials", title: "Testimonials" },
  { id: "faqs", title: "FAQs" },
];

const SideNavigation: React.FC<SideNavigationProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 780);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to active section in navigation when activeSection changes
  useEffect(() => {
    if (navRef.current && activeSection) {
      const activeIndex = sections.findIndex(
        (section) => section.id === activeSection
      );
      if (activeIndex !== -1) {
        const navElement = navRef.current;
        const activeElement = navElement.children[
          activeIndex * 2
        ] as HTMLElement; // *2 because of dividers

        if (activeElement) {
          const navRect = navElement.getBoundingClientRect();
          const activeRect = activeElement.getBoundingClientRect();
          const scrollLeft = navElement.scrollLeft;

          // Calculate the position to center the active element
          const targetScrollLeft =
            scrollLeft +
            activeRect.left -
            navRect.left -
            navRect.width / 2 +
            activeRect.width / 2;

          navElement.scrollTo({
            left: Math.max(0, targetScrollLeft),
            behavior: "smooth",
          });
        }
      }
    }
  }, [activeSection]);

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Adjust for navbar (80px) + side navigation on mobile (approximately 60px)
      const offsetTop = element.offsetTop - 140;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    onSectionChange(sectionId);
  };

  return (
    <>
      {/* Horizontal scrollable nav for mobile/tablet - Fixed position when sticky */}
      <div className="lg:hidden">
        <div
          className={`${
            isSticky ? "fixed top-24 left-0 right-0 z-30" : "relative"
          } transition-all duration-200`}
        >
          <div className="mx-4 mt-2">
            <nav className="bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden">
              <ul
                ref={navRef}
                className="flex px-4 py-3 overflow-x-scroll scrollbar-hide"
              >
                {sections.map((section, index) => (
                  <React.Fragment key={section.id}>
                    <li
                      className={`cursor-pointer pb-2 border-b-2 transition-colors duration-300 flex-shrink-0 whitespace-nowrap ${
                        activeSection === section.id
                          ? "text-green-600 border-green-600 font-semibold"
                          : "border-transparent text-gray-700 hover:text-green-600"
                      }`}
                      onClick={() => handleSectionClick(section.id)}
                    >
                      {section.title}
                    </li>
                    {index < sections.length - 1 && (
                      <div className="flex-shrink-0 mx-4 self-center">
                        <div className="w-px h-4 bg-gray-300"></div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        {/* Spacer div when navigation is fixed to prevent content jump */}
        {isSticky && <div className="h-20"></div>}
      </div>

      {/* Stacked nav for desktop */}
      <aside className="hidden lg:block sticky top-24 lg:top-[116px]">
        <div className="mb-4 uppercase tracking-wider text-gray-600 text-sm font-semibold px-2">
          Contents
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-gray-50 transition-colors border-b border-b-gray-100 flex items-center justify-between group cursor-pointer ${
                activeSection === section.id
                  ? "bg-green-50 text-green-700 font-semibold border-l-4 border-green-600"
                  : "text-gray-700"
              }`}
              onClick={() => handleSectionClick(section.id)}
            >
              <span>{section.title}</span>
              <ChevronRight
                className={`h-4 w-4 transition-colors ${
                  activeSection === section.id
                    ? "text-green-600"
                    : "text-gray-400 group-hover:text-gray-600"
                }`}
              />
            </button>
          ))}
          <div className="p-4">
            <Button
              asChild
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              <Link href="/trainings/register">APPLY NOW</Link>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideNavigation;
