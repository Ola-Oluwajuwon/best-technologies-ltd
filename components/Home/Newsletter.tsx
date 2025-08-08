"use client";

import type React from "react";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Mail, ArrowRight, Sparkles, Zap, Star, Loader2 } from "lucide-react";
import { useState } from "react";
import { newsletterApi } from "@/lib/api";
import { useApiRequest } from "@/hooks/useApiRequest";
import {
  SuccessModal,
  ErrorModal,
  DuplicateEmailModal,
} from "@/components/ui/ApiModal";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const [duplicateEmail, setDuplicateEmail] = useState("");

  const {
    loading,
    error,
    execute: subscribeToNewsletter,
    reset,
  } = useApiRequest(newsletterApi.subscribe);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    const result = await subscribeToNewsletter(email);

    if (result?.success) {
      setEmail("");
      setShowSuccessModal(true);
    } else if (error) {
      // Check if it's a 409 duplicate email error
      if (error.statusCode === 409) {
        setDuplicateEmail(email.trim());
        setShowDuplicateModal(true);
        setEmail("");
      } else {
        setShowErrorModal(true);
      }
    }
  };

  const handleNewsletterSubmit = async () => {
    if (!email.trim()) {
      return;
    }

    const result = await subscribeToNewsletter(email);

    if (result?.success) {
      setEmail("");
      setShowSuccessModal(true);
    } else if (error) {
      // Check if it's a 409 duplicate email error
      if (error.statusCode === 409) {
        setDuplicateEmail(email.trim());
        setShowDuplicateModal(true);
        setEmail("");
      } else {
        setShowErrorModal(true);
      }
    }
  };

  const handleRetry = () => {
    setShowErrorModal(false);
    reset();
    handleNewsletterSubmit();
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    reset();
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
    reset();
  };

  const handleCloseDuplicateModal = () => {
    setShowDuplicateModal(false);
    setDuplicateEmail("");
    reset();
  };

  return (
    <div className="relative overflow-hidden border-y [border-image:linear-gradient(to_right,transparent,theme(colors.cyan.800/.45),transparent)1]">
      {/* Complex background with blurry blobs and wireframe */}
      <div className="absolute inset-0 z-[-2] bg-slate-950">
        {/* Blurry Blobs Background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter
              id="bbblurry-filter"
              x="-100%"
              y="-100%"
              width="400%"
              height="400%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur
                stdDeviation="130"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="SourceGraphic"
                edgeMode="none"
                result="blur"
              ></feGaussianBlur>
            </filter>
          </defs>
          <g filter="url(#bbblurry-filter)">
            <ellipse
              rx="44"
              ry="150"
              cx="179.9777550674645"
              cy="179.66669043365465"
              fill="hsla(89, 73%, 48%, 1.00)"
            ></ellipse>
            <ellipse
              rx="44"
              ry="150"
              cx="297.9432322455974"
              cy="510.492919921875"
              fill="hsla(37, 91%, 55%, 1.00)"
            ></ellipse>
            <ellipse
              rx="44"
              ry="150"
              cx="638.9033463460878"
              cy="178.18634375396715"
              fill="hsla(290, 87%, 47%, 1.00)"
            ></ellipse>
          </g>
        </svg>

        {/* Wireframe Mesh Overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1422 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <g
            shapeRendering="crispEdges"
            strokeLinejoin="round"
            fill="none"
            strokeWidth="2"
            stroke="hsl(90, 69%, 72%)"
          >
            <polygon points="1422,100 1244.25,100 1422,0"></polygon>
            <polygon points="1066.5,100 1244.25,100 1066.5,0"></polygon>
            <polygon points="1244.25,200 1066.5,200 1244.25,100"></polygon>
            <polygon points="1422,100 1244.25,100 1422,200"></polygon>
            <polygon points="1066.5,100 1066.5,0 888.75,0"></polygon>
            <polygon points="888.75,100 711,100 888.75,0"></polygon>
            <polygon points="799.875,100 888.75,150 799.875,150"></polygon>
            <polygon points="799.875,150 799.875,100 711,150"></polygon>
            <polygon points="711,150 799.875,150 711,200"></polygon>
            <polygon points="888.75,200 888.75,150 799.875,150"></polygon>
            <polygon points="1066.5,150 1066.5,100 977.625,100"></polygon>
            <polygon points="977.625,100 977.625,150 888.75,150"></polygon>
            <polygon points="977.625,150 888.75,200 977.625,200"></polygon>
            <polygon points="1066.5,150 977.625,150 977.625,200"></polygon>
            <polygon points="1066.5,250 977.625,250 977.625,200"></polygon>
            <polygon points="977.625,250 977.625,200 888.75,200"></polygon>
            <polygon points="977.625,300 977.625,250 888.75,250"></polygon>
            <polygon points="977.625,300 1066.5,300 977.625,250"></polygon>
            <polygon points="888.75,200 888.75,250 799.875,200"></polygon>
            <polygon points="799.875,200 799.875,250 711,250"></polygon>
            <polygon points="799.875,250 799.875,300 711,300"></polygon>
            <polygon points="799.875,250 888.75,300 799.875,300"></polygon>
            <polygon points="888.75,350 799.875,300 799.875,350"></polygon>
            <polygon points="799.875,300 711,300 799.875,350"></polygon>
            <polygon points="799.875,350 799.875,400 711,350"></polygon>
            <polygon points="799.875,400 888.75,350 888.75,400"></polygon>
            <polygon points="1066.5,300 1066.5,350 977.625,300"></polygon>
            <polygon points="977.625,300 977.625,350 888.75,350"></polygon>
            <polygon points="977.625,350 977.625,400 888.75,400"></polygon>
            <polygon points="1066.5,350 977.625,350 977.625,400"></polygon>
            <polygon points="1422,200 1244.25,300 1422,300"></polygon>
            <polygon points="1244.25,200 1155.375,250 1155.375,200"></polygon>
            <polygon points="1155.375,250 1155.375,200 1066.5,250"></polygon>
            <polygon points="1066.5,300 1155.375,300 1066.5,250"></polygon>
            <polygon points="1244.25,250 1244.25,300 1155.375,300"></polygon>
            <polygon points="1244.25,350 1155.375,350 1155.375,300"></polygon>
            <polygon points="1155.375,350 1155.375,300 1066.5,300"></polygon>
            <polygon points="1066.5,350 1155.375,400 1155.375,350"></polygon>
            <polygon points="1244.25,400 1155.375,350 1244.25,350"></polygon>
            <polygon points="1422,400 1244.25,400 1244.25,300"></polygon>
            <polygon points="711,100 533.25,100 711,0"></polygon>
            <polygon points="355.5,0 533.25,100 533.25,0"></polygon>
            <polygon points="533.25,150 533.25,100 444.375,150"></polygon>
            <polygon points="355.5,100 355.5,150 444.375,150"></polygon>
            <polygon points="444.375,150 355.5,150 444.375,200"></polygon>
            <polygon points="444.375,200 533.25,200 444.375,150"></polygon>
            <polygon points="622.125,150 711,100 622.125,100"></polygon>
            <polygon points="622.125,150 622.125,100 533.25,100"></polygon>
            <polygon points="533.25,150 622.125,150 622.125,200"></polygon>
            <polygon points="711,200 711,150 622.125,200"></polygon>
            <polygon points="355.5,100 177.75,0 355.5,0"></polygon>
            <polygon points="177.75,0 0,100 0,0"></polygon>
            <polygon points="0,100 177.75,200 0,200"></polygon>
            <polygon points="355.5,100 177.75,100 355.5,200"></polygon>
            <polygon points="355.5,250 355.5,200 266.625,250"></polygon>
            <polygon points="266.625,200 266.625,250 177.75,250"></polygon>
            <polygon points="177.75,300 177.75,250 266.625,300"></polygon>
            <polygon points="266.625,250 266.625,300 355.5,300"></polygon>
            <polygon points="177.75,200 177.75,300 0,300"></polygon>
            <polygon points="0,300 177.75,400 0,400"></polygon>
            <polygon points="355.5,300 355.5,400 177.75,300"></polygon>
            <polygon points="711,200 622.125,200 622.125,250"></polygon>
            <polygon points="622.125,250 533.25,250 533.25,200"></polygon>
            <polygon points="533.25,250 533.25,300 622.125,300"></polygon>
            <polygon points="711,250 711,300 622.125,300"></polygon>
            <polygon points="533.25,250 533.25,200 444.375,250"></polygon>
            <polygon points="444.375,200 355.5,200 355.5,250"></polygon>
            <polygon points="355.5,250 444.375,300 444.375,250"></polygon>
            <polygon points="444.375,250 444.375,300 533.25,250"></polygon>
            <polygon points="444.375,300 533.25,350 533.25,300"></polygon>
            <polygon points="444.375,350 355.5,350 355.5,300"></polygon>
            <polygon points="355.5,350 444.375,400 355.5,400"></polygon>
            <polygon points="533.25,350 444.375,350 444.375,400"></polygon>
            <polygon points="711,350 711,300 622.125,350"></polygon>
            <polygon points="622.125,350 533.25,300 533.25,350"></polygon>
            <polygon points="533.25,400 533.25,350 622.125,350"></polygon>
            <polygon points="711,400 622.125,350 622.125,400"></polygon>
            <polygon points="711,450 711,400 622.125,400"></polygon>
            <polygon points="533.25,400 533.25,450 622.125,400"></polygon>
            <polygon points="622.125,500 533.25,450 533.25,500"></polygon>
            <polygon points="711,450 711,500 622.125,450"></polygon>
            <polygon points="533.25,500 355.5,500 533.25,400"></polygon>
            <polygon points="533.25,550 444.375,550 444.375,500"></polygon>
            <polygon points="355.5,500 444.375,500 355.5,550"></polygon>
            <polygon points="444.375,550 355.5,600 355.5,550"></polygon>
            <polygon points="533.25,550 533.25,600 444.375,600"></polygon>
            <polygon points="711,500 711,550 622.125,550"></polygon>
            <polygon points="622.125,500 622.125,550 533.25,550"></polygon>
            <polygon points="622.125,550 622.125,600 533.25,600"></polygon>
            <polygon points="711,550 622.125,550 622.125,600"></polygon>
            <polygon points="355.5,450 355.5,400 266.625,450"></polygon>
            <polygon points="177.75,450 266.625,400 266.625,450"></polygon>
            <polygon points="266.625,500 266.625,450 177.75,500"></polygon>
            <polygon points="266.625,500 266.625,450 355.5,450"></polygon>
            <polygon points="177.75,500 177.75,400 0,400"></polygon>
            <polygon points="177.75,600 177.75,500 0,600"></polygon>
            <polygon points="355.5,500 177.75,600 177.75,500"></polygon>
            <polygon points="177.75,700 355.5,700 177.75,600"></polygon>
            <polygon points="177.75,600 177.75,700 0,700"></polygon>
            <polygon points="177.75,800 177.75,700 0,700"></polygon>
            <polygon points="177.75,800 355.5,700 355.5,800"></polygon>
            <polygon points="622.125,650 711,600 711,650"></polygon>
            <polygon points="533.25,650 533.25,600 622.125,650"></polygon>
            <polygon points="622.125,700 533.25,700 622.125,650"></polygon>
            <polygon points="622.125,650 622.125,700 711,650"></polygon>
            <polygon points="533.25,700 355.5,600 533.25,600"></polygon>
            <polygon points="533.25,800 355.5,700 533.25,700"></polygon>
            <polygon points="711,700 711,800 533.25,800"></polygon>
            <polygon points="1422,500 1422,400 1244.25,500"></polygon>
            <polygon points="1244.25,400 1155.375,400 1244.25,450"></polygon>
            <polygon points="1155.375,450 1066.5,400 1066.5,450"></polygon>
            <polygon points="1066.5,450 1155.375,500 1155.375,450"></polygon>
            <polygon points="1244.25,500 1244.25,450 1155.375,450"></polygon>
            <polygon points="1244.25,600 1066.5,500 1244.25,500"></polygon>
            <polygon points="1422,500 1422,600 1244.25,600"></polygon>
            <polygon points="977.625,450 1066.5,450 977.625,400"></polygon>
            <polygon points="977.625,400 888.75,400 888.75,450"></polygon>
            <polygon points="977.625,500 888.75,450 977.625,450"></polygon>
            <polygon points="977.625,500 1066.5,450 1066.5,500"></polygon>
            <polygon points="888.75,400 799.875,450 799.875,400"></polygon>
            <polygon points="711,400 799.875,450 711,450"></polygon>
            <polygon points="711,450 711,500 799.875,450"></polygon>
            <polygon points="888.75,450 888.75,500 799.875,450"></polygon>
            <polygon points="888.75,500 799.875,500 799.875,550"></polygon>
            <polygon points="711,500 799.875,550 711,550"></polygon>
            <polygon points="799.875,600 799.875,550 711,550"></polygon>
            <polygon points="799.875,600 888.75,550 888.75,600"></polygon>
            <polygon points="1066.5,500 1066.5,550 977.625,550"></polygon>
            <polygon points="977.625,500 977.625,550 888.75,550"></polygon>
            <polygon points="977.625,550 888.75,550 888.75,600"></polygon>
            <polygon points="1066.5,550 977.625,600 1066.5,600"></polygon>
            <polygon points="1066.5,600 1066.5,650 977.625,650"></polygon>
            <polygon points="977.625,600 977.625,650 888.75,600"></polygon>
            <polygon points="888.75,700 888.75,650 977.625,700"></polygon>
            <polygon points="1066.5,700 1066.5,650 977.625,700"></polygon>
            <polygon points="711,700 888.75,700 711,600"></polygon>
            <polygon points="711,800 888.75,800 711,700"></polygon>
            <polygon points="1066.5,700 888.75,800 1066.5,800"></polygon>
            <polygon points="1422,700 1244.25,700 1244.25,600"></polygon>
            <polygon points="1244.25,700 1066.5,600 1244.25,600"></polygon>
            <polygon points="1066.5,800 1066.5,700 1244.25,800"></polygon>
            <polygon points="1422,700 1244.25,800 1422,800"></polygon>
          </g>
        </svg>
      </div>

      {/* Gradient blur effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -top-40 z-[-2] transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="relative left-[calc(50%+2.5rem)] aspect-[1000/650] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-green-500 to-red-500 opacity-30 sm:left-[calc(50%+10rem)] sm:w-[69.25rem]"
        ></div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center px-4 pt-12 sm:px-6 md:pt-20">
        {/* Logo */}
        <div className="flex justify-center mb-3 md:mb-4">
          {/* Vibrant animated logo */}
          <div className="flex justify-center relative">
            <div className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary rounded-full blur-lg opacity-60 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-brand-primary to-brand-accent p-2 md:p-3 rounded-full">
                <Mail className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 h-3 w-3 md:h-4 md:w-4 text-yellow-400 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Main content section */}
        <section className="relative pb-6 md:pb-12 w-full">
          <div className="mx-auto max-w-6xl">
            <div className="py-4">
              <div className="mx-auto max-w-3xl text-center w-full">
                <h2 className="text-gradient-heading">
                  Unlock Amazing Content
                </h2>

                <div className="mb-6 md:mb-8">
                  <p className="text-slate-300 text-sm md:text-base lg:text-lg mb-4 md:mb-6 max-w-2xl mx-auto">
                    Get the latest insights, trends, and exclusive content
                    delivered straight to your inbox. Join thousands of
                    professionals who trust our newsletter.
                  </p>

                  {/* Feature highlights */}
                  <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-3 md:px-4 py-2 rounded-full border border-cyan-400/30">
                      <Zap className="h-3 w-3 md:h-4 md:w-4 text-yellow-400" />
                      <span className="text-cyan-200 text-xs md:text-sm font-medium">
                        Weekly Insights
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-3 md:px-4 py-2 rounded-full border border-purple-400/30">
                      <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-400" />
                      <span className="text-purple-200 text-xs md:text-sm font-medium">
                        Exclusive Content
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-3 md:px-4 py-2 rounded-full border border-green-400/30">
                      <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-yellow-400" />
                      <span className="text-green-200 text-xs md:text-sm font-medium">
                        Early Access
                      </span>
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto w-full justify-center"
                  >
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={loading}
                      className="flex-1 bg-slate-800/50 border-brand-primary text-slate-200 placeholder:text-slate-400 focus:border-brand-secondary py-4 md:py-6 rounded-xl transition-all duration-300 shadow-lg focus:shadow-brand-primary/25 hover:bg-slate-800/70 hover:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-opacity-50 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <Button
                      type="submit"
                      disabled={loading || !email.trim()}
                      className="group btn-gradient-primary px-4 md:px-6 py-4 md:py-6 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="btn-gradient-icon-hover group-hover:translate-x-1 w-4 h-4 md:w-5 md:h-5" />
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Success Modal */}
                  <SuccessModal
                    isOpen={showSuccessModal}
                    onClose={handleCloseSuccessModal}
                    title="Subscription Successful!"
                    description="Thank you for subscribing to our newsletter. You'll receive the latest insights and updates directly in your inbox."
                  />

                  {/* Error Modal */}
                  <ErrorModal
                    isOpen={showErrorModal}
                    onClose={handleCloseErrorModal}
                    onRetry={handleRetry}
                    retryLabel="Try Again"
                    title="Subscription Failed"
                    description={
                      error?.message ||
                      "Something went wrong while subscribing to our newsletter. Please try again."
                    }
                  />

                  {/* Duplicate Email Modal */}
                  <DuplicateEmailModal
                    isOpen={showDuplicateModal}
                    onClose={handleCloseDuplicateModal}
                    email={duplicateEmail}
                  />
                </div>

                <div className="text-xs md:text-sm text-slate-500 max-w-md mx-auto">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from our company.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
