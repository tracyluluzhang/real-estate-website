'use client';

import React from 'react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-cormorant font-medium italic text-black mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-cormorant font-light tracking-wide">
            We are always ready to provide you with professional real estate consulting services.
          </p>
        </div>
        
        <div className="bg-white text-black rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto">
          <div className="p-8 sm:p-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-cormorant italic font-medium mb-8 text-black">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="w-6 h-6 flex-shrink-0 text-gray-700" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <span className="text-lg font-cormorant tracking-wider">realtor.dreamestates@gmail.com</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <img 
                      src="/contact/wechat.svg" 
                      alt="WeChat" 
                      className="w-6 h-6 flex-shrink-0 text-gray-700"
                    />
                    <span className="text-lg font-cormorant tracking-wider">WeChat: Realtor_Dreamhouse</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <img 
                      src="/contact/xiaohongshu.svg" 
                      alt="Xiaohongshu" 
                      className="w-6 h-6 flex-shrink-0 text-gray-700"
                    />
                    <span className="text-lg font-cormorant tracking-wider">Miumiu_grassy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 