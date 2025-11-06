"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/ui/button";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import {
  Briefcase,
  Users,
  ChartLine,
  Upload,
  Award,
  Mail,
  Lightbulb,
  PartyPopper,
  X,
} from "lucide-react";

const Careers = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const values = [
    {
      title: "Collaboration",
      description:
        "We believe the best solutions come from diverse perspectives working together.",
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace new technologies to solve complex problems.",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Growth",
      description:
        "We foster an environment of continuous learning and improvement.",
      icon: ChartLine,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Integrity",
      description:
        "We build trust through transparency, honesty, and ethical business practices.",
      icon: Award,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const benefits = [
    "Competitive salary and performance bonuses",
    "Comprehensive health and dental coverage",
    "Flexible working arrangements and remote options",
    "Professional development and training opportunities",
    "Modern office space with latest technology",
    "Team building events and company retreats",
    "Mentorship programs and career advancement",
    "Innovation time for personal projects",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setShowSuccessModal(true);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      portfolio: "",
      coverLetter: "",
      resume: null,
    });
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Career growth pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="careerPattern"
              x="0"
              y="0"
              width="25"
              height="25"
              patternUnits="userSpaceOnUse"
            >
              {/* Ladder steps */}
              <line
                x1="8"
                y1="5"
                x2="17"
                y2="5"
                stroke="#9ef01a"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <line
                x1="8"
                y1="10"
                x2="17"
                y2="10"
                stroke="#9ef01a"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <line
                x1="8"
                y1="15"
                x2="17"
                y2="15"
                stroke="#9ef01a"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <line
                x1="8"
                y1="20"
                x2="17"
                y2="20"
                stroke="#9ef01a"
                strokeWidth="0.5"
                opacity="0.3"
              />
              {/* Ladder sides */}
              <line
                x1="8"
                y1="2"
                x2="8"
                y2="23"
                stroke="#70e000"
                strokeWidth="0.4"
                opacity="0.4"
              />
              <line
                x1="17"
                y1="2"
                x2="17"
                y2="23"
                stroke="#70e000"
                strokeWidth="0.4"
                opacity="0.4"
              />
              {/* Growth arrow */}
              <polygon points="12.5,2 14,4 11,4" fill="#9ef01a" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#careerPattern)" />
        </svg>

        {/* Floating elements */}
        <div className="absolute top-32 right-32 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-32 left-32 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/staff/best-tech-team.jpg"
              alt="Best Technologies Ltd Team"
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
            <div className="w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-brand-primary/30">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent drop-shadow-lg pb-1">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto mb-8 drop-shadow-md">
              Be part of a dynamic team that&apos;s shaping the future of
              technology. We&apos;re looking for passionate individuals who want
              to make a real impact in the tech industry.
            </p>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 max-w-2xl mx-auto backdrop-blur-sm">
              <p className="text-orange-300 font-semibold mb-2">
                Always Looking for Exceptional Talent
              </p>
              <p className="text-gray-100">
                While we don&apos;t have specific openings right now, we&apos;re
                always interested in connecting with talented professionals.
                Submit your CV and we&apos;ll reach out when the right
                opportunity arises.
              </p>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:transform hover:scale-105 group text-center"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Why Work With Us?
            </h2>
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-300 leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Join Our Waitlist
              </h2>
              <p className="text-xl text-gray-300">
                Ready to take the next step in your career? We&apos;d love to
                hear from you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-brand-primary mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-brand-primary mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-brand-primary mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="position"
                    className="block text-sm font-semibold text-brand-primary mb-2"
                  >
                    Position of Interest
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a position</option>
                    <option value="software-developer">
                      Software Developer
                    </option>
                    <option value="cloud-architect">Cloud Architect</option>
                    <option value="devops-engineer">DevOps Engineer</option>
                    <option value="project-manager">Project Manager</option>
                    <option value="ui-ux-designer">UI/UX Designer</option>
                    <option value="business-analyst">Business Analyst</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="experience"
                  className="block text-sm font-semibold text-brand-primary mb-2"
                >
                  Years of Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years (Entry level)</option>
                  <option value="2-5">2-5 years (Mid-level)</option>
                  <option value="6-10">6-10 years (Senior level)</option>
                  <option value="10+">10+ years (Expert level)</option>
                </select>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="portfolio"
                  className="block text-sm font-semibold text-brand-primary mb-2"
                >
                  Portfolio/LinkedIn URL
                </label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors"
                  placeholder="https://yourportfolio.com or https://linkedin.com/in/yourname"
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="resume"
                  className="block text-sm font-semibold text-brand-primary mb-2"
                >
                  Resume/CV *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    required
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <label
                    htmlFor="resume"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-gray-400 cursor-pointer hover:border-brand-primary transition-colors flex items-center"
                  >
                    <Upload className="w-5 h-5 mr-3" />
                    {formData.resume
                      ? formData.resume.name
                      : "Choose file (PDF, DOC, DOCX)"}
                  </label>
                </div>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="coverLetter"
                  className="block text-sm font-semibold text-brand-primary mb-2"
                >
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={6}
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us why you'd be a great fit for our team..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-brand-primary py-6 font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/40"
              >
                Submit Application
              </Button>
            </form>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Questions About Careers?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our HR team is here to help answer any questions about
              opportunities at Best Technologies Ltd.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:info@besttechnologiesltd.com"
                className="bg-brand-primary text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/40 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email HR Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-gray-700 relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-brand-primary hover:bg-gray-600 hover:cursor-pointer transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <PartyPopper className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Application Submitted Successfully!
              </h3>

              <p className="text-gray-900 text-base mb-6 leading-relaxed text-center">
                Thank you for your interest in joining our team!. We&apos;ll be
                in touch as soon as we have open opportunities that align with
                your skills.
              </p>

              <Button
                onClick={closeModal}
                className="w-full bg-brand-primary hover:bg-brand-primary/90 transition-all duration-300"
              >
                Continue Exploring
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Careers;
