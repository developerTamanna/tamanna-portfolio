"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    // ✅ Ensure DOM element exists before initializing Typed
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Frontend Developer", "Backend Developer", "Web Designer"],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 1200,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row max-w-7xl mx-auto justify-between items-center gap-10 md:gap-16 lg:gap-20 px-4 sm:px-8 md:px-14 lg:px-24 pt-24 md:pt-32 pb-16 text-center md:text-left bg-white"
    >
      {/* ✅ Left Side Text Content */}
      <div className="max-w-xl md:max-w-2xl flex flex-col items-center md:items-start">
        <h3 className="text-xl sm:text-2xl font-medium text-gray-700">
          Hello, Myself
        </h3>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mt-2 text-gray-900 leading-tight">
          Tamanna Akter
        </h1>

        <h3 className="text-xl sm:text-2xl mt-3 text-gray-700">
          And I&apos;m a{" "}
          <span ref={typedRef} className="text-teal-700 font-semibold"></span>
        </h3>

        <p className="text-sm sm:text-base md:text-lg mt-4 text-gray-600 leading-relaxed max-w-md">
          I craft intuitive, high-performance web applications that turn ideas
          into digital reality using modern technologies.
        </p>

        {/* ✅ Social Icons */}
        <div className="flex justify-center md:justify-start gap-4 sm:gap-5 mt-6 text-teal-700 text-xl sm:text-2xl flex-wrap">
          {[FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaGithub].map(
            (Icon, i) => (
              <a
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-teal-700 rounded-full p-2 sm:p-3 hover:bg-teal-700 hover:text-white transition duration-300"
              >
                <Icon />
              </a>
            )
          )}
        </div>

        {/* ✅ Download CV Button */}
        <a
          href="#"
          className="inline-block mt-8 bg-teal-700 text-white py-3 px-8 rounded-full font-semibold shadow-md hover:shadow-[0_0_25px_rgba(13,148,136,0.8)] transition duration-500"
        >
          Download CV
        </a>
      </div>

      {/* ✅ Right Side Profile Image */}
      <div className="flex justify-center items-center">
        <div className="relative w-40 sm:w-52 md:w-64 lg:w-80 rounded-full overflow-hidden shadow-[0_0_20px_theme(colors.teal.600)] hover:shadow-[0_0_30px_theme(colors.teal.600),0_0_45px_theme(colors.teal.600)] cursor-pointer transition duration-500 float-animation">
          <Image
            src="/profile.png"
            alt="Tamanna Akter"
            width={400}
            height={400}
            className="rounded-full w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* ✅ Float Animation */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px);
          }
        }
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
