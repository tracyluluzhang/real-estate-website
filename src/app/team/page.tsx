'use client';

import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Angela Wu',
    title: 'Real Estate Agent',
    image: '/team/agent1.jpg',
    description: 'Specializing in luxury properties with over 15 years of experience in high-end real estate.',
  },
  {
    id: 2,
    name: 'Grace Zhang',
    title: 'Real Estate Agent',
    image: '/team/agent2.jpg',
    description: 'Expert in residential properties and investment opportunities in prime locations.',
  },
  {
    id: 3,
    name: 'Tracy Zhang',
    title: 'Real Estate Agent',
    image: '/team/agent3.jpg',
    description: 'Focused on real estate investment analysis, helping clients make informed investment decisions.',
  },
];

export default function Team() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-cormorant italic font-medium text-black mb-6">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-cormorant font-light tracking-wide">
            Meet our experienced team of real estate professionals dedicated to finding your perfect home
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white text-black rounded-xl shadow-lg overflow-hidden transform hover:translate-y-[-8px] transition-all duration-300"
            >
              <div className="relative h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-cormorant italic font-medium mb-2">{member.name}</h3>
                <p className="text-gray-600 font-cormorant tracking-wide mb-4">{member.title}</p>
                {/* <p className="text-gray-600 font-cormorant tracking-wide leading-relaxed">{member.description}</p> */} 
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 