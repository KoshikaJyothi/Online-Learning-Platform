/**
 * Seed Script — Mock Courses
 * Run with: node seed.js
 *
 * Inserts 4 realistic courses, each with 4 sections and 4 lectures.
 * Uses Unsplash thumbnails and a public sample MP4 for video URLs.
 */

import mongoose from "mongoose";
import { config } from "dotenv";
import { Course } from "./models/Course.js";
import { User } from "./models/User.js";

config();

// ─── Sample public MP4 URLs (Big Buck Bunny clips — universally accessible) ───
const VIDEOS = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Subaru Outback.mp4",
];

const v = (i) => VIDEOS[i % VIDEOS.length];

// ─────────────────────────────────────────────
// MOCK COURSES
// ─────────────────────────────────────────────
const MOCK_COURSES = [
  // ── 1. Full Stack Web Development ──────────
  {
    title: "Full Stack Web Development Bootcamp",
    description:
      "Master HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB in this comprehensive bootcamp. Build 5 real-world projects and land your first web dev job.",
    category: "Web Development",
    courseLevel: "Beginner",
    thumbnail:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
    studentsEnrolled: 4823,
    rating: 4.8,
    ratingCount: 1204,
    courseOutcomes: [
      "Build full-stack web applications from scratch",
      "Master React and modern JavaScript (ES6+)",
      "Develop REST APIs with Node.js and Express",
      "Store and query data using MongoDB",
      "Deploy apps to the cloud using Vercel & Render",
      "Implement authentication with JWT & bcrypt",
    ],
    sections: [
      {
        sectionTitle: "HTML & CSS Fundamentals",
        lectures: [
          { title: "Course Overview & Setup", description: "What we'll build and how to set up VS Code.", videoUrl: v(0), duration: "485", isPreview: true },
          { title: "HTML Structure & Semantic Tags", description: "Learn how browsers interpret HTML documents.", videoUrl: v(1), duration: "612", isPreview: false },
          { title: "CSS Box Model & Flexbox", description: "Master layout with flexbox techniques.", videoUrl: v(2), duration: "734", isPreview: false },
          { title: "Responsive Design with Media Queries", description: "Make your sites look great on every device.", videoUrl: v(3), duration: "541", isPreview: false },
        ],
      },
      {
        sectionTitle: "JavaScript Essentials",
        lectures: [
          { title: "Variables, Functions & Scope", description: "Understand JS fundamentals deeply.", videoUrl: v(4), duration: "720", isPreview: false },
          { title: "DOM Manipulation", description: "Make your web pages dynamic and interactive.", videoUrl: v(5), duration: "893", isPreview: false },
          { title: "Async JS — Promises & Fetch API", description: "Handle async operations like a pro.", videoUrl: v(6), duration: "670", isPreview: false },
          { title: "ES6+ Features", description: "Arrow functions, destructuring, spread, modules.", videoUrl: v(7), duration: "557", isPreview: false },
        ],
      },
      {
        sectionTitle: "React — Building UIs",
        lectures: [
          { title: "React Introduction & JSX", description: "Why React and how components work.", videoUrl: v(0), duration: "630", isPreview: true },
          { title: "State, Props & Hooks", description: "useState, useEffect and custom hooks.", videoUrl: v(1), duration: "780", isPreview: false },
          { title: "React Router & Navigation", description: "Build a multi-page SPA.", videoUrl: v(2), duration: "490", isPreview: false },
          { title: "Fetching Data & Axios", description: "Connect your React app to a backend.", videoUrl: v(3), duration: "610", isPreview: false },
        ],
      },
      {
        sectionTitle: "Node.js, Express & MongoDB",
        lectures: [
          { title: "Node.js & npm Basics", description: "Server-side JavaScript fundamentals.", videoUrl: v(4), duration: "540", isPreview: false },
          { title: "Building REST APIs with Express", description: "Create routes, middleware and controllers.", videoUrl: v(5), duration: "830", isPreview: false },
          { title: "MongoDB & Mongoose", description: "Schema design and CRUD operations.", videoUrl: v(6), duration: "750", isPreview: false },
          { title: "JWT Authentication End-to-End", description: "Secure your APIs with tokens and cookies.", videoUrl: v(7), duration: "920", isPreview: false },
        ],
      },
    ],
  },

  // ── 2. Python for Data Science ─────────────
  {
    title: "Python for Data Science & Machine Learning",
    description:
      "Learn Python from scratch and apply it to data analysis, visualization, and machine learning. Uses NumPy, Pandas, Matplotlib, Seaborn, and scikit-learn.",
    category: "Data Science",
    courseLevel: "Intermediate",
    thumbnail:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    studentsEnrolled: 3102,
    rating: 4.7,
    ratingCount: 876,
    courseOutcomes: [
      "Write clean, Pythonic code",
      "Analyse datasets with Pandas and NumPy",
      "Create compelling visualizations with Matplotlib",
      "Build and evaluate ML models with scikit-learn",
      "Work with real-world datasets from Kaggle",
      "Understand regression, classification, and clustering",
    ],
    sections: [
      {
        sectionTitle: "Python Programming Fundamentals",
        lectures: [
          { title: "Setting Up Python & Jupyter", description: "Install Anaconda and navigate Jupyter notebooks.", videoUrl: v(1), duration: "390", isPreview: true },
          { title: "Variables, Types & Control Flow", description: "if/else, loops and data types.", videoUrl: v(2), duration: "520", isPreview: false },
          { title: "Functions, Lambdas & Comprehensions", description: "Write concise, reusable Python code.", videoUrl: v(3), duration: "640", isPreview: false },
          { title: "File Handling & Modules", description: "Read CSV files and organise code with modules.", videoUrl: v(4), duration: "410", isPreview: false },
        ],
      },
      {
        sectionTitle: "Data Manipulation with Pandas & NumPy",
        lectures: [
          { title: "NumPy Arrays & Operations", description: "Fast numerical computation fundamentals.", videoUrl: v(5), duration: "580", isPreview: false },
          { title: "DataFrames & Series in Pandas", description: "Load, inspect, and slice data.", videoUrl: v(6), duration: "720", isPreview: false },
          { title: "Data Cleaning & Missing Values", description: "Handle nulls, duplicates, and type errors.", videoUrl: v(7), duration: "660", isPreview: false },
          { title: "GroupBy, Merge & Pivot Tables", description: "Aggregate and reshape datasets.", videoUrl: v(0), duration: "790", isPreview: false },
        ],
      },
      {
        sectionTitle: "Data Visualization",
        lectures: [
          { title: "Matplotlib Line & Bar Charts", description: "Plot basic charts for data storytelling.", videoUrl: v(1), duration: "430", isPreview: false },
          { title: "Seaborn Statistical Plots", description: "Beautiful distributions and correlation maps.", videoUrl: v(2), duration: "510", isPreview: false },
          { title: "Interactive Plots with Plotly", description: "Build dashboards your stakeholders will love.", videoUrl: v(3), duration: "620", isPreview: false },
          { title: "Mini Project: EDA on Real Dataset", description: "Apply everything to a Kaggle dataset.", videoUrl: v(4), duration: "840", isPreview: false },
        ],
      },
      {
        sectionTitle: "Machine Learning with scikit-learn",
        lectures: [
          { title: "ML Workflow & Feature Engineering", description: "Train/test split, scaling, encoding.", videoUrl: v(5), duration: "700", isPreview: false },
          { title: "Linear & Logistic Regression", description: "Core supervised learning algorithms.", videoUrl: v(6), duration: "820", isPreview: false },
          { title: "Decision Trees & Random Forests", description: "Ensemble methods explained visually.", videoUrl: v(7), duration: "750", isPreview: false },
          { title: "Model Evaluation & Hyperparameter Tuning", description: "Cross-validation, confusion matrix, GridSearchCV.", videoUrl: v(0), duration: "910", isPreview: false },
        ],
      },
    ],
  },

  // ── 3. UI/UX Design ────────────────────────
  {
    title: "UI/UX Design Masterclass: From Wireframes to Prototypes",
    description:
      "Learn the complete UI/UX design process using Figma. Cover user research, wireframing, design systems, prototyping, and usability testing.",
    category: "Design",
    courseLevel: "Beginner",
    thumbnail:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    studentsEnrolled: 2450,
    rating: 4.9,
    ratingCount: 654,
    courseOutcomes: [
      "Conduct user research and create personas",
      "Sketch wireframes and low-fidelity mockups",
      "Design pixel-perfect UIs in Figma",
      "Build interactive prototypes",
      "Run usability testing sessions",
      "Build and maintain a design system",
    ],
    sections: [
      {
        sectionTitle: "Introduction to UX Design",
        lectures: [
          { title: "What is UX? The Design Thinking Process", description: "Empathise, define, ideate, prototype, test.", videoUrl: v(2), duration: "470", isPreview: true },
          { title: "User Research Methods", description: "Surveys, interviews, and contextual inquiry.", videoUrl: v(3), duration: "635", isPreview: false },
          { title: "Creating User Personas & Journey Maps", description: "Connect with your users through data.", videoUrl: v(4), duration: "590", isPreview: false },
          { title: "Information Architecture & Card Sorting", description: "Organise content users can navigate.", videoUrl: v(5), duration: "510", isPreview: false },
        ],
      },
      {
        sectionTitle: "Wireframing & Sketching",
        lectures: [
          { title: "Sketching UIs on Paper", description: "Fast idea generation before screens.", videoUrl: v(6), duration: "360", isPreview: false },
          { title: "Low-Fidelity Wireframes in Figma", description: "Build clickable wireframes quickly.", videoUrl: v(7), duration: "680", isPreview: false },
          { title: "Usability Testing Wireframes", description: "Get feedback early and iterate fast.", videoUrl: v(0), duration: "520", isPreview: false },
          { title: "Workshop: Redesign a Mobile App Screen", description: "Apply the process to a real case study.", videoUrl: v(1), duration: "775", isPreview: false },
        ],
      },
      {
        sectionTitle: "Visual UI Design with Figma",
        lectures: [
          { title: "Figma Fundamentals: Frames, Layers & Grids", description: "Master the tool used by top design teams.", videoUrl: v(2), duration: "560", isPreview: false },
          { title: "Typography & Colour Theory", description: "Create visual hierarchies that guide the eye.", videoUrl: v(3), duration: "650", isPreview: false },
          { title: "Components, Variants & Auto Layout", description: "Design scalable, reusable component libraries.", videoUrl: v(4), duration: "820", isPreview: false },
          { title: "High-Fidelity Mobile App Design", description: "End-to-end app design in Figma.", videoUrl: v(5), duration: "940", isPreview: false },
        ],
      },
      {
        sectionTitle: "Prototyping & Handoff",
        lectures: [
          { title: "Interactive Prototyping in Figma", description: "Link screens, add transitions and micro-animations.", videoUrl: v(6), duration: "575", isPreview: false },
          { title: "Accessibility & Inclusive Design", description: "Design for everyone — colour contrast, ARIA.", videoUrl: v(7), duration: "490", isPreview: false },
          { title: "Design Handoff to Developers", description: "Use Figma Dev Mode and Zeplin effectively.", videoUrl: v(0), duration: "420", isPreview: false },
          { title: "Building Your Portfolio Case Study", description: "Document your process for job applications.", videoUrl: v(1), duration: "680", isPreview: false },
        ],
      },
    ],
  },

  // ── 4. Cloud & DevOps ──────────────────────
  {
    title: "AWS & DevOps: Cloud Engineering for Beginners",
    description:
      "Understand cloud computing with AWS, automate infrastructure with Terraform, containerise apps with Docker, and build CI/CD pipelines with GitHub Actions.",
    category: "Cloud & DevOps",
    courseLevel: "Advanced",
    thumbnail:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    studentsEnrolled: 1876,
    rating: 4.6,
    ratingCount: 432,
    courseOutcomes: [
      "Navigate the AWS console and core services",
      "Deploy apps to EC2, S3, and Lambda",
      "Write Terraform infrastructure-as-code",
      "Containerise applications with Docker",
      "Orchestrate containers with Kubernetes basics",
      "Build CI/CD pipelines with GitHub Actions",
    ],
    sections: [
      {
        sectionTitle: "Cloud Computing & AWS Basics",
        lectures: [
          { title: "What is Cloud Computing?", description: "IaaS, PaaS, SaaS explained with real examples.", videoUrl: v(3), duration: "420", isPreview: true },
          { title: "AWS Core Services: EC2, S3, IAM, RDS", description: "The must-know services for every cloud engineer.", videoUrl: v(4), duration: "780", isPreview: false },
          { title: "Deploying a Node.js App on EC2", description: "SSH, setup, nginx, and PM2.", videoUrl: v(5), duration: "895", isPreview: false },
          { title: "Static Sites & Storage with S3 + CloudFront", description: "Host a React app with a CDN for free.", videoUrl: v(6), duration: "610", isPreview: false },
        ],
      },
      {
        sectionTitle: "Infrastructure as Code with Terraform",
        lectures: [
          { title: "Terraform Fundamentals", description: "Providers, resources, state and plan.", videoUrl: v(7), duration: "680", isPreview: false },
          { title: "Provisioning AWS Resources with Terraform", description: "Deploy a full VPC, subnet, and EC2.", videoUrl: v(0), duration: "820", isPreview: false },
          { title: "Terraform Modules & Remote State", description: "Reusable, scalable infrastructure.", videoUrl: v(1), duration: "740", isPreview: false },
          { title: "Terraform Best Practices", description: "Workspaces, variables, and secret management.", videoUrl: v(2), duration: "560", isPreview: false },
        ],
      },
      {
        sectionTitle: "Docker & Containerisation",
        lectures: [
          { title: "Docker Fundamentals: Images & Containers", description: "Build, run, and ship containers.", videoUrl: v(3), duration: "630", isPreview: false },
          { title: "Writing Dockerfiles", description: "Multi-stage builds and layer caching.", videoUrl: v(4), duration: "570", isPreview: false },
          { title: "Docker Compose for Local Dev", description: "Spin up multi-service apps with one command.", videoUrl: v(5), duration: "690", isPreview: false },
          { title: "Pushing Images to Docker Hub & AWS ECR", description: "Store and distribute your images.", videoUrl: v(6), duration: "520", isPreview: false },
        ],
      },
      {
        sectionTitle: "CI/CD with GitHub Actions",
        lectures: [
          { title: "CI/CD Concepts & Pipeline Design", description: "Build, test, and deploy automatically.", videoUrl: v(7), duration: "440", isPreview: false },
          { title: "GitHub Actions: Workflows & Jobs", description: "YAML syntax, triggers, and steps.", videoUrl: v(0), duration: "730", isPreview: false },
          { title: "Automated Testing in the Pipeline", description: "Jest, lint checks, and build verification.", videoUrl: v(1), duration: "610", isPreview: false },
          { title: "Deploy to AWS on Every Merge", description: "Full end-to-end pipeline to production.", videoUrl: v(2), duration: "880", isPreview: false },
        ],
      },
    ],
  },

  // ── 5. Mobile App Development ─────────────
  {
    title: "Flutter Mobile App Development: Build for Android & iOS",
    description:
      "Build production-ready cross-platform apps using Flutter and Dart. Learn widgets, state management, API integration, and app publishing workflows.",
    category: "Mobile Development",
    courseLevel: "Intermediate",
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    studentsEnrolled: 1625,
    rating: 4.7,
    ratingCount: 389,
    courseOutcomes: [
      "Build cross-platform mobile apps with Flutter",
      "Create reusable UI widgets and layouts",
      "Manage app state with Provider",
      "Consume REST APIs and parse JSON",
      "Handle local storage and authentication",
      "Prepare apps for Play Store and App Store",
    ],
    sections: [
      {
        sectionTitle: "Flutter Foundations",
        lectures: [
          { title: "Flutter Setup and Tooling", description: "Install SDK, Android Studio, and emulators.", videoUrl: v(3), duration: "520", isPreview: true },
          { title: "Widgets, Layouts, and Navigation", description: "Build responsive screens with core widgets.", videoUrl: v(4), duration: "760", isPreview: false },
          { title: "Forms and Input Validation", description: "Create robust forms with validation rules.", videoUrl: v(5), duration: "610", isPreview: false },
        ],
      },
      {
        sectionTitle: "State and Backend Integration",
        lectures: [
          { title: "State Management with Provider", description: "Structure scalable state for medium-sized apps.", videoUrl: v(6), duration: "700", isPreview: false },
          { title: "REST APIs and Async UI", description: "Fetch data and render loading/error states.", videoUrl: v(7), duration: "650", isPreview: false },
          { title: "Publishing and Performance Tips", description: "Optimize build size and release your app.", videoUrl: v(0), duration: "580", isPreview: false },
        ],
      },
    ],
  },

  // ── 6. Cybersecurity Fundamentals ─────────
  {
    title: "Cybersecurity Fundamentals: Protect Systems and Networks",
    description:
      "Learn practical cybersecurity basics, threat modeling, network defense, and secure coding habits. Great for developers and IT beginners.",
    category: "Cybersecurity",
    courseLevel: "Beginner",
    thumbnail:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    studentsEnrolled: 2109,
    rating: 4.8,
    ratingCount: 511,
    courseOutcomes: [
      "Identify common attack vectors",
      "Apply core network security principles",
      "Understand authentication and authorization",
      "Use secure password and secret practices",
      "Read and respond to basic security logs",
      "Improve security posture of web applications",
    ],
    sections: [
      {
        sectionTitle: "Security Basics",
        lectures: [
          { title: "Threat Landscape Overview", description: "Malware, phishing, social engineering, and ransomware.", videoUrl: v(1), duration: "490", isPreview: true },
          { title: "CIA Triad and Risk Concepts", description: "Confidentiality, integrity, availability in practice.", videoUrl: v(2), duration: "560", isPreview: false },
          { title: "Authentication and Access Control", description: "MFA, RBAC, and least privilege.", videoUrl: v(3), duration: "630", isPreview: false },
        ],
      },
      {
        sectionTitle: "Defensive Practices",
        lectures: [
          { title: "Network Security Essentials", description: "Firewalls, VPNs, segmentation, and IDS basics.", videoUrl: v(4), duration: "740", isPreview: false },
          { title: "Secure Coding for Developers", description: "OWASP Top 10 and input validation techniques.", videoUrl: v(5), duration: "810", isPreview: false },
          { title: "Incident Response Basics", description: "How to detect, contain, and recover quickly.", videoUrl: v(6), duration: "620", isPreview: false },
        ],
      },
    ],
  },

  // ── 7. Generative AI in Practice ──────────
  {
    title: "Generative AI for Developers: Prompting, APIs, and Workflows",
    description:
      "Build AI-assisted features into real applications using modern prompting, vector search concepts, and API-based integrations.",
    category: "Artificial Intelligence",
    courseLevel: "Intermediate",
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    studentsEnrolled: 1340,
    rating: 4.6,
    ratingCount: 298,
    courseOutcomes: [
      "Write robust prompts for consistent outputs",
      "Use LLM APIs in frontend and backend workflows",
      "Design retrieval-augmented generation flows",
      "Implement guardrails and output validation",
      "Estimate token usage and optimize cost",
      "Ship practical AI features safely",
    ],
    sections: [
      {
        sectionTitle: "Prompting and Foundations",
        lectures: [
          { title: "How LLMs Work at a High Level", description: "Core model behavior and context windows.", videoUrl: v(7), duration: "540", isPreview: true },
          { title: "Prompt Patterns and Templates", description: "Few-shot prompting and structured outputs.", videoUrl: v(0), duration: "700", isPreview: false },
          { title: "Evaluation and Hallucination Control", description: "Testing prompts and reducing incorrect output.", videoUrl: v(1), duration: "690", isPreview: false },
        ],
      },
      {
        sectionTitle: "Building AI Features",
        lectures: [
          { title: "Integrating LLM APIs in Node.js", description: "Backend patterns for chat and summarization.", videoUrl: v(2), duration: "760", isPreview: false },
          { title: "RAG Concepts with Vector Search", description: "Indexing documents and grounded answers.", videoUrl: v(3), duration: "830", isPreview: false },
          { title: "Safety, Cost, and Production Ops", description: "Rate limits, caching, and monitoring basics.", videoUrl: v(4), duration: "610", isPreview: false },
        ],
      },
    ],
  },

  // ── 8. QA Automation with Selenium ───────
  {
    title: "QA Automation Engineering with Selenium and Playwright",
    description:
      "Learn modern test automation for web applications using Selenium, Playwright, and CI pipelines. Build maintainable test suites and improve release confidence.",
    category: "Software Testing",
    courseLevel: "Intermediate",
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
    studentsEnrolled: 980,
    rating: 4.7,
    ratingCount: 221,
    courseOutcomes: [
      "Design stable UI automation frameworks",
      "Write end-to-end tests with Playwright",
      "Use Selenium for cross-browser automation",
      "Run automated tests in CI/CD pipelines",
      "Apply test reporting and flaky test debugging",
      "Integrate API and UI testing strategies",
    ],
    sections: [
      {
        sectionTitle: "Automation Fundamentals",
        lectures: [
          { title: "Manual vs Automation Testing", description: "Understand where automation delivers the most value.", videoUrl: v(5), duration: "470", isPreview: true },
          { title: "Locator Strategies and Test Design", description: "Create robust selectors and stable test cases.", videoUrl: v(6), duration: "620", isPreview: false },
          { title: "Selenium WebDriver Essentials", description: "Set up Selenium tests and handle waits effectively.", videoUrl: v(7), duration: "760", isPreview: false },
        ],
      },
      {
        sectionTitle: "Playwright and CI Integration",
        lectures: [
          { title: "Playwright Project Setup", description: "Bootstrap tests, configs, and fixtures.", videoUrl: v(0), duration: "540", isPreview: false },
          { title: "Visual and API Assertions", description: "Combine UI and API checks for stronger coverage.", videoUrl: v(1), duration: "690", isPreview: false },
          { title: "Parallel Runs in GitHub Actions", description: "Automate test execution on every pull request.", videoUrl: v(2), duration: "610", isPreview: false },
        ],
      },
    ],
  },

  // ── 9. SQL and Data Analytics ────────────
  {
    title: "SQL for Data Analytics: From Basics to Advanced Queries",
    description:
      "Master SQL for analytics roles by learning joins, CTEs, window functions, and performance tuning. Practice with real business reporting scenarios.",
    category: "Data Analytics",
    courseLevel: "Beginner",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    studentsEnrolled: 1540,
    rating: 4.8,
    ratingCount: 367,
    courseOutcomes: [
      "Write clean and efficient SQL queries",
      "Use joins, subqueries, and CTEs confidently",
      "Analyze trends using window functions",
      "Build KPI dashboards from relational data",
      "Optimize query performance with indexing",
      "Prepare for analytics and BI interviews",
    ],
    sections: [
      {
        sectionTitle: "SQL Core Skills",
        lectures: [
          { title: "SELECT, WHERE, ORDER BY", description: "Retrieve and filter data with confidence.", videoUrl: v(3), duration: "500", isPreview: true },
          { title: "GROUP BY and Aggregations", description: "Summarize data for reporting metrics.", videoUrl: v(4), duration: "630", isPreview: false },
          { title: "JOINs and Data Modeling Basics", description: "Connect tables and understand relationships.", videoUrl: v(5), duration: "780", isPreview: false },
        ],
      },
      {
        sectionTitle: "Advanced Analytics SQL",
        lectures: [
          { title: "CTEs and Subqueries", description: "Structure complex logic in readable ways.", videoUrl: v(6), duration: "620", isPreview: false },
          { title: "Window Functions in Practice", description: "Calculate running totals and rankings.", videoUrl: v(7), duration: "830", isPreview: false },
          { title: "Performance Tuning and Indexes", description: "Speed up slow reports and heavy queries.", videoUrl: v(0), duration: "700", isPreview: false },
        ],
      },
    ],
  },

  // ── 10. Product Management Essentials ────
  {
    title: "Product Management Essentials: Strategy, Roadmaps, and Execution",
    description:
      "Learn how product managers discover customer needs, prioritize features, define roadmaps, and collaborate with design and engineering teams.",
    category: "Product Management",
    courseLevel: "Beginner",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    studentsEnrolled: 1120,
    rating: 4.7,
    ratingCount: 245,
    courseOutcomes: [
      "Define product goals with clear success metrics",
      "Conduct discovery interviews and user research",
      "Prioritize features using proven frameworks",
      "Write effective user stories and acceptance criteria",
      "Plan releases with realistic roadmaps",
      "Align stakeholders across business and engineering",
    ],
    sections: [
      {
        sectionTitle: "Product Discovery and Strategy",
        lectures: [
          { title: "Role of a Product Manager", description: "Understand responsibilities and key PM workflows.", videoUrl: v(1), duration: "450", isPreview: true },
          { title: "Customer Research and Insights", description: "Run interviews and synthesize findings.", videoUrl: v(2), duration: "640", isPreview: false },
          { title: "Problem Statements and Value Propositions", description: "Define the right problem before building.", videoUrl: v(3), duration: "590", isPreview: false },
        ],
      },
      {
        sectionTitle: "Delivery and Stakeholder Management",
        lectures: [
          { title: "Backlog Prioritization Techniques", description: "Use RICE and MoSCoW frameworks effectively.", videoUrl: v(4), duration: "610", isPreview: false },
          { title: "Roadmaps and Release Planning", description: "Communicate plans with clarity and flexibility.", videoUrl: v(5), duration: "670", isPreview: false },
          { title: "Working with Engineering and Design", description: "Run healthy cross-functional collaboration loops.", videoUrl: v(6), duration: "580", isPreview: false },
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────────
// SEED FUNCTION
// ─────────────────────────────────────────────
async function seed() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("✅ Connected to MongoDB");

  // Find any INSTRUCTOR user to assign as instructor
  let instructor = await User.findOne({ role: "INSTRUCTOR" });
  if (!instructor) {
    // Fall back to any user
    instructor = await User.findOne({});
  }
  const instructorId = instructor?._id || null;

  console.log(`📦 Using instructor: ${instructor?.email || "none"}`);

  let created = 0;
  for (const data of MOCK_COURSES) {
    const exists = await Course.findOne({ title: data.title });
    if (exists) {
      console.log(`⏭  Skipping (already exists): ${data.title}`);
      continue;
    }
    await Course.create({ ...data, instructor: instructorId });
    console.log(`✅ Created: ${data.title}`);
    created++;
  }

  console.log(`\n🎉 Done! Created ${created} new course(s).`);
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch(err => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
