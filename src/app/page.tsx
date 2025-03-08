'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* 豪宅封面图片 */}
      <div className="relative h-screen">
        <Image
          src="/luxury-mansion.jpg"
          alt="豪华别墅"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/70">
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">立捷地产</h1>
            <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
              专业的房地产顾问团队，为您提供尊贵的购房体验
            </p>
            <Link
              href="/team"
              className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              了解我们的团队
            </Link>
            <Link
              href="/contact"
              className="mt-4 bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              联系我们
            </Link>
          </div> 
        </div>
      </div>
    </main>
  );
} 