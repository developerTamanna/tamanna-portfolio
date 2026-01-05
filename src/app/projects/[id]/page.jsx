"use client";
import Head from "next/head";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

const projectsData = [
  {
    id: 1,
    title: "Services-Stores",
    images: ["/service3.png", "/services2.png"],
    description:
      "A versatile platform where users can discover, manage, and review various services, ranging from freelancing to digital and personal offerings.",
    features: [
      "Users can explore a wide range of services including freelancing, digital, and personal service listings.",
      "Users can leave reviews on services to help others make informed decisions.",
      "Ensures dynamic interactivity and smooth user engagement.",
      "Fully responsive design optimized for mobile, tablet, and desktop devices.",
      "Smooth scrolling and scroll-based animations.",
      "SEO-friendly structure with a modern UI.",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "React Router",
      "Firebase Authentication",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    frontend: "https://github.com/developerTamanna/services-stores-client",
    backend: "https://github.com/developerTamanna/services-stores-server",
    live: "https://services-store-app.web.app/",
  },
  {
    id: 2,
    title: "Matrimony Platform",
    images: ["/mt1.png", "/mt2.png"],
    description:
      "A modern matrimony website designed to help individuals find their ideal life partner securely.",
    features: [
      "Create, update, and delete profiles.",
      "Advanced search & filters.",
      "Secure payment system.",
      "Privacy-focused user data protection.",
      "Admin dashboard included.",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
      "Vercel",
    ],
    frontend: "https://github.com/developerTamanna/matrimony-platform-client",
    backend: "https://github.com/developerTamanna/matrimony-platform-server",
    live: "https://matrimony-platform-df764.web.app/",
  },
  {
    id: 3,
    title: "Sazin Construction Ltd – Real Time Web Application",
    images: ["/szn3.png", "/szn2.png"],
    description:
      "A real-time construction company website to showcase services, projects, and company news with SEO optimization.",
    features: [
      "Service & project showcase.",
      "Real-time updates.",
      "SEO-friendly architecture.",
      "Secure authentication.",
      "Fully responsive design.",
      "Modern UI & smooth interaction.",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "REST API",
      "Authentication",
    ],
    frontend:
      "https://github.com/developerTamanna/sazin-group-construction-Ltd",
    backend:
      "https://github.com/developerTamanna/sazin-group-construction-Ltd-backend",
    live: "https://sazin-group-construction-ltd.vercel.app/Services/Civil-construction/",
  },
  {
    id: 4,
    title: "Sazin Construction LTD – Admin Dashboard User Manual",
    images: ["/sznadmin1.png", "/sznadmin2.png"],
    description:
      "Admin user manual for Sazin Construction LTD website. This guide explains how administrators can access the dashboard, manage users, and assign new admin roles securely. email: marufahmmed16@gmail.com pass: Maruf2131@",

    features: [
      "Admin dashboard access with secure login.",
      "Default admin credentials provided for initial access.",
      "Ability to register new admin accounts.",
      "Existing admin approval required to activate new admin users.",
      "Role-based access control for managing projects and content.",
      "Real-time admin management workflow.",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Firebase Authentication",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
    ],
    frontend:
      "https://github.com/developerTamanna/sazin-group-construction-Ltd-backend",
    backend: "https://github.com/developerTamanna/sazin-group-construction-Ltd",
    live: "https://sazin-group-construction-ltd-backen.vercel.app/",
  },
];

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Not Found
      </div>
    );
  }

  return (
    <>
      {/* ✅ SEO */}
      <Head>
        <title>{project.title} | Tamanna Akter Portfolio</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.images[0]} />
      </Head>

      <div className="min-h-screen bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back */}
          <button
            onClick={() => router.push("/")}
            className="mb-8 text-gray-600 hover:text-[#007F73]"
          >
            ← Back to Projects
          </button>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* ✅ Sticky Image Gallery */}
            <div className="lg:sticky lg:top-24 h-fit space-y-6">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="relative w-full h-[260px] sm:h-[360px] lg:h-[420px]
                 overflow-hidden rounded-xl border border-gray-200"
                >
                  <Image
                    src={img}
                    alt={project.title}
                    fill
                    className="object-cover object-top
                   transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            {/* Right Content */}
            <div>
              <h1 className="text-3xl font-bold text-[#007F73] mb-4">
                {project.title}
              </h1>

              <p className="text-gray-600 mb-8">{project.description}</p>

              {/* Features */}
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3 mb-8">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-gray-600">
                    <span className="w-2 h-2 mt-2 bg-[#007F73] rounded-full"></span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <h2 className="text-xl font-semibold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-3 mb-10">
                {project.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 rounded-lg text-sm border"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 flex-wrap">
                {project.frontend && (
                  <a
                    href={project.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 rounded-lg
      bg-[#007F73] text-white
      hover:bg-[#005f56]
      transition-colors duration-200
      border border-[#007F73]"
                  >
                    Frontend Code
                  </a>
                )}

                {project.backend && (
                  <a
                    href={project.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 rounded-lg
      bg-white text-[#007F73]
      border border-[#007F73]
      hover:bg-[#007F73] hover:text-white
      transition-colors duration-200"
                  >
                    Backend Code
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 rounded-lg
      bg-white text-[#007F73]
      border border-[#007F73]
      hover:bg-[#007F73] hover:text-white
      transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
