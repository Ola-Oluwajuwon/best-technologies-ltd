"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll effect with more nuanced control
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 100); // Increased threshold for better effect
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity based on scroll position for smooth transition
  const getNavbarOpacity = () => {
    if (scrollY <= 50) return 0;
    if (scrollY >= 150) return 1;
    return (scrollY - 50) / 100; // Gradual opacity from scroll 50px to 150px
  };

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-in-out",
          isScrolled ? "w-[95%] max-w-6xl" : "w-[90%] max-w-7xl"
        )}
      >
        <div
          className={cn(
            "relative px-6 py-4 transition-all duration-700 ease-in-out",
            isScrolled
              ? "backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl shadow-2xl before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/5 before:to-transparent before:pointer-events-none"
              : "bg-transparent border-transparent"
          )}
          style={{
            backgroundColor: `rgba(255, 255, 255, ${getNavbarOpacity() * 0.2})`,
            backdropFilter: `blur(${getNavbarOpacity() * 16}px)`,
            borderColor: `rgba(255, 255, 255, ${getNavbarOpacity() * 0.3})`,
            borderWidth: getNavbarOpacity() > 0.1 ? "1px" : "0px",
            borderRadius: getNavbarOpacity() > 0.1 ? "16px" : "0px",
            boxShadow: `0 25px 50px -12px rgba(0, 0, 0, ${
              getNavbarOpacity() * 0.25
            })`,
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo-main.png"
                alt="Best Technologies Ltd"
                width={140}
                height={35}
                priority
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/services"
                className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium relative group px-3 py-2"
              >
                <span className="relative z-10">Services</span>
                <div className="absolute inset-0 bg-brand-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>

              <Link
                href="/trainings"
                className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium relative group px-3 py-2"
              >
                <span className="relative z-10">Trainings</span>
                <div className="absolute inset-0 bg-brand-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>

              <Link
                href="/about"
                className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium relative group px-3 py-2"
              >
                <span className="relative z-10">About Us</span>
                <div className="absolute inset-0 bg-brand-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>

              <Link
                href="/blog"
                className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium relative group px-3 py-2"
              >
                <span className="relative z-10">Blog</span>
                <div className="absolute inset-0 bg-brand-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>

              <Link
                href="/partnerwithus"
                className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium relative group px-3 py-2"
              >
                <span className="relative z-10">Partner</span>
                <div className="absolute inset-0 bg-brand-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>

              {/* Sign In Dropdown */}
              <Link
                href="/auth/login/student"
                className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium relative group px-3 py-2"
              >
                <span className="relative z-10">Sign In</span>
                <div className="absolute inset-0 bg-brand-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>
            </div>

            {/* Contact Us Button (Desktop) */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="bg-transparent border border-brand-primary/60 text-white hover:bg-brand-primary hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-300 rounded-full px-6 backdrop-blur-sm"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileNav}
              className="lg:hidden text-white hover:bg-white/10"
            >
              {mobileNavOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {mobileNavOpen && (
        <MobileNav isOpen={mobileNavOpen} onClose={toggleMobileNav} />
      )}
    </>
  );
};

export default Navbar;
