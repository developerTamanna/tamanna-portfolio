import Image from 'next/image';

export default function BlogPage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      {/* ===== TOP BANNER (FULL) ===== */}
      <div className="relative w-full h-[260px] md:h-[320px]">
        <Image
          src="/blogbg.jpg"
          alt="Blog Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Title */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-serif tracking-widest">
            PERSONAL BLOG
          </h1>
        </div>
      </div>

      {/* ===== HANDWRITING SECTION (FULL WIDTH & FULL IMAGE) ===== */}
      <div className="relative w-full h-[400px] md:h-[520px] bg-white">
        <Image
          src="/newheading.png"
          alt="Handwriting full section"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
