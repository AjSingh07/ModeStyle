import React from 'react';
import { Link } from 'react-router-dom';

const newArrivals = [
  {
    id: 1,
    name: 'Linen Summer Dress',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    price: '$59.99',
    link: '/women/linen-summer-dress'
  },
  {
    id: 2,
    name: 'Classic Denim Jacket',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    price: '$89.99',
    link: '/men/classic-denim-jacket'
  },
  {
    id: 3,
    name: 'Kids Rainbow Tee',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    price: '$24.99',
    link: '/kids/rainbow-tee'
  },
  {
    id: 4,
    name: 'Leather Crossbody Bag',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
    price: '$119.99',
    link: '/accessories/leather-crossbody-bag'
  }
];

const NewArrivals = () => (
  <section className="py-16 relative overflow-hidden">
    {/* Background with gradient and pattern */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a2456]/5 via-[#f8f7f4] to-[#c76d4e]/5">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2456' fill-opacity='0.1'%3E%3Cpath d='M36 34c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm0-8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
    </div>

    <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-[#1a2456] mb-2">New Arrivals</h2>
        <div className="w-20 h-1 bg-[#c76d4e] rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {newArrivals.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="group block bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-72 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2456]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#1a2456] mb-2 group-hover:text-[#c76d4e] transition-colors duration-300">{item.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-[#1a2456] font-bold">{item.price}</span>
                <span className="text-sm text-[#c76d4e] group-hover:underline flex items-center">
                  Shop Now
                  <svg 
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default NewArrivals; 