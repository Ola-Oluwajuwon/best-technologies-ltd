"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/ui/button";
import { ArrowRight, Calendar, Clock, Users } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const AnimatedHero = () => {
  const { scrollToElement } = useSmoothScroll();

  return (
    <section className="relative h-screen md:max-h-[780px] flex items-center justify-center overflow-hidden py-26 md:py-0 lg:pt-8">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Subtle tech pattern */}
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

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-white">Launch Your Tech Career</span>
            <br />
            <span className="bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent pb-1">
              with Our Tech Bootcamp
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
            Transform your career in just 6 months with our intensive, hands-on
            bootcamp. <br className="hidden lg:block" /> Learn from industry
            experts and build real-world projects that employers love.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 px-2">
          <div className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full border border-cyan-400/30">
            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 flex-shrink-0" />
            <span className="text-cyan-200 text-xs sm:text-sm font-medium whitespace-nowrap">
              6 Months Intensive Program
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full border border-purple-400/30">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 flex-shrink-0" />
            <span className="text-purple-200 text-xs sm:text-sm font-medium whitespace-nowrap">
              300+ Hours of Training
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full border border-green-400/30">
            <Users className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 flex-shrink-0" />
            <span className="text-green-200 text-xs sm:text-sm font-medium whitespace-nowrap">
              95% Job Placement Rate
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
          <Button
            asChild
            className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary hover:from-brand-primary/80 hover:via-brand-accent/80 hover:to-brand-primary/80 text-white px-6 sm:px-8 py-3 sm:py-4 md:py-6 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30 text-sm sm:text-base md:text-lg w-full sm:w-auto sm:min-w-[180px] md:min-w-[200px]"
          >
            <Link href="/trainings/register">
              Enroll Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Link>
          </Button>

          <Button
            variant="outline"
            onClick={() => scrollToElement("explore-programs", 80)}
            className="bg-gray-700/50 hover:bg-gray-600/50 text-white border-gray-600 hover:border-brand-primary px-6 sm:px-8 py-3 sm:py-4 md:py-6 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base md:text-lg w-full sm:w-auto sm:min-w-[180px] md:min-w-[200px]"
          >
            Explore Courses
          </Button>
        </div>

        {/* Additional Info */}
        {/* <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            Next cohort starts{" "}
            <span className="text-brand-primary font-semibold">
              May 2, 2025
            </span>
            <br />
            Limited seats available - Secure your spot today!
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default AnimatedHero;
