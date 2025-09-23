"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";
import { FaArrowUp, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      requestAnimationFrame(() => {
        setShowScroll(window.scrollY > 300);
      });
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-gray-900">
      {/* Responsive Background Images */}
      {/* Mobile Portrait Image */}
      <div className="absolute inset-0 sm:hidden">
        <Image
          src="/gallery/the-knowledge-hub-01-portrait.jpg"
          alt="The Knowledge Hub"
          fill
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Desktop Landscape Image */}
      <div className="absolute inset-0 hidden sm:block">
        <Image
          src="/gallery/the-knowledge-hub-01.jpg"
          alt="The Knowledge Hub"
          fill
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Wavy Gradient Overlay - Inspired by Swiper.js */}
      <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden pointer-events-none">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="wave-gradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#a4cd39" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#7ca412" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient
              id="wave-gradient-2"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#7ca412" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* First wave layer - taller and more prominent */}
          <path
            d="M0,120 C240,80 480,160 720,120 C960,80 1200,160 1440,120 L1440,400 L0,400 Z"
            fill="url(#wave-gradient)"
          />

          {/* Second wave layer - covers more area */}
          <path
            d="M0,180 C360,140 720,200 1080,160 C1260,150 1350,155 1440,160 L1440,400 L0,400 Z"
            fill="url(#wave-gradient-2)"
          />

          {/* Bottom solid layer - ensures full coverage to bottom */}
          <path
            d="M0,240 C480,200 960,260 1440,220 L1440,400 L0,400 Z"
            fill="#0f172a"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-30 py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Services */}
          <div>
            <h4 className="text-[#a4cd39] text-xl font-semibold mb-6">
              Services
            </h4>
            <div className="space-y-3">
              <Link
                href="/services/web-development"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                Web Development
              </Link>
              <Link
                href="/services/mobile-development"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                Mobile Development
              </Link>
              <Link
                href="/services/cloud-solutions"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                Cloud Solutions
              </Link>
              <Link
                href="/services/digital-transformation"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                Digital Transformation
              </Link>
              <Link
                href="/services/cybersecurity"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                Cybersecurity
              </Link>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-[#a4cd39] text-xl font-semibold mb-6">
              Industries
            </h4>
            <div className="space-y-3">
              <Link
                href="/industries/healthcare"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                Healthcare
              </Link>
              <Link
                href="/industries/finance"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                Finance
              </Link>
              <Link
                href="/industries/education"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                Education
              </Link>
              <Link
                href="/industries/government"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                Government
              </Link>
              <Link
                href="/industries/retail"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                Retail
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#a4cd39] text-xl font-semibold mb-6">
              Company
            </h4>
            <div className="space-y-3">
              <Link
                href="/about"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                About Us
              </Link>
              <Link
                href="/our-team"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                Our Team
              </Link>
              <Link
                href="/careers"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                Careers
              </Link>
              <Link
                href="/blog"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                Contact
              </Link>
              <Link
                href="/partnerwithus"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                Partner with Us
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[#a4cd39] text-xl font-semibold mb-6">
              Connect
            </h4>
            <div className="space-y-4">
              <Link
                href="https://www.linkedin.com/company/best-technologies-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Link>
              <Link
                href="https://x.com/besttech_ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                <Twitter className="w-5 h-5" />
                Twitter
              </Link>
              <Link
                href="https://www.tiktok.com/@besttechltd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                <FaTiktok className="w-5 h-5" />
                TikTok
              </Link>
              <Link
                href="https://www.instagram.com/besttechnologiesltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </Link>
              {/* <Link
                href="https://github.com/Best-tech-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#a4cd39] transition-colors cursor-pointer"
              >
                <Github className="w-5 h-5" />
                GitHub
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      <div className="text-white px-6 md:px-10 flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left max-w-7xl mx-auto border-t border-gray-600/30 pt-8 pb-8 relative z-30">
        {/* Logo */}
        <Link href="/" className="mb-4 md:mb-0">
          <Image
            src="/logo-main.png"
            alt="Best Technologies Ltd"
            width={150}
            height={20}
            className="mx-auto md:mx-0"
          />
        </Link>
        {/* Policy Links */}
        <div className="flex flex-row mx-auto gap-4 text-xs">
          <Link
            href="/privacy-policy"
            className="hover:underline cursor-pointer"
          >
            Privacy Policy
          </Link>
          <Link
            href="/cookies-policy"
            className="hover:underline cursor-pointer"
          >
            Cookies Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="hover:underline cursor-pointer"
          >
            Terms of Service
          </Link>
        </div>
        {/* Copyright */}
        <p className="text-xs mt-4 md:mt-0">
          © {new Date().getFullYear()} Best Technologies Ltd. All rights
          reserved.
        </p>
        {/* Scroll to Top Button */}
        {showScroll && (
          <button
            className="fixed z-50 bottom-4 right-4 md:bottom-6 md:right-6 border rounded-full p-2 hover:text-[#7ca412] border-[#7ca412] hover:bg-[#0e1117] bg-[#7ca412] text-white hover:cursor-pointer transition"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowUp size={18} />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
