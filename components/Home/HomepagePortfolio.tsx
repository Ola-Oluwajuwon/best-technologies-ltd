"use client";

import { useState } from "react";
import {
  Sparkles,
  ImageIcon,
  Code,
  Rocket,
  Edit,
  FileText,
  RefreshCw,
  Eye,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";

const webProjects = [
  {
    id: 1,
    title: "Learning Management System",
    description:
      "Interactive online education platform with video streaming, assessments, and course management. Delivers engaging content with automated grading, discussion forums, and personalized learning paths.",
    image: "/portfolio/portfolio-01.png",
    link: "",
    category: "Education",
  },
  {
    id: 2,
    title: "Our Space: Property Management Platform",
    description:
      "End-to-end real estate solution streamlining property searches, virtual tours, and tenant management. Connects owners, agents, and buyers through advanced filtering and real-time notifications.",
    image: "/portfolio/portfolio-02.png",
    link: "https://www.exploreourspace.com",
    category: "Real Estate",
  },
  {
    id: 3,
    title: "Oxygen FM website",
    description:
      "Seamless radio streaming platform featuring live broadcasts, podcast archives, and presenter profiles. Offers high-quality audio, interactive engagement tools, and on-demand content access.",
    image: "/portfolio/portfolio-07.png",
    link: "",
    category: "Media",
  },
  {
    id: 4,
    title: "AccessSeller Ecommerce and Referral Platform",
    description:
      "Innovative marketplace combining e-commerce with a powerful referral system. Features secure payments, real-time inventory tracking, and an affiliate dashboard for earnings management.",
    image: "/portfolio/portfolio-04.png",
    link: "https://accessseller.com",
    category: "Ecommerce",
  },
  {
    id: 5,
    title: "Best In Print Academy (BIPA)",
    description:
      "Professional training platform for print technology, design, and publishing courses. Students can explore catalogs, access materials, join virtual workshops, and earn industry certifications.",
    image: "/portfolio/portfolio-05.png",
    link: "https://bestinprintacademy.com/",
    category: "Upskill",
  },
  {
    id: 6,
    title: "Staff Management System for Enterprise",
    description:
      "Comprehensive HR solution for employee onboarding, attendance tracking, and performance reviews. Features role-based access, automated workflows, analytics, and enterprise system integration.",
    image: "/portfolio/portfolio-03.png",
    link: "",
    category: "Management",
  },
];

const mobileProjects = [
  {
    id: 11,
    title: "Fitness Tracking Mobile App",
    description:
      "Comprehensive fitness companion that tracks workouts, monitors nutrition, and provides personalized training plans. Features real-time progress tracking, social challenges, and integration with wearable devices.",
    image: "/portfolio/portfolio-11.jpg",
    link: "",
    category: "Health & Fitness",
  },
  {
    id: 12,
    title: "E-Commerce Shopping App",
    description:
      "Seamless mobile shopping experience with advanced product discovery, secure payments, and real-time order tracking. Features personalized recommendations, wishlist management, and one-tap checkout.",
    image: "/portfolio/portfolio-12.jpg",
    link: "",
    category: "E-Commerce",
  },
  {
    id: 13,
    title: "Food Delivery Application",
    description:
      "On-demand food ordering platform connecting users with local restaurants. Features live order tracking, customized meal preferences, scheduled deliveries, and loyalty rewards program.",
    image: "/portfolio/portfolio-13.jpg",
    link: "",
    category: "Food & Delivery",
  },
  {
    id: 14,
    title: "Travel & Booking App",
    description:
      "All-in-one travel companion for booking flights, hotels, and experiences. Features interactive maps, travel itineraries, offline access, and instant booking confirmations with best price guarantees.",
    image: "/portfolio/portfolio-14.jpg",
    link: "",
    category: "Travel",
  },
  {
    id: 15,
    title: "Banking & Finance App",
    description:
      "Secure mobile banking solution with instant transfers, bill payments, and investment tracking. Features biometric authentication, spending analytics, budget planning, and 24/7 customer support.",
    image: "/portfolio/portfolio-15.jpg",
    link: "",
    category: "FinTech",
  },
];

const marketingProjects = [
  {
    id: 20,
    title: "Brand Identity Campaign",
    description:
      "Comprehensive brand refresh including logo design, visual identity system, and brand guidelines. Delivered cohesive brand presence across digital and print media with measurable brand recognition increase.",
    image: "/portfolio/portfolio-20.jpg",
    link: "",
    category: "Brand Design",
  },
  {
    id: 21,
    title: "Social Media Marketing Suite",
    description:
      "Multi-platform social media campaign with content calendar, engagement strategies, and performance analytics. Achieved significant follower growth and improved audience engagement metrics.",
    image: "/portfolio/portfolio-21.jpg",
    link: "",
    category: "Social Media",
  },
  {
    id: 22,
    title: "Product Launch Campaign",
    description:
      "Integrated marketing strategy for new product introduction including teaser campaigns, influencer partnerships, and launch events. Generated impressive pre-launch buzz and day-one conversions.",
    image: "/portfolio/portfolio-22.jpg",
    link: "",
    category: "Product Marketing",
  },
  {
    id: 23,
    title: "Email Marketing Automation",
    description:
      "Sophisticated email campaign system with personalized content, A/B testing, and conversion optimization. Delivered improved open rates, click-through rates, and customer retention.",
    image: "/portfolio/portfolio-23.jpg",
    link: "",
    category: "Email Marketing",
  },
  {
    id: 24,
    title: "Content Marketing Strategy",
    description:
      "Strategic content creation and distribution plan including blog posts, videos, infographics, and whitepapers. Enhanced SEO rankings, organic traffic growth, and thought leadership positioning.",
    image: "/portfolio/portfolio-24.jpg",
    link: "",
    category: "Content Strategy",
  },
];

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="group bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:-translate-y-2">
    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
    </div>
    <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 group-hover:text-brand-primary transition-colors">
      {title}
    </h3>
    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
      {description}
    </p>
  </div>
);

// Define the project type
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

// Portfolio Card Design - Side-by-side layout with image and content
const MarqueeItemCard = ({
  project,
  onHover,
}: {
  project: Project;
  onHover: (isHovered: boolean) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(false);
  };

  return (
    <div
      className="flex-shrink-0 mx-2 md:mx-4 relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`
        w-[22rem] md:w-[32rem] bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 transition-all duration-500
        ${
          isHovered
            ? "border-brand-primary/30 shadow-2xl shadow-brand-primary/10 transform scale-105"
            : "border-gray-700/50"
        }
      `}
      >
        {/* Image Section */}
        <div className="h-48 md:h-56 relative overflow-hidden">
          <Image
            width={512}
            height={224}
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? "scale-110" : "scale-100 grayscale"
            }`}
          />
          <div className="absolute top-3 left-3">
            <span className="text-xs px-2 py-1 bg-brand-primary/90 backdrop-blur-sm rounded-full text-white font-medium">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 md:p-5">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors whitespace-normal">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed whitespace-normal">
            {project.description}
          </p>

          {/* CTA Button - Only show if link exists */}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary hover:bg-brand-primary/20 hover:border-brand-primary/50 transition-all duration-300 rounded-lg font-medium group/btn"
            >
              <span className="text-sm md:text-base">View Project</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default function HomepagePortfolioSection() {
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const [activeTab, setActiveTab] = useState<"web" | "mobile" | "marketing">(
    "web"
  );

  const portfolioProjects =
    activeTab === "web"
      ? webProjects
      : activeTab === "mobile"
      ? mobileProjects
      : marketingProjects;

  const topFeatures = [
    {
      icon: Sparkles,
      title: "Custom Brand Solutions",
      description:
        "Deliver tailored digital experiences that elevate your clients' brands.",
    },
    {
      icon: ImageIcon,
      title: "Creative Visual Design",
      description:
        "Craft visually stunning layouts and assets to make your agency's work stand out.",
    },
    {
      icon: Code,
      title: "Seamless Integration",
      description:
        "Integrate with popular CMS, analytics, and marketing tools for streamlined workflows.",
    },
    {
      icon: Rocket,
      title: "Rapid Project Delivery",
      description:
        "Accelerate timelines with efficient tools designed for agency-scale collaboration.",
    },
  ];

  const bottomFeatures = [
    {
      icon: Edit,
      title: "Brand Storytelling",
      description:
        "Craft compelling narratives and messaging that resonate with your clients' audiences.",
    },
    {
      icon: FileText,
      title: "Content Strategy",
      description:
        "Develop and execute content plans that drive engagement and support business goals.",
    },
    {
      icon: RefreshCw,
      title: "Campaign Management",
      description:
        "Coordinate and optimize multi-channel marketing campaigns for maximum impact.",
    },
    {
      icon: Eye,
      title: "Performance Analytics",
      description:
        "Monitor project success with real-time analytics and actionable insights.",
    },
  ];
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-20 px-4 overflow-hidden">
      {/* Complex geometric background pattern inspired by fffuel.co */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hexPattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30 5 L50 20 L50 40 L30 55 L10 40 L10 20 Z"
                stroke="#9ef01a"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
              />
            </pattern>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#9ef01a" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#70e000" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexPattern)" />
          <circle cx="200" cy="200" r="150" fill="url(#glowGradient)" />
          <circle cx="600" cy="600" r="200" fill="url(#glowGradient)" />
        </svg>
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Our Portfolio Projects
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore how we&apos;ve helped digital agencies elevate their brands,
            streamline workflows, and deliver impactful digital experiences
            through innovative design and technology.
          </p>
        </div>

        {/* Top Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {topFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        {/* Portfolio Showcase */}
        <div className="relative mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-3">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Portfolio Showcase
              </h3>
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
                <ExternalLink className="w-4 h-4" />
                <span>Click to visit</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 bg-gray-800/60 backdrop-blur-sm p-1.5 rounded-xl border border-gray-700/50">
              <button
                onClick={() => setActiveTab("web")}
                className={`px-4 md:px-6 py-2 rounded-lg font-medium text-sm md:text-base transition-all duration-300 cursor-pointer ${
                  activeTab === "web"
                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                <span className="md:hidden">Web</span>
                <span className="hidden md:inline">Web Projects</span>
              </button>
              <button
                onClick={() => setActiveTab("mobile")}
                className={`px-4 md:px-6 py-2 rounded-lg font-medium text-sm md:text-base transition-all duration-300 cursor-pointer ${
                  activeTab === "mobile"
                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                <span className="md:hidden">Mobile</span>
                <span className="hidden md:inline">Mobile Apps</span>
              </button>
              <button
                onClick={() => setActiveTab("marketing")}
                className={`px-4 md:px-6 py-2 rounded-lg font-medium text-sm md:text-base transition-all duration-300 cursor-pointer ${
                  activeTab === "marketing"
                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                Marketing
              </button>
            </div>
          </div>

          {/* Portfolio Marquee */}
          <div className="marquee-container">
            <div
              className={`marquee-right flex ${
                isMarqueePaused ? "paused" : ""
              }`}
            >
              {[...portfolioProjects, ...portfolioProjects].map(
                (project, index) => (
                  <MarqueeItemCard
                    key={`card-${index}`}
                    project={project}
                    onHover={setIsMarqueePaused}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {bottomFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-right {
          animation: scroll-right 40s linear infinite;
        }

        .marquee-right.paused {
          animation-play-state: paused;
        }

        .marquee-left {
          animation: scroll-left 35s linear infinite;
        }

        .marquee-left.paused {
          animation-play-state: paused;
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .rotating-gradient-top {
          background: conic-gradient(
            from 0deg,
            #9ef01a,
            #70e000,
            #d9f99d,
            #004b23,
            #9ef01a
          );
          animation: rotate-gradient 8s linear infinite;
        }

        .rotating-gradient-bottom {
          background: conic-gradient(
            from 180deg,
            #70e000,
            #004b23,
            #9ef01a,
            #d9f99d,
            #70e000
          );
          animation: rotate-gradient 6s linear infinite reverse;
        }

        @keyframes rotate-gradient {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
