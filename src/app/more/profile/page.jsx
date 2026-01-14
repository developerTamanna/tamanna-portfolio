// app/journey/page.jsx
'use client';

import { useState } from 'react';

// Shob journey data aktai file a
const journeyData = [
  {
    id: 1,
    title: 'HTML & CSS Fundamentals',
    description:
      'Started with the basics of web development. Learned semantic HTML, CSS selectors, box model, and responsive design principles. Built my first static portfolio website.',
    category: 'frontend',
    technologies: ['HTML5', 'CSS3'],
    tags: ['HTML', 'CSS', 'Responsive', 'Semantic'],
    githubFrontend: 'https://github.com/yourusername/html-css-portfolio',
    liveLink: 'https://yourportfolio.netlify.app',
    image: '/html-css.jpg',
    order: 1,
    date: 'Jan 2023',
    highlights: [
      'Semantic HTML5',
      'CSS Flexbox & Grid',
      'Media Queries',
      'Accessibility',
    ],
  },
  {
    id: 2,
    title: 'JavaScript & DOM Manipulation',
    description:
      'Mastered JavaScript fundamentals including variables, functions, arrays, objects, and ES6+ features. Learned to manipulate the DOM and handle events.',
    category: 'frontend',
    technologies: ['JavaScript', 'ES6+', 'DOM'],
    tags: ['JavaScript', 'ES6', 'DOM', 'Events'],
    githubFrontend: 'https://github.com/yourusername/js-projects',
    liveLink: 'https://yourjsprojects.vercel.app',
    image: '/javascript.jpg',
    order: 2,
    date: 'Feb 2023',
    highlights: [
      'ES6 Features',
      'DOM Manipulation',
      'Event Handling',
      'Async JS',
    ],
  },
  {
    id: 3,
    title: 'React & Component Architecture',
    description:
      'Dived into React, learning about components, props, state, hooks, and lifecycle methods. Built reusable components and managed application state.',
    category: 'frontend',
    technologies: ['React', 'JSX', 'Hooks', 'Context'],
    tags: ['React', 'Components', 'Hooks', 'State'],
    githubFrontend: 'https://github.com/yourusername/react-todo-app',
    liveLink: 'https://react-todo-app.vercel.app',
    image: '/react.jpg',
    order: 3,
    date: 'Mar 2023',
    highlights: [
      'Functional Components',
      'React Hooks',
      'State Management',
      'Props',
    ],
  },
  {
    id: 4,
    title: 'React Router & Navigation',
    description:
      'Implemented client-side routing in React applications. Learned about dynamic routing, nested routes, and programmatic navigation.',
    category: 'frontend',
    technologies: ['React Router', 'SPA'],
    tags: ['Routing', 'Navigation', 'SPA'],
    githubFrontend: 'https://github.com/yourusername/react-router-demo',
    liveLink: 'https://react-router-demo.vercel.app',
    image: '/react-router.jpg',
    order: 4,
    date: 'Apr 2023',
    highlights: [
      'Client-side Routing',
      'Dynamic Routes',
      'Protected Routes',
      'Navigation',
    ],
  },
  {
    id: 5,
    title: 'API Integration & Data Fetching',
    description:
      'Learned to fetch data from REST APIs using Fetch API and Axios. Implemented loading states, error handling, and data transformation.',
    category: 'frontend',
    technologies: ['REST API', 'Fetch API', 'Axios', 'Async/Await'],
    tags: ['API', 'Fetch', 'Async', 'Data'],
    githubFrontend: 'https://github.com/yourusername/api-integration',
    liveLink: 'https://api-integration.vercel.app',
    image: '/api.jpg',
    order: 5,
    date: 'May 2023',
    highlights: [
      'REST APIs',
      'Fetch/Axios',
      'Error Handling',
      'Data Transformation',
    ],
  },
  {
    id: 6,
    title: 'Node.js & Express Backend',
    description:
      'Started backend development with Node.js and Express. Built RESTful APIs, handled HTTP requests, and implemented middleware.',
    category: 'backend',
    technologies: ['Node.js', 'Express.js', 'REST API'],
    tags: ['Node.js', 'Express', 'Backend', 'API'],
    githubBackend: 'https://github.com/yourusername/express-api',
    image: '/node-express.jpg',
    order: 6,
    date: 'Jun 2023',
    highlights: [
      'RESTful APIs',
      'Middleware',
      'Route Handling',
      'Error Middleware',
    ],
  },
  {
    id: 7,
    title: 'MongoDB & Database Design',
    description:
      'Learned NoSQL databases with MongoDB. Designed schemas, performed CRUD operations, and used Mongoose ODM for data modeling.',
    category: 'backend',
    technologies: ['MongoDB', 'Mongoose', 'NoSQL'],
    tags: ['Database', 'MongoDB', 'CRUD', 'ODM'],
    githubBackend: 'https://github.com/yourusername/mongodb-crud',
    image: '/mongodb.jpg',
    order: 7,
    date: 'Jul 2023',
    highlights: [
      'Data Modeling',
      'CRUD Operations',
      'Mongoose ODM',
      'Aggregation',
    ],
  },
  {
    id: 8,
    title: 'Authentication & Authorization',
    description:
      'Implemented user authentication with JWT, password hashing, and role-based authorization. Learned about security best practices.',
    category: 'backend',
    technologies: ['JWT', 'bcrypt', 'Auth Middleware'],
    tags: ['Authentication', 'JWT', 'Security', 'Authorization'],
    githubBackend: 'https://github.com/yourusername/auth-system',
    image: '/auth.jpg',
    order: 8,
    date: 'Aug 2023',
    highlights: [
      'JWT Tokens',
      'Password Hashing',
      'Role-based Access',
      'Security',
    ],
  },
  {
    id: 9,
    title: 'TypeScript & Type Safety',
    description:
      'Adopted TypeScript for type safety. Learned about interfaces, types, generics, and type inference in React and Node.js applications.',
    category: 'tools',
    technologies: ['TypeScript', 'TSX', 'Type Definitions'],
    tags: ['TypeScript', 'Type Safety', 'Interfaces', 'Generics'],
    githubFrontend: 'https://github.com/yourname/typescript-react',
    liveLink: 'https://typescript-react.vercel.app',
    image: '/typescript.jpg',
    order: 9,
    date: 'Sep 2023',
    highlights: [
      'Type Annotations',
      'Interfaces',
      'Generics',
      'Type Inference',
    ],
  },
  {
    id: 10,
    title: 'Next.js & Full-Stack Development',
    description:
      'Built full-stack applications with Next.js, leveraging SSR, SSG, API routes, and file-based routing. Integrated with databases and authentication.',
    category: 'fullstack',
    technologies: ['Next.js', 'SSR', 'API Routes', 'App Router'],
    tags: ['Next.js', 'Fullstack', 'SSR', 'Routing'],
    githubFrontend: 'https://github.com/yourname/nextjs-fullstack',
    githubBackend: 'https://github.com/yourname/nextjs-api',
    liveLink: 'https://nextjs-fullstack.vercel.app',
    image: '/nextjs.jpg',
    order: 10,
    date: 'Oct 2023',
    highlights: [
      'Server Components',
      'API Routes',
      'Server Actions',
      'Optimization',
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
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              My Learning Journey
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              From HTML basics to full-stack development. Follow my step-by-step
              progression through web technologies, projects, and real-world
              problem solving.
            </p>
            <div className="w-24 h-1 bg-teal-300 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Filter Journey
              </h2>
              <p className="text-gray-600">
                Explore specific areas of my learning path
              </p>
            </div>

            {(selectedCategory !== 'all' || selectedTags.length > 0) && (
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-teal-600 hover:text-teal-700 font-medium flex items-center"
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
                      ? 'bg-teal-600 text-white shadow-lg'
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
              Technologies & Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedTags.includes(tag)
                      ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
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
            <div className="flex items-center justify-between">
              <p className="text-gray-700">
                Showing{' '}
                <span className="font-bold text-teal-600">
                  {filteredSteps.length}
                </span>{' '}
                of <span className="font-bold">{journeyData.length}</span>{' '}
                learning steps
              </p>
              {selectedCategory !== 'all' && (
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                  {selectedCategory}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredSteps.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-200">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
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
                Try adjusting your filters to see more of my journey
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Show All Steps
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredSteps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative transition-all duration-300 hover:scale-[1.01]"
                >
                  {/* Timeline connector */}
                  {index < filteredSteps.length - 1 && (
                    <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-teal-200 to-blue-200"></div>
                  )}

                  <div className="flex items-start space-x-4 lg:space-x-6">
                    {/* Timeline number */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {step.order}
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        {step.date}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="flex-1 bg-white rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
                      {/* Step header */}
                      <div className="p-6 border-b border-gray-100">
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                          <div className="mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                              {step.title}
                            </h3>
                            <div className="flex items-center">
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  step.category === 'frontend'
                                    ? 'bg-blue-100 text-blue-700'
                                    : step.category === 'backend'
                                    ? 'bg-purple-100 text-purple-700'
                                    : step.category === 'fullstack'
                                    ? 'bg-teal-100 text-teal-700'
                                    : step.category === 'tools'
                                    ? 'bg-amber-100 text-amber-700'
                                    : 'bg-gray-100 text-gray-700'
                                }`}
                              >
                                {step.category.charAt(0).toUpperCase() +
                                  step.category.slice(1)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Highlights */}
                        {step.highlights && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-gray-600 mb-2">
                              Key Learnings:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {step.highlights.map((highlight, idx) => (
                                <span
                                  key={idx}
                                  className="flex items-center px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm"
                                >
                                  <svg
                                    className="w-3 h-3 text-teal-500 mr-1"
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
                      </div>

                      {/* Technologies and tags */}
                      <div className="p-6 bg-gray-50">
                        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                          {/* Technologies */}
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {step.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">
                              Topics
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {step.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Links */}
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <div className="flex flex-wrap gap-4">
                            {step.githubFrontend && (
                              <a
                                href={step.githubFrontend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors shadow-sm hover:shadow-md"
                              >
                                <svg
                                  className="w-5 h-5 mr-2"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                Frontend Code
                              </a>
                            )}

                            {step.githubBackend && (
                              <a
                                href={step.githubBackend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors shadow-sm hover:shadow-md"
                              >
                                <svg
                                  className="w-5 h-5 mr-2"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                </svg>
                                Backend Code
                              </a>
                            )}

                            {step.liveLink && (
                              <a
                                href={step.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-sm hover:shadow-md"
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
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                  />
                                </svg>
                                Live Preview
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Journey Stats */}
          <div className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 border border-teal-100">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Journey at a Glance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">
                    {journeyData.length}
                  </div>
                  <div className="text-gray-700 font-medium">
                    Learning Steps
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    From basics to advanced
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {
                      [
                        ...new Set(
                          journeyData.flatMap((step) => step.technologies)
                        ),
                      ].length
                    }
                  </div>
                  <div className="text-gray-700 font-medium">Technologies</div>
                  <p className="text-gray-600 text-sm mt-1">
                    Mastered along the way
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {journeyData.filter((step) => step.liveLink).length}
                  </div>
                  <div className="text-gray-700 font-medium">Live Projects</div>
                  <p className="text-gray-600 text-sm mt-1">
                    Real-world applications
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-teal-200">
                <p className="text-gray-700 italic">
                  "Learning is a journey, not a destination. Each step builds
                  upon the last, creating a solid foundation for the next
                  challenge."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
