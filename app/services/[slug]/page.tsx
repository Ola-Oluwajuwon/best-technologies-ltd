"use client";

import React from "react";
import { Button } from "@/ui/button";
import { notFound } from "next/navigation";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import {
  Code,
  Cloud,
  Zap,
  Settings,
  Shield,
  Users,
  Smartphone,
  Database,
  Globe,
  ArrowRight,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

const services = [
  {
    slug: "custom-software-development",
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
    longDescription:
      "Transform your business with custom software solutions designed specifically for your unique needs. Our expert development team creates scalable, secure, and user-friendly applications that streamline your operations and drive growth.",
    benefits: [
      "Increased operational efficiency",
      "Enhanced user experience",
      "Scalable architecture",
      "Integration with existing systems",
      "Ongoing support and maintenance",
    ],
    process: [
      "Discovery & Requirements Analysis",
      "System Design & Architecture",
      "Development & Testing",
      "Deployment & Training",
      "Ongoing Support & Maintenance",
    ],
  },
  {
    slug: "digital-transformation",
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
    longDescription:
      "Navigate the digital landscape with confidence through our comprehensive digital transformation services. We help organizations modernize their operations, improve efficiency, and stay competitive in today's digital economy.",
    benefits: [
      "Streamlined business processes",
      "Improved customer experiences",
      "Data-driven decision making",
      "Enhanced collaboration",
      "Future-ready technology stack",
    ],
    process: [
      "Current State Assessment",
      "Digital Strategy Development",
      "Technology Selection",
      "Implementation Planning",
      "Change Management & Training",
    ],
  },
  {
    slug: "web-development",
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
    longDescription:
      "Create stunning, high-performance websites and web applications that engage your audience and drive results. Our web development services combine cutting-edge technology with exceptional design to deliver outstanding digital experiences.",
    benefits: [
      "Mobile-first responsive design",
      "Fast loading speeds",
      "SEO optimization",
      "User-friendly interfaces",
      "Secure and scalable architecture",
    ],
    process: [
      "Project Planning & Strategy",
      "UI/UX Design",
      "Frontend & Backend Development",
      "Testing & Quality Assurance",
      "Launch & Optimization",
    ],
  },
  {
    slug: "mobile-development",
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
    longDescription:
      "Reach your customers wherever they are with powerful mobile applications. We develop native and cross-platform mobile apps that provide seamless user experiences and robust functionality across all devices.",
    benefits: [
      "Cross-platform compatibility",
      "Intuitive user interfaces",
      "Offline functionality",
      "Push notifications",
      "App store optimization",
    ],
    process: [
      "App Strategy & Planning",
      "UI/UX Design",
      "Development & Testing",
      "App Store Submission",
      "Post-Launch Support",
    ],
  },
  {
    slug: "ai-integration-and-automation",
    title: "AI Integration & Automation",
    description:
      "Leverage artificial intelligence to automate business processes, enhance decision-making, and unlock new efficiencies.",
    icon: Zap,
    features: [
      "Process Automation",
      "AI Chatbots",
      "Predictive Analytics",
      "Machine Learning Solutions",
    ],
    longDescription:
      "Harness the power of artificial intelligence to transform your business operations. Our AI integration services help you automate processes, gain insights from data, and make smarter business decisions.",
    benefits: [
      "Automated workflows",
      "Intelligent data analysis",
      "24/7 customer support",
      "Predictive insights",
      "Reduced operational costs",
    ],
    process: [
      "AI Readiness Assessment",
      "Solution Design",
      "Model Development & Training",
      "Integration & Testing",
      "Monitoring & Optimization",
    ],
  },
  {
    slug: "cloud-solutions",
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
    longDescription:
      "Modernize your IT infrastructure with secure, scalable cloud solutions. We help businesses migrate to the cloud, optimize performance, and reduce costs while maintaining security and compliance.",
    benefits: [
      "Reduced infrastructure costs",
      "Enhanced scalability",
      "Improved security",
      "24/7 availability",
      "Disaster recovery",
    ],
    process: [
      "Cloud Assessment",
      "Migration Planning",
      "Data Migration",
      "Application Modernization",
      "Ongoing Management",
    ],
  },
  {
    slug: "cybersecurity",
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
    longDescription:
      "Protect your business from cyber threats with comprehensive security solutions. Our cybersecurity services help organizations identify vulnerabilities, implement security measures, and maintain compliance.",
    benefits: [
      "Enhanced data protection",
      "Compliance assurance",
      "Risk mitigation",
      "Incident response",
      "Employee training",
    ],
    process: [
      "Security Assessment",
      "Risk Analysis",
      "Security Implementation",
      "Monitoring & Detection",
      "Incident Response",
    ],
  },
  {
    slug: "technology-consulting",
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
    longDescription:
      "Make informed technology decisions with expert guidance from our consulting team. We help organizations develop IT strategies, select the right technologies, and optimize their technology investments.",
    benefits: [
      "Strategic technology planning",
      "Cost optimization",
      "Risk reduction",
      "Vendor management",
      "Performance improvement",
    ],
    process: [
      "Current State Analysis",
      "Strategy Development",
      "Technology Evaluation",
      "Implementation Planning",
      "Ongoing Advisory",
    ],
  },
  {
    slug: "database-solutions",
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
    longDescription:
      "Optimize your data management with professional database solutions. We design, implement, and maintain database systems that ensure your data is secure, accessible, and performing at its best.",
    benefits: [
      "Improved data performance",
      "Enhanced security",
      "Reliable backup systems",
      "Data analytics capabilities",
      "Scalable architecture",
    ],
    process: [
      "Data Assessment",
      "Database Design",
      "Implementation & Migration",
      "Performance Optimization",
      "Ongoing Maintenance",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to boost your online presence, attract new customers, and grow your brand.",
    icon: Globe,
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Creation",
      "Pay-Per-Click Advertising",
    ],
    longDescription:
      "Expand your reach and grow your business with our digital marketing services. We craft data-driven strategies that increase visibility, engage your audience, and drive measurable results across all digital channels.",
    benefits: [
      "Increased online visibility",
      "Targeted audience engagement",
      "Higher conversion rates",
      "Brand growth",
      "Measurable ROI",
    ],
    process: [
      "Market Research & Analysis",
      "Strategy Development",
      "Campaign Execution",
      "Performance Tracking",
      "Optimization & Reporting",
    ],
  },
  {
    slug: "brand-motion-design",
    title: "Brand & Motion Design",
    description:
      "Creative branding and motion design services to help your business stand out and communicate effectively.",
    icon: Settings,
    features: [
      "Logo & Visual Identity",
      "Brand Guidelines",
      "Animated Explainers",
      "Motion Graphics",
    ],
    longDescription:
      "Elevate your brand with compelling visual identities and engaging motion graphics. Our team delivers creative solutions that capture attention, communicate your message, and leave a lasting impression.",
    benefits: [
      "Stronger brand recognition",
      "Professional visual presence",
      "Engaging animations",
      "Consistent brand messaging",
      "Improved audience retention",
    ],
    process: [
      "Brand Discovery",
      "Concept Development",
      "Design & Animation",
      "Feedback & Revisions",
      "Final Delivery & Support",
    ],
  },
];

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ServiceDetailPage = ({ params }: ServiceDetailPageProps) => {
  const { slug } = React.use(params);
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
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
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-6 md:mb-8">
              <Button
                onClick={() => window.history.back()}
                variant="ghost"
                className="text-gray-400 mr-4"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Services</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mb-6 md:mb-8">
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent pb-1">
                  {service.title}
                </h1>

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
                  {service.longDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
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
                    className="bg-brand-primary hover:bg-brand-primary/80 text-white px-6 md:px-8 py-3 md:py-6 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
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
                    className="bg-gray-700/50 hover:bg-gray-600/50 text-white border-gray-600 hover:border-gray-500 px-6 md:px-8 py-3 md:py-6 rounded-xl font-semibold transition-all duration-300"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700/50 text-center"
                  >
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-brand-primary mx-auto mb-2 md:mb-3" />
                    <h3 className="text-sm md:text-base font-semibold text-white">
                      {feature}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-gray-800/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
                Key Benefits
              </h2>
              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
                Discover how our {service.title.toLowerCase()} services can
                transform your business operations and drive success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-brand-primary mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    {benefit}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
                Our Process
              </h2>
              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project
                delivery and exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg md:text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-white">
                    {step}
                  </h3>

                  {index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-brand-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-gray-800/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-brand-secondary/20 via-gray-800/80 to-brand-secondary/20 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-brand-primary/20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
                Ready to Get Started?
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                Let&apos;s discuss how our {service.title.toLowerCase()}{" "}
                services can help transform your business and drive growth.
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
                  className="bg-brand-primary hover:bg-brand-primary/80 text-white px-6 md:px-8 py-3 md:py-4 lg:py-6 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30"
                >
                  Start Your Project
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

export default ServiceDetailPage;
