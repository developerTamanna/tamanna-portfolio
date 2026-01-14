'use client';
import Link from 'next/link';

const ProjectsPage = () => {
  // Work Experience data
  const workExperience = [
    {
      id: 1,
      role: 'Frontend Developer (Full-Stack Experience)',
      company: 'Sazin Company Ltd.',
      duration: 'August 2025 - October 2025',
      description:
        'Worked as a Frontend Developer using Next.js to build scalable, responsive, and modern web applications. Also contributed to backend development tasks in collaboration with the team leader to ensure smooth functionality and integration..',
      technologies: [
        'HTML',
        'CSS',
        'TailwindCSS',
        'JavaScript',
        'Next.js',
        'TypeScript',
        'Express.js',
        'MongoDB',
        'Node.js',
      ],
      location: 'Remote',
      type: 'Full-time',
    },
  ];

  // Projects data with GitHub links
  const projects = [
    {
      id: 4,
      title: 'Sazin Construction LTD – Admin Dashboard User Manual',
      description:
        'Admin user manual for Sazin Construction LTD website. This guide explains how administrators can access the dashboard, manage users, and assign new admin roles securely. email: marufahmmed16@gmail.com pass: Maruf2131@',
      techStack:
        'MERN Stack (Next.js, Tailwind CSS,  MongoDB, Express.js, Node.js , JWT Authentication, Firebase Authentication)',
      frontend:
        'https://github.com/developerTamanna/sazin-group-construction-Ltd-backend',
      backend:
        'https://github.com/developerTamanna/sazin-group-construction-Ltd',
      liveLink: 'https://sazin-group-construction-ltd-backen.vercel.app/',
      companyLink: 'https://sazin.com.bd/',
      image: '/sznadmin1.png',
      status: 'Completed',
    },
    {
      id: 3,
      title: 'Sazin – Sazin Construction Ltd.',
      description:
        'Developed a real-life construction company website with admin & client panels, focusing on scalability, performance, and clean UI.',
      techStack:
        'MERN Stack (Tailwind CSS, Next.js, TypeScript, MongoDB, Express.js, Node.js)',
      frontend:
        'https://github.com/developerTamanna/sazin-group-construction-Ltd',
      backend:
        'https://github.com/developerTamanna/sazin-group-construction-Ltd-backend',
      liveLink: 'https://sazin-group-construction-ltd.vercel.app/',
      companyLink: 'https://sazin.com.bd/',
      image: '/workexpriance.png',
      status: 'Completed',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Professional Experience & Projects
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Real-world projects and professional experience that showcase my
          technical skills and problem-solving abilities.
        </p>
        <div className="w-32 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Work Experience Section */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-gray-800 text-center">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          {workExperience.map((work) => (
            <div
              key={work.id}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-teal-300 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors">
                    {work.role}
                  </h3>
                  <p className="text-teal-600 font-medium text-lg mt-1">
                    {work.company}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {work.duration}
                  </div>
                </div>
              </div>

              {/* Job Details */}
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center mr-6">
                    <svg
                      className="w-5 h-5 text-teal-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{work.location}</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-teal-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span className="text-gray-700">{work.type}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {work.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {work.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium hover:bg-teal-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real Life Projects Section */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-gray-800 text-center">
          Real Life Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-teal-300 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Project Header */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors">
                      {project.title}
                    </h3>
                    <div className="mt-2 inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {project.status}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="text-gray-700 font-medium">
                      Construction Company Website
                    </span>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-2">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Technology Stack
                  </h4>
                  <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium">
                    {project.techStack}
                  </div>
                </div>
              </div>

              {/* Project Screenshot Section */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Project Screenshot */}
                  <div className="relative">
                    <div className="aspect-video rounded-xl overflow-hidden border-4 border-white shadow-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Screenshot Label */}
                    <div className="absolute -top-3 left-4">
                      <span className="px-4 py-1 bg-teal-600 text-white text-sm font-medium rounded-full">
                        Live Preview
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    {/* Action Buttons - Live Project, Company, View Details */}
                    <div className="space-y-4 mb-8">
                      {/* Live Project Button */}
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors group/link"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                            <svg
                              className="w-5 h-5 text-teal-600"
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
                          </div>
                          <div>
                            <span className="text-gray-800 font-medium">
                              Live Project
                            </span>
                            <p className="text-gray-500 text-sm">
                              Visit the deployed application
                            </p>
                          </div>
                        </div>
                        <span className="text-teal-600 group-hover/link:text-teal-700 font-medium flex items-center">
                          Visit Site
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </span>
                      </a>

                      {/* Company Button */}
                      <a
                        href={project.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors group/link"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                            <svg
                              className="w-5 h-5 text-teal-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                              />
                            </svg>
                          </div>
                          <div>
                            <span className="text-gray-700 font-medium">
                              Company
                            </span>
                            <p className="text-gray-500 text-sm">
                              Learn more about the company
                            </p>
                          </div>
                        </div>
                        <span className="text-teal-600 group-hover/link:text-teal-700 font-medium flex items-center">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </a>

                      {/* View Details Button */}
                      <Link
                        href={`/projects/${project.id}`}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors group/link"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                            <svg
                              className="w-5 h-5 text-teal-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h1m0 0h-1m1 0v4m-5-4v4m1-4h.01M12 8h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <span className="text-gray-700 font-medium">
                              View Details
                            </span>
                            <p className="text-gray-500 text-sm">
                              Explore project features & details
                            </p>
                          </div>
                        </div>
                        <span className="text-teal-600 group-hover/link:text-teal-700 font-medium flex items-center">
                          Explore
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>

                    {/* GitHub Repositories */}
                    <div>
                      <h5 className="text-lg font-semibold text-gray-800 mb-4">
                        GitHub Repositories
                      </h5>
                      <div className="flex space-x-6">
                        {/* Client Repo */}
                        <a
                          href={project.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-center group/repo"
                        >
                          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-2 group-hover/repo:bg-teal-200 transition-colors">
                            <svg
                              className="w-8 h-8 text-teal-600 group-hover/repo:text-teal-700"
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
                          <span className="text-gray-700 font-medium group-hover/repo:text-teal-700">
                            Client Repo
                          </span>
                          <p className="text-gray-500 text-xs mt-1">
                            Frontend Code
                          </p>
                        </a>

                        {/* Server Repo */}
                        <a
                          href={project.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-center group/repo"
                        >
                          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-2 group-hover/repo:bg-teal-200 transition-colors">
                            <svg
                              className="w-8 h-8 text-teal-600 group-hover/repo:text-teal-700"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium group-hover/repo:text-teal-700">
                            Server Repo
                          </span>
                          <p className="text-gray-500 text-xs mt-1">
                            Backend Code
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Showcase */}
      <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <svg
            className="w-12 h-12 text-teal-500 mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Key Takeaways
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Through professional experience and real-world projects, I've
            developed expertise in building scalable web applications,
            implementing clean UI/UX designs, and creating robust full-stack
            solutions using modern technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-5 py-3 rounded-lg border border-teal-200 shadow-sm">
              <span className="text-teal-700 font-medium">
                Full-Stack Development
              </span>
            </div>
            <div className="bg-white px-5 py-3 rounded-lg border border-teal-200 shadow-sm">
              <span className="text-teal-700 font-medium">
                Scalable Architecture
              </span>
            </div>
            <div className="bg-white px-5 py-3 rounded-lg border border-teal-200 shadow-sm">
              <span className="text-teal-700 font-medium">Clean UI/UX</span>
            </div>
            <div className="bg-white px-5 py-3 rounded-lg border border-teal-200 shadow-sm">
              <span className="text-teal-700 font-medium">
                Modern Tech Stack
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
