import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const BuyNowPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState('');
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('general');

  // All products data - in a real app, this would come from an API
  const allProducts = {
    // Dresses
    '1': {
      id: '1',
      name: 'Floral Summer Dress',
      price: 89.99,
      description: 'A beautiful floral summer dress perfect for warm days. Made with high-quality, breathable fabric that ensures comfort throughout the day.',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Blue', 'Pink', 'White'],
      features: ['100% Cotton', 'Machine washable', 'Imported', 'Model is 5\'10" and wearing size S'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2': {
      id: '2',
      name: 'Evening Gown',
      price: 199.99,
      description: 'An elegant evening gown perfect for formal occasions. Features a sophisticated design with premium fabric and exquisite detailing.',
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Red', 'Navy'],
      features: ['Premium Silk', 'Dry clean only', 'Imported', 'Perfect for formal events'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '3': {
      id: '3',
      name: 'Casual Maxi Dress',
      price: 69.99,
      description: 'A comfortable and stylish maxi dress for everyday wear. Perfect for casual outings and relaxed occasions.',
      image: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Gray', 'Blue', 'Green'],
      features: ['Soft Cotton Blend', 'Machine washable', 'Comfortable fit', 'Perfect for daily wear'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '4': {
      id: '4',
      name: 'Office Dress',
      price: 129.99,
      description: 'A professional office dress designed for the modern workplace. Combines style with comfort for long workdays.',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Gray'],
      features: ['Professional design', 'Wrinkle-resistant', 'Comfortable for all-day wear', 'Office appropriate'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '5': {
      id: '5',
      name: 'Cocktail Party Dress',
      price: 159.99,
      description: 'A stunning cocktail dress perfect for parties and special occasions. Features an elegant design with premium materials.',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Red', 'Black', 'Gold'],
      features: ['Premium fabric', 'Elegant design', 'Perfect for parties', 'Attention-grabbing style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Tops
    '101': {
      id: '101',
      name: 'Classic White Blouse',
      price: 49.99,
      description: 'A timeless white blouse that pairs perfectly with any bottom. Made from high-quality cotton for comfort and durability.',
      image: 'https://images.unsplash.com/photo-1551048632-24e444b48a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Ivory', 'Cream'],
      features: ['100% Cotton', 'Machine washable', 'Versatile design', 'Professional look'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '102': {
      id: '102',
      name: 'Silk Button-Up Shirt',
      price: 79.99,
      description: 'A luxurious silk button-up shirt that feels as good as it looks. Perfect for both professional and casual settings.',
      image: 'https://images.unsplash.com/photo-1551048632-24e444b48a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Pink'],
      features: ['100% Silk', 'Dry clean recommended', 'Luxurious feel', 'Elegant design'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '103': {
      id: '103',
      name: 'Casual T-Shirt',
      price: 29.99,
      description: 'A comfortable and stylish casual t-shirt perfect for everyday wear. Made from soft, breathable cotton.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Gray', 'Navy'],
      features: ['100% Cotton', 'Machine washable', 'Comfortable fit', 'Everyday essential'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Bottoms
    '201': {
      id: '201',
      name: 'High-Waist Jeans',
      price: 89.99,
      description: 'Stylish high-waist jeans that flatter any figure. Made from premium denim with perfect stretch and comfort.',
      image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Blue', 'Black', 'Light Blue'],
      features: ['Premium denim', 'High-waist design', 'Perfect stretch', 'Flattering fit'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '202': {
      id: '202',
      name: 'Skinny Jeans',
      price: 79.99,
      description: 'Classic skinny jeans that hug your curves perfectly. Made from comfortable stretch denim for all-day wear.',
      image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Blue', 'Black', 'Gray'],
      features: ['Stretch denim', 'Skinny fit', 'Comfortable wear', 'Versatile style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Outerwear
    '301': {
      id: '301',
      name: 'Classic Blazer',
      price: 129.99,
      description: 'A timeless blazer that adds sophistication to any outfit. Perfect for professional settings and formal occasions.',
      image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Gray'],
      features: ['Professional design', 'Wrinkle-resistant', 'Perfect fit', 'Timeless style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '302': {
      id: '302',
      name: 'Denim Jacket',
      price: 89.99,
      description: 'A classic denim jacket that never goes out of style. Perfect for layering and adding a casual touch to any outfit.',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Blue', 'Light Blue', 'Black'],
      features: ['Classic denim', 'Versatile style', 'Perfect for layering', 'Timeless design'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Activewear
    '401': {
      id: '401',
      name: 'Yoga Pants',
      price: 59.99,
      description: 'Comfortable yoga pants perfect for workouts and casual wear. Made from breathable, stretchy fabric.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Gray', 'Navy'],
      features: ['Breathable fabric', 'Perfect stretch', 'Comfortable fit', 'Great for workouts'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '402': {
      id: '402',
      name: 'Sports Bra',
      price: 39.99,
      description: 'Supportive sports bra designed for comfort during workouts. Provides excellent support and breathability.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Gray', 'Pink'],
      features: ['Excellent support', 'Breathable fabric', 'Comfortable fit', 'Perfect for workouts'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Men's Shirts
    '501': {
      id: '501',
      name: 'Classic White Shirt',
      price: 59.99,
      description: 'A timeless white shirt perfect for any occasion. Made from high-quality cotton for comfort and durability.',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Light Blue', 'Pink'],
      features: ['100% Cotton', 'Machine washable', 'Classic design', 'Versatile style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '502': {
      id: '502',
      name: 'Oxford Button-Down',
      price: 79.99,
      description: 'A classic Oxford button-down shirt that combines style with comfort. Perfect for both casual and professional settings.',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Blue', 'Pink'],
      features: ['Oxford cotton', 'Button-down collar', 'Classic fit', 'Professional look'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '503': {
      id: '503',
      name: 'Casual T-Shirt',
      price: 29.99,
      description: 'A comfortable and stylish casual t-shirt perfect for everyday wear. Made from soft, breathable cotton.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Black', 'Gray', 'Navy'],
      features: ['100% Cotton', 'Machine washable', 'Comfortable fit', 'Everyday essential'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '504': {
      id: '504',
      name: 'Polo Shirt',
      price: 44.99,
      description: 'A classic polo shirt that offers both style and comfort. Perfect for casual and semi-formal occasions.',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Black', 'Navy', 'Red'],
      features: ['Pique cotton', 'Classic collar', 'Comfortable fit', 'Versatile style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '505': {
      id: '505',
      name: 'Dress Shirt',
      price: 89.99,
      description: 'A professional dress shirt designed for formal occasions and business settings. Made from premium cotton.',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Black', 'Blue', 'Gray'],
      features: ['Premium cotton', 'Professional design', 'Perfect fit', 'Business appropriate'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '506': {
      id: '506',
      name: 'Henley Shirt',
      price: 39.99,
      description: 'A comfortable henley shirt with a classic design. Perfect for casual wear and layering.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Black', 'Gray', 'Navy'],
      features: ['Soft cotton', 'Henley neckline', 'Comfortable fit', 'Casual style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '507': {
      id: '507',
      name: 'Flannel Shirt',
      price: 64.99,
      description: 'A warm and comfortable flannel shirt perfect for cooler weather. Features a classic plaid pattern.',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Red/Black', 'Blue/Black', 'Green/Black'],
      features: ['Warm flannel', 'Plaid pattern', 'Button-up design', 'Perfect for layering'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '508': {
      id: '508',
      name: 'Silk Shirt',
      price: 119.99,
      description: 'A luxurious silk shirt that feels as good as it looks. Perfect for special occasions and formal events.',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Black', 'Navy', 'Burgundy'],
      features: ['100% Silk', 'Luxurious feel', 'Elegant design', 'Special occasion ready'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Men's Pants
    '601': {
      id: '601',
      name: 'Classic Jeans',
      price: 89.99,
      description: 'Classic jeans with a comfortable fit and timeless style. Made from premium denim for durability.',
      image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['30x32', '32x32', '34x32', '36x32', '38x32'],
      colors: ['Blue', 'Dark Blue', 'Black'],
      features: ['Premium denim', 'Classic fit', 'Comfortable wear', 'Timeless style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '602': {
      id: '602',
      name: 'Chino Pants',
      price: 69.99,
      description: 'Versatile chino pants perfect for both casual and professional settings. Made from comfortable cotton twill.',
      image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['30x32', '32x32', '34x32', '36x32', '38x32'],
      colors: ['Khaki', 'Navy', 'Olive', 'Gray'],
      features: ['Cotton twill', 'Versatile style', 'Comfortable fit', 'Professional look'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '603': {
      id: '603',
      name: 'Dress Pants',
      price: 99.99,
      description: 'Professional dress pants designed for formal occasions and business settings. Made from premium wool blend.',
      image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['30x32', '32x32', '34x32', '36x32', '38x32'],
      colors: ['Black', 'Navy', 'Gray', 'Charcoal'],
      features: ['Wool blend', 'Professional design', 'Perfect fit', 'Business appropriate'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '604': {
      id: '604',
      name: 'Cargo Pants',
      price: 79.99,
      description: 'Functional cargo pants with multiple pockets for storage. Perfect for outdoor activities and casual wear.',
      image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['30x32', '32x32', '34x32', '36x32', '38x32'],
      colors: ['Khaki', 'Olive', 'Black', 'Navy'],
      features: ['Multiple pockets', 'Comfortable fit', 'Durable fabric', 'Functional design'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '605': {
      id: '605',
      name: 'Shorts',
      price: 49.99,
      description: 'Comfortable shorts perfect for warm weather and casual activities. Made from breathable cotton.',
      image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Khaki', 'Navy', 'Gray', 'Olive'],
      features: ['Breathable cotton', 'Comfortable fit', 'Perfect for summer', 'Casual style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '606': {
      id: '606',
      name: 'Slim Fit Jeans',
      price: 94.99,
      description: 'Modern slim fit jeans with a contemporary style. Made from stretch denim for comfort and mobility.',
      image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['30x32', '32x32', '34x32', '36x32', '38x32'],
      colors: ['Blue', 'Dark Blue', 'Black', 'Gray'],
      features: ['Stretch denim', 'Slim fit', 'Modern style', 'Comfortable wear'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '607': {
      id: '607',
      name: 'Khaki Pants',
      price: 74.99,
      description: 'Classic khaki pants with a comfortable fit and versatile style. Perfect for casual and semi-formal occasions.',
      image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['30x32', '32x32', '34x32', '36x32', '38x32'],
      colors: ['Khaki', 'Light Khaki', 'Olive', 'Tan'],
      features: ['Cotton twill', 'Classic fit', 'Versatile style', 'Comfortable wear'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '608': {
      id: '608',
      name: 'Jogger Pants',
      price: 59.99,
      description: 'Comfortable jogger pants with an elastic waistband and cuffed ankles. Perfect for casual and athletic wear.',
      image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy', 'Olive'],
      features: ['Elastic waistband', 'Cuffed ankles', 'Comfortable fit', 'Casual style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Men's Outerwear
    '701': {
      id: '701',
      name: 'Classic Blazer',
      price: 149.99,
      description: 'A timeless blazer that adds sophistication to any outfit. Perfect for professional settings and formal occasions.',
      image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Gray', 'Charcoal'],
      features: ['Professional design', 'Wrinkle-resistant', 'Perfect fit', 'Timeless style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '702': {
      id: '702',
      name: 'Denim Jacket',
      price: 99.99,
      description: 'A classic denim jacket that never goes out of style. Perfect for layering and adding a casual touch to any outfit.',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Blue', 'Light Blue', 'Black', 'Gray'],
      features: ['Classic denim', 'Versatile style', 'Perfect for layering', 'Timeless design'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '703': {
      id: '703',
      name: 'Leather Jacket',
      price: 299.99,
      description: 'A premium leather jacket that exudes style and sophistication. Made from high-quality leather for durability and comfort.',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Brown', 'Tan'],
      features: ['Premium leather', 'Classic design', 'Durable construction', 'Timeless style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '704': {
      id: '704',
      name: 'Bomber Jacket',
      price: 129.99,
      description: 'A stylish bomber jacket with a modern design. Perfect for casual wear and adding a trendy touch to any outfit.',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Olive', 'Gray'],
      features: ['Modern design', 'Comfortable fit', 'Versatile style', 'Trendy look'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '705': {
      id: '705',
      name: 'Sweater',
      price: 79.99,
      description: 'A warm and comfortable sweater perfect for cooler weather. Made from soft wool blend for warmth and comfort.',
      image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Gray', 'Navy', 'Black', 'Burgundy'],
      features: ['Wool blend', 'Warm and comfortable', 'Classic design', 'Perfect for layering'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '706': {
      id: '706',
      name: 'Winter Coat',
      price: 199.99,
      description: 'A warm winter coat designed to keep you comfortable in cold weather. Made from premium materials for insulation.',
      image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Gray', 'Charcoal'],
      features: ['Premium insulation', 'Water-resistant', 'Warm and comfortable', 'Perfect for winter'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '707': {
      id: '707',
      name: 'Cardigan',
      price: 89.99,
      description: 'A comfortable cardigan perfect for layering and casual wear. Made from soft, warm fabric for comfort.',
      image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Gray', 'Navy', 'Black', 'Burgundy'],
      features: ['Soft fabric', 'Comfortable fit', 'Perfect for layering', 'Casual style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '708': {
      id: '708',
      name: 'Peacoat',
      price: 179.99,
      description: 'A classic peacoat with a sophisticated design. Perfect for formal occasions and professional settings.',
      image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Navy', 'Black', 'Gray', 'Charcoal'],
      features: ['Classic design', 'Warm and comfortable', 'Professional look', 'Timeless style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Men's Activewear
    '801': {
      id: '801',
      name: 'Athletic Shorts',
      price: 39.99,
      description: 'Comfortable athletic shorts perfect for workouts and sports activities. Made from breathable, moisture-wicking fabric.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy', 'Red'],
      features: ['Moisture-wicking', 'Breathable fabric', 'Comfortable fit', 'Perfect for workouts'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '802': {
      id: '802',
      name: 'Workout T-Shirt',
      price: 34.99,
      description: 'A comfortable workout t-shirt designed for performance and comfort during exercise. Made from moisture-wicking fabric.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy', 'White'],
      features: ['Moisture-wicking', 'Breathable fabric', 'Comfortable fit', 'Performance design'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '803': {
      id: '803',
      name: 'Gym Pants',
      price: 64.99,
      description: 'Comfortable gym pants perfect for workouts and training sessions. Made from stretchy, breathable fabric.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy', 'Olive'],
      features: ['Stretchy fabric', 'Comfortable fit', 'Perfect for workouts', 'Breathable design'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '804': {
      id: '804',
      name: 'Athletic Tank',
      price: 29.99,
      description: 'A comfortable athletic tank top perfect for intense workouts and training sessions. Made from moisture-wicking fabric.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'White', 'Navy'],
      features: ['Moisture-wicking', 'Breathable fabric', 'Comfortable fit', 'Perfect for intense workouts'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '805': {
      id: '805',
      name: 'Training Jacket',
      price: 89.99,
      description: 'A comfortable training jacket perfect for outdoor workouts and training sessions. Made from breathable, weather-resistant fabric.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy', 'Red'],
      features: ['Weather-resistant', 'Breathable fabric', 'Comfortable fit', 'Perfect for outdoor training'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '806': {
      id: '806',
      name: 'Sports Shorts',
      price: 44.99,
      description: 'Comfortable sports shorts designed for athletic performance. Made from lightweight, breathable fabric.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy', 'White'],
      features: ['Lightweight fabric', 'Breathable design', 'Comfortable fit', 'Perfect for sports'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '807': {
      id: '807',
      name: 'Athletic Pants',
      price: 74.99,
      description: 'Comfortable athletic pants perfect for workouts and training sessions. Made from stretchy, breathable fabric.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy', 'Olive'],
      features: ['Stretchy fabric', 'Comfortable fit', 'Perfect for workouts', 'Breathable design'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '808': {
      id: '808',
      name: 'Workout Hoodie',
      price: 69.99,
      description: 'A comfortable workout hoodie perfect for warm-up sessions and cool-down periods. Made from soft, breathable fabric.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy', 'Red'],
      features: ['Soft fabric', 'Comfortable fit', 'Perfect for warm-ups', 'Breathable design'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Men's Suits
    '901': {
      id: '901',
      name: 'Classic Business Suit',
      price: 399.99,
      description: 'A classic business suit designed for professional settings and formal occasions. Made from premium wool blend.',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Gray', 'Charcoal'],
      features: ['Premium wool blend', 'Professional design', 'Perfect fit', 'Business appropriate'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '902': {
      id: '902',
      name: 'Wedding Suit',
      price: 599.99,
      description: 'An elegant wedding suit perfect for special occasions and formal events. Made from premium materials.',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Gray', 'Charcoal'],
      features: ['Premium materials', 'Elegant design', 'Perfect fit', 'Special occasion ready'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '903': {
      id: '903',
      name: 'Casual Suit',
      price: 299.99,
      description: 'A comfortable casual suit perfect for semi-formal occasions. Made from lightweight, breathable fabric.',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Navy', 'Gray', 'Olive', 'Brown'],
      features: ['Lightweight fabric', 'Comfortable fit', 'Casual design', 'Versatile style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '904': {
      id: '904',
      name: 'Formal Suit',
      price: 499.99,
      description: 'A sophisticated formal suit designed for the most important occasions. Made from premium wool blend.',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Gray', 'Charcoal'],
      features: ['Premium wool blend', 'Sophisticated design', 'Perfect fit', 'Formal occasion ready'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '905': {
      id: '905',
      name: 'Slim Fit Suit',
      price: 449.99,
      description: 'A modern slim fit suit with a contemporary design. Made from premium materials for a sophisticated look.',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Gray', 'Charcoal'],
      features: ['Slim fit design', 'Premium materials', 'Modern style', 'Sophisticated look'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '906': {
      id: '906',
      name: 'Evening Suit',
      price: 699.99,
      description: 'An elegant evening suit perfect for formal events and special occasions. Made from the finest materials.',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Gray', 'Charcoal'],
      features: ['Finest materials', 'Elegant design', 'Perfect fit', 'Evening event ready'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '907': {
      id: '907',
      name: 'Summer Suit',
      price: 349.99,
      description: 'A lightweight summer suit perfect for warm weather occasions. Made from breathable, lightweight fabric.',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Light Gray', 'Beige', 'Light Blue', 'White'],
      features: ['Lightweight fabric', 'Breathable design', 'Comfortable fit', 'Perfect for summer'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '908': {
      id: '908',
      name: 'Designer Suit',
      price: 899.99,
      description: 'A premium designer suit crafted with the highest quality materials and attention to detail. Perfect for the most discerning customers.',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Gray', 'Charcoal'],
      features: ['Premium materials', 'Designer quality', 'Perfect craftsmanship', 'Luxury experience'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Accessories - Bags
    '1001': {
      id: '1001',
      name: 'Leather Handbag',
      price: 129.99,
      description: 'A classic leather handbag with timeless design and premium craftsmanship. Perfect for everyday use and professional settings.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Brown', 'Black', 'Tan', 'Cognac'],
      features: ['Genuine leather', 'Multiple compartments', 'Adjustable strap', 'Timeless design'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1002': {
      id: '1002',
      name: 'Crossbody Bag',
      price: 79.99,
      description: 'A stylish crossbody bag perfect for hands-free convenience. Features a comfortable strap and secure closure.',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Black', 'Brown', 'Navy', 'Gray'],
      features: ['Adjustable strap', 'Secure closure', 'Multiple pockets', 'Comfortable wear'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1003': {
      id: '1003',
      name: 'Tote Bag',
      price: 59.99,
      description: 'A spacious tote bag perfect for shopping, work, or casual outings. Made from durable canvas with leather accents.',
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Beige', 'Gray', 'Navy', 'Black'],
      features: ['Durable canvas', 'Leather accents', 'Spacious interior', 'Comfortable handles'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1004': {
      id: '1004',
      name: 'Backpack',
      price: 89.99,
      description: 'A functional backpack with multiple compartments and comfortable shoulder straps. Perfect for work, school, or travel.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Black', 'Navy', 'Gray', 'Olive'],
      features: ['Multiple compartments', 'Laptop sleeve', 'Comfortable straps', 'Water-resistant'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1005': {
      id: '1005',
      name: 'Clutch Bag',
      price: 49.99,
      description: 'An elegant clutch bag perfect for evening events and special occasions. Features a sophisticated design with secure closure.',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Black', 'Gold', 'Silver', 'Red'],
      features: ['Elegant design', 'Secure closure', 'Perfect for events', 'Sophisticated style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1006': {
      id: '1006',
      name: 'Shoulder Bag',
      price: 99.99,
      description: 'A versatile shoulder bag with adjustable strap and multiple compartments. Perfect for everyday use and professional settings.',
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Black', 'Brown', 'Navy', 'Gray'],
      features: ['Adjustable strap', 'Multiple compartments', 'Versatile design', 'Professional look'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1007': {
      id: '1007',
      name: 'Mini Bag',
      price: 39.99,
      description: 'A compact mini bag perfect for carrying essentials. Features a stylish design with secure closure.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Black', 'Pink', 'Blue', 'White'],
      features: ['Compact design', 'Secure closure', 'Perfect for essentials', 'Stylish look'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1008': {
      id: '1008',
      name: 'Travel Bag',
      price: 149.99,
      description: 'A spacious travel bag designed for comfort and convenience during trips. Features multiple compartments and durable construction.',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Black', 'Navy', 'Gray', 'Olive'],
      features: ['Spacious design', 'Multiple compartments', 'Durable construction', 'Perfect for travel'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Accessories - Jewelry
    '1101': {
      id: '1101',
      name: 'Gold Necklace',
      price: 199.99,
      description: 'A beautiful gold necklace with elegant design and premium craftsmanship. Perfect for special occasions and everyday elegance.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Gold', 'Rose Gold', 'White Gold'],
      features: ['14K Gold', 'Adjustable chain', 'Elegant design', 'Premium quality'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1102': {
      id: '1102',
      name: 'Silver Bracelet',
      price: 89.99,
      description: 'A stylish silver bracelet with modern design and comfortable fit. Perfect for layering or wearing alone.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Silver', 'Sterling Silver'],
      features: ['Sterling silver', 'Adjustable fit', 'Modern design', 'Comfortable wear'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1103': {
      id: '1103',
      name: 'Diamond Ring',
      price: 599.99,
      description: 'A stunning diamond ring with brilliant cut stones and elegant setting. Perfect for engagement or special occasions.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['6', '7', '8', '9'],
      colors: ['White Gold', 'Yellow Gold', 'Rose Gold'],
      features: ['Natural diamonds', 'Brilliant cut', 'Elegant setting', 'Premium quality'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1104': {
      id: '1104',
      name: 'Pearl Earrings',
      price: 129.99,
      description: 'Elegant pearl earrings with classic design and premium freshwater pearls. Perfect for formal occasions and everyday elegance.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['White', 'Pink', 'Cream'],
      features: ['Freshwater pearls', 'Sterling silver posts', 'Classic design', 'Timeless elegance'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1105': {
      id: '1105',
      name: 'Rose Gold Chain',
      price: 159.99,
      description: 'A beautiful rose gold chain with modern design and comfortable fit. Perfect for layering or wearing as a statement piece.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Rose Gold'],
      features: ['14K Rose Gold', 'Adjustable length', 'Modern design', 'Versatile style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1106': {
      id: '1106',
      name: 'Crystal Pendant',
      price: 79.99,
      description: 'A stunning crystal pendant with brilliant sparkle and elegant design. Perfect for adding glamour to any outfit.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Clear', 'Blue', 'Pink', 'Purple'],
      features: ['Swarovski crystals', 'Sterling silver chain', 'Brilliant sparkle', 'Elegant design'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1107': {
      id: '1107',
      name: 'Gemstone Ring',
      price: 299.99,
      description: 'A beautiful gemstone ring featuring natural stones and elegant setting. Perfect for adding color and style to any look.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['6', '7', '8', '9'],
      colors: ['Sapphire', 'Ruby', 'Emerald', 'Amethyst'],
      features: ['Natural gemstones', 'Sterling silver setting', 'Elegant design', 'Unique colors'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1108': {
      id: '1108',
      name: 'Layered Necklace',
      price: 119.99,
      description: 'A trendy layered necklace with multiple chains and modern design. Perfect for creating a stylish, layered look.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Gold', 'Silver', 'Rose Gold'],
      features: ['Multiple layers', 'Adjustable length', 'Trendy design', 'Versatile style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Accessories - Shoes
    '1201': {
      id: '1201',
      name: 'Classic Heels',
      price: 129.99,
      description: 'Elegant classic heels with comfortable design and premium materials. Perfect for formal occasions and professional settings.',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['6', '7', '8', '9', '10'],
      colors: ['Black', 'Navy', 'Red', 'Nude'],
      features: ['Premium leather', 'Comfortable heel', 'Cushioned insole', 'Elegant design'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1202': {
      id: '1202',
      name: 'Sneakers',
      price: 89.99,
      description: 'Comfortable and stylish sneakers perfect for casual wear and everyday activities. Made from breathable materials.',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['6', '7', '8', '9', '10'],
      colors: ['White', 'Black', 'Gray', 'Navy'],
      features: ['Breathable mesh', 'Cushioned sole', 'Comfortable fit', 'Casual style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1203': {
      id: '1203',
      name: 'Boots',
      price: 159.99,
      description: 'Stylish boots perfect for cooler weather and outdoor activities. Made from durable materials with comfortable fit.',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['6', '7', '8', '9', '10'],
      colors: ['Black', 'Brown', 'Tan', 'Gray'],
      features: ['Durable leather', 'Water-resistant', 'Comfortable fit', 'Versatile style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1204': {
      id: '1204',
      name: 'Sandals',
      price: 69.99,
      description: 'Comfortable sandals perfect for warm weather and casual outings. Features adjustable straps and cushioned sole.',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['6', '7', '8', '9', '10'],
      colors: ['Brown', 'Black', 'Tan', 'White'],
      features: ['Adjustable straps', 'Cushioned sole', 'Comfortable fit', 'Perfect for summer'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1205': {
      id: '1205',
      name: 'Flats',
      price: 79.99,
      description: 'Comfortable flats perfect for everyday wear and professional settings. Made from soft, flexible materials.',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['6', '7', '8', '9', '10'],
      colors: ['Black', 'Navy', 'Gray', 'Red'],
      features: ['Soft leather', 'Flexible sole', 'Comfortable fit', 'Professional look'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1206': {
      id: '1206',
      name: 'Wedges',
      price: 99.99,
      description: 'Stylish wedges with comfortable design and elegant look. Perfect for adding height while maintaining comfort.',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['6', '7', '8', '9', '10'],
      colors: ['Black', 'Nude', 'White', 'Brown'],
      features: ['Comfortable wedge', 'Cushioned insole', 'Elegant design', 'Versatile style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1207': {
      id: '1207',
      name: 'Loafers',
      price: 109.99,
      description: 'Classic loafers with timeless design and comfortable fit. Perfect for professional settings and casual wear.',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['6', '7', '8', '9', '10'],
      colors: ['Black', 'Brown', 'Navy', 'Tan'],
      features: ['Premium leather', 'Slip-on design', 'Comfortable fit', 'Timeless style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1208': {
      id: '1208',
      name: 'Pumps',
      price: 119.99,
      description: 'Elegant pumps with classic design and comfortable fit. Perfect for formal occasions and professional settings.',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['6', '7', '8', '9', '10'],
      colors: ['Black', 'Nude', 'Red', 'Navy'],
      features: ['Classic design', 'Comfortable heel', 'Premium materials', 'Professional look'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Accessories - Watches
    '1301': {
      id: '1301',
      name: 'Classic Watch',
      price: 299.99,
      description: 'A timeless classic watch with elegant design and reliable movement. Perfect for everyday wear and special occasions.',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Silver', 'Gold', 'Rose Gold'],
      features: ['Swiss movement', 'Stainless steel case', 'Leather strap', 'Water-resistant'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1302': {
      id: '1302',
      name: 'Smart Watch',
      price: 399.99,
      description: 'A modern smart watch with advanced features and sleek design. Perfect for fitness tracking and staying connected.',
      image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Black', 'Silver', 'Rose Gold'],
      features: ['Fitness tracking', 'Heart rate monitor', 'GPS', 'Water-resistant'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1303': {
      id: '1303',
      name: 'Luxury Watch',
      price: 899.99,
      description: 'A premium luxury watch with exceptional craftsmanship and sophisticated design. Perfect for collectors and connoisseurs.',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Gold', 'Platinum', 'Rose Gold'],
      features: ['Automatic movement', 'Precious metals', 'Sapphire crystal', 'Limited edition'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1304': {
      id: '1304',
      name: 'Sport Watch',
      price: 199.99,
      description: 'A durable sport watch designed for active lifestyles and outdoor activities. Features robust construction and essential functions.',
      image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Black', 'Blue', 'Red', 'Green'],
      features: ['Shock-resistant', 'Water-resistant', 'Stopwatch', 'Durable design'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1305': {
      id: '1305',
      name: 'Minimalist Watch',
      price: 159.99,
      description: 'A clean minimalist watch with simple design and essential functionality. Perfect for those who appreciate understated elegance.',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Silver', 'Black', 'Rose Gold'],
      features: ['Clean design', 'Leather strap', 'Quartz movement', 'Versatile style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1306': {
      id: '1306',
      name: 'Dress Watch',
      price: 249.99,
      description: 'An elegant dress watch perfect for formal occasions and professional settings. Features sophisticated design and reliable movement.',
      image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Silver', 'Gold', 'Black'],
      features: ['Elegant design', 'Leather strap', 'Swiss movement', 'Professional look'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1307': {
      id: '1307',
      name: 'Chronograph Watch',
      price: 349.99,
      description: 'A sophisticated chronograph watch with multiple functions and sporty design. Perfect for timing activities and sports.',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Black', 'Silver', 'Blue'],
      features: ['Chronograph function', 'Tachymeter', 'Stainless steel', 'Water-resistant'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1308': {
      id: '1308',
      name: 'Vintage Watch',
      price: 599.99,
      description: 'A beautiful vintage watch with classic design and historical appeal. Perfect for collectors and vintage enthusiasts.',
      image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Gold', 'Silver', 'Rose Gold'],
      features: ['Vintage design', 'Mechanical movement', 'Leather strap', 'Collector\'s piece'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Accessories - Belts
    '1401': {
      id: '1401',
      name: 'Leather Belt',
      price: 49.99,
      description: 'A classic leather belt with timeless design and durable construction. Perfect for everyday wear and professional settings.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Brown', 'Black', 'Tan'],
      features: ['Genuine leather', 'Brass buckle', 'Adjustable fit', 'Timeless design'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1402': {
      id: '1402',
      name: 'Designer Belt',
      price: 89.99,
      description: 'A premium designer belt with sophisticated design and high-quality materials. Perfect for making a statement.',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown', 'Navy'],
      features: ['Premium leather', 'Designer buckle', 'Signature logo', 'Luxury quality'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1403': {
      id: '1403',
      name: 'Casual Belt',
      price: 39.99,
      description: 'A comfortable casual belt perfect for everyday wear and relaxed occasions. Made from soft, flexible materials.',
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Brown', 'Black', 'Gray'],
      features: ['Soft leather', 'Comfortable fit', 'Casual design', 'Everyday wear'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1404': {
      id: '1404',
      name: 'Formal Belt',
      price: 69.99,
      description: 'An elegant formal belt designed for professional settings and formal occasions. Features sophisticated design and premium materials.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown', 'Navy'],
      features: ['Premium leather', 'Elegant buckle', 'Professional design', 'Formal occasions'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1405': {
      id: '1405',
      name: 'Braided Belt',
      price: 29.99,
      description: 'A stylish braided belt with unique texture and casual design. Perfect for adding a trendy touch to any outfit.',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Brown', 'Black', 'Tan'],
      features: ['Braided design', 'Adjustable fit', 'Casual style', 'Trendy look'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1406': {
      id: '1406',
      name: 'Reversible Belt',
      price: 59.99,
      description: 'A versatile reversible belt with two different colors. Perfect for maximizing wardrobe options and travel convenience.',
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black/Brown', 'Brown/Tan', 'Black/Navy'],
      features: ['Reversible design', 'Two colors', 'Versatile style', 'Travel-friendly'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1407': {
      id: '1407',
      name: 'Studded Belt',
      price: 79.99,
      description: 'A trendy studded belt with edgy design and statement-making style. Perfect for adding attitude to any outfit.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown', 'Silver'],
      features: ['Studded design', 'Leather construction', 'Edgy style', 'Statement piece'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '1408': {
      id: '1408',
      name: 'Woven Belt',
      price: 44.99,
      description: 'A comfortable woven belt with unique texture and casual design. Perfect for relaxed occasions and everyday wear.',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Brown', 'Black', 'Tan', 'Gray'],
      features: ['Woven design', 'Comfortable fit', 'Casual style', 'Unique texture'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Collections - Summer Collection
    '2001': {
      id: '2001',
      name: 'Summer Maxi Dress',
      price: 89.99,
      description: 'A beautiful summer maxi dress perfect for warm weather and outdoor events. Made from light, breathable fabric.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Blue', 'White', 'Pink', 'Yellow'],
      features: ['Light fabric', 'Breathable design', 'Perfect for summer', 'Elegant style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2002': {
      id: '2002',
      name: 'Linen Shirt',
      price: 69.99,
      description: 'A comfortable linen shirt perfect for hot weather. Features natural fabric and relaxed fit.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Beige', 'Light Blue', 'Pink'],
      features: ['Natural linen', 'Breathable fabric', 'Relaxed fit', 'Summer essential'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2003': {
      id: '2003',
      name: 'Straw Hat',
      price: 39.99,
      description: 'A stylish straw hat perfect for sun protection and summer style. Features a classic design.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Natural', 'Beige', 'White'],
      features: ['Natural straw', 'Sun protection', 'Classic design', 'Summer accessory'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2004': {
      id: '2004',
      name: 'Beach Cover-up',
      price: 49.99,
      description: 'A stylish beach cover-up perfect for poolside and beach days. Made from lightweight, quick-drying fabric.',
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Blue', 'Pink', 'Yellow'],
      features: ['Lightweight fabric', 'Quick-drying', 'Beach essential', 'Stylish design'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2005': {
      id: '2005',
      name: 'Summer Shorts',
      price: 54.99,
      description: 'Comfortable summer shorts perfect for warm weather and casual activities. Made from breathable cotton.',
      image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Khaki', 'Navy', 'White', 'Beige'],
      features: ['Breathable cotton', 'Comfortable fit', 'Summer essential', 'Casual style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2006': {
      id: '2006',
      name: 'Sandals',
      price: 79.99,
      description: 'Comfortable sandals perfect for summer wear and casual outings. Features adjustable straps and cushioned sole.',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['6', '7', '8', '9', '10'],
      colors: ['Brown', 'Black', 'Tan', 'White'],
      features: ['Adjustable straps', 'Cushioned sole', 'Comfortable fit', 'Perfect for summer'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2007': {
      id: '2007',
      name: 'Sunglasses',
      price: 129.99,
      description: 'Stylish sunglasses with UV protection and modern design. Perfect for summer and outdoor activities.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Black', 'Brown', 'Tortoise', 'Clear'],
      features: ['UV protection', 'Modern design', 'Summer essential', 'Stylish accessory'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2008': {
      id: '2008',
      name: 'Beach Bag',
      price: 64.99,
      description: 'A spacious beach bag perfect for carrying essentials to the beach or pool. Made from durable, water-resistant material.',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Blue', 'White', 'Pink', 'Yellow'],
      features: ['Water-resistant', 'Spacious design', 'Beach essential', 'Durable material'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Collections - Winter Collection
    '2101': {
      id: '2101',
      name: 'Wool Coat',
      price: 199.99,
      description: 'A warm and stylish wool coat perfect for cold weather. Features premium wool blend and classic design.',
      image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Gray', 'Camel'],
      features: ['Premium wool blend', 'Warm and cozy', 'Classic design', 'Winter essential'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2102': {
      id: '2102',
      name: 'Knit Sweater',
      price: 89.99,
      description: 'A cozy knit sweater perfect for layering during cold weather. Made from soft, warm wool blend.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Gray', 'Navy', 'Burgundy', 'Cream'],
      features: ['Soft wool blend', 'Cozy and warm', 'Perfect for layering', 'Winter essential'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2103': {
      id: '2103',
      name: 'Scarf',
      price: 34.99,
      description: 'A warm and stylish scarf perfect for cold weather. Made from soft, insulating material.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Gray', 'Navy', 'Red', 'Cream'],
      features: ['Soft material', 'Warm and cozy', 'Winter accessory', 'Versatile style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2104': {
      id: '2104',
      name: 'Winter Boots',
      price: 159.99,
      description: 'Warm and waterproof winter boots perfect for cold and snowy weather. Features insulated lining and durable construction.',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['6', '7', '8', '9', '10'],
      colors: ['Black', 'Brown', 'Gray', 'Navy'],
      features: ['Waterproof', 'Insulated lining', 'Durable construction', 'Winter essential'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2105': {
      id: '2105',
      name: 'Thermal Leggings',
      price: 44.99,
      description: 'Warm thermal leggings perfect for layering under clothes during cold weather. Made from insulating fabric.',
      image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Gray', 'Navy', 'Brown'],
      features: ['Thermal fabric', 'Warm and cozy', 'Perfect for layering', 'Winter essential'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2106': {
      id: '2106',
      name: 'Gloves',
      price: 29.99,
      description: 'Warm and comfortable gloves perfect for cold weather. Made from insulating material with touchscreen compatibility.',
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L'],
      colors: ['Black', 'Gray', 'Navy', 'Brown'],
      features: ['Insulating material', 'Touchscreen compatible', 'Warm and cozy', 'Winter accessory'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2107': {
      id: '2107',
      name: 'Beanie',
      price: 24.99,
      description: 'A warm and stylish beanie perfect for cold weather. Made from soft, insulating material.',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Black', 'Gray', 'Navy', 'Red'],
      features: ['Soft material', 'Warm and cozy', 'Winter accessory', 'Versatile style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2108': {
      id: '2108',
      name: 'Winter Jacket',
      price: 179.99,
      description: 'A warm and stylish winter jacket perfect for cold weather. Features insulated lining and water-resistant exterior.',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Gray', 'Olive'],
      features: ['Insulated lining', 'Water-resistant', 'Warm and cozy', 'Winter essential'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Collections - Limited Edition
    '2201': {
      id: '2201',
      name: 'Designer Dress',
      price: 399.99,
      description: 'An exclusive designer dress with unique craftsmanship and limited availability. Perfect for special occasions.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Red', 'Navy', 'Emerald'],
      features: ['Exclusive design', 'Limited quantity', 'Premium materials', 'Special occasion'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2202': {
      id: '2202',
      name: 'Artisan Bag',
      price: 299.99,
      description: 'A handcrafted artisan bag with unique design and limited production. Each piece is individually crafted.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Brown', 'Black', 'Tan', 'Cognac'],
      features: ['Handcrafted', 'Limited edition', 'Unique design', 'Premium quality'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2203': {
      id: '2203',
      name: 'Handcrafted Jewelry',
      price: 199.99,
      description: 'Exclusive handcrafted jewelry with unique design and limited availability. Perfect for collectors.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Gold', 'Silver', 'Rose Gold'],
      features: ['Handcrafted', 'Limited edition', 'Unique design', 'Collector piece'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2204': {
      id: '2204',
      name: 'Limited Watch',
      price: 599.99,
      description: 'A limited edition watch with exclusive design and numbered production. Perfect for watch enthusiasts.',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Gold', 'Silver', 'Rose Gold'],
      features: ['Limited edition', 'Numbered production', 'Exclusive design', 'Collector piece'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2205': {
      id: '2205',
      name: 'Exclusive Suit',
      price: 799.99,
      description: 'An exclusive designer suit with limited production and premium materials. Perfect for discerning customers.',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Gray', 'Charcoal'],
      features: ['Limited edition', 'Premium materials', 'Exclusive design', 'Perfect fit'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2206': {
      id: '2206',
      name: 'Premium Shoes',
      price: 249.99,
      description: 'Limited edition premium shoes with exclusive design and superior craftsmanship.',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['6', '7', '8', '9', '10'],
      colors: ['Black', 'Brown', 'Navy', 'Burgundy'],
      features: ['Limited edition', 'Premium materials', 'Exclusive design', 'Superior craftsmanship'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2207': {
      id: '2207',
      name: 'Artistic Scarf',
      price: 89.99,
      description: 'A limited edition artistic scarf with unique design and premium materials.',
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Multi-color', 'Blue', 'Red', 'Green'],
      features: ['Limited edition', 'Artistic design', 'Premium materials', 'Unique style'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2208': {
      id: '2208',
      name: 'Collector\'s Piece',
      price: 899.99,
      description: 'An exclusive collector\'s piece with unique design and limited availability. Perfect for serious collectors.',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Gold', 'Silver', 'Platinum'],
      features: ['Collector piece', 'Limited edition', 'Exclusive design', 'Premium materials'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Collections - Designer Collaboration
    '2301': {
      id: '2301',
      name: 'Designer Blazer',
      price: 449.99,
      description: 'A designer collaboration blazer with unique style and premium craftsmanship.',
      image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Gray', 'Charcoal'],
      features: ['Designer collaboration', 'Premium materials', 'Unique design', 'Perfect fit'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2302': {
      id: '2302',
      name: 'Collaboration Dress',
      price: 349.99,
      description: 'An exclusive designer collaboration dress with unique design and premium materials.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Red', 'Navy', 'Emerald'],
      features: ['Designer collaboration', 'Exclusive design', 'Premium materials', 'Special occasion'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2303': {
      id: '2303',
      name: 'Signature Bag',
      price: 399.99,
      description: 'A designer collaboration signature bag with unique design and premium materials.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Black', 'Brown', 'Navy', 'Red'],
      features: ['Designer collaboration', 'Signature design', 'Premium materials', 'Limited edition'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2304': {
      id: '2304',
      name: 'Limited Edition Watch',
      price: 799.99,
      description: 'A designer collaboration limited edition watch with exclusive design and premium materials.',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Gold', 'Silver', 'Rose Gold'],
      features: ['Designer collaboration', 'Limited edition', 'Exclusive design', 'Premium materials'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2305': {
      id: '2305',
      name: 'Exclusive Jewelry',
      price: 299.99,
      description: 'Designer collaboration exclusive jewelry with unique design and premium materials.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Gold', 'Silver', 'Rose Gold'],
      features: ['Designer collaboration', 'Exclusive design', 'Premium materials', 'Limited edition'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2306': {
      id: '2306',
      name: 'Designer Shoes',
      price: 299.99,
      description: 'A designer collaboration shoe collection with unique design and premium materials.',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['6', '7', '8', '9', '10'],
      colors: ['Black', 'Brown', 'Navy', 'Red'],
      features: ['Designer collaboration', 'Unique design', 'Premium materials', 'Limited edition'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2307': {
      id: '2307',
      name: 'Collaboration Shirt',
      price: 199.99,
      description: 'A designer collaboration shirt with unique design and premium materials.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Black', 'Navy', 'Gray'],
      features: ['Designer collaboration', 'Unique design', 'Premium materials', 'Limited edition'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    '2308': {
      id: '2308',
      name: 'Signature Accessory',
      price: 149.99,
      description: 'A designer collaboration signature accessory with unique design and premium materials.',
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      sizes: ['One Size'],
      colors: ['Black', 'Brown', 'Navy', 'Gold'],
      features: ['Designer collaboration', 'Signature design', 'Premium materials', 'Limited edition'],
      shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' }
    },
    // Sale Products - Up to 50% Off
    '3001': { id: '3001', name: 'Casual Dress', price: 44.99, description: 'A comfortable casual dress perfect for everyday wear.', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['Blue', 'Black', 'Gray'], features: ['Comfortable fit', 'Everyday style', 'Versatile design'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3002': { id: '3002', name: 'Denim Jacket', price: 64.99, description: 'A classic denim jacket with timeless style.', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Blue', 'Black', 'Gray'], features: ['Classic design', 'Versatile style', 'Timeless look'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3003': { id: '3003', name: 'Leather Bag', price: 79.99, description: 'A stylish leather bag with premium quality.', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['One Size'], colors: ['Brown', 'Black', 'Tan'], features: ['Premium leather', 'Stylish design', 'Quality construction'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3004': { id: '3004', name: 'Classic Watch', price: 149.99, description: 'A timeless classic watch with elegant design.', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['One Size'], colors: ['Silver', 'Gold', 'Rose Gold'], features: ['Classic design', 'Elegant style', 'Reliable movement'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3005': { id: '3005', name: 'Sneakers', price: 59.99, description: 'Comfortable sneakers perfect for casual wear.', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['6', '7', '8', '9', '10'], colors: ['White', 'Black', 'Gray'], features: ['Comfortable fit', 'Casual style', 'Versatile design'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3006': { id: '3006', name: 'Jewelry Set', price: 99.99, description: 'A beautiful jewelry set with elegant design.', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['One Size'], colors: ['Gold', 'Silver', 'Rose Gold'], features: ['Elegant design', 'Quality materials', 'Perfect gift'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3007': { id: '3007', name: 'Formal Shirt', price: 39.99, description: 'A professional formal shirt for business settings.', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['White', 'Black', 'Blue'], features: ['Professional design', 'Perfect fit', 'Business appropriate'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3008': { id: '3008', name: 'Designer Belt', price: 44.99, description: 'A stylish designer belt with premium quality.', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'Brown', 'Navy'], features: ['Designer quality', 'Premium materials', 'Stylish design'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    // Sale Products - Up to 70% Off
    '3101': { id: '3101', name: 'Evening Dress', price: 89.99, description: 'A stunning evening dress perfect for special occasions.', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['Black', 'Red', 'Navy'], features: ['Elegant design', 'Special occasion', 'Premium materials'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3102': { id: '3102', name: 'Luxury Handbag', price: 119.99, description: 'A luxury handbag with premium materials and design.', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['One Size'], colors: ['Black', 'Brown', 'Navy'], features: ['Luxury materials', 'Premium design', 'Quality construction'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3103': { id: '3103', name: 'Premium Watch', price: 179.99, description: 'A premium watch with sophisticated design and features.', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['One Size'], colors: ['Gold', 'Silver', 'Rose Gold'], features: ['Premium design', 'Sophisticated style', 'Quality movement'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3104': { id: '3104', name: 'Designer Shoes', price: 74.99, description: 'Designer shoes with unique style and premium quality.', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['6', '7', '8', '9', '10'], colors: ['Black', 'Brown', 'Navy'], features: ['Designer quality', 'Unique style', 'Premium materials'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3105': { id: '3105', name: 'Cashmere Sweater', price: 59.99, description: 'A luxurious cashmere sweater with soft, warm feel.', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Gray', 'Navy', 'Cream'], features: ['Luxurious cashmere', 'Soft and warm', 'Premium quality'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3106': { id: '3106', name: 'Diamond Ring', price: 269.99, description: 'A beautiful diamond ring with elegant design.', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['6', '7', '8', '9'], colors: ['White Gold', 'Yellow Gold', 'Rose Gold'], features: ['Beautiful diamonds', 'Elegant design', 'Premium quality'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3107': { id: '3107', name: 'Leather Jacket', price: 104.99, description: 'A stylish leather jacket with premium quality leather.', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'Brown', 'Tan'], features: ['Premium leather', 'Stylish design', 'Quality construction'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3108': { id: '3108', name: 'Designer Suit', price: 179.99, description: 'A designer suit with premium materials and perfect fit.', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'Navy', 'Gray'], features: ['Designer quality', 'Premium materials', 'Perfect fit'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    // Sale Products - Clearance
    '3201': { id: '3201', name: 'Vintage Dress', price: 39.99, description: 'A beautiful vintage dress with classic design.', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['Black', 'Red', 'Navy'], features: ['Vintage design', 'Classic style', 'Unique look'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3202': { id: '3202', name: 'Classic Blazer', price: 49.99, description: 'A classic blazer perfect for professional settings.', image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'Navy', 'Gray'], features: ['Classic design', 'Professional look', 'Perfect fit'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3203': { id: '3203', name: 'Luxury Bag', price: 99.99, description: 'A luxury bag with premium materials and design.', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['One Size'], colors: ['Black', 'Brown', 'Navy'], features: ['Luxury materials', 'Premium design', 'Quality construction'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3204': { id: '3204', name: 'Premium Watch', price: 159.99, description: 'A premium watch with sophisticated design and features.', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['One Size'], colors: ['Gold', 'Silver', 'Rose Gold'], features: ['Premium design', 'Sophisticated style', 'Quality movement'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3205': { id: '3205', name: 'Designer Shoes', price: 59.99, description: 'Designer shoes with unique style and premium quality.', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['6', '7', '8', '9', '10'], colors: ['Black', 'Brown', 'Navy'], features: ['Designer quality', 'Unique style', 'Premium materials'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3206': { id: '3206', name: 'Jewelry Collection', price: 79.99, description: 'A beautiful jewelry collection with elegant design.', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['One Size'], colors: ['Gold', 'Silver', 'Rose Gold'], features: ['Elegant design', 'Quality materials', 'Perfect gift'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3207': { id: '3207', name: 'Leather Jacket', price: 89.99, description: 'A stylish leather jacket with premium quality leather.', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'Brown', 'Tan'], features: ['Premium leather', 'Stylish design', 'Quality construction'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3208': { id: '3208', name: 'Formal Suit', price: 139.99, description: 'A formal suit with premium materials and perfect fit.', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'Navy', 'Gray'], features: ['Premium materials', 'Perfect fit', 'Professional look'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    // Sale Products - Flash Sale
    '3301': { id: '3301', name: 'Summer Dress', price: 51.99, description: 'A beautiful summer dress perfect for warm weather.', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['Blue', 'White', 'Pink'], features: ['Summer style', 'Comfortable fit', 'Beautiful design'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3302': { id: '3302', name: 'Casual Shirt', price: 27.99, description: 'A comfortable casual shirt perfect for everyday wear.', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['White', 'Black', 'Gray'], features: ['Comfortable fit', 'Everyday style', 'Versatile design'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3303': { id: '3303', name: 'Crossbody Bag', price: 39.99, description: 'A stylish crossbody bag perfect for hands-free convenience.', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['One Size'], colors: ['Black', 'Brown', 'Navy'], features: ['Hands-free design', 'Stylish look', 'Convenient wear'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3304': { id: '3304', name: 'Sport Watch', price: 79.99, description: 'A sport watch with modern features and design.', image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['One Size'], colors: ['Black', 'Blue', 'Red'], features: ['Sport design', 'Modern features', 'Durable construction'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3305': { id: '3305', name: 'Sneakers', price: 59.99, description: 'Comfortable sneakers perfect for casual wear and activities.', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['6', '7', '8', '9', '10'], colors: ['White', 'Black', 'Gray'], features: ['Comfortable fit', 'Casual style', 'Versatile design'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3306': { id: '3306', name: 'Necklace', price: 63.99, description: 'A beautiful necklace with elegant design and quality materials.', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['One Size'], colors: ['Gold', 'Silver', 'Rose Gold'], features: ['Elegant design', 'Quality materials', 'Perfect gift'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3307': { id: '3307', name: 'Denim Jacket', price: 71.99, description: 'A classic denim jacket with timeless style and comfort.', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Blue', 'Black', 'Gray'], features: ['Classic design', 'Timeless style', 'Comfortable fit'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } },
    '3308': { id: '3308', name: 'Leather Belt', price: 31.99, description: 'A stylish leather belt with quality materials and design.', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'Brown', 'Tan'], features: ['Quality leather', 'Stylish design', 'Versatile style'], shipping: { standard: '3-5 business days', express: '1-2 business days', freeShipping: 'Free shipping on orders over $50' } }
  };

  // Fetch product data based on productId
  useEffect(() => {
    const fetchProduct = () => {
      setLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        const foundProduct = allProducts[productId];
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          // Handle product not found
          navigate('/women');
        }
        setLoading(false);
      }, 500);
    };

    fetchProduct();
  }, [productId, navigate]);

  // Handle category and sale parameters from URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    const saleParam = searchParams.get('sale');
    const collectionParam = searchParams.get('collection');
    
    if (categoryParam) {
      setCategory(categoryParam);
    } else if (saleParam) {
      setCategory(saleParam);
    } else if (collectionParam) {
      setCategory(collectionParam);
    }
  }, [location.search]);

  const handleQuantityChange = (value) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  const handleCheckout = () => {
    // In a real app, this would handle the checkout process
    alert('Proceeding to checkout...');
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      setCartMessage('Please select size and color first');
      return;
    }

    // Add item to cart using the context
    const cartItem = {
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
      category: category || 'general'
    };

    addToCart(cartItem);
    setCartMessage('Item added to cart successfully!');
    
    // Clear the message after 3 seconds
    setTimeout(() => {
      setCartMessage('');
    }, 3000);
  };

  const handleBackClick = () => {
    // Determine if this is a men's, women's, accessories, collections, or sale product based on product ID
    const productIdNum = parseInt(productId);
    let section = 'women'; // default
    
    // Men's products have IDs 501-908
    if (productIdNum >= 501 && productIdNum <= 908) {
      section = 'men';
    }
    // Accessories products have IDs 1001-1408
    else if (productIdNum >= 1001 && productIdNum <= 1408) {
      section = 'accessories';
    }
    // Collections products have IDs 2001-2308
    else if (productIdNum >= 2001 && productIdNum <= 2308) {
      section = 'collections';
    }
    // Sale products have IDs 3001-3308
    else if (productIdNum >= 3001 && productIdNum <= 3308) {
      section = 'sale';
    }
    
    // Navigate back to the appropriate section with the category selected
    navigate(`/${section}?category=${category}`);
  };

  if (loading) {
    return (
      <main className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a2456] mx-auto mb-4"></div>
              <p className="text-gray-600">Loading product...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
            <button
              onClick={handleBackClick}
              className="text-[#1a2456] hover:text-[#2a3566]"
            >
              Back to {category}
            </button>
          </div>
        </div>
      </main>
    );
  }

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

              {/* Cart Message */}
              {cartMessage && (
                <div className={`p-3 rounded-md text-sm ${
                  cartMessage.includes('successfully') 
                    ? 'bg-green-100 text-green-700 border border-green-200' 
                    : 'bg-red-100 text-red-700 border border-red-200'
                }`}>
                  {cartMessage}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                {/* Buy Now Button */}
                <button
                  onClick={handleCheckout}
                  disabled={!selectedSize || !selectedColor}
                  className={`flex-1 py-3 px-4 rounded-lg text-white font-medium text-sm ${
                    !selectedSize || !selectedColor
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#1a2456] hover:bg-[#2a3566]'
                  }`}
                >
                  {!selectedSize || !selectedColor
                    ? 'Please select size and color'
                    : `Buy Now - $${(product.price * quantity).toFixed(2)}`}
                </button>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize || !selectedColor}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium border-2 text-sm ${
                    !selectedSize || !selectedColor
                      ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                      : 'border-[#1a2456] text-[#1a2456] hover:bg-[#1a2456] hover:text-white'
                  }`}
                >
                  {!selectedSize || !selectedColor
                    ? 'Please select size and color'
                    : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}; 