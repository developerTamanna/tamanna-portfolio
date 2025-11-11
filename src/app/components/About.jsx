"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[90vh] bg-[#d5fdf9] px-4 sm:px-8 lg:px-12 py-16 flex justify-center items-center"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
        {/* ✅ Left Side — Image */}
        <div className="relative w-60 sm:w-72 md:w-[24rem] lg:w-[26rem] aspect-square overflow-hidden rounded-2xl shadow-[0_0_25px_rgba(0,127,115,0.3)] border-4 border-[#007F73] hover:shadow-[0_0_40px_rgba(0,127,115,0.5)] transition duration-500">
          <Image
            src="/about.jpg"
            alt="About"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 240px, (max-width: 1024px) 360px, 420px"
            priority
          />
        </div>

        {/* ✅ Right Side — Text (3-Step Layout) */}
        <div className="max-w-xl text-center md:text-left space-y-6">
          {/* Step 1 — Main Heading */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              About <span className="text-[#007F73]">Me</span>
            </h2>
          </div>

          {/* Step 2 — Subheading */}
          <div>
            <h3 className="text-2xl sm:text-3xl text-gray-800">
              I&apos;m a{" "}
              <span className="text-[#007F73] font-semibold">
                MERN Stack Developer
              </span>
            </h3>
          </div>

          {/* Step 3 — Description */}
          <div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              MERN Stack Developer with hands-on experience in building dynamic
              and responsive web applications using MongoDB, Express.js, React,
              and Node.js. Skilled in creating seamless user experiences,
              managing databases efficiently, and integrating RESTful APIs.
              Dedicated to writing clean, maintainable code and continuously
              enhancing skills through learning, collaboration, and real-world
              project development.
            </p>
          </div>

          {/* Button */}
          <div>
            <a
              href="#"
              className="inline-block mt-4 bg-[#007F73] text-white py-3 px-10 rounded-full font-medium hover:shadow-[0_0_25px_rgba(0,127,115,0.6)] transition duration-300"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}