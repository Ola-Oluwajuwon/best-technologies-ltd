"use client";

import React from "react";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const HomepageContact = () => {
  return (
    <section
      id="get-in-touch-form"
      className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden scroll-mt-24"
    >
      {/* Background Map (Non-interactive) */}
      <div className="absolute inset-0 opacity-30">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.805499030344!2d3.8810453!3d7.375684000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d0077b1027d%3A0x4a95bd932a3471d!2sThe%20knowledge%20hub!5e0!3m2!1sen!2sng!4v1752160191493!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/50 to-gray-900/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent pb-1">
            Get In Touch
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology?
            Let&apos;s discuss your project and explore how we can help you
            achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Information & Map */}
          <div className="space-y-6 md:space-y-8 flex flex-col h-full">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-brand-primary/20">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">
                Let&apos;s Start a Conversation
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 md:mb-8">
                Whether you&apos;re looking to modernize your existing systems,
                build something entirely new, or need strategic technology
                guidance, we&apos;re here to help. Our team of experts is ready
                to discuss your unique challenges and create tailored solutions.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base">
                    Email
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    hello@besttechnologiesltd.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base">
                    Phone
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    +234 802 532 1179
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base">
                    Location
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    The Knowledge Hub, Oke Ado, Ibadan, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="flex-1 mt-6 md:mt-8">
              <div className="relative rounded-xl overflow-hidden border border-brand-primary/20 hover:border-brand-primary/40 transition-colors duration-300 group h-full min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.805499030344!2d3.8810453!3d7.375684000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d0077b1027d%3A0x4a95bd932a3471d!2sThe%20knowledge%20hub!5e0!3m2!1sen!2sng!4v1752160191493!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full transition-all duration-300 group-hover:scale-105"
                />
                <Link
                  href="https://maps.app.goo.gl/5bEbmmjPmwd8xr148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-transparent hover:bg-brand-primary/10 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100"
                >
                  <div className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                    Open in Google Maps
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <ContactForm showTitle={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageContact;
