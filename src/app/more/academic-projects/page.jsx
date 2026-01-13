'use client';

import Image from 'next/image';
import { useState } from 'react';

/* ---------------- PROJECT DATA ---------------- */
const projects = [
  {
    title: 'Matrimony Platform – MERN Stack Web Application (Solo Project)',
    images: ['/ms.png', '/metromonylogin.png', '/bioform.png'],
    technologies: [
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        color: '#61DAFB',
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        color: '#339933',
      },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        color: '#47A248',
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        color: '#F7DF1E',
      },
      {
        name: 'Express.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        color: '#000000',
      },
      {
        name: 'Tailwind CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        color: '#06B6D4',
      },
    ],
    description:
      'A full-featured matrimony platform built using the MERN stack where users can register, create profiles, and find suitable matches. This project was developed entirely by me.',
  },
  {
    title: 'Real-time Chat Application using WebSocket (Solo Project)',
    images: ['/chat1.png', '/chat2.png', '/chat3.png'],
    technologies: [
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        color: '#61DAFB',
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        color: '#339933',
      },
      {
        name: 'Socket.io',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
        color: '#010101',
      },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        color: '#47A248',
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        color: '#F7DF1E',
      },
    ],
    description:
      'A real-time web-based chat application developed using WebSocket technology, enabling instant messaging with smooth real-time communication.',
  },
  {
    title: 'Machine Learning Project (Ongoing)',
    images: ['/coming1.png', '/coming2.png', '/coming-soon.png'],
    technologies: [
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        color: '#3776AB',
      },
      {
        name: 'TensorFlow',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        color: '#FF6F00',
      },
      {
        name: 'Scikit-learn',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
        color: '#F7931E',
      },
      {
        name: 'Pandas',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
        color: '#150458',
      },
      {
        name: 'NumPy',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
        color: '#013243',
      },
    ],
    description:
      'This machine learning project is currently under development. Detailed implementation and results will be added soon.',
  },
];

/* ---------------- TECH ICON ---------------- */
const TechIcon = ({ tech }) => {
  const [imgSrc, setImgSrc] = useState(tech.icon);

  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-white border-2 border-teal-100 flex items-center justify-center p-4 shadow-lg">
        <div
          className="w-12 h-12 flex items-center justify-center rounded"
          style={{ backgroundColor: `${tech.color}20` }}
        >
          <img src={imgSrc} alt={tech.name} className="w-10 h-10" />
        </div>
      </div>
      <span className="mt-3 text-sm font-medium text-teal-700">
        {tech.name}
      </span>
    </div>
  );
};

/* ---------------- PAGE ---------------- */
const AcademicProjectsPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Header */}
      <div className="relative w-full h-[260px] md:h-[320px]">
        <Image
          src="/blogbg.jpg"
          alt="Academic Projects Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-serif tracking-widest">
            ACADEMIC PROJECTS
          </h1>
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        {projects.map((project, idx) => (
          <div key={idx} className="mb-32">
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-700 mb-10">
              📎 {project.title}
            </h2>

            {/* Images */}
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <div className="flex flex-col gap-6 md:w-1/3">
                {[0, 1].map((i) => (
                  <div key={i} className="relative w-full h-[180px]">
                    <Image
                      src={project.images[i]}
                      fill
                      className="object-cover rounded-lg border-2 border-teal-700"
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <div className="md:w-2/3">
                <div className="relative w-full h-[380px]">
                  <Image
                    src={project.images[2]}
                    fill
                    className="object-cover rounded-lg border-2 border-teal-700"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-8 justify-center mb-10">
              {project.technologies.map((tech, i) => (
                <TechIcon key={i} tech={tech} />
              ))}
            </div>

            {/* Description */}
            <div className="border-2 border-teal-700 bg-teal-50 rounded-lg p-8 min-h-[150px] text-gray-700">
              {project.description}
            </div>

            {/* Separator (fixed) */}
            <div className="relative mt-24 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
              <div className="h-20 w-full bg-gradient-to-r from-teal-50 via-white to-teal-50" />
            </div>
          </div>
        ))}

        {/* ✅ RESTORED FINAL CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
            <svg
              className="w-8 h-8 text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-teal-700 mb-4">
            More Projects Coming Soon
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I’m continuously working on new projects to improve my skills and
            explore modern technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicProjectsPage;
