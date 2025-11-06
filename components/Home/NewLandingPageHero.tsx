"use client";

import Link from "next/link";
import React from "react";

import { ArrowRight, Sparkles, Zap, Star, Download } from "lucide-react";

const NewLandingPageHero = () => {
  return (
    <section
      id="contact"
      className="h-screen max-h-[780px] py-20 relative overflow-hidden flex items-center"
    >
      {/* Video Background */}
      {/* Mobile Portrait Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover sm:hidden"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/vids/team-space-portrait.mp4" type="video/mp4" />
      </video>

      {/* Desktop Landscape Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover hidden sm:block"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/vids/team-space.mp4" type="video/mp4" />
      </video>

      {/* Transparent Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 sm:mb-8 mt-6 sm:mt-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight bg-gradient-to-r from-brand-accent via-brand-primary to-white bg-clip-text text-transparent pb-1">
            Transform Your
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent pb-1">
              Digital Future
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto -mt-6 leading-relaxed px-4 sm:px-0">
            Join thousands of forward-thinking companies who have already
            revolutionized their digital presence with our cutting-edge
            platform.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-2">
          <div className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-2 sm:px-4 py-1 sm:py-2 rounded-full border border-cyan-400/30">
            <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" />
            <span className="text-cyan-200 text-xs sm:text-sm font-medium">
              Innovative Solutions
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-2 sm:px-4 py-1 sm:py-2 rounded-full border border-purple-400/30">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" />
            <span className="text-purple-200 text-xs sm:text-sm font-medium">
              Trusted by Leaders
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-2 sm:px-4 py-1 sm:py-2 rounded-full border border-green-400/30">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" />
            <span className="text-green-200 text-xs sm:text-sm font-medium">
              Great Support
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0">
          <Link
            href="#get-in-touch-form"
            className="group bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-accent hover:to-brand-primary font-semibold px-6 sm:px-10 py-3 sm:py-[12px] text-sm sm:text-base rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-brand-primary/25 focus:outline-none focus:ring-2 focus:ring-brand-primary w-full sm:w-auto justify-center"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("get-in-touch-form");
              if (element) {
                const offsetTop = element.offsetTop - 100; // 100px offset
                window.scrollTo({
                  top: offsetTop,
                  behavior: "smooth",
                });
              }
            }}
          >
            Get Started Now
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          <a
            href="/portfolio/BEST TECHNOLOGIES LTD Services.pdf"
            rel="noopener noreferrer"
            className="group border-2 border-brand-primary/50 hover:border-brand-primary text-brand-neutral-off-white hover:text-white font-semibold px-6 sm:px-10 py-3 sm:py-[10px] text-sm sm:text-base rounded-xl transition-all duration-300 hover:bg-brand-primary/5 flex items-center gap-2 sm:gap-3 justify-center w-full sm:w-auto"
          >
            View Project Portfolio
            <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewLandingPageHero;
