import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const SalePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();

  const saleCategories = [
    {
      name: 'Up to 50% Off',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      discount: '50%',
      products: [
        {
          id: '3001',
          name: 'Casual Dress',
          originalPrice: 89.99,
          salePrice: 44.99,
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3002',
          name: 'Denim Jacket',
          originalPrice: 129.99,
          salePrice: 64.99,
          image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3003',
          name: 'Leather Bag',
          originalPrice: 159.99,
          salePrice: 79.99,
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3004',
          name: 'Classic Watch',
          originalPrice: 299.99,
          salePrice: 149.99,
          image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3005',
          name: 'Sneakers',
          originalPrice: 119.99,
          salePrice: 59.99,
          image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3006',
          name: 'Jewelry Set',
          originalPrice: 199.99,
          salePrice: 99.99,
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3007',
          name: 'Formal Shirt',
          originalPrice: 79.99,
          salePrice: 39.99,
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3008',
          name: 'Designer Belt',
          originalPrice: 89.99,
          salePrice: 44.99,
          image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      name: 'Up to 70% Off',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      discount: '70%',
      products: [
        {
          id: '3101',
          name: 'Evening Dress',
          originalPrice: 299.99,
          salePrice: 89.99,
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3102',
          name: 'Luxury Handbag',
          originalPrice: 399.99,
          salePrice: 119.99,
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3103',
          name: 'Premium Watch',
          originalPrice: 599.99,
          salePrice: 179.99,
          image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3104',
          name: 'Designer Shoes',
          originalPrice: 249.99,
          salePrice: 74.99,
          image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3105',
          name: 'Cashmere Sweater',
          originalPrice: 199.99,
          salePrice: 59.99,
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3106',
          name: 'Diamond Ring',
          originalPrice: 899.99,
          salePrice: 269.99,
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3107',
          name: 'Leather Jacket',
          originalPrice: 349.99,
          salePrice: 104.99,
          image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3108',
          name: 'Designer Suit',
          originalPrice: 599.99,
          salePrice: 179.99,
          image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      name: 'Clearance',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      discount: '80%',
      products: [
        {
          id: '3201',
          name: 'Vintage Dress',
          originalPrice: 199.99,
          salePrice: 39.99,
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3202',
          name: 'Classic Blazer',
          originalPrice: 249.99,
          salePrice: 49.99,
          image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3203',
          name: 'Luxury Bag',
          originalPrice: 499.99,
          salePrice: 99.99,
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3204',
          name: 'Premium Watch',
          originalPrice: 799.99,
          salePrice: 159.99,
          image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3205',
          name: 'Designer Shoes',
          originalPrice: 299.99,
          salePrice: 59.99,
          image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3206',
          name: 'Jewelry Collection',
          originalPrice: 399.99,
          salePrice: 79.99,
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3207',
          name: 'Leather Jacket',
          originalPrice: 449.99,
          salePrice: 89.99,
          image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3208',
          name: 'Formal Suit',
          originalPrice: 699.99,
          salePrice: 139.99,
          image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      name: 'Flash Sale',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      discount: '60%',
      products: [
        {
          id: '3301',
          name: 'Summer Dress',
          originalPrice: 129.99,
          salePrice: 51.99,
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3302',
          name: 'Casual Shirt',
          originalPrice: 69.99,
          salePrice: 27.99,
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3303',
          name: 'Crossbody Bag',
          originalPrice: 99.99,
          salePrice: 39.99,
          image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3304',
          name: 'Sport Watch',
          originalPrice: 199.99,
          salePrice: 79.99,
          image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3305',
          name: 'Sneakers',
          originalPrice: 149.99,
          salePrice: 59.99,
          image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3306',
          name: 'Necklace',
          originalPrice: 159.99,
          salePrice: 63.99,
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3307',
          name: 'Denim Jacket',
          originalPrice: 179.99,
          salePrice: 71.99,
          image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3308',
          name: 'Leather Belt',
          originalPrice: 79.99,
          salePrice: 31.99,
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        }
      ]
    }
  ];

  // Handle category selection from URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryName = searchParams.get('category');
    if (categoryName) {
      const category = saleCategories.find(cat => cat.name === categoryName);
      if (category) {
        setSelectedCategory(category);
      }
    }
  }, [location.search]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // Update URL with selected category
    navigate(`/sale?category=${category.name}`);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
    // Remove category from URL
    navigate('/sale');
  };

  const handleBuyNow = (productId) => {
    // Pass the category name in the URL
    navigate(`/buy-now/${productId}?sale=${selectedCategory.name}`);
  };

  const handleAddToCart = (product) => {
    // Add item to cart with default size and color
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.salePrice,
      image: product.image,
      size: 'One Size', // Default size for sale items
      color: 'Default', // Default color
      quantity: 1,
      sale: selectedCategory.name
    };
    
    addToCart(cartItem);
    alert(`${product.name} added to cart!`);
  };

  if (selectedCategory) {
    return (
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <button
              onClick={handleBackClick}
              className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <h1 className="text-4xl font-bold text-[#1a2456]">{selectedCategory.name}</h1>
              <p className="text-red-600 font-semibold mt-2">Save up to {selectedCategory.discount}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {selectedCategory.products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    SALE
                  </div>
                  <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                    {Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)}% OFF
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <p className="text-xl font-bold text-[#1a2456]">${product.salePrice}</p>
                    <p className="text-gray-500 line-through text-sm">${product.originalPrice}</p>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleBuyNow(product.id)}
                      className="flex-1 bg-[#1a2456] text-white py-2 px-4 rounded-lg hover:bg-[#2a3566] transition-colors"
                    >
                      Buy Now
                    </button>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 border border-[#1a2456] text-[#1a2456] py-2 px-4 rounded-lg hover:bg-[#1a2456] hover:text-white transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1a2456] mb-4">
            SALE
          </h1>
          <p className="text-xl text-gray-600">Amazing deals on premium fashion items</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {saleCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category)}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-6">
                <h2 className="text-white text-xl font-bold mb-2">
                  {category.name}
                </h2>
                <p className="text-red-400 font-bold text-lg">
                  Save up to {category.discount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};