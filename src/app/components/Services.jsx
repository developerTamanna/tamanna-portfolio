'use client';
import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaServer,
} from 'react-icons/fa';

export default function Services({ hideTitle = false }) {
  const services = [
    {
      icon: <FaMobileAlt />, // Responsive Web Design
      title: 'Responsive Web Design',
      description:
        'Crafting responsive and visually appealing websites that adapt seamlessly to all devices.',
    },
    {
      icon: <FaPalette />, // UI/UX Design
      title: 'UI/UX Design',
      description:
        'Converting complex designs (Figma/Adobe XD) into pixel-perfect, highly interactive, and responsive user interfaces.',
    },
    {
      icon: <FaCode />, // MERN Stack Development
      title: 'MERN Stack Development',
      description:
        'Building full-stack web applications using MongoDB, Express.js, React, Next.js, TypeScript, Tailwind and Node.js.',
    },
    {
      icon: <FaServer />, // Backend Development
      title: 'Backend Development',
      description:
        'Building secure and scalable server-side applications with modern architectures.',
    },
    {
      icon: <FaDatabase />, // Database Design
      title: 'Database Design',
      description:
        'Designing optimized and efficient database schemas with performance in mind.',
    },
    {
      icon: <FaLaptopCode />, // API Development
      title: 'API Development',
      description:
        'Creating clean, scalable, and well-documented RESTful APIs for applications.',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {!hideTitle && (
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
            My <span className="text-[#007F73]">Services</span>
          </h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#d5fdf9] border-2 border-white rounded-3xl p-8
                         w-full max-w-sm text-center
                         hover:border-[#007F73] hover:scale-105
                         transition-all duration-300"
            >
              <div className="flex justify-center mb-5 text-6xl text-[#007F73]">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
