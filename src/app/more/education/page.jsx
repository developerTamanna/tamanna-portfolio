'use client';

const EducationPage = () => {
  // Education data
  const educationData = [
    {
      id: 1,
      degree: 'B.Sc. in Computer Science and Engineering',
      institution: 'Sylhet International University (SIU)',
      duration: '2025 - Present',
      description:
        'Specialized in Machine Learning and Artificial Intelligence. Focused on building modern web and intelligent systems.',
      icon: '🎓',
      status: 'Ongoing',
      image: '/siu_campus.jpg', // SIU লোগো বা ক্যাম্পাস ছবি
    },
    {
      id: 2,
      degree: 'Diploma in Computer Science and Engineering (CSE)',
      institution: 'Sylhet Polytechnic Institute (SPI)',
      duration: '2020 - 2024',
      description:
        'Focused on Software Development, UI/UX, and Full-Stack Web Technologies.',
      icon: '📚',
      status: 'Completed',
      image: '/spi.jpg', // SPI লোগো বা ক্যাম্পাস ছবি
    },
    {
      id: 3,
      degree: 'Secondary School Certificate (SSC)',
      institution:
        'Hajera Muslim Technical School and College, Bishwambarpur, Polash',
      duration: '2018 - 2020',
      description:
        'Background: Science, Department: Computer. Completed with focus on Computer Science fundamentals.',
      icon: '🏫',
      status: 'Completed',
      image: '/sscclg.png',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          My Education Journey
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          A timeline of my academic achievements and learning experiences that
          have shaped my technical expertise.
        </p>
        <div className="w-32 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Education Timeline */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-gray-800 text-center">
          Academic Qualifications
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-teal-200"></div>

          {/* Education Cards */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute md:relative left-0 md:left-auto z-10">
                  <div className="w-8 h-8 rounded-full bg-teal-500 border-4 border-white shadow-lg flex items-center justify-center">
                    <span className="text-white text-sm">{edu.icon}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  } ml-12 md:ml-0 mt-4 md:mt-0`}
                >
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all duration-300 group">
                    {/* Status Badge */}
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                        edu.status === 'Ongoing'
                          ? 'bg-teal-100 text-teal-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full mr-2 ${
                          edu.status === 'Ongoing'
                            ? 'bg-teal-500'
                            : 'bg-green-500'
                        }`}
                      ></span>
                      {edu.status}
                    </div>

                    {/* Degree */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-teal-700 transition-colors">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <div className="flex items-center mb-3">
                      <svg
                        className="w-5 h-5 text-teal-600 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                      <span className="text-gray-700 font-medium">
                        {edu.institution}
                      </span>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center mb-4">
                      <svg
                        className="w-5 h-5 text-teal-600 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">{edu.duration}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6">{edu.description}</p>

                    {/* Institution Image */}
                    <div className="relative h-48 w-full rounded-lg overflow-hidden border border-gray-200">
                      <img
                        src={edu.image}
                        alt={edu.institution}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/placeholder-education.jpg';
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <p className="text-white text-sm font-medium">
                          {edu.institution.split(',')[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Education Info */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-xl p-6 hover:border-teal-300 transition-all duration-300">
          <div className="text-teal-600 mb-4">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Institutions</h3>
          <ul className="space-y-3 text-gray-700">
            {educationData.map((edu) => (
              <li key={edu.id} className="flex items-start group">
                <span className="text-teal-500 mr-2 mt-1 group-hover:scale-110 transition-transform">
                  ✓
                </span>
                <span className="group-hover:text-teal-700 transition-colors">
                  {edu.institution.split(',')[0]}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-xl p-6 hover:border-teal-300 transition-all duration-300">
          <div className="text-teal-600 mb-4">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Focus Areas</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start group">
              <span className="text-teal-500 mr-2 mt-1 group-hover:scale-110 transition-transform">
                •
              </span>
              <span className="group-hover:text-teal-700 transition-colors">
                Machine Learning & AI
              </span>
            </li>
            <li className="flex items-start group">
              <span className="text-teal-500 mr-2 mt-1 group-hover:scale-110 transition-transform">
                •
              </span>
              <span className="group-hover:text-teal-700 transition-colors">
                Full-Stack Development
              </span>
            </li>
            <li className="flex items-start group">
              <span className="text-teal-500 mr-2 mt-1 group-hover:scale-110 transition-transform">
                •
              </span>
              <span className="group-hover:text-teal-700 transition-colors">
                Computer Science Fundamentals
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-xl p-6 hover:border-teal-300 transition-all duration-300">
          <div className="text-teal-600 mb-4">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436a1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.831z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Journey Status
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start group">
              <span className="text-teal-500 mr-2 mt-1">🎯</span>
              <span className="group-hover:text-teal-700 transition-colors">
                1 Degree Ongoing
              </span>
            </li>
            <li className="flex items-start group">
              <span className="text-teal-500 mr-2 mt-1">✅</span>
              <span className="group-hover:text-teal-700 transition-colors">
                2 Degrees Completed
              </span>
            </li>
            <li className="flex items-start group">
              <span className="text-teal-500 mr-2 mt-1">📈</span>
              <span className="group-hover:text-teal-700 transition-colors">
                Continuous Learning
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Education Philosophy */}
      <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-teal-100">
        <div className="max-w-4xl mx-auto text-center">
          <svg
            className="w-12 h-12 text-teal-500 mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            My Learning Philosophy
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            "Education is not just about acquiring knowledge, but about
            developing the ability to think critically, solve complex problems,
            and adapt to the rapidly evolving technological landscape. My
            academic journey has taught me that consistent learning, practical
            application, and curiosity are the keys to growth in the field of
            computer science."
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center bg-white px-4 py-2 rounded-full border border-gray-200 hover:border-teal-300 hover:shadow-sm transition-all duration-300">
              <span className="text-teal-600 font-medium">
                From Science to Technology
              </span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full border border-gray-200 hover:border-teal-300 hover:shadow-sm transition-all duration-300">
              <span className="text-teal-600 font-medium">
                Technical to Engineering
              </span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full border border-gray-200 hover:border-teal-300 hover:shadow-sm transition-all duration-300">
              <span className="text-teal-600 font-medium">
                Theory to Practice
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
