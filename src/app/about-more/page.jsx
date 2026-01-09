'use client';
import { useState } from 'react';

export default function AboutMore() {
  // Slider images: বিভিন্ন ইভেন্টের ছবি
  const eventImages = [
    '/quizephoto.jpeg', // ICT Quiz Prize photo
    '/cropdigital.jpeg', // Digital Skill EDGE certificate photo
    '/projectshowphoto.jpeg', // Project Showcasing prize photo
    '/projectshowpricephoto.jpeg', // Project prize money photo
    '/intership.jpeg', // Internship certificate/photo
  ];

  // Certificates images: সার্টিফিকেট গুলো
  const certificateList = [
    {
      img: '/edgecertifecate.jpeg', // সার্টিফিকেট ছবি
      title: 'Digital Skill EDGE Certificate (2024)',
      desc: 'Received from ICT Division Bangladesh Computer Council.',
    },
    {
      img: '/cert2.jpeg',
      title: 'Web Development Internship Certificate (2024)',
      desc: 'Completed 6 months internship in web development.',
    },
    {
      img: '/cert3.jpeg',
      title: 'Diploma in Computer Science & Engineering (2024)',
      desc: 'Completed 4-year Diploma from Sylhet polytecnic institute.',
    },
    {
      img: '/cert3.jpeg',
      title: 'Programming hero MERN stack development  (2025)',
      desc: 'Received  certificate for course Completed.',
    },
    {
      img: '/cert3.jpeg',
      title: 'Project Showcasing certificate (2025)',
      desc: 'Received cash prize and certificate for project showcasing full stack project. sylhet international university',
    },
    {
      img: '/cert3.jpeg',
      title: 'spoken English certificate (2025)',
      desc: 'spoken English completed AIMS Academy sylhet.',
    },
  ];

  // Awards & Recognition ডাটা
  const awardsRecognition = [
    {
      img: '/images/award1.jpg', // এখানে Award সম্পর্কিত ছবি বসাবে
      title: 'ICT Quiz Competition Prize (2025)',
      desc: 'Won prize in ICT Quiz at Sylhet International University.',
    },
    {
      img: '/images/award2.jpg',
      title: 'Project Showcasing Prize (2025)',
      desc: 'Received cash prize and certificate for project showcasing.',
    },
  ];

  // Academic Awards ডাটা
  const academicAwards = [
    {
      img: '/images/academic1.jpg',
      title: 'Diploma Completion Certificate (2024)',
      desc: 'Completed 4-year CSE Diploma from Sylhet International University.',
    },
  ];

  // Co & Extra-Curricular Awards ডাটা
  const coExtraAwards = [
    {
      img: '/images/extra1.jpg',
      title: 'Best Spoken English Student Award',
      desc: 'Received Best Student award from AIMS Academy for spoken English.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === eventImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? eventImages.length - 1 : prev - 1));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* শিরোনাম */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-teal-700">
          More About Me & Achievements
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Here you can explore my journey through certifications, awards, and
          recognitions that shaped my professional path.
        </p>
        <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* ইভেন্ট ছবি স্লাইডার */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-teal-800 pl-4 border-l-4 border-teal-400">
          Event Highlights
        </h2>
        <div className="relative bg-white rounded-xl border border-teal-100 p-6">
          <div className="flex justify-center items-center">
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-sm transition-all duration-200"
            >
              ‹
            </button>
            <div className="w-full max-w-3xl mx-auto overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {eventImages.map((src, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex justify-center p-4"
                  >
                    <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden border border-gray-200">
                      <img
                        src={src}
                        alt={`Event ${index + 1}`}
                        className="object-cover w-full h-full hover:scale-[1.01] transition-transform duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-sm transition-all duration-200"
            >
              ›
            </button>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {eventImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentSlide
                    ? 'bg-teal-600 w-6'
                    : 'bg-teal-200 hover:bg-teal-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Certificates & Achievements */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-teal-800 pl-4 border-l-4 border-teal-400">
          Certificates & Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {certificateList.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between hover:border-teal-300 transition-all duration-300"
            >
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="object-cover w-full h-full hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl font-bold text-teal-800 mb-2">
                {cert.title}
              </h4>
              <p className="text-gray-700 mb-4">{cert.desc}</p>
              <button className="self-start bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
                Show Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-teal-800 pl-4 border-l-4 border-teal-400">
          Awards & Recognition
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {awardsRecognition.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-xl hover:border-teal-300 transition-all duration-300"
            >
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl font-bold text-teal-800 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Awards */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-teal-800 pl-4 border-l-4 border-teal-400">
          Academic Awards
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {academicAwards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-xl hover:border-teal-300 transition-all duration-300"
            >
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl font-bold text-teal-800 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Co & Extra-Curricular Awards */}
      <div>
        <h2 className="text-3xl font-semibold mb-8 text-teal-800 pl-4 border-l-4 border-teal-400">
          Co & Extra-Curricular Awards
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {coExtraAwards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:border-teal-300 transition-all duration-300"
            >
              <div className="relative h-52 w-full mb-4 rounded-lg overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <h4 className="text-lg font-bold text-teal-800 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* হিউম্যান টাচ */}
      <div className="mt-16 p-6 bg-teal-50 rounded-2xl border border-teal-100 text-center">
        <p className="text-gray-700 italic text-lg">
          "Each certificate and award tells a story of growth, perseverance, and
          passion. They remind me that every effort counts in the journey of
          continuous learning."
        </p>
        <p className="mt-4 font-medium text-teal-700">
          — A proud milestone in my journey
        </p>
      </div>
    </section>
  );
}
