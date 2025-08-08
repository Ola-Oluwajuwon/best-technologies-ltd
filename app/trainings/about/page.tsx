import Navbar from "@/components/Bootcamp/Navbar";
import Footer from "@/components/Footer/Footer";
import {
  BookOpen,
  Clock,
  Award,
  Code,
  Video,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

export default function TrainingAboutPage() {
  const trainingCategories = [
    {
      icon: Code,
      title: "Bootcamps",
      duration: "6-12 months",
      description:
        "Intensive, immersive programs designed to take you from beginner to job-ready in the shortest time possible. Our bootcamps combine theoretical knowledge with hands-on practice.",
      features: [
        "Live instructor-led sessions",
        "Real-world project portfolio",
        "Career coaching and job placement support",
        "Peer collaboration and networking",
        "Industry-relevant curriculum",
      ],
      programs: [
        "Software Engineering",
        "Growth Marketing",
        "UI/UX Design",
        "Data Analytics",
        "Mobile App Development",
        "Cloud & DevOps",
      ],
    },
    {
      icon: Video,
      title: "Online Courses",
      duration: "Self-paced",
      description:
        "Flexible, self-paced learning designed for busy professionals. Master specific skills or technologies at your own pace with comprehensive video content and hands-on exercises.",
      features: [
        "Learn at your own pace",
        "Lifetime access to content",
        "Downloadable resources",
        "Certificate of completion",
        "Mobile-friendly platform",
      ],
      programs: [
        "JavaScript for Beginners",
        "Python Programming",
        "Database Design & SQL",
        "API Development",
        "React Fundamentals",
        "Object Relational Mapping",
      ],
    },
    {
      icon: Award,
      title: "Masterclasses",
      duration: "1-3 days",
      description:
        "Intensive, focused sessions on advanced topics led by industry experts. Perfect for professionals looking to deepen their expertise in specific areas.",
      features: [
        "Expert-led intensive sessions",
        "Advanced level content",
        "Small class sizes for personalized attention",
        "Hands-on workshops",
        "Industry case studies",
      ],
      programs: [
        "Next.js Masterclass",
        "Cloud Architecture",
        "Cybersecurity Fundamentals",
      ],
    },
    {
      icon: Briefcase,
      title: "Tech Internships",
      duration: "3-6 months",
      description:
        "Real-world experience working alongside experienced professionals. Gain practical skills while contributing to actual projects in a supportive learning environment.",
      features: [
        "Mentorship from senior developers",
        "Real project experience",
        "Professional skill development",
        "Networking opportunities",
        "Potential full-time job offers",
      ],
      programs: [
        "Software Development Internship",
        "Product Design Internship",
        "Marketing Internship",
      ],
    },
    {
      icon: GraduationCap,
      title: "SIWES Program",
      duration: "3-6 months",
      description:
        "Students Industrial Work Experience Scheme (SIWES) designed for university students to gain practical industry experience as part of their academic requirements.",
      features: [
        "Academic credit qualification",
        "Industry exposure",
        "Practical skill development",
        "Professional mentorship",
        "Academic supervision",
      ],
      programs: [
        "Software Development SIWES",
        "Data Analysis SIWES",
        "Cloud Computing SIWES",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Dark Theme */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
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

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-8">
            <BookOpen className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Our{" "}
            <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent">
              Training Programs
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At Best Technologies Ltd., we believe in transforming lives through
            technology education. Our comprehensive training programs are
            designed to meet you wherever you are in your learning journey and
            take you to where you want to be.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To democratize access to high-quality technology education and
                empower individuals with the skills needed to thrive in the
                digital economy. We bridge the gap between traditional education
                and industry demands through practical, hands-on learning
                experiences.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Our Approach
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                We combine theoretical knowledge with practical application,
                ensuring our learners gain real-world experience. Our
                industry-aligned curriculum, expert instructors, and supportive
                community create an environment where everyone can succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Training{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                Categories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intensive bootcamps to flexible online courses, we offer
              diverse learning paths to suit every schedule, learning style, and
              career goal.
            </p>
          </div>

          <div className="space-y-16">
            {trainingCategories.map((category, index) => (
              <div
                key={category.title}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12 lg:gap-16 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl flex items-center justify-center">
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {category.title}
                        </h3>
                        <div className="flex items-center gap-2 text-brand-primary">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">
                            {category.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      {category.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {category.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Available Programs:
                    </h4>
                    <div className="grid gap-3">
                      {category.programs.map((program, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 rounded-lg p-3 flex items-center gap-3"
                        >
                          <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                          <span className="text-gray-700 font-medium">
                            {program}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Our Impact</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-brand-primary mb-2">
                500+
              </div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-brand-primary mb-2">
                95%
              </div>
              <div className="text-gray-600">Job Placement Rate</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-brand-primary mb-2">
                20+
              </div>
              <div className="text-gray-600">Course Programs</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-brand-primary mb-2">
                50+
              </div>
              <div className="text-gray-600">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 rounded-3xl p-12 border border-brand-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose the training path that best fits your goals and schedule.
              Our team is here to help you make the right choice.
            </p>
            <Link
              href="/trainings"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary/90 hover:to-brand-accent/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore All Programs
              <BookOpen className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
