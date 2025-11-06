"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/ui/button";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { Target, Award, Zap, Users, ChartLine, Lightbulb } from "lucide-react";

const values = [
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork, fostering a culture of open communication and shared success.",
    icon: Users,
  },
  {
    title: "Innovation",
    description:
      "We embrace AI and new ideas, constantly seeking creative solutions to complex challenges and staying ahead of industry trends.",
    icon: Lightbulb,
  },
  {
    title: "Growth",
    description:
      "We are committed to continuous learning and development, helping our clients and team members achieve their full potential.",
    icon: ChartLine,
  },
  {
    title: "Integrity",
    description:
      "We act with honesty, transparency, and accountability in all our interactions, building trust with clients and partners.",
    icon: Award,
  },
];

export default function About() {
  const { navigateAndScroll } = useSmoothScroll();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateAndScroll("/contact", "contact-form", 120);
  };

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "99%", label: "Client Retention" },
    { number: "15+", label: "Team Members" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Subtle pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="aboutPattern"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="15" cy="15" r="2" fill="#9ef01a" opacity="0.3" />
              <circle cx="5" cy="5" r="1" fill="#70e000" opacity="0.4" />
              <circle cx="25" cy="25" r="1" fill="#70e000" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutPattern)" />
        </svg>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/imgs/footer-skyline.jpg"
              alt="Best Technologies Ltd - About Us"
              fill
              className="object-cover"
              quality={100}
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-gray-900/95"></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent drop-shadow-lg pb-1">
              About Us
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              We are Best Technologies Ltd., a forward-thinking digital agency
              committed to empowering businesses through innovative technology
              solutions.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Founded with a vision to bridge the gap between businesses and
                  cutting-edge technology, Best Technologies Ltd. has grown from
                  a small startup to a trusted partner for organizations
                  worldwide.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Our journey began with a simple belief: technology should
                  empower, not complicate. Today, we continue to live by this
                  principle, delivering solutions that drive real business
                  value.
                </p>
              </div>
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-brand-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To transform businesses through innovative digital solutions
                  that unlock growth potential, leveraging cutting-edge AI tools
                  and deep client partnerships while cultivating an environment
                  where creative excellence drives transformative results for
                  every client we serve.
                </p>
              </div>

              <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To empower businesses and individuals in Africa and beyond
                  with cutting-edge, AI-driven technology solutions that drive
                  growth and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do and shape our
                culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:-translate-y-2 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-secondary/20 via-gray-800/80 to-brand-secondary/20 rounded-3xl p-12 border border-brand-primary/20 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Let&apos;s Work Together
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let&apos;s discuss how we can help transform your business with
                innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleContactClick}
                  className="bg-brand-primary text-white px-8 py-6 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
