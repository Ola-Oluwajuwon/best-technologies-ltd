"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/ui/button";

import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import {
  Code,
  Cloud,
  Zap,
  BrainCircuit,
  ChartNoAxesCombined,
  Shield,
  Users,
  Smartphone,
  Database,
  Globe,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored applications and systems designed to meet your specific business requirements and operational workflows.",
    icon: Code,
    features: [
      "Web Applications",
      "Desktop Software",
      "Legacy System Modernization",
      "API Development",
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to enhance your online presence and drive engagement.",
    icon: ChartNoAxesCombined,
    features: [
      "Search Engine Optimization (SEO)",
      "Digital Strategy",
      "Content Marketing",
      "Social Media Management",
    ],
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with the latest technologies and best practices.",
    icon: Globe,
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "CMS Development",
      "Software as a Service (SaaS)",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    icon: Smartphone,
    features: [
      "iOS Development",
      "Android Development",
      "React Native",
      "Flutter Development",
    ],
  },
  {
    title: "AI Integration & Automation",
    description:
      "Leverage artificial intelligence to automate business processes, enhance decision-making, and unlock new efficiencies.",
    icon: BrainCircuit,
    features: [
      "Process Automation",
      "AI Chatbots",
      "Predictive Analytics",
      "Machine Learning Solutions",
    ],
  },
  {
    title: "Cloud Solutions",
    description:
      "Seamless migration to cloud platforms, infrastructure optimization, and managed cloud services for enhanced scalability.",
    icon: Cloud,
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "DevOps Implementation",
      "Cloud Security",
    ],
  },
  {
    title: "Digital Transformation",
    description:
      "Strategic guidance and implementation support to modernize your operations and embrace digital-first approaches.",
    icon: Zap,
    features: [
      "Process Automation",
      "Digital Strategy",
      "Change Management",
      "Technology Roadmaps",
    ],
  },
  {
    title: "Cybersecurity",
    description:
      "Comprehensive security assessments, implementation of robust security measures, and ongoing monitoring and support.",
    icon: Shield,
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance Management",
      "24/7 Monitoring",
    ],
  },
  {
    title: "Technology Consulting",
    description:
      "Expert advisory services to help you make informed technology decisions and optimize your IT investment strategy.",
    icon: Users,
    features: [
      "IT Strategy",
      "Vendor Selection",
      "Risk Assessment",
      "Performance Optimization",
    ],
  },
  {
    title: "Database Solutions",
    description:
      "Database design, optimization, and management services to ensure your data is secure, accessible, and performant.",
    icon: Database,
    features: [
      "Database Design",
      "Performance Tuning",
      "Data Analytics",
      "Backup & Recovery",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
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

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent pb-1">
              Our Services
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive your business
              forward. From custom software development to digital
              transformation, we have the expertise to deliver results.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const serviceSlug = service.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/&/g, "and");
                return (
                  <Link
                    key={index}
                    href={`/services/${serviceSlug}`}
                    className="group bg-gray-800/40 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:-translate-y-2 block"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>

                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-brand-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 md:mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm md:text-base text-gray-400"
                        >
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-brand-primary mr-2 md:mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full bg-gray-700/50 hover:bg-brand-primary/20 text-white py-2.5 md:py-6 rounded-lg md:rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group-hover:bg-brand-primary text-sm md:text-base">
                      Learn More
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Training Advertisement Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-brand-primary/10 via-brand-accent/10 to-brand-primary/10 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-brand-primary/20 backdrop-blur-sm">
              <div className="text-center max-w-3xl mx-auto">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8">
                  <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent pb-1">
                  Invest in Your Future with Our Training Programs
                </h2>

                <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
                  Empower yourself and your loved ones with cutting-edge
                  technology skills. Our comprehensive training programs are
                  designed to prepare you for the digital future, whether
                  you&apos;re starting your career or advancing your expertise.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 text-sm md:text-base">
                  <div className="flex items-center justify-center text-gray-300">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-brand-primary mr-2 md:mr-3" />
                    Industry-Expert Instructors
                  </div>
                  <div className="flex items-center justify-center text-gray-300">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-brand-primary mr-2 md:mr-3" />
                    Hands-on Projects
                  </div>
                  <div className="flex items-center justify-center text-gray-300">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-brand-primary mr-2 md:mr-3" />
                    Career Support
                  </div>
                </div>

                <Button
                  onClick={() => (window.location.href = "/trainings")}
                  className="bg-brand-primary hover:bg-brand-primary/80 text-white px-6 md:px-8 py-3 md:py-6 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30 text-sm md:text-base"
                >
                  Explore Training Programs
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-secondary/20 via-gray-800/80 to-brand-secondary/20 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-brand-primary/20 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
                Ready to Get Started?
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                Let&apos;s discuss how our services can help transform your
                business and drive growth through innovative technology
                solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    window.location.href = "/#get-in-touch-form";
                    setTimeout(() => {
                      const element =
                        document.getElementById("get-in-touch-form");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }}
                  className="bg-brand-primary hover:bg-brand-primary/80 text-white px-6 md:px-8 py-3 md:py-6 lg:py-6 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30 text-sm md:text-base"
                >
                  Start Your Project
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    window.location.href = "/contact#contact-form";
                    setTimeout(() => {
                      const element = document.getElementById("contact-form");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }}
                  className="bg-gray-700/50 hover:bg-gray-600/50 text-white border-gray-600 hover:border-gray-500 px-6 md:px-8 py-3 md:py-6 lg:py-6 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
