import React from "react";
import { Code, Database, Globe, Zap } from "lucide-react";

const SoftwareEngineeringExperience = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-green-600" />,
      title: "Frontend Mastery",
      description:
        "Build responsive, interactive user interfaces with React and modern CSS",
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: "Backend Development",
      description:
        "Create robust APIs and server-side logic with Node.js and Express",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Full-Stack Integration",
      description: "Connect frontend and backend for complete web applications",
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Modern Deployment",
      description: "Deploy production-ready applications with cloud platforms",
    },
  ];

  return (
    <section id="fullstack-experience" className="mb-12 lg:mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-4 lg:mb-6"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            lineHeight: "1.3",
          }}
        >
          Complete Software Engineering Experience
        </h2>
        <p
          className="text-gray-700 mb-6 lg:mb-8 leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: "1.6",
          }}
        >
          Master both frontend and backend development to build complete web
          applications from conception to deployment. Graduate with the skills
          to work on any part of the technology stack.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 sm:space-x-4 p-4 lg:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex-shrink-0">{highlight.icon}</div>
              <div>
                <h3
                  className="font-semibold text-gray-900 mb-2"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.125rem)",
                    lineHeight: "1.4",
                  }}
                >
                  {highlight.title}
                </h3>
                <p
                  className="text-gray-600"
                  style={{
                    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                    lineHeight: "1.5",
                  }}
                >
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 lg:p-8 rounded-lg border border-purple-100 shadow-md">
          <h3
            className="font-semibold text-gray-900 mb-3 lg:mb-4"
            style={{
              fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
              lineHeight: "1.4",
            }}
          >
            Why Choose Software Engineering?
          </h3>
          <p
            className="text-gray-700 leading-relaxed"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: "1.6",
            }}
          >
            Software engineering is one of the most versatile and in-demand
            skills in the tech industry. As companies need developers who can
            work across the entire technology stack, software engineers are
            highly valued for their ability to build complete applications from
            frontend to backend. Our program prepares you for this exciting
            field with hands-on projects and industry-standard technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoftwareEngineeringExperience;
