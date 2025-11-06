"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  Search,
} from "lucide-react";
import { Button } from "@/ui/button";
import Image from "next/image";

const CategoryPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [searchTerm, setSearchTerm] = useState("");

  const categoryData = {
    software: {
      title: "Software Development",
      description:
        "Explore the latest in software development, from frameworks to best practices.",
      color: "from-blue-500 to-purple-500",
    },
    "ai-ml": {
      title: "AI/ML",
      description:
        "Discover artificial intelligence and machine learning innovations.",
      color: "from-green-500 to-teal-500",
    },
    "growth-marketing": {
      title: "Growth Marketing",
      description:
        "Learn data-driven strategies for sustainable business growth.",
      color: "from-orange-500 to-red-500",
    },
    "project-management": {
      title: "Project Management",
      description:
        "Master project management methodologies and team leadership.",
      color: "from-indigo-500 to-blue-500",
    },
    data: {
      title: "Data",
      description:
        "Dive deep into data engineering, analytics, and visualization.",
      color: "from-purple-500 to-pink-500",
    },
  };

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

  const currentCategory = categoryData[slug as keyof typeof categoryData];
  const posts = categoryPosts[slug as keyof typeof categoryPosts] || [];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Category Not Found
          </h1>
          <Link href="/blog" className="text-brand-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
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
              backgroundImage: "url('/imgs/gavel-bg.jpg')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-brand-primary hover:text-brand-accent transition-colors mb-6"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Blog
            </Link>

            <div
              className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${currentCategory.color} rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg`}
            >
              <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent pb-1">
              {currentCategory.title}
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              {currentCategory.description}
            </p>

            <div className="text-brand-primary font-semibold">
              {posts.length} Articles
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="py-8 md:py-10 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative max-w-md mx-auto">
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
        </section>

        {/* Articles Grid */}
        <section className="py-8 md:py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/^-+|-+$/g, "")}`}
                  >
                    <article className="bg-gray-800/40 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:transform hover:scale-105 group cursor-pointer">
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
            ) : (
              <div className="text-center py-16 md:py-20">
                <Search className="w-12 h-12 md:w-16 md:h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl font-semibold text-gray-400 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                  Try adjusting your search criteria.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
