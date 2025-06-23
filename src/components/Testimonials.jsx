import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fashion Blogger',
      content: 'The quality of their clothing is exceptional. I\'ve been a customer for years and have never been disappointed.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Stylist',
      content: 'Their collections are always on trend and the materials are top-notch. My clients love their pieces.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Fashion Enthusiast',
      content: 'The customer service is outstanding. They helped me find the perfect outfit for my special occasion.',
      rating: 4,
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2456]/5 via-[#f8f7f4] to-[#c76d4e]/5">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2456' fill-opacity='0.1'%3E%3Cpath d='M36 34c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm0-8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1a2456] mb-2">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-[#c76d4e] rounded-full mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-[#c76d4e] fill-current" size={20} />
                ))}
              </div>
              <p className="text-[#1a2456] mb-6 leading-relaxed">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-[#1a2456]">{testimonial.name}</p>
                <p className="text-sm text-[#c76d4e]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 