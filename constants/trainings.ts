export type TrainingType = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: "Bootcamp" | "Internship" | "Masterclass" | "Online Course";
  image: string;
  comingSoon?: boolean;
};

export const trainings: TrainingType[] = [
  // Bootcamp Programs
  {
    id: "bootcamp-001",
    title: "Software Engineering Bootcamp",
    slug: "bootcamp/fullstack-web-development",
    description:
      "Intensive hands-on training in frontend and backend technologies. Ideal for beginners and career switchers.",
    category: "Bootcamp",
    image: "/bootcamp/software-development.jpg",
  },
  {
    id: "bootcamp-002",
    title: "Front-End Development Bootcamp",
    slug: "bootcamp/frontend-development",
    description:
      "Master modern frontend technologies including React, Vue, and responsive design. Perfect for aspiring frontend developers.",
    category: "Bootcamp",
    image: "/bootcamp/frontend.jpg",
  },
  {
    id: "bootcamp-003",
    title: "Back-End Development Bootcamp",
    slug: "bootcamp/backend-development",
    description:
      "Deep dive into server-side technologies, databases, and API development. Build robust backend systems from scratch.",
    category: "Bootcamp",
    image: "/bootcamp/backend.jpg",
  },
  {
    id: "bootcamp-004",
    title: "Growth Marketing Bootcamp",
    slug: "bootcamp/growth-marketing",
    description:
      "A hands-on bootcamp covering growth marketing, SEO, analytics, and growth strategies. Perfect for aspiring marketers and business owners looking to scale online.",
    category: "Bootcamp",
    image: "/trainings/growth.jpg",
  },
  {
    id: "bootcamp-005",
    title: "UI/UX Design Bootcamp",
    slug: "bootcamp/ui-ux",
    description:
      "Comprehensive design training covering user research, wireframing, prototyping, and modern design tools. Create stunning user experiences.",
    category: "Bootcamp",
    image: "/bootcamp/uiux.jpg",
  },
  {
    id: "bootcamp-006",
    title: "Data Analysis Bootcamp",
    slug: "bootcamp/data-analysis",
    description:
      "Learn data analysis, visualization, and statistical methods. Master tools like Python and SQL to make data-driven decisions.",
    category: "Bootcamp",
    image: "/bootcamp/data-analysis.jpg",
  },
  {
    id: "bootcamp-007",
    title: "Mobile App Development Bootcamp",
    slug: "bootcamp/mobile-app-dev",
    description:
      "Learn mobile app development using React Native and Expo. Build cross-platform apps for iOS and Android.",
    category: "Bootcamp",
    image: "/bootcamp/mobile.jpg",
  },
  {
    id: "bootcamp-008",
    title: "Cloud & DevOps Bootcamp",
    slug: "bootcamp/cloud-devops",
    description:
      "Learn cloud infrastructure design, deployment strategies, and DevOps practices. Master tools like AWS, Docker, and Kubernetes.",
    category: "Bootcamp",
    image: "/bootcamp/cloud.jpg",
  },
  // {
  //   id: "bootcamp-007",
  //   title: "Cybersecurity Bootcamp",
  //   slug: "bootcamp",
  //   description:
  //     "Comprehensive cybersecurity training covering ethical hacking, network security, and threat analysis. Protect digital assets effectively.",
  //   category: "Bootcamp",
  //   image: "/bootcamp/cybersecurity.jpg",
  // },
  {
    id: "internship-001",
    title: "Tech Internship Program",
    slug: "internship",
    description:
      "Real-world experience working on projects alongside experienced engineers, designers, marketers and product managers.",
    category: "Internship",
    image: "/trainings/internship.jpg",
    comingSoon: true,
  },
  {
    id: "internship-002",
    title: "SIWES Training",
    slug: "internship",
    description:
      "Three to six-month program for students to gain practical experience in software development, cloud computing, data analysis, etc.",
    category: "Internship",
    image: "/trainings/siwes-training.jpg",
    comingSoon: true,
  },
  // {
  //   id: "internship-003",
  //   title: "Data Science Internship",
  //   slug: "internship",
  //   description:
  //     "Work on real data science projects, from data collection to machine learning model deployment.",
  //   category: "Internship",
  //   image: "/trainings/data-internship.jpg",
  //   comingSoon: true,
  // },
  {
    id: "masterclass-001",
    title: "Next.js Masterclass",
    slug: "masterclass",
    description:
      "Master advanced Next.js concepts, performance optimization, SSR & CSR, SSG & ISR, and modern development patterns.",
    category: "Masterclass",
    image: "/trainings/masterclass-nextjs.jpg",
    comingSoon: true,
  },
  {
    id: "masterclass-002",
    title: "Cloud Architecture Masterclass",
    slug: "masterclass",
    description:
      "Learn cloud infrastructure design, deployment strategies, and scalable architecture patterns.",
    category: "Masterclass",
    image: "/trainings/masterclass-devops.jpg",
    comingSoon: true,
  },
  {
    id: "masterclass-003",
    title: "Cybersecurity Masterclass",
    slug: "masterclass",
    description:
      "Learn cybersecurity fundamentals, threat detection, and incident response strategies.",
    category: "Masterclass",
    image: "/trainings/masterclass-cybersecurity.jpg",
    comingSoon: true,
  },
  {
    id: "online-001",
    title: "JavaScript for Beginners",
    slug: "js-course",
    description:
      "Self-paced, exam-based course to help you get certified in JavaScript fundamentals.",
    category: "Online Course",
    image: "/trainings/javascript.jpg",
    comingSoon: true,
  },
  {
    id: "online-002",
    title: "Python Programming Essentials",
    slug: "python-course",
    description:
      "Comprehensive Python course covering syntax, data structures, and practical applications.",
    category: "Online Course",
    image: "/trainings/online-python.jpg",
    comingSoon: true,
  },
  {
    id: "online-003",
    title: "Database Design and SQL",
    slug: "database-course",
    description:
      "Learn database design principles and master SQL for data manipulation and analysis.",
    category: "Online Course",
    image: "/trainings/online-database.jpg",
    comingSoon: true,
  },
  {
    id: "online-004",
    title: "Object Relational Mapping (ORM)",
    slug: "orm-course",
    description:
      "Learn how to use ORMs like Sequelize and TypeORM to interact with databases in a more intuitive way.",
    category: "Online Course",
    image: "/trainings/online-orm.jpg",
    comingSoon: true,
  },
  {
    id: "online-005",
    title: "API Development with Node.js",
    slug: "api-course",
    description:
      "Build RESTful APIs using Node.js and Express, covering authentication, validation, and error handling.",
    category: "Online Course",
    image: "/trainings/online-nodejs.jpg",
    comingSoon: true,
  },
  {
    id: "online-006",
    title: "React Fundamentals",
    slug: "react-course",
    description:
      "Learn the basics of React, including components, state management, and hooks.",
    category: "Online Course",
    image: "/trainings/online-react.jpg",
    comingSoon: true,
  },
  {
    id: "online-007",
    title: "Vibe Coding",
    slug: "vibe-coding",
    description:
      "Learn the fundamentals of coding with Vibe Coding, a fun and interactive way to get started with programming.",
    category: "Online Course",
    image: "/trainings/online-vibe-coding.jpg",
    comingSoon: true,
  },
];
