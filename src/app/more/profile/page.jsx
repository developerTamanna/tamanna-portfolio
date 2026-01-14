// app/journey/page.jsx
'use client';

import { useState } from 'react';

// Shob journey data aktai file a
const journeyData = [
  {
    id: 1,
    title: 'HTML & CSS Fundamentals',
    description:
      'Started my web development journey with HTML5 and CSS3. Built semantic markup, learned box model, and created responsive layouts. The foundation of everything that followed.',
    category: 'frontend',
    technologies: ['HTML5', 'CSS3'],
    tags: ['Basics', 'Structure', 'Styling', 'Responsive'],
    githubFrontend: 'https://github.com/yourusername/html-css-portfolio',
    liveLink: 'https://yourportfolio.netlify.app',
    image: '/blogbg.jpg',
    order: 1,
    date: 'January 2023',
    highlights: [
      'Semantic HTML',
      'CSS Flexbox',
      'Media Queries',
      'Accessibility',
    ],
  },
  {
    id: 2,
    title: 'JavaScript Essentials',
    description:
      'Dived into JavaScript fundamentals - variables, functions, arrays, and ES6+ features. Created interactive web pages with DOM manipulation and event handling.',
    category: 'frontend',
    technologies: ['JavaScript', 'ES6+', 'DOM'],
    tags: ['Logic', 'Functions', 'Events', 'ES6'],
    githubFrontend: 'https://github.com/yourusername/js-projects',
    liveLink: 'https://yourjsprojects.vercel.app',
    image: '/blogbg.jpg',
    order: 2,
    date: 'February 2023',
    highlights: [
      'DOM Manipulation',
      'Event Handling',
      'ES6 Features',
      'Debugging',
    ],
  },
  {
    id: 3,
    title: 'React Basics',
    description:
      'Learned React from scratch. Understood components, props, state, and hooks. Built my first React app - a simple todo list that actually worked!',
    category: 'frontend',
    technologies: ['React', 'JSX', 'Hooks'],
    tags: ['Components', 'State', 'Hooks', 'Reusable'],
    githubFrontend: 'https://github.com/yourusername/react-todo-app',
    liveLink: 'https://react-todo-app.vercel.app',
    image: '/blogbg.jpg',
    order: 3,
    date: 'March 2023',
    highlights: [
      'Component Architecture',
      'State Management',
      'React Hooks',
      'Props',
    ],
  },
  {
    id: 4,
    title: 'React Router & Navigation',
    description:
      'Implemented routing in React applications. Learned about client-side routing, dynamic routes, and navigation patterns for better user experience.',
    category: 'frontend',
    technologies: ['React Router', 'SPA'],
    tags: ['Routing', 'Navigation', 'User Flow'],
    githubFrontend: 'https://github.com/yourusername/react-router-demo',
    image: '/blogbg.jpg',
    order: 4,
    date: 'April 2023',
    highlights: ['Client-side Routing', 'Dynamic Routes', 'Navigation Guards'],
  },
  {
    id: 5,
    title: 'API Integration',
    description:
      'Connected frontend with backend APIs. Learned REST principles, async/await, error handling, and loading states. Fetched real data for the first time!',
    category: 'frontend',
    technologies: ['REST API', 'Fetch API', 'Async/Await'],
    tags: ['API', 'Data', 'Async', 'Integration'],
    githubFrontend: 'https://github.com/yourusername/api-integration',
    liveLink: 'https://api-integration.vercel.app',
    image: '/blogbg.jpg',
    order: 5,
    date: 'May 2023',
    highlights: [
      'REST APIs',
      'Fetch/Axios',
      'Error Handling',
      'Loading States',
    ],
  },
  {
    id: 6,
    title: 'Node.js & Express',
    description:
      'My first step into backend development. Created RESTful APIs with Node.js and Express, handled HTTP requests, and built my own server.',
    category: 'backend',
    technologies: ['Node.js', 'Express.js', 'REST API'],
    tags: ['Backend', 'Server', 'APIs', 'Express'],
    githubBackend: 'https://github.com/yourusername/express-api',
    image: '/blogbg.jpg',
    order: 6,
    date: 'June 2023',
    highlights: [
      'RESTful APIs',
      'Middleware',
      'Route Handling',
      'Server Setup',
    ],
  },
  {
    id: 7,
    title: 'MongoDB Basics',
    description:
      'Explored NoSQL databases with MongoDB. Learned CRUD operations, data modeling, and how to connect databases with Node.js applications.',
    category: 'backend',
    technologies: ['MongoDB', 'NoSQL', 'Database'],
    tags: ['Database', 'NoSQL', 'CRUD', 'Storage'],
    githubBackend: 'https://github.com/yourusername/mongodb-crud',
    image: '/blogbg.jpg',
    order: 7,
    date: 'July 2023',
    highlights: [
      'Data Modeling',
      'CRUD Operations',
      'Database Design',
      'Queries',
    ],
  },
  {
    id: 8,
    title: 'Authentication Concepts',
    description:
      'Understood authentication principles - JWT tokens, password hashing, and security basics. This was more about learning concepts than building.',
    category: 'backend',
    technologies: ['JWT', 'bcrypt', 'Security'],
    tags: ['Security', 'Auth', 'JWT', 'Concepts'],
    githubBackend: 'https://github.com/yourusername/auth-concepts',
    image: '/blogbg.jpg',
    order: 8,
    date: 'August 2023',
    highlights: [
      'JWT Tokens',
      'Password Security',
      'Auth Flow',
      'Security Best Practices',
    ],
  },
  {
    id: 9,
    title: 'TypeScript Learning',
    description:
      'Started learning TypeScript for type safety. Focused on understanding types, interfaces, and how they prevent bugs. More of a learning phase.',
    category: 'tools',
    technologies: ['TypeScript', 'TSX', 'Type System'],
    tags: ['Type Safety', 'Learning', 'Code Quality'],
    githubFrontend: 'https://github.com/yourname/typescript-learning',
    image: '/blogbg.jpg',
    order: 9,
    date: 'September 2023',
    highlights: [
      'Type Annotations',
      'Interfaces',
      'Type Inference',
      'Error Prevention',
    ],
  },
  {
    id: 10,
    title: 'First Full-Stack Project',
    description:
      'Built my first complete full-stack application with React, Node.js, and MongoDB. Integrated everything I learned into one working project.',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    tags: ['Fullstack', 'Integration', 'Project', 'Complete'],
    githubFrontend: 'https://github.com/yourname/first-fullstack-frontend',
    githubBackend: 'https://github.com/yourname/first-fullstack-backend',
    liveLink: 'https://first-fullstack.vercel.app',
    image: '/blogbg.jpg',
    order: 10,
    date: 'October 2023',
    highlights: [
      'Frontend-Backend Integration',
      'Database Connection',
      'Deployment',
      'Full Project',
    ],
  },
];

export default function JourneyPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState([]);

  // Unique categories and tags ber korbo
  const categories = [
    'all',
    ...new Set(journeyData.map((step) => step.category)),
  ];
  const allTags = Array.from(new Set(journeyData.flatMap((step) => step.tags)));

  // Steps filter korbo
  const filteredSteps = journeyData.filter((step) => {
    const matchesCategory =
      selectedCategory === 'all' || step.category === selectedCategory;
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => step.tags.includes(tag));
    return matchesCategory && matchesTags;
  });

  // Count live projects (only those with liveLink)
  const liveProjectsCount = journeyData.filter((step) => step.liveLink).length;

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Image Background */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/blogbg.jpg"
            alt="Learning Journey Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-blue-900/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-100 mb-6">
              <svg
                className="w-10 h-10 text-teal-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              My Learning Path
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-6">
              From first HTML tag to full-stack applications. Here's my journey,
              step by step, with all the wins, challenges, and lessons learned
              along the way.
            </p>
            <div className="flex items-center justify-center text-white space-x-4 mb-8">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{journeyData.length} Steps</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span>{liveProjectsCount} Live Projects</span>
              </div>
            </div>
            <div className="w-32 h-1 bg-teal-300 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Explore My Journey
              </h2>
              <p className="text-gray-600">
                Filter by category or specific topics you're interested in
              </p>
            </div>

            {(selectedCategory !== 'all' || selectedTags.length > 0) && (
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-teal-600 hover:text-teal-700 font-medium flex items-center border border-teal-200 rounded-lg hover:bg-teal-50"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Clear Filters
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Category
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all'
                    ? 'All Steps'
                    : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tags Filter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Topics & Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedTags.includes(tag)
                      ? 'bg-teal-100 text-teal-700 border border-teal-300'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-gray-700">
                Showing{' '}
                <span className="font-bold text-teal-600">
                  {filteredSteps.length}
                </span>{' '}
                of <span className="font-bold">{journeyData.length}</span>{' '}
                learning steps
              </p>
              {selectedCategory !== 'all' && (
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                  {selectedCategory}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {filteredSteps.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No matching steps found
              </h3>
              <p className="text-gray-600 mb-6">
                Try different filters or clear all to see my full journey
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Show All Steps
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Timeline line - only show between steps */}
                  {index < filteredSteps.length - 1 && (
                    <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-teal-200 to-teal-100 ml-[15px]"></div>
                  )}

                  <div className="flex items-start space-x-4 lg:space-x-6">
                    {/* Timeline dot with number */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                        {step.order}
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-white text-gray-600 text-xs font-medium rounded border border-gray-200 shadow-sm">
                        {step.date}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="flex-1 bg-white rounded-xl border border-gray-200 hover:border-teal-300 transition-all duration-300 overflow-hidden">
                      <div className="p-6">
                        {/* Step header with category */}
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                          <div className="mb-3 md:mb-0">
                            <div className="flex items-center mb-2">
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-medium mr-3 ${
                                  step.category === 'frontend'
                                    ? 'bg-blue-50 text-blue-600'
                                    : step.category === 'backend'
                                    ? 'bg-purple-50 text-purple-600'
                                    : step.category === 'fullstack'
                                    ? 'bg-teal-50 text-teal-600'
                                    : 'bg-gray-50 text-gray-600'
                                }`}
                              >
                                {step.category.charAt(0).toUpperCase() +
                                  step.category.slice(1)}
                              </span>
                              {step.liveLink ? (
                                <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                                  Live Project
                                </span>
                              ) : (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                  Learning Phase
                                </span>
                              )}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          {step.description}
                        </p>

                        {/* Highlights with checkmarks */}
                        {step.highlights && (
                          <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                              {step.highlights.map((highlight, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm"
                                >
                                  <svg
                                    className="w-4 h-4 text-teal-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-600 mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {step.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Links - Only show if available */}
                        <div className="flex flex-wrap gap-3">
                          {step.githubFrontend && (
                            <a
                              href={step.githubFrontend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm"
                            >
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Code
                            </a>
                          )}

                          {step.githubBackend && (
                            <a
                              href={step.githubBackend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                            >
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                              </svg>
                              Backend Code
                            </a>
                          )}

                          {step.liveLink ? (
                            <a
                              href={step.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm"
                            >
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                />
                              </svg>
                              Live Preview
                            </a>
                          ) : (
                            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm italic">
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Learning Phase - No Live Demo
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Journey Stats - Simple and Clean */}
          <div className="mt-16 bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-8 border border-teal-200">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Looking Back at the Journey
              </h3>
              <p className="text-gray-600 mb-8">
                Reflecting on how far I've come - not every step was perfect,
                but each one mattered
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">
                    {journeyData.length}+
                  </div>
                  <div className="text-gray-700 font-medium">
                    Key Milestones
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Moments that shaped my understanding
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">
                    Many
                  </div>
                  <div className="text-gray-700 font-medium">Late Nights</div>
                  <p className="text-gray-500 text-sm mt-1">
                    Debugging, researching, learning
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">
                    {liveProjectsCount}
                  </div>
                  <div className="text-gray-700 font-medium">Working Demos</div>
                  <p className="text-gray-500 text-sm mt-1">
                    Ideas turned into reality
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-teal-200">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mt-1 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-700 text-left">
                    <span className="font-semibold">Honest note:</span> This
                    timeline doesn't show all the failed experiments, broken
                    code, or deleted projects. Learning isn't just about what
                    works - it's also about what doesn't work. Each
                    "unsuccessful" project taught me something valuable that led
                    to the next success.
                    <br />
                    <br />
                    The live demos here are just the tip of the iceberg. For
                    every working project, there were countless practice files,
                    code snippets, and abandoned attempts that never made it to
                    production. That's the reality of learning - and that's
                    okay.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gray-50 rounded-xl border border-gray-200">
              <svg
                className="w-6 h-6 text-teal-500 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">
                <span className="font-semibold">
                  Learning continues every day!
                </span>{' '}
                This journey gets updated regularly as I learn new things.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
