import React from "react";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/ui/button";

const TuitionDates: React.FC = () => {
  const upcomingCohorts = [
    {
      cohort: "Cohort #2",
      startDate: "September 2025",
      endDate: "February 2026",
      schedule: "Weekdays (Mon-Fri)",
      time: "9:00 AM - 5:00 PM WAT",
      status: "Early Bird Active",
      // deadline: "Application Deadline: July 15",
    },
    {
      cohort: "Cohort #3",
      startDate: "March 2026",
      endDate: "August 2026",
      schedule: "Weekdays (Mon-Fri)",
      time: "9:00 AM - 5:00 PM WAT",
      status: "Upcoming",
      // deadline: "Application Deadline: Sept. 15",
    },
  ];

  const pricingOptions = [
    {
      plan: "Full Payment",
      price: "₦400,000",
      savings: "Save ₦20,000",
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
      price: "₦140,000 × 3",
      savings: "Total: ₦420,000",
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
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Best Technologies Ltd. is committed to making tech education more
          accessible, which is why we offer several payment options to help you
          invest in your bootcamp education.
        </p>

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
                          {cohort.startDate} - {cohort.endDate}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>
                          {cohort.schedule}, {cohort.time}
                        </span>
                      </div>
                      {/* <div className="text-sm text-gray-500">
                        {cohort.deadline}
                      </div> */}
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        cohort.status === "Open for Registration"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {cohort.status}
                    </span>
                    {/* <div className="mt-3">
                      <Button
                        asChild
                        className="bg-brand-primary hover:bg-brand-primary/80 text-white"
                      >
                        <Link href="/trainings/register">Apply Now</Link>
                      </Button>
                    </div> */}
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
                  index === 0 ? "border-blue-200 bg-blue-50" : "border-gray-200"
                }`}
              >
                <div className="text-center mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {option.plan}
                  </h4>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {option.price}
                  </div>
                  {/* {option.originalPrice && (
                    <div className="text-lg text-gray-500 line-through mb-1">
                      {option.originalPrice}
                    </div>
                  )} */}
                  <p className="text-sm text-gray-600">{option.savings}</p>
                </div>
                <ul className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Payment Options */}
        <div className="mt-8 space-y-4">
          {/* <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            <div className="flex items-start">
              <DollarSign className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
              <div>
                <h4 className="font-semibold text-yellow-900 mb-2">
                  Additional Financing Options
                </h4>
                <div className="space-y-2 text-yellow-800">
                  <p>
                    <strong>Loan Financing:</strong> Partner with our preferred
                    lenders for flexible payment plans with competitive interest
                    rates.
                  </p>
                  <p>
                    <strong>Income Share Agreement:</strong> Pay nothing upfront
                    and contribute a percentage of your income after you get
                    hired.
                  </p>
                  <p>
                    <strong>Scholarships:</strong> Various scholarship
                    opportunities are available for underrepresented groups in
                    tech.
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <div className="flex items-start">
              <Calendar className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">
                  Early Registration Discount
                </h4>
                <p className="text-blue-800">
                  Register early and you could be eligible for a ₦10,000
                  discount on your tuition fees! Terms and Conditions apply,
                  though.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet CTA Button */}
        <div className="mt-6 lg:hidden">
          <Button
            asChild
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            <Link href="/trainings/register">APPLY NOW</Link>
          </Button>
        </div>

        {/* <div className="mt-8">
          <Button
            asChild
            className="text-white bg-brand-primary hover:bg-brand-primary/80"
          >
            <Link href="/trainings/register">GET STARTED</Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default TuitionDates;
