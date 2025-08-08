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
  { id: "design-experience", title: "UI/UX Design Experience" },
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
            isSticky ? "fixed top-20 sm:top-24 left-0 right-0 z-30" : "relative"
          } transition-all duration-200`}
        >
          <div className="mx-3 sm:mx-4 mt-2">
            <nav className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
              <ul
                ref={navRef}
                className="flex px-3 sm:px-4 py-2.5 sm:py-3 overflow-x-auto scrollbar-hide gap-1 sm:gap-2"
              >
                {sections.map((section, index) => (
                  <React.Fragment key={section.id}>
                    <li
                      className={`cursor-pointer pb-1.5 sm:pb-2 border-b-2 transition-colors duration-300 flex-shrink-0 whitespace-nowrap px-1.5 sm:px-2 ${
                        activeSection === section.id
                          ? "text-purple-600 border-purple-600 font-semibold"
                          : "border-transparent text-gray-700 hover:text-purple-600"
                      }`}
                      style={{
                        fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                      }}
                      onClick={() => handleSectionClick(section.id)}
                    >
                      {section.title}
                    </li>
                    {index < sections.length - 1 && (
                      <div className="flex-shrink-0 mx-2 sm:mx-3 self-center">
                        <div className="w-px h-3 sm:h-4 bg-gray-300"></div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        {/* Spacer div when navigation is fixed to prevent content jump */}
        {isSticky && <div className="h-16 sm:h-20"></div>}
      </div>

      {/* Stacked nav for desktop */}
      <aside className="hidden lg:block sticky top-20 xl:top-24">
        <div className="mb-3 lg:mb-4 uppercase tracking-wider text-gray-600 text-xs lg:text-sm font-semibold px-2">
          Contents
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 max-w-sm">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`w-full text-left px-3 lg:px-4 py-2.5 lg:py-3 font-medium hover:bg-gray-50 transition-colors border-b border-b-gray-100 flex items-center justify-between group cursor-pointer ${
                activeSection === section.id
                  ? "bg-purple-50 text-purple-700 font-semibold border-l-4 border-purple-600"
                  : "text-gray-700"
              }`}
              style={{
                fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
              }}
              onClick={() => handleSectionClick(section.id)}
            >
              <span>{section.title}</span>
              <ChevronRight
                className={`h-3 w-3 lg:h-4 lg:w-4 transition-colors ${
                  activeSection === section.id
                    ? "text-purple-600"
                    : "text-gray-400 group-hover:text-gray-600"
                }`}
              />
            </button>
          ))}
          <div className="p-3 lg:p-4">
            <Button
              asChild
              className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs lg:text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
