import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const CollectionsPage = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();

  const collections = [
    {
      name: 'Summer Collection',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Light, breathable pieces perfect for warm weather and outdoor adventures.',
      products: [
        {
          id: '2001',
          name: 'Summer Maxi Dress',
          price: 89.99,
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2002',
          name: 'Linen Shirt',
          price: 69.99,
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2003',
          name: 'Straw Hat',
          price: 39.99,
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2004',
          name: 'Beach Cover-up',
          price: 49.99,
          image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2005',
          name: 'Summer Shorts',
          price: 54.99,
          image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2006',
          name: 'Sandals',
          price: 79.99,
          image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2007',
          name: 'Sunglasses',
          price: 129.99,
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2008',
          name: 'Beach Bag',
          price: 64.99,
          image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      name: 'Winter Collection',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Warm, cozy pieces designed for comfort and style during the cold months.',
      products: [
        {
          id: '2101',
          name: 'Wool Coat',
          price: 199.99,
          image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2102',
          name: 'Knit Sweater',
          price: 89.99,
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2103',
          name: 'Scarf',
          price: 34.99,
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2104',
          name: 'Winter Boots',
          price: 159.99,
          image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2105',
          name: 'Thermal Leggings',
          price: 44.99,
          image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2106',
          name: 'Gloves',
          price: 29.99,
          image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2107',
          name: 'Beanie',
          price: 24.99,
          image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2108',
          name: 'Winter Jacket',
          price: 179.99,
          image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      name: 'Limited Edition',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Exclusive pieces with unique designs and premium materials. Limited quantities available.',
      products: [
        {
          id: '2201',
          name: 'Designer Dress',
          price: 399.99,
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2202',
          name: 'Artisan Bag',
          price: 299.99,
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2203',
          name: 'Handcrafted Jewelry',
          price: 199.99,
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2204',
          name: 'Limited Watch',
          price: 599.99,
          image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2205',
          name: 'Exclusive Suit',
          price: 799.99,
          image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2206',
          name: 'Premium Shoes',
          price: 249.99,
          image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2207',
          name: 'Artistic Scarf',
          price: 89.99,
          image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2208',
          name: 'Collector\'s Piece',
          price: 899.99,
          image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      name: 'Designer Collaboration',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Exclusive collaborations with renowned designers. Unique pieces that blend creativity and craftsmanship.',
      products: [
        {
          id: '2301',
          name: 'Designer Blazer',
          price: 449.99,
          image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2302',
          name: 'Collaboration Dress',
          price: 349.99,
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2303',
          name: 'Signature Bag',
          price: 399.99,
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2304',
          name: 'Limited Edition Watch',
          price: 799.99,
          image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2305',
          name: 'Exclusive Jewelry',
          price: 299.99,
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2306',
          name: 'Designer Shoes',
          price: 299.99,
          image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2307',
          name: 'Collaboration Shirt',
          price: 199.99,
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2308',
          name: 'Signature Accessory',
          price: 149.99,
          image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        }
      ]
    }
  ];

  // Handle collection selection from URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const collectionName = searchParams.get('collection');
    if (collectionName) {
      const collection = collections.find(col => col.name === collectionName);
      if (collection) {
        setSelectedCollection(collection);
      }
    }
  }, [location.search]);

  const handleCollectionClick = (collection) => {
    setSelectedCollection(collection);
    // Update URL with selected collection
    navigate(`/collections?collection=${collection.name}`);
  };

  const handleBackClick = () => {
    setSelectedCollection(null);
    // Remove collection from URL
    navigate('/collections');
  };

  const handleBuyNow = (productId) => {
    // Pass the collection name in the URL
    navigate(`/buy-now/${productId}?collection=${selectedCollection.name}`);
  };

  const handleAddToCart = (product) => {
    // Add item to cart with default size and color
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: 'One Size', // Default size for collections
      color: 'Default', // Default color
      quantity: 1,
      collection: selectedCollection.name
    };
    
    addToCart(cartItem);
    alert(`${product.name} added to cart!`);
  };

  if (selectedCollection) {
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
              <h1 className="text-4xl font-bold text-[#1a2456]">{selectedCollection.name}</h1>
              <p className="text-gray-600 mt-2">{selectedCollection.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {selectedCollection.products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedCollection.name === 'Limited Edition' && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      LIMITED
                    </div>
                  )}
                  {selectedCollection.name === 'Designer Collaboration' && (
                    <div className="absolute top-2 left-2 bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold">
                      COLLAB
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-xl font-bold text-[#1a2456] mb-4">${product.price}</p>
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
        <h1 className="text-4xl font-bold text-[#1a2456] mb-8">
          Collections
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              onClick={() => handleCollectionClick(collection)}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
                <h2 className="text-white text-2xl font-bold mb-2">
                  {collection.name}
                </h2>
                <p className="text-white/90 text-sm">
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};