import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#d5fdf9] py-10 text-center">
      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-[#007F73] text-2xl mb-4">
        <a
          href="https://www.linkedin.com/in/tamanna-akter57/"
          target="_blank"
          className="border-2 border-[#007F73] rounded-full p-2 hover:bg-[#007F73] hover:text-white transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://web.facebook.com/tamanna.sultana.sathi.2025/"
          target="_blank"
          className="border-2 border-[#007F73] rounded-full p-2 hover:bg-[#007F73] hover:text-white transition"
        >
          <FaFacebook />
        </a>
        <a
          href="https://x.com/TamannaAkt43608"
          target="_blank"
          className="border-2 border-[#007F73] rounded-full p-2 hover:bg-[#007F73] hover:text-white transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/astamanna576/"
          target="_blank"
          className="border-2 border-[#007F73] rounded-full p-2 hover:bg-[#007F73] hover:text-white transition"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-base text-gray-700">
        © Tamanna Akter - All Rights Reserved
      </p>
    </footer>
  );
}
