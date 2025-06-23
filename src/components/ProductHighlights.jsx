import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export const ProductHighlights = () => {
  const features = [
    'Premium Quality Materials',
    'Ethically Sourced',
    'Sustainable Production',
    'Free Shipping Over $50',
    'Easy Returns',
    '24/7 Customer Support',
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Products?
              </h2>
              <div className="w-20 h-1 bg-[#1a2456] rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are committed to providing the highest quality fashion items while maintaining
              ethical and sustainable practices throughout our production process.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1a2456]/10 flex items-center justify-center group-hover:bg-[#1a2456] transition-colors duration-300">
                    <Check className="text-[#1a2456] group-hover:text-white" size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link
                to="/collections"
                className="inline-flex items-center px-8 py-4 bg-[#1a2456] hover:bg-[#2a3566] text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Collections
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="relative h-72 rounded-2xl overflow-hidden group shadow-[0_25px_60px_rgba(26,36,86,0.25)] border-2 border-[#1a2456]/20">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2456]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <div className="absolute inset-0 shadow-[0_25px_60px_rgba(26,36,86,0.25)] group-hover:shadow-[0_30px_70px_rgba(26,36,86,0.35)] transition-all duration-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Quality materials"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group shadow-[0_25px_60px_rgba(26,36,86,0.25)] border-2 border-[#1a2456]/20">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2456]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <div className="absolute inset-0 shadow-[0_25px_60px_rgba(26,36,86,0.25)] group-hover:shadow-[0_30px_70px_rgba(26,36,86,0.35)] transition-all duration-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Sustainable production"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="relative h-64 rounded-2xl overflow-hidden group shadow-[0_25px_60px_rgba(26,36,86,0.25)] border-2 border-[#1a2456]/20">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2456]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <div className="absolute inset-0 shadow-[0_25px_60px_rgba(26,36,86,0.25)] group-hover:shadow-[0_30px_70px_rgba(26,36,86,0.35)] transition-all duration-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Ethical sourcing"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden group shadow-[0_25px_60px_rgba(26,36,86,0.25)] border-2 border-[#1a2456]/20">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2456]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <div className="absolute inset-0 shadow-[0_25px_60px_rgba(26,36,86,0.25)] group-hover:shadow-[0_30px_70px_rgba(26,36,86,0.35)] transition-all duration-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Customer satisfaction"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 