import React from 'react';
import { Mail } from 'lucide-react';

export const Newsletter = () => {
  return (
    <section className="bg-[#1a2456] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="mx-auto mb-4" size={40} />
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-[#e6d2b5] mb-8">
            Stay updated with our latest collections, exclusive offers, and fashion tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md text-[#1a2456] focus:outline-none focus:ring-2 focus:ring-[#c76d4e]"
              required
            />
            <button
              type="submit"
              className="bg-[#c76d4e] hover:bg-[#b05e42] text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}; 