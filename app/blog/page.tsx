"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import {
  Search,
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  TrendingUp,
  BookOpen,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { Button } from "@/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/ui/dialog";
import Image from "next/image";
import { newsletterApi } from "@/lib/api";
import { useApiRequest } from "@/hooks/useApiRequest";
import {
  SuccessModal,
  ErrorModal,
  DuplicateEmailModal,
} from "@/components/ui/ApiModal";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [email, setEmail] = useState("");
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const [duplicateEmail, setDuplicateEmail] = useState("");
  const [scrollPositions, setScrollPositions] = useState<
    Record<string, number>
  >({});

  const {
    loading,
    error,
    execute: subscribeToNewsletter,
    reset,
  } = useApiRequest(newsletterApi.subscribe);

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "technology", name: "Technology", count: 5 },
    { id: "cloud", name: "Cloud Computing", count: 3 },
    { id: "development", name: "Development", count: 4 },
    { id: "cybersecurity", name: "Cybersecurity", count: 2 },
    { id: "digital-transformation", name: "Digital Transformation", count: 3 },
  ];

  const marqueeCategories = [
    { id: "software", name: "Software Development", count: 4 },
    { id: "ai-ml", name: "AI/ML", count: 4 },
    { id: "growth-marketing", name: "Growth Marketing", count: 4 },
    { id: "project-management", name: "Project Management", count: 4 },
    { id: "data", name: "Data", count: 4 },
  ];

  const featuredPost = {
    id: 1,
    title: "The Future of AI in Enterprise Software Development",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we build and deploy enterprise applications, from automated testing to intelligent code generation.",
    author: "Oluwajuwon O.K.",
    authorImage: "/staff/juwon.png",
    date: "2025-03-15",
    readTime: "8 min read",
    category: "Technology",
    image: "/imgs/blog-featured.jpg",
    featured: true,
  };

  // const blogPosts = [
  //   {
  //     id: 2,
  //     title: "Migrating Legacy Systems to the Cloud: Best Practices",
  //     excerpt:
  //       "A comprehensive guide to successfully transitioning your legacy infrastructure to modern cloud platforms without disrupting business operations.",
  //     author: "Mayowa Bernard",
  //     authorImage: "/staff/mayowa.png",
  //     date: "2025-03-10",
  //     readTime: "12 min read",
  //     category: "Cloud Computing",
  //     image: "/imgs/blog-cloud.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Building Scalable Microservices Architecture",
  //     excerpt:
  //       "Learn the essential principles and patterns for designing microservices that can handle enterprise-scale traffic and complexity.",
  //     author: "Oluwajuwon O.K.",
  //     authorImage: "/staff/juwon.png",
  //     date: "2025-04-05",
  //     readTime: "10 min read",
  //     category: "Development",
  //     image: "/imgs/blog-microservices.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Zero Trust Security: A Modern Approach to Cybersecurity",
  //     excerpt:
  //       "Understanding the zero trust model and how to implement it effectively in your organization's security strategy.",
  //     author: "Oluwajuwon O.K.",
  //     authorImage: "/staff/juwon.png",
  //     date: "2025-04-28",
  //     readTime: "7 min read",
  //     category: "Cybersecurity",
  //     image: "/imgs/blog-security.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Digital Transformation ROI: Measuring Success",
  //     excerpt:
  //       "Key metrics and strategies for quantifying the return on investment from your digital transformation initiatives.",
  //     author: "Steve Oladele",
  //     authorImage: "/staff/steve.png",
  //     date: "2025-05-20",
  //     readTime: "9 min read",
  //     category: "Digital Transformation",
  //     image: "/imgs/blog-roi.jpg",
  //   },
  //   {
  //     id: 6,
  //     title: "API-First Development: Design Principles and Benefits",
  //     excerpt:
  //       "Why API-first architecture is becoming the standard for modern software development and how to implement it effectively.",
  //     author: "Mayowa Bernard",
  //     authorImage: "/staff/mayowa.png",
  //     date: "2025-06-01",
  //     readTime: "6 min read",
  //     category: "Development",
  //     image: "/imgs/blog-api.jpg",
  //   },
  // ];

  const categoryPosts = {
    software: [
      {
        id: 7,
        title: "Modern JavaScript Frameworks: A Comprehensive Comparison",
        excerpt:
          "Analyzing React, Vue, and Angular to help you choose the right framework for your next project.",
        author: "Oluwajuwon O.K.",
        authorImage: "/staff/juwon.png",
        date: "2025-06-10",
        readTime: "8 min read",
        category: "Software Development",
        image: "/imgs/blog-img-1.png",
      },
      {
        id: 8,
        title: "Test-Driven Development: Best Practices and Tools",
        excerpt:
          "A deep dive into TDD methodology and the tools that make it effective in modern software development.",
        author: "Mayowa Bernard",
        authorImage: "/staff/mayowa.png",
        date: "2025-06-15",
        readTime: "10 min read",
        category: "Software Development",
        image: "/imgs/blog-img-2.png",
      },
      {
        id: 9,
        title: "DevOps Culture: Bridging Development and Operations",
        excerpt:
          "How to foster a DevOps culture that accelerates delivery while maintaining quality and reliability.",
        author: "Steve Oladele",
        authorImage: "/staff/steve.png",
        date: "2025-06-20",
        readTime: "7 min read",
        category: "Software Development",
        image: "/imgs/blog-img-3.png",
      },
      {
        id: 10,
        title: "Code Quality: Static Analysis and Review Best Practices",
        excerpt:
          "Implementing effective code quality measures through automated tools and peer review processes.",
        author: "Oluwajuwon O.K.",
        authorImage: "/staff/juwon.png",
        date: "2025-06-25",
        readTime: "9 min read",
        category: "Software Development",
        image: "/imgs/blog-img-4.png",
      },
    ],
    "ai-ml": [
      {
        id: 11,
        title: "Machine Learning Models in Production: Deployment Strategies",
        excerpt:
          "Best practices for deploying and monitoring ML models in production environments.",
        author: "Oluwajuwon O.K.",
        authorImage: "/staff/juwon.png",
        date: "2025-06-12",
        readTime: "11 min read",
        category: "AI/ML",
        image: "/imgs/blog-img-1.png",
      },
      {
        id: 12,
        title: "Natural Language Processing: From Theory to Application",
        excerpt:
          "Understanding NLP fundamentals and implementing practical solutions for text analysis.",
        author: "Mayowa Bernard",
        authorImage: "/staff/mayowa.png",
        date: "2025-06-18",
        readTime: "13 min read",
        category: "AI/ML",
        image: "/imgs/blog-img-2.png",
      },
      {
        id: 13,
        title:
          "Computer Vision: Building Intelligent Image Recognition Systems",
        excerpt:
          "Exploring computer vision techniques and their applications in modern software systems.",
        author: "Steve Oladele",
        authorImage: "/staff/steve.png",
        date: "2025-06-22",
        readTime: "10 min read",
        category: "AI/ML",
        image: "/imgs/blog-img-3.png",
      },
      {
        id: 14,
        title: "AI Ethics: Responsible Development and Deployment",
        excerpt:
          "Addressing ethical considerations in AI development and ensuring responsible implementation.",
        author: "Oluwajuwon O.K.",
        authorImage: "/staff/juwon.png",
        date: "2025-06-28",
        readTime: "8 min read",
        category: "AI/ML",
        image: "/imgs/blog-img-4.png",
      },
    ],
    "growth-marketing": [
      {
        id: 15,
        title: "Growth Hacking: Data-Driven Strategies for Rapid Scaling",
        excerpt:
          "Proven growth hacking techniques that leverage data analytics for sustainable business growth.",
        author: "Steve Oladele",
        authorImage: "/staff/steve.png",
        date: "2025-06-14",
        readTime: "9 min read",
        category: "Growth Marketing",
        image: "/imgs/blog-img-1.png",
      },
      {
        id: 16,
        title: "Customer Acquisition Cost: Optimization Strategies",
        excerpt:
          "Reducing CAC while maintaining quality leads through strategic marketing approaches.",
        author: "Mayowa Bernard",
        authorImage: "/staff/mayowa.png",
        date: "2025-06-19",
        readTime: "7 min read",
        category: "Growth Marketing",
        image: "/imgs/blog-img-2.png",
      },
      {
        id: 17,
        title: "Conversion Rate Optimization: A/B Testing Mastery",
        excerpt:
          "Advanced A/B testing techniques to maximize conversion rates and user engagement.",
        author: "Oluwajuwon O.K.",
        authorImage: "/staff/juwon.png",
        date: "2025-06-24",
        readTime: "11 min read",
        category: "Growth Marketing",
        image: "/imgs/blog-img-3.png",
      },
      {
        id: 18,
        title: "Marketing Automation: Scaling Personal Connections",
        excerpt:
          "Building automated marketing funnels that maintain personalization at scale.",
        author: "Steve Oladele",
        authorImage: "/staff/steve.png",
        date: "2025-06-29",
        readTime: "8 min read",
        category: "Growth Marketing",
        image: "/imgs/blog-img-4.png",
      },
    ],
    "project-management": [
      {
        id: 19,
        title: "Agile Project Management: Scrum vs Kanban",
        excerpt:
          "Comparing agile methodologies to choose the right approach for your team and project.",
        author: "Mayowa Bernard",
        authorImage: "/staff/mayowa.png",
        date: "2025-06-16",
        readTime: "10 min read",
        category: "Project Management",
        image: "/imgs/blog-img-1.png",
      },
      {
        id: 20,
        title: "Remote Team Management: Tools and Best Practices",
        excerpt:
          "Effective strategies for managing distributed teams and maintaining productivity.",
        author: "Steve Oladele",
        authorImage: "/staff/steve.png",
        date: "2025-06-21",
        readTime: "9 min read",
        category: "Project Management",
        image: "/imgs/blog-img-2.png",
      },
      {
        id: 21,
        title: "Risk Management in Software Projects",
        excerpt:
          "Identifying, assessing, and mitigating risks in software development projects.",
        author: "Oluwajuwon O.K.",
        authorImage: "/staff/juwon.png",
        date: "2025-06-26",
        readTime: "12 min read",
        category: "Project Management",
        image: "/imgs/blog-img-3.png",
      },
      {
        id: 22,
        title: "Stakeholder Communication: Building Trust and Alignment",
        excerpt:
          "Effective communication strategies for keeping stakeholders informed and engaged.",
        author: "Mayowa Bernard",
        authorImage: "/staff/mayowa.png",
        date: "2025-06-30",
        readTime: "8 min read",
        category: "Project Management",
        image: "/imgs/blog-img-4.png",
      },
    ],
    data: [
      {
        id: 23,
        title: "Data Pipeline Architecture: Building Robust ETL Systems",
        excerpt:
          "Designing scalable data pipelines that can handle large volumes of information reliably.",
        author: "Oluwajuwon O.K.",
        authorImage: "/staff/juwon.png",
        date: "2025-06-17",
        readTime: "13 min read",
        category: "Data",
        image: "/imgs/blog-img-1.png",
      },
      {
        id: 24,
        title: "Data Visualization: Making Complex Data Accessible",
        excerpt:
          "Creating compelling visualizations that tell stories and drive decision-making.",
        author: "Steve Oladele",
        authorImage: "/staff/steve.png",
        date: "2025-06-23",
        readTime: "10 min read",
        category: "Data",
        image: "/imgs/blog-img-2.png",
      },
      {
        id: 25,
        title: "Big Data Processing: Hadoop vs Spark Performance",
        excerpt:
          "Comparing big data processing frameworks to optimize performance for your use case.",
        author: "Mayowa Bernard",
        authorImage: "/staff/mayowa.png",
        date: "2025-06-27",
        readTime: "11 min read",
        category: "Data",
        image: "/imgs/blog-img-3.png",
      },
      {
        id: 26,
        title: "Data Quality Management: Ensuring Accuracy and Consistency",
        excerpt:
          "Implementing data quality frameworks that maintain high standards across your organization.",
        author: "Oluwajuwon O.K.",
        authorImage: "/staff/juwon.png",
        date: "2025-07-01",
        readTime: "9 min read",
        category: "Data",
        image: "/imgs/blog-img-4.png",
      },
    ],
  };

  const handleScroll = (category: string, direction: "left" | "right") => {
    const container = document.getElementById(`marquee-${category}`);
    if (container) {
      const scrollAmount = 300;
      const currentScroll = scrollPositions[category] || 0;
      const newScroll =
        direction === "left"
          ? Math.max(0, currentScroll - scrollAmount)
          : currentScroll + scrollAmount;

      container.scrollTo({ left: newScroll, behavior: "smooth" });
      setScrollPositions((prev) => ({ ...prev, [category]: newScroll }));
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
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

  const handleModalClose = () => {
    setIsSubscriptionModalOpen(false);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    reset();
  };

  const handleErrorModalClose = () => {
    setShowErrorModal(false);
    reset();
  };

  const handleDuplicateModalClose = () => {
    setShowDuplicateModal(false);
    setDuplicateEmail("");
    reset();
  };

  const handleRetry = () => {
    setShowErrorModal(false);
    reset();
    // Create a synthetic form event to trigger resubmission
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

  // const filteredPosts = blogPosts.filter((post) => {
  //   const matchesSearch =
  //     post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
  //   const matchesCategory =
  //     selectedCategory === "all" ||
  //     post.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory;
  //   return matchesSearch && matchesCategory;
  // });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Reading pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="readingPattern"
              x="0"
              y="0"
              width="25"
              height="25"
              patternUnits="userSpaceOnUse"
            >
              {/* Book pages */}
              <rect
                x="8"
                y="6"
                width="9"
                height="13"
                rx="1"
                stroke="#9ef01a"
                strokeWidth="0.3"
                fill="none"
                opacity="0.3"
              />
              <line
                x1="10"
                y1="9"
                x2="15"
                y2="9"
                stroke="#9ef01a"
                strokeWidth="0.2"
                opacity="0.4"
              />
              <line
                x1="10"
                y1="11"
                x2="14"
                y2="11"
                stroke="#9ef01a"
                strokeWidth="0.2"
                opacity="0.4"
              />
              <line
                x1="10"
                y1="13"
                x2="15"
                y2="13"
                stroke="#9ef01a"
                strokeWidth="0.2"
                opacity="0.4"
              />
              <line
                x1="10"
                y1="15"
                x2="13"
                y2="15"
                stroke="#9ef01a"
                strokeWidth="0.2"
                opacity="0.4"
              />
              <circle cx="12.5" cy="3" r="0.8" fill="#70e000" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#readingPattern)" />
        </svg>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 px-4 md:px-8 min-h-[60vh] flex items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/imgs/blog-bg.jpg')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg shadow-brand-primary/30">
              <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent">
              Tech Insights Blog
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and insights
              in technology, software development, and digital transformation.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-8 md:py-10 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <Link
              href={`/blog/${featuredPost.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")}`}
            >
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 group cursor-pointer">
                <div className="lg:flex">
                  <div className="lg:w-1/2">
                    <div className="h-48 md:h-64 lg:h-full relative overflow-hidden">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
                      <div className="absolute top-4 left-4 bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                      <div className="absolute top-4 right-4">
                        <TrendingUp className="w-8 h-8 text-brand-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-6 md:p-8 lg:p-12">
                    <div className="flex items-center text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
                      <Tag className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      <span>{featuredPost.category}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      <span>
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-white group-hover:text-brand-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 md:mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs md:text-sm text-gray-400">
                        <div className="relative w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3">
                          <Image
                            src={featuredPost.authorImage}
                            alt={featuredPost.author}
                            fill
                            className="rounded-full object-cover border-2 border-brand-primary/20"
                          />
                        </div>
                        <div>
                          <span className="text-white font-medium text-xs md:text-sm">
                            {featuredPost.author}
                          </span>
                          <div className="flex items-center text-xs text-gray-400 mt-1">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-brand-primary text-white px-4 md:px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30 flex items-center text-xs md:text-sm">
                        Read More
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 md:py-10 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-white">
              Latest Articles By Categories
            </h2>
            <div className="flex flex-col gap-6">
              {/* Search */}
              <div className="flex justify-start">
                <div className="relative max-w-md w-full lg:w-96">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/40 border border-gray-700/50 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:cursor-pointer ${
                      selectedCategory === category.id
                        ? "bg-brand-primary text-white"
                        : "bg-gray-800/40 text-gray-300 hover:bg-gray-700/50"
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Category Marquees */}
        <section className="py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {marqueeCategories.map((category) => (
              <div key={category.id} className="mb-16 md:mb-20">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 md:mb-8 gap-4">
                  <Link
                    href={`/blog/category/${category.id}`}
                    className="group"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-brand-primary transition-colors">
                      {category.name}
                    </h2>
                  </Link>
                  <div className="flex items-center justify-between sm:justify-end space-x-3">
                    <Link
                      href={`/blog/category/${category.id}`}
                      className="text-sm font-medium text-brand-primary hover:text-brand-accent transition-colors px-3 py-1 rounded-full border border-brand-primary/30 hover:bg-brand-primary/10"
                    >
                      View All
                    </Link>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleScroll(category.id, "left")}
                        className="p-2 rounded-full bg-gray-800/40 border border-gray-700/50 hover:border-brand-primary/30 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-400 hover:text-brand-primary" />
                      </button>
                      <button
                        onClick={() => handleScroll(category.id, "right")}
                        className="p-2 rounded-full bg-gray-800/40 border border-gray-700/50 hover:border-brand-primary/30 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-400 hover:text-brand-primary" />
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  id={`marquee-${category.id}`}
                  className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing touch-pan-x"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  onMouseDown={(e) => {
                    const container = e.currentTarget;
                    let isDown = true;
                    const startX = e.pageX - container.offsetLeft;
                    const scrollLeft = container.scrollLeft;

                    container.style.cursor = "grabbing";

                    const handleMouseMove = (e: MouseEvent) => {
                      if (!isDown) return;
                      e.preventDefault();
                      const x = e.pageX - container.offsetLeft;
                      const walk = (x - startX) * 2;
                      container.scrollLeft = scrollLeft - walk;
                    };

                    const handleMouseUp = () => {
                      isDown = false;
                      container.style.cursor = "grab";
                      document.removeEventListener(
                        "mousemove",
                        handleMouseMove
                      );
                      document.removeEventListener("mouseup", handleMouseUp);
                    };

                    const handleMouseLeave = () => {
                      isDown = false;
                      container.style.cursor = "grab";
                      document.removeEventListener(
                        "mousemove",
                        handleMouseMove
                      );
                      document.removeEventListener("mouseup", handleMouseUp);
                    };

                    document.addEventListener("mousemove", handleMouseMove);
                    document.addEventListener("mouseup", handleMouseUp);
                    container.addEventListener("mouseleave", handleMouseLeave);
                  }}
                  onTouchStart={(e) => {
                    const container = e.currentTarget;
                    const startX = e.touches[0].pageX - container.offsetLeft;
                    const scrollLeft = container.scrollLeft;

                    const handleTouchMove = (e: TouchEvent) => {
                      if (e.touches.length > 1) return;
                      const x = e.touches[0].pageX - container.offsetLeft;
                      const walk = (x - startX) * 2;
                      container.scrollLeft = scrollLeft - walk;
                    };

                    const handleTouchEnd = () => {
                      container.removeEventListener(
                        "touchmove",
                        handleTouchMove
                      );
                      container.removeEventListener("touchend", handleTouchEnd);
                    };

                    container.addEventListener("touchmove", handleTouchMove, {
                      passive: true,
                    });
                    container.addEventListener("touchend", handleTouchEnd);
                  }}
                >
                  {categoryPosts[
                    category.id as keyof typeof categoryPosts
                  ]?.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-+|-+$/g, "")}`}
                    >
                      <article className="flex-shrink-0 w-80 md:w-96 bg-gray-800/40 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:transform hover:scale-105 group cursor-pointer">
                        <div className="h-40 md:h-48 relative overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute top-4 left-4 bg-gray-900/80 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </div>
                        </div>
                        <div className="p-4 md:p-6">
                          <div className="flex items-center text-xs md:text-sm text-gray-400 mb-2 md:mb-3">
                            <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                            <span>
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                            <span className="mx-2">•</span>
                            <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white group-hover:text-brand-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-3 md:mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-xs md:text-sm text-gray-400">
                              <div className="relative w-5 h-5 md:w-6 md:h-6 mr-2">
                                <Image
                                  src={post.authorImage}
                                  alt={post.author}
                                  fill
                                  className="rounded-full object-cover border border-brand-primary/20"
                                />
                              </div>
                              <span className="text-white font-medium text-xs md:text-sm">
                                {post.author}
                              </span>
                            </div>
                            <Button className="transition-colors font-semibold text-xs md:text-sm flex items-center">
                              Read More
                              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-secondary/20 via-gray-800/80 to-brand-secondary/20 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-brand-primary/20 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">
                Stay Updated
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8">
                Subscribe to our newsletter and never miss the latest insights
                in technology and innovation.
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
                  disabled={loading}
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <Button
                  type="submit"
                  disabled={loading || !email.trim()}
                  className="bg-brand-primary text-white px-4 md:px-6 py-4 md:py-6 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin mr-2" />
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleSuccessModalClose}
        title="Subscription Successful!"
        description="Thank you for subscribing to our newsletter. You'll receive the latest tech insights and updates directly in your inbox."
      />

      {/* Error Modal */}
      <ErrorModal
        isOpen={showErrorModal}
        onClose={handleErrorModalClose}
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
        onClose={handleDuplicateModalClose}
        email={duplicateEmail}
      />

      {/* Legacy Newsletter Subscription Modal */}
      <Dialog
        open={isSubscriptionModalOpen}
        onOpenChange={setIsSubscriptionModalOpen}
      >
        <DialogContent className="bg-white border-gray-700 text-black max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-gray-900 text-center">
              Subscription Successful!
            </DialogTitle>
            <DialogDescription className="text-gray-700 mt-2 text-center">
              Thank you for subscribing to our newsletter. You&apos;ll receive
              the latest tech insights and updates directly in your inbox.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6">
            <Button
              onClick={handleModalClose}
              className="w-full bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary/90 hover:to-brand-accent/90 text-white font-semibold py-3 rounded-lg transition-all duration-200"
            >
              Continue Reading
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Blog;
