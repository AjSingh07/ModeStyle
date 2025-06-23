import { useState } from 'react';
import { Search, User, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Add text shadow CSS
  const textShadowStyle = `
    .text-shadow {
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    }
  `;

  const [activeNavItem, setActiveNavItem] = useState('');
  
  const handleNavClick = (item) => {
    setActiveNavItem(item);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <style>{textShadowStyle}</style>
      
      {/* Hero Section */}
      <main className="flex-grow">
        <div className="relative">
          <div className="bg-transparent h-100 min-h-screen md:h-screen max-h-100 flex items-center">
            <div 
              className="absolute inset-0  bg-black bg-cover bg-center z-0"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1470&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/50 to-transparent z-1"></div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-lg">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-shadow">
                  Discover Your<br />
                  Style This Season
                </h1>
                <p className="mt-4 text-lg text-white text-shadow">
                  Explore our new collection featuring timeless pieces designed for the modern individual.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link 
                    to="/women"
                    className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium transition duration-300 ease-out rounded-lg shadow-md bg-[#1a2456] hover:bg-[#2a3566] text-white hover:scale-105 hover:shadow-xl"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#c76d4e] group-hover:translate-x-0 ease">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Shop Women</span>
                    <span className="relative invisible">Shop Women</span>
                  </Link>

                  <Link 
                    to="/men"
                    className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium transition duration-300 ease-out rounded-lg shadow-md bg-[#c76d4e] hover:bg-[#d77d5e] text-white hover:scale-105 hover:shadow-xl"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#1a2456] group-hover:translate-x-0 ease">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Shop Men</span>
                    <span className="relative invisible">Shop Men</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;