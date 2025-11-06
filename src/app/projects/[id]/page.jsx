'use client';
import { useParams, useRouter } from 'next/navigation';

const projectsData = [
  {
    id: 1,
    title: 'Services-Stores',
    images: ['/p1.jpg', '/p1-mobile.jpg'],
    description:
      '“Services-Stores” is a modern platform where users can discover, manage, and review various services effortlessly. The design focuses on user experience, responsive layout, and real-time interaction.',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Firebase',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    frontend: '#',
    backend: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Matrimony Platform',
    images: ['/project2.png', '/project2-mobile.png'],
    description:
      'This project is a secure Matrimony website that helps users find their perfect match with advanced filters and privacy controls. Admin dashboard included for management.',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Firebase Auth'],
    frontend: '#',
    backend: '#',
    live: '#',
  },
];

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project)
    return <h2 className="text-center mt-20 text-2xl">Project not found.</h2>;

  return (
    <div className="min-h-screen bg-[#e7fffb] py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center mb-8 text-[#007F73]">
          {project.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-10 text-justify">
          {project.description}
        </p>

        {/* Screenshots */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} Screenshot ${index + 1}`}
              className="w-full rounded-2xl border border-teal-600 shadow-md hover:scale-[1.02] transition-transform duration-300"
            />
          ))}
        </div>

        {/* Technologies Used */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#007F73] mb-4">
            🔧 Technologies Used:
          </h2>
          <ul className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <li
                key={index}
                className="bg-[#007F73] text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-[#005f56] transition"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href={project.frontend}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg bg-[#007F73] text-white hover:bg-transparent hover:text-[#007F73] hover:border-[#007F73] border transition"
          >
            Frontend Code
          </a>
          <a
            href={project.backend}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg bg-[#007F73] text-white hover:bg-transparent hover:text-[#007F73] hover:border-[#007F73] border transition"
          >
            Backend Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg bg-[#007F73] text-white hover:bg-transparent hover:text-[#007F73] hover:border-[#007F73] border transition"
          >
            Live Demo
          </a>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => router.push('/')}
            className="px-8 py-3 rounded-xl bg-[#007F73] text-white font-semibold hover:bg-[#005f56] transition-all"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
