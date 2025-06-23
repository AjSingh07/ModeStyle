import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const TrendingSection = () => {
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollIntervalRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const scrollPosition = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const startAutoScroll = () => {
      // Clear any existing interval first
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }

      scrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
          
          // If we've reached the end, reset to the beginning
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollContainerRef.current.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
          } else {
            scroll('right');
          }
        }
      }, 3000);
    };

    const handleMouseEnter = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
      setIsAutoScrolling(false);
    };

    const handleMouseLeave = () => {
      setIsAutoScrolling(true);
      startAutoScroll();
    };

    // Start auto-scroll if enabled
    if (isAutoScrolling) {
      startAutoScroll();
    }

    // Handle mouse events for the entire section
    const section = document.querySelector('.trending-section');
    if (section) {
      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup function
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
      if (section) {
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isAutoScrolling]);

  const trendingItems = [
    {
      id: 1,
      name: 'Summer Collection',
      category: 'Women',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      discount: '40% OFF',
      price: '$89.99',
      link: '/women/summer-collection'
    },
    {
      id: 2,
      name: 'Casual Wear',
      category: 'Men',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      discount: '45% OFF',
      price: '$79.99',
      link: '/men/casual-wear'
    },
    {
      id: 3,
      name: 'Designer Bags',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      discount: '50% OFF',
      price: '$129.99',
      link: '/accessories/designer-bags'
    },
    {
      id: 4,
      name: 'Kids Fashion',
      category: 'Kids',
      image: 'https://images.unsplash.com/photo-1601925240970-98447486fcdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      discount: '40% OFF',
      price: '$49.99',
      link: '/kids/fashion'
    },
    {
      id: 5,
      name: 'Sports Collection',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      discount: '45% OFF',
      price: '$69.99',
      link: '/sports/collection'
    },
    {
      id: 6,
      name: 'Beauty Essentials',
      category: 'Beauty',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      discount: '50% OFF',
      price: '$59.99',
      link: '/beauty/essentials'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white trending-section">
      <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Trending Now</h2>
            <div className="w-20 h-1 bg-[#1a2456] rounded-full mt-2"></div>
          </div>
          <div className="text-4xl font-bold text-[#1a2456] absolute left-1/2 transform -translate-x-1/2">
            40-50% OFF
          </div>
        </div>

        <div className="relative group">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-2"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mr-2"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-6 hide-scrollbar scroll-smooth px-2"
          >
            <div className="flex space-x-6 min-w-max py-4">
              {trendingItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="group relative w-80 flex-shrink-0 p-2"
                >
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Discount Badge */}
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {item.discount}
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-white/80 text-sm font-medium mb-1">
                        {item.category}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-white font-bold">{item.price}</span>
                        <span className="text-white/80 text-sm">Shop Now →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Gradient Fade Effect */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white pointer-events-none"></div>
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white pointer-events-none"></div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}; 