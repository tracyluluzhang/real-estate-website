'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/luxury-mansion.jpg"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative text-center text-white px-4 sm:px-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-cormorant italic font-medium mb-8">
            Dream Estates
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-cormorant tracking-wide max-w-4xl mx-auto mb-16">
            Your Gateway to Exceptional Properties
          </p>
          <div className="space-x-8">
            <Link 
              href="/team" 
              className="inline-block px-10 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white border border-white rounded-sm font-cormorant text-xl tracking-wider hover:bg-opacity-30 transition-all"
            >
              Meet Our Team
            </Link>
            <Link 
              href="/contact" 
              className="inline-block px-10 py-4 bg-white text-black rounded-sm font-cormorant text-xl tracking-wider hover:bg-opacity-90 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-cormorant italic font-medium text-center mb-20 text-black">
            Our <span className="font-normal">Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-20">
            {/* Feature 1 */}
            <div className="text-center">
              <img src="/globe.svg" alt="Global" className="w-20 h-20 mx-auto mb-10" />
              <h3 className="text-3xl md:text-4xl font-cormorant italic font-medium mb-6 text-black">Bay Area Reach</h3>
              <p className="text-xl text-gray-600 font-cormorant tracking-wide leading-relaxed">
                Access to all Bay Area real estate markets and exclusive properties
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center">
              <img src="/window.svg" alt="Luxury" className="w-20 h-20 mx-auto mb-10" />
              <h3 className="text-3xl md:text-4xl font-cormorant italic font-medium mb-6 text-black">Dream Properties</h3>
              <p className="text-xl text-gray-600 font-cormorant tracking-wide leading-relaxed">
                Curated selection of premium and dream real estate
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center">
              <img src="/file.svg" alt="Expert" className="w-20 h-20 mx-auto mb-10" />
              <h3 className="text-3xl md:text-4xl font-cormorant italic font-medium mb-6 text-black">Expert Guidance</h3>
              <p className="text-xl text-gray-600 font-cormorant tracking-wide leading-relaxed">
                Professional advice from experienced real estate consultants
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 