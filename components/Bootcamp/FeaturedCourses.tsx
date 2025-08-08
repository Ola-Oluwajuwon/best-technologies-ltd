"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Award } from "lucide-react";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "AI & Machine Learning",
    desc: "Build intelligent systems using Python, TensorFlow, and modern AI frameworks.",
    img: "/bootcamp/ai-ml.jpg",
    url: "/trainings/bootcamp/ai-ml",
    duration: "9 months",
    level: "Advanced",
  },
  {
    id: 2,
    title: "Software Engineering",
    desc: "Master frontend and backend in our popular defacto software engineering bootcamp.",
    img: "/bootcamp/software-development.jpg",
    url: "/trainings/bootcamp/software-engineering",
    duration: "12 months",
    level: "Beginner to Advanced",
  },
  {
    id: 3,
    title: "Cybersecurity",
    desc: "Learn ethical hacking, network security, and threat analysis to protect digital assets.",
    img: "/bootcamp/cybersecurity.jpg",
    url: "/trainings/bootcamp/cybersecurity",
    duration: "6 months",
    level: "Intermediate",
  },
  {
    id: 4,
    title: "Data Science",
    desc: "Extract insights from data using Python, statistics, and machine learning.",
    img: "/bootcamp/data-science.jpg",
    url: "/trainings/bootcamp/data-science",
    duration: "6 months",
    level: "Intermediate",
  },
  {
    id: 5,
    title: "Cloud & DevOps",
    desc: "Explore AWS, Docker, and CI/CD pipelines to deploy modern apps.",
    img: "/bootcamp/cloud.jpg",
    url: "/trainings/bootcamp/cloud-devops",
    duration: "6 months",
    level: "Advanced",
  },
  {
    id: 6,
    title: "Mobile App Development",
    desc: "Develop cross-platform apps using Flutter or React Native.",
    img: "/bootcamp/mobile.jpg",
    url: "/trainings/bootcamp/mobile-app",
    duration: "6 months",
    level: "Intermediate",
  },
  {
    id: 7,
    title: "Backend Development",
    desc: "Learn Node.js, Express, databases, and APIs to build scalable backend systems.",
    img: "/bootcamp/backend.jpg",
    url: "/trainings/bootcamp/backend-development",
    duration: "6 months",
    level: "Intermediate",
  },
  {
    id: 8,
    title: "Frontend Development",
    desc: "Master HTML, CSS, JavaScript, and React to build beautiful web interfaces.",
    img: "/bootcamp/frontend.jpg",
    url: "/trainings/bootcamp/frontend-development",
    duration: "6 months",
    level: "Beginner",
  },
  {
    id: 9,
    title: "Growth Marketing",
    desc: "Learn digital marketing strategies that'll help you convert sales like a wallstreet banker.",
    img: "/trainings/growth.jpg",
    url: "/trainings/bootcamp/growth-marketing",
    duration: "6 months",
    level: "Intermediate",
  },
  {
    id: 10,
    title: "UI/UX Design",
    desc: "Design intuitive user interfaces and craft exceptional user experiences.",
    img: "/bootcamp/uiux.jpg",
    url: "/trainings/bootcamp/ui-ux",
    duration: "6 months",
    level: "Beginner",
  },
  {
    id: 11,
    title: "Data Analysis",
    desc: "Analyze and visualize data using statistical methods and modern tools.",
    img: "/bootcamp/data-analysis.jpg",
    url: "/trainings/bootcamp/data-analysis",
    duration: "6 months",
    level: "Beginner",
  },
];

const FeaturedCourses = () => {
  return (
    <section
      id="explore-programs"
      className="relative bg-gradient-to-br from-gray-50 to-white text-gray-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-hidden"
    >
      {/* Background Blobs */}
      <motion.div
        className="absolute w-64 h-64 sm:w-72 sm:h-72 bg-brand-primary/10 rounded-full top-10 left-10 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-brand-accent/10 rounded-full bottom-0 right-0 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16 z-10 relative max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent">
            Explore Our Bootcamp Programs
          </span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
          Get hands-on training in high-demand tech skills taught by industry
          experts. Find your perfect career path below.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative z-10 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100"
          >
            <div className="relative overflow-hidden">
              <Image
                src={course.img}
                alt={course.title}
                width={500}
                height={200}
                className="h-32 sm:h-48 lg:h-52 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-brand-primary/90 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg text-xs font-semibold">
                #{course.id.toString().padStart(2, "0")}
              </div>
            </div>

            <div className="p-3 sm:p-5 lg:p-6">
              <h3 className="text-sm sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 line-clamp-1">
                {course.title}
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                {course.desc}
              </p>

              {/* Course Details */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-3 sm:mb-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">
                    {course.level.length > 16 ? "All Levels" : course.level}
                  </span>
                </div>
              </div>

              <Link
                href={course.url}
                className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm lg:text-base text-brand-primary hover:text-brand-accent font-semibold transition-colors duration-200 group"
              >
                Learn More
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12 sm:mt-16 relative z-10">
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Can&apos;t find what you&apos;re looking for?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/25 text-sm sm:text-base"
        >
          Contact Us for Custom Programs
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCourses;
