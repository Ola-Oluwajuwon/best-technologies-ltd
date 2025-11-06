"use client";

import { Quote, Star } from "lucide-react";
import useScrollToAnchor from "@/hooks/useScrollToAnchor";

// Mock testimonials with Nigerian names
const nigerianTestimonials = [
  {
    id: 1,
    name: "Gloria Omofoye",
    program: "Full Stack Web Development",
    quote:
      "The training was incredibly comprehensive and practical. I went from knowing nothing about coding to landing my first developer job in just 6 months. The mentorship and support were exceptional.",
    initials: "GO",
  },
  {
    id: 2,
    name: "Oluwanifemi Akintunde",
    program: "Data Science & Analytics",
    quote:
      "Best Technologies Ltd transformed my career completely. The hands-on projects and real-world applications gave me the confidence to transition from banking to tech. I'm now a Data Analyst at a top fintech company.",
    initials: "OA",
  },
];

export default function StudentSpotlightCarousel() {
  useScrollToAnchor(80);

  return (
    <section
      id="student-spotlight"
      className="relative bg-gray-900 text-white py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Student{" "}
            <span className="bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from our graduates who have transformed their careers and are
            now thriving in the tech industry.
            <br className="hidden sm:block" />
            Their journeys inspire us to keep pushing boundaries.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {nigerianTestimonials.map((student) => (
            <div key={student.id} className="relative group">
              {/* Glassmorphism Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/10">
                {/* Decorative Quote Icon - Flipped horizontally */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Student Avatar with Initials */}
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-white/20 mr-4 bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {student.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {student.name}
                    </h3>
                    <p className="text-brand-accent font-medium">
                      {student.program}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-200 text-lg leading-relaxed mb-6 italic">
                  &quot;{student.quote}&quot;
                </blockquote>

                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4">
            <span className="text-gray-300">
              Ready to write your success story?
            </span>
            <a
              href="/trainings/register"
              className="bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-accent hover:to-brand-primary px-6 py-2 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
