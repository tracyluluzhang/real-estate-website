'use client';

import React from 'react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">联系我们</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我们随时准备为您提供专业的房地产咨询服务
          </p>
        </div>
        
        <div className="bg-white text-black rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto">
          <div className="p-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-black">联系方式</h2>
                <div className="space-y-6">
                  <p className="flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="w-7 h-7 mr-4" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <span className="text-lg">realtor.dreamestates@gmail.com</span>
                  </p>
                  <p className="flex items-center">
                    <img 
                      src="/contact/wechat.svg" 
                      alt="WeChat" 
                      className="w-7 h-7 mr-4"
                    />
                    <span className="text-lg">WeChat: Realtor_Dreamhouse</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 