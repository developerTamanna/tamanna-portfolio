'use client';

import Link from 'next/link';
import {
  FaCode,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaServer,
} from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Services-Stores',
    image: '/ServicePoint.jpg',
    description:
      'Service listing platform where users can discover, manage and review services through a clean and user-friendly interface.',
    frontend: 'https://github.com/developerTamanna/services-stores-client',
    backend: 'https://github.com/developerTamanna/services-stores-server',
    live: 'https://services-store-app.web.app/',
  },
  {
    id: 2,
    title: 'Matrimony Platform',
    image: '/project2.png',
    description:
      'Modern matrimony web application with secure authentication, privacy-focused features and advanced search filters.',
    frontend: 'https://github.com/developerTamanna/matrimony-platform-client',
    backend: 'https://github.com/developerTamanna/matrimony-platform-server',
    live: 'https://matrimony-platform-df764.web.app/',
  },
  {
    id: 3,
    title: 'Sazin Construction Ltd – Real Time Application',
    image: '/sazinp.png',
    description:
      'Real-time construction company website featuring services, project updates and company news built with a modern full-stack architecture.',
    frontend:
      'https://github.com/developerTamanna/sazin-group-construction-Ltd',
    backend:
      'https://github.com/developerTamanna/sazin-group-construction-Ltd-backend',
    live: 'https://sazin-group-construction-ltd.vercel.app/Services/Civil-construction/',
  },
  {
    id: 4,
    title: 'Sazin Construction Admin Dashboard',
    image: '/sznadmin2.png',
    description:
      'Admin dashboard to manage projects, users and content with real-time updates and analytics.',
    frontend:
      'https://github.com/developerTamanna/sazin-group-construction-Ltd-backend',
    backend: 'https://github.com/developerTamanna/sazin-group-construction-Ltd',
    live: 'https://sazin-group-construction-ltd-backen.vercel.app/',
  },
];

const buttonClass =
  'inline-flex items-center gap-2 bg-[#007F73] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00665c] transition-colors duration-300';

const Projects = () => {
  return (
    <section id="projects" className="bg-[#f9fafb] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-14">
          Selected <span className="text-gray-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <div className="h-60 bg-gray-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <a
                    href={project.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                  >
                    <FaCode /> Frontend
                  </a>

                  <a
                    href={project.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                  >
                    <FaServer /> Backend
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                  >
                    <FaExternalLinkAlt /> Live
                  </a>

                  <Link
                    href={`/projects/${project.id}`}
                    className={buttonClass}
                  >
                    <FaInfoCircle /> Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
