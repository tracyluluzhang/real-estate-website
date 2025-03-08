'use client';

import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: '张明',
    title: '首席房地产顾问',
    image: '/team/agent1.jpg',
    description: '拥有15年豪宅销售经验，专注于高端物业交易',
  },
  {
    id: 2,
    name: '李婷',
    title: '资深房地产经纪',
    image: '/team/agent2.jpg',
    description: '擅长别墅和公寓市场，为客户提供专业的购房建议',
  },
  {
    id: 3,
    name: '王强',
    title: '投资策略专家',
    image: '/team/agent3.jpg',
    description: '专注房地产投资分析，帮助客户做出明智的投资决策',
  },
];

export default function Team() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">我们的团队</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            专业的房地产顾问团队，为您提供一站式购房服务
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:translate-y-[-8px] transition-all duration-300"
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
                <h3 className="text-2xl font-bold text-black mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.title}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 