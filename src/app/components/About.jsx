'use client';
import Link from 'next/link';
import { FaGlobe, FaRobot, FaTrophy } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="
        min-h-screen
        flex flex-col md:flex-row
        justify-center items-center
        gap-12
        bg-[#d5fdf9]
        px-6 md:px-16
        py-20
      "
    >
      {/* LEFT CONTENT (unchanged structure) */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold">
          About <span className="text-[#007F73]">Me</span>
        </h2>
        <h3 className="text-2xl md:text-3xl mt-4 font-semibold text-gray-700">
          I&apos;m a{' '}
          <span className="text-[#007F73]">Software Development Engineer</span>
        </h3>
        <p className="text-base md:text-lg mt-4 text-gray-600 leading-relaxed">
          I am a Software Development Engineer with over 2 years of hands-on
          experience in Web Development, where I have worked on real-world
          projects and delivered professional, production-ready web applications
          based on client requirements.
        </p>
        <p className="text-base md:text-lg mt-4 text-gray-600 leading-relaxed">
          I have also solved 500+ programming problems across different
          platforms, strengthening my problem-solving and logical thinking
          skills. Currently, I am pursuing my BSc in Computer Science &
          Engineering and actively learning Artificial Intelligence and Machine
          Learning to build intelligent and data-driven systems in the future.
        </p>

        <Link
          href="/about-more"
          className="inline-block mt-6 bg-[#007F73] text-white py-3 px-6 rounded-full font-semibold shadow-md hover:shadow-lg transition"
        >
          Read more
        </Link>
      </div>

      {/* RIGHT SKILL CARDS */}
      <div className="w-full md:w-[480px] lg:w-[520px] space-y-6">
        {/* Web Development */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h4 className="flex items-center gap-2 text-xl font-bold mb-4">
            <FaGlobe className="text-[#007F73]" />
            Web Development
          </h4>
          <div className="flex flex-wrap gap-2">
            {[
              'HTML',
              'CSS',
              'Tailwind CSS',
              'JavaScript',
              'React',
              'Next.js',
              'Firebase',
              'MongoDB',
              'Express',
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm border border-[#007F73] text-[#007F73] rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* AI & ML */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h4 className="flex items-center gap-2 text-xl font-bold mb-4">
            <FaRobot className="text-[#007F73]" />
            AI & Machine Learning{' '}
            <span className="text-sm font-medium text-gray-500">
              (Exploring)
            </span>
          </h4>

          <div className="flex flex-wrap gap-2">
            {['Python', 'Pandas', 'Data Visualization', 'ML Basics'].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm border border-[#007F73] text-[#007F73] rounded-full"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        {/* Problem Solving */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h4 className="flex items-center gap-2 text-xl font-bold mb-4">
            <FaTrophy className="text-[#007F73]" />
            Problem Solving
          </h4>
          <div className="flex flex-wrap gap-2">
            {[
              'Competitive Programming',
              'Algorithm Design',
              'Data Structures',
              'Problem Solving',
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm border border-[#007F73] text-[#007F73] rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
