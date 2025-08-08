"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, DollarSign } from "lucide-react";
import { Button } from "@/ui/button";

const TuitionDates = () => {
  const upcomingCohorts = [
    {
      cohort: "Cohort #2",
      startDate: "September 2025",
      endDate: "February 2026",
      schedule: "Weekdays (Mon-Fri)",
      time: "9:00 AM - 5:00 PM WAT",
      status: "Early Bird Active",
    },
    {
      cohort: "Cohort #3",
      startDate: "March 2026",
      endDate: "August 2026",
      schedule: "Weekdays (Mon-Fri)",
      time: "9:00 AM - 5:00 PM WAT",
      status: "Upcoming",
    },
  ];

  const pricingOptions = [
    {
      plan: "Full Payment",
      price: "₦500,000",
      savings: "Save ₦10,000",
      features: [
        "Complete bootcamp access",
        "26-week intensive program",
        "Live instruction & mentorship",
        "Career support",
        "Certificate of completion",
      ],
    },
    {
      plan: "Installment Plan",
      price: "₦170,000 × 3",
      savings: "Total: ₦510,000",
      features: [
        "Complete bootcamp access",
        "26-week intensive program",
        "Live instruction & mentorship",
        "Career support",
        "Certificate of completion",
      ],
    },
  ];

  return (
    <section id="tuition-dates" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Tuition & Dates
        </h2>

        {/* Upcoming Cohorts */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Upcoming Cohorts
          </h3>
          <div className="space-y-4">
            {upcomingCohorts.map((cohort, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {cohort.cohort}
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>
                          {cohort.startDate} – {cohort.endDate}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>
                          {cohort.schedule}, {cohort.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      {cohort.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Payment Options
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-xl p-6 ${
                  index === 0 ? "border-red-200 bg-red-50" : "border-gray-200"
                }`}
              >
                <div className="text-center mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {option.plan}
                  </h4>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {option.price}
                  </div>
                  <p className="text-sm text-gray-600">{option.savings}</p>
                </div>
                <ul className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="h-2 w-2 bg-red-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
          <div className="flex items-start">
            <DollarSign className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2">
                Early Bird Discount Available
              </h4>
              <p className="text-yellow-800">
                Register early and you could be eligible for a ₦10,000 discount
                on your tuition fees! Terms and Conditions apply, though.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet CTA Button */}
        <div className="mt-6 lg:hidden">
          <Button
            asChild
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            <Link href="/trainings/register">APPLY NOW</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TuitionDates;
