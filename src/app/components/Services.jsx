'use client';
import { FaCode, FaMobileAlt, FaPalette } from 'react-icons/fa';

export default function Services({ hideTitle = false }) {
  const services = [
    {
      icon: <FaCode />,
      title: 'MERN-Stack Development',
      description: 'Dynamic, secure, and responsive web apps.',
    },
    {
      icon: <FaPalette />,
      title: 'Frontend Design',
      description: 'Clean and modern user-friendly interfaces.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Backend & API',
      description: 'RESTful APIs and smooth data flow.',
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
