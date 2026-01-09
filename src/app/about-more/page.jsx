'use client';
import { useState } from 'react';

export default function AboutMore() {
  const slideImages = [
    '/quizephoto.jpeg',
    '/cropdigital.jpeg',
    '/projectshowphoto.jpeg',
    'projectshowpricephoto.jpeg',
    '/intership.jpeg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* শিরোনাম - হিউম্যান ভাইবস যোগ */}
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

      {/* সের্টিফিকেট স্লাইডার */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-teal-800 pl-4 border-l-4 border-teal-400">
          Certificates & Achievements
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
                {slideImages.map((src, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex justify-center p-4"
                  >
                    <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden border border-gray-200">
                      <img
                        src={src}
                        alt={`Certificate ${index + 1}`}
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
            {slideImages.map((_, idx) => (
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

      {/* Awards & Recognition */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-teal-800 pl-4 border-l-4 border-teal-400">
          Awards & Recognition
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-teal-50/50 to-white p-8 rounded-2xl border border-teal-100">
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="/images/human-award.jpg"
                alt="Award Ceremony"
                className="w-full h-auto object-cover rounded-lg shadow-sm"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <p className="text-white text-sm font-medium">
                  Receiving award at Innovation Summit 2023
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-teal-700">
              Excellence in Innovation
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Received the prestigious 'Innovator of the Year' award for
              outstanding contribution to tech-driven solutions in the education
              sector. The ceremony was held at Dhaka International Conference
              Center.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <span className="text-teal-500 mr-3 mt-1 group-hover:scale-110 transition-transform">
                  ✓
                </span>
                <span className="group-hover:text-teal-700 transition-colors">
                  Recognized by ICT Division, Bangladesh
                </span>
              </li>
              <li className="flex items-start group">
                <span className="text-teal-500 mr-3 mt-1 group-hover:scale-110 transition-transform">
                  ✓
                </span>
                <span className="group-hover:text-teal-700 transition-colors">
                  Featured in national tech magazines
                </span>
              </li>
              <li className="flex items-start group">
                <span className="text-teal-500 mr-3 mt-1 group-hover:scale-110 transition-transform">
                  ✓
                </span>
                <span className="group-hover:text-teal-700 transition-colors">
                  Keynote speaker at Youth Tech Summit 2023
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Academic Awards - 2 pictures side by side */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-teal-800 pl-4 border-l-4 border-teal-400">
          Academic Awards
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              img: '/images/academic1.jpg',
              title: "Dean's List Award",
              desc: "Achieved Dean's List recognition for three consecutive semesters for outstanding academic performance.",
            },
            {
              img: '/images/academic2.jpg',
              title: 'Best Thesis Award',
              desc: "Awarded 'Best Undergraduate Thesis' for innovative research on machine learning applications in healthcare.",
            },
          ].map((item, index) => (
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

      {/* Co & Extra-curricular Awards - 3 pictures */}
      <div>
        <h2 className="text-3xl font-semibold mb-8 text-teal-800 pl-4 border-l-4 border-teal-400">
          CO & EXTRA-CURRICULAR AWARDS
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              img: '/images/extra1.jpg',
              title: 'National Debate Champion',
              desc: 'Won first prize in National Inter-University Debate Competition 2022.',
            },
            {
              img: '/images/extra2.jpg',
              title: 'Sports Leadership Award',
              desc: 'Recognized as Best Sports Organizer at University Level.',
            },
            {
              img: '/images/extra3.jpg',
              title: 'Cultural Festival Winner',
              desc: 'Awarded for best performance in National Cultural Festival 2021.',
            },
          ].map((item, index) => (
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

      {/* হিউম্যান টাচ - একটি ছোট personal note */}
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
