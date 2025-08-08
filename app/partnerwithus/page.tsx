"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ui/ContactForm";
import { useApiRequest } from "@/hooks/useApiRequest";
import { newsletterApi } from "@/lib/api";
import {
  SuccessModal,
  ErrorModal,
  DuplicateEmailModal,
} from "@/components/ui/ApiModal";
import {
  Users,
  BanknoteArrowDown,
  Zap,
  RefreshCw,
  ArrowRight,
  Send,
  Loader2,
  Building,
  Briefcase,
  GraduationCap,
  Globe,
  Target,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/ui/button";

const PartnerWithUs = () => {
  const [email, setEmail] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const [duplicateEmail, setDuplicateEmail] = useState("");

  const {
    loading: newsletterLoading,
    error: newsletterError,
    execute: subscribeToNewsletter,
    reset: resetNewsletter,
  } = useApiRequest(newsletterApi.subscribe);

  const handleNewsletterSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!email.trim()) return;

    const result = await subscribeToNewsletter(email.trim());

    if (result?.success) {
      setShowSuccessModal(true);
      setEmail("");
    } else if (newsletterError) {
      // Check if it's a 409 duplicate email error
      if (newsletterError.statusCode === 409) {
        setDuplicateEmail(email.trim());
        setShowDuplicateModal(true);
        setEmail("");
      } else {
        setShowErrorModal(true);
      }
    }
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    resetNewsletter();
  };

  const handleErrorModalClose = () => {
    setShowErrorModal(false);
  };

  const handleDuplicateModalClose = () => {
    setShowDuplicateModal(false);
    setDuplicateEmail("");
    resetNewsletter();
  };

  const handleRetry = () => {
    setShowErrorModal(false);
    resetNewsletter();
    const form = document.querySelector(
      "[data-newsletter-form]"
    ) as HTMLFormElement;
    if (form) {
      const syntheticEvent = {
        ...new Event("submit"),
        currentTarget: form,
        target: form,
        preventDefault: () => {},
        stopPropagation: () => {},
        nativeEvent: new Event("submit"),
        isDefaultPrevented: () => false,
        isPropagationStopped: () => false,
        persist: () => {},
      } as React.FormEvent<HTMLFormElement>;
      handleNewsletterSubmit(syntheticEvent);
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("partner-contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const howItWorks = [
    {
      step: 1,
      title: "Refer a Client",
      description: "Send us a project lead (individual or business)",
      icon: Users,
    },
    {
      step: 2,
      title: "We Deliver",
      description: "Our team connects, confirms, and executes the project",
      icon: Zap,
    },
    {
      step: 3,
      title: "You Get Paid",
      description:
        "Once payment is made, we send you 15% commission - no delays, no drama",
      icon: BanknoteArrowDown,
    },
  ];

  const whyJoin = [
    {
      title: "Zero work, just send a lead",
      icon: RefreshCw,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Earn on every successful project",
      icon: BanknoteArrowDown,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "No tech knowledge needed",
      icon: Users,
      color: "from-gray-600 to-gray-800",
    },
    {
      title: "Unlimited referrals allowed",
      icon: RefreshCw,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const idealReferrals = [
    {
      title: "Businesses in need of web/app development",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Entrepreneurs launching new ventures",
      icon: Briefcase,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Schools, startups, eCommerce stores, NGOs",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const benefits = [
    {
      title: "15% Commission",
      description: "Earn 15% on every successful project payment",
      icon: TrendingUp,
    },
    {
      title: "Fast Payments",
      description: "Get paid once client payment is confirmed",
      icon: Zap,
    },
    {
      title: "Global Network",
      description: "Work with clients from around the world",
      icon: Globe,
    },
    {
      title: "Dedicated Support",
      description: "Our team handles all technical aspects",
      icon: Target,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-brand-primary rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-brand-accent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/30 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className="inline-block bg-brand-primary/20 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  BEST TECH REFER & EARN PROGRAM
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent">
                  Send a Project.
                  <br />
                  Earn Instantly.
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Know someone who needs a website, mobile app, branding, or
                  digital solution?
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-white mb-2">
                    <span className="text-brand-primary font-bold">
                      Refer them to Best Tech
                    </span>{" "}
                    – and once their project payment is confirmed,{" "}
                    <span className="text-brand-primary font-bold">
                      you earn 15% commission.
                    </span>
                  </p>
                </div>
                <Button
                  onClick={scrollToForm}
                  className="bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary/90 hover:to-brand-accent/90 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-primary/40 inline-flex items-center"
                >
                  Start Referring Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-brand-primary to-brand-accent p-1 rounded-2xl">
                  <div className="bg-white rounded-xl p-8">
                    <Image
                      src="/imgs/refer-and-earn.png"
                      alt="Partnership Program"
                      width={400}
                      height={200}
                      className="w-full h-[400px] rounded-lg object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 bg-brand-primary text-white p-4 rounded-xl shadow-xl">
                  <BanknoteArrowDown className="w-8 h-8" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-brand-accent text-white p-4 rounded-xl shadow-xl">
                  <Users className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-brand-primary/20 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                HOW IT WORKS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Simple 3-Step Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our streamlined referral process makes it easy for you to start
                earning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorks.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 text-center group hover:transform hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-brand-primary/40 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-brand-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-20 px-4 md:px-8 bg-gray-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Why Join Our Program?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enjoy the benefits of our partnership program with no
                commitments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyJoin.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 text-center group hover:transform hover:scale-105"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {benefit.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal Referrals Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ideal Referrals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect candidates for our technology solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {idealReferrals.map((referral, index) => (
                <div
                  key={index}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 text-center group hover:transform hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${referral.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <referral.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {referral.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Overview */}
        <section className="py-20 px-4 md:px-8 bg-gray-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Partnership Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to succeed as our partner
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 text-center group hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-brand-primary/40 transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="partner-contact-form" className="py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              title="Join Our Partner Program"
              description="Ready to refer clients and earn commissions? Fill out the form below to join our referral program. Choose 'General Enquiry' as the project type and let us know how you'd like to partner with us in the text area."
            />
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 md:px-8 bg-gray-800/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Stay Updated on Partnership Opportunities
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8">
                Subscribe to receive exclusive partnership updates, referral
                tips, and success stories from our partner network.
              </p>
              <form
                data-newsletter-form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={newsletterLoading}
                  className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <Button
                  type="submit"
                  disabled={newsletterLoading || !email.trim()}
                  className="bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary/90 hover:to-brand-accent/90 text-white font-semibold px-6 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-primary/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {newsletterLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Newsletter Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleSuccessModalClose}
        title="Successfully Subscribed!"
        description="Thank you for subscribing to our partner newsletter. You'll receive exclusive updates and opportunities directly in your inbox."
      />

      {/* Newsletter Error Modal */}
      <ErrorModal
        isOpen={showErrorModal}
        onClose={handleErrorModalClose}
        onRetry={handleRetry}
        retryLabel="Try Again"
        title="Subscription Failed"
        description={
          newsletterError?.message ||
          "Something went wrong while subscribing to our newsletter. Please try again."
        }
      />

      {/* Newsletter Duplicate Email Modal */}
      <DuplicateEmailModal
        isOpen={showDuplicateModal}
        onClose={handleDuplicateModalClose}
        email={duplicateEmail}
      />
    </div>
  );
};

export default PartnerWithUs;
