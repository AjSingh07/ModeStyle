import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export const BuyNowPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Get category from URL parameters
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: productId,
    name: 'Floral Summer Dress',
    price: 89.99,
    description: 'A beautiful floral summer dress perfect for warm days. Made with high-quality, breathable fabric that ensures comfort throughout the day.',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Pink', 'White'],
    features: [
      '100% Cotton',
      'Machine washable',
      'Imported',
      'Model is 5\'10" and wearing size S'
    ],
    shipping: {
      standard: '3-5 business days',
      express: '1-2 business days',
      freeShipping: 'Free shipping on orders over $50'
    }
  };

  const handleQuantityChange = (value) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  const handleCheckout = () => {
    // In a real app, this would handle the checkout process
    alert('Proceeding to checkout...');
  };

  const handleBackClick = () => {
    // Navigate back to the women's page with the category selected
    navigate(`/women?category=${category}`);
  };

  return (
    <main className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={handleBackClick}
          className="mb-8 flex items-center text-[#1a2456] hover:text-[#2a3566]"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to {category}
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[600px] object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                Free Shipping
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-2xl font-bold text-[#1a2456] mt-2">${product.price}</p>
              </div>

              <p className="text-gray-600">{product.description}</p>

              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md ${
                        selectedSize === size
                          ? 'border-[#1a2456] bg-[#1a2456] text-white'
                          : 'border-gray-300 hover:border-[#1a2456]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-md ${
                        selectedColor === color
                          ? 'border-[#1a2456] bg-[#1a2456] text-white'
                          : 'border-gray-300 hover:border-[#1a2456]'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="p-2 border rounded-md hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="p-2 border rounded-md hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Features</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Shipping Info */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Shipping</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Standard: {product.shipping.standard}</p>
                  <p>Express: {product.shipping.express}</p>
                  <p className="text-[#1a2456] font-medium">{product.shipping.freeShipping}</p>
                </div>
              </div>

              {/* Buy Now Button */}
              <button
                onClick={handleCheckout}
                disabled={!selectedSize || !selectedColor}
                className={`w-full py-4 px-6 rounded-lg text-white font-medium ${
                  !selectedSize || !selectedColor
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#1a2456] hover:bg-[#2a3566]'
                }`}
              >
                {!selectedSize || !selectedColor
                  ? 'Please select size and color'
                  : `Buy Now - $${(product.price * quantity).toFixed(2)}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}; 