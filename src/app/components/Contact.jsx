'use client';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';

const contacts = [
  {
    name: 'LinkedIn',
    value: 'tamanna-akter57',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/tamanna-akter57/',
  },
  {
    name: 'GitHub',
    value: 'developerTamanna',
    icon: <FaGithub />,
    link: 'https://github.com/developerTamanna',
  },
  {
    name: 'Email',
    value: 'astamanna57@gmail.com',
    icon: <FaEnvelope />,
    link: 'mailto:astamanna57@gmail.com',
  },
  {
    name: 'Twitter (X)',
    value: 'TamannaAkt43608',
    icon: <FaXTwitter />,
    link: 'https://x.com/TamannaAkt43608',
  },
  {
    name: 'LeetCode',
    value: 'Tamanna2',
    icon: <SiLeetcode />,
    link: 'https://leetcode.com/u/Tamanna2/',
  },
  {
    name: 'Codeforces',
    value: 'tamannaspp',
    icon: <SiCodeforces />,
    link: 'https://codeforces.com/profile/tamannaspp',
  },
  {
    name: 'beecrowd (URI)',
    value: '1132874',
    icon: <span className="font-bold text-lg">B</span>,
    link: 'https://judge.beecrowd.com/en/profile/1132874',
  },
  {
    name: 'Discord',
    value: 'tamannaakter_75706',
    icon: <FaDiscord />,
    link: '#',
  },
];

export default function Contact() {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xw40vop', // ✅ Service ID
        'template_9xpiwv9', // ✅ Template ID
        formRef.current,
        'novQt8V7g8yjik3W6' // ✅ Public Key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          alert('Failed to send message!');
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-white px-4 sm:px-6">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-5xl font-bold text-[#007F73] mb-3">
          Contact Me
        </h2>
        <div className="w-16 h-0.5 bg-[#007F73] mx-auto" />
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-3xl mx-auto bg-white rounded-2xl p-8 sm:p-10 border border-teal-100 shadow-sm"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            className="input-field"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            className="input-field"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Email Subject"
            className="input-field sm:col-span-2"
            required
          />
        </div>

        <textarea
          rows="6"
          name="message"
          placeholder="Your Message"
          className="input-field mt-5 resize-none"
          required
        />

        <div className="text-center">
          <button
            type="submit"
            className="mt-8 inline-flex items-center justify-center bg-[#007F73] text-white px-10 py-3 rounded-full font-semibold hover:bg-[#00665c] transition-all duration-300 hover:scale-[1.03] shadow-sm"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* ==== Social contacts section ==== */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold mb-2 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
          <span className="text-teal-500">#</span> Find Me Online
        </h2>
        <p className="text-gray-600 mb-10">
          Connect with me through social media.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="group border border-teal-200 rounded-xl p-5 flex items-center gap-4 hover:bg-teal-50 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-100 text-teal-600 text-2xl group-hover:scale-110 transition">
                {item.icon}
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
