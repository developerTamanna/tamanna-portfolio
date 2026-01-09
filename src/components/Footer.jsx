'use client';

export default function Footer() {
  return (
    <footer className="relative bg-[#d5fdf9] py-10 text-center border-t border-teal-300">
      <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-white to-transparent"></div>

      {/* Footer Text */}
      <p className="text-base text-gray-700 relative z-10">
        © Tamanna Akter - All Rights Reserved
      </p>
    </footer>
  );
}
