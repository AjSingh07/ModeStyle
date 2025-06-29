import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';

export const CartPage = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const [removeMessage, setRemoveMessage] = useState('');

  const handleRemoveItem = (cartId, itemName) => {
    setItemToRemove({ cartId, itemName });
    setShowRemoveModal(true);
  };

  const confirmRemove = () => {
    if (itemToRemove) {
      removeFromCart(itemToRemove.cartId);
      setRemoveMessage(`${itemToRemove.itemName} removed from cart successfully!`);
      setShowRemoveModal(false);
      setItemToRemove(null);
      
      // Clear message after 3 seconds
      setTimeout(() => {
        setRemoveMessage('');
      }, 3000);
    }
  };

  const handleQuantityChange = (cartId, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 1) {
      updateQuantity(cartId, newQuantity);
    }
  };

  const handleBuyNow = (item) => {
    // Navigate to buy now page with the item details
    navigate(`/buy-now/${item.id}?category=${item.category || 'general'}`);
  };

  const handleCheckout = () => {
    // In a real app, this would redirect to checkout
    alert('Proceeding to checkout...');
  };

  if (items.length === 0) {
    return (
      <main className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto h-24 w-24 text-gray-400 mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link
              to="/women"
              className="inline-flex items-center px-6 py-3 bg-[#1a2456] text-white rounded-lg hover:bg-[#2a3566] transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Remove Message */}
        {removeMessage && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 border border-green-200 rounded-md">
            {removeMessage}
          </div>
        )}

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-lg hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Trash2 size={16} className="mr-2" />
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {items.map((item) => (
                <div key={item.cartId} className="p-6 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center space-x-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">
                        Size: {item.size} | Color: {item.color}
                      </p>
                      <p className="text-lg font-bold text-[#1a2456]">${item.price}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.cartId, item.quantity, -1)}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 shadow-sm hover:shadow-md"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center text-gray-900 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.cartId, item.quantity, 1)}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 shadow-sm hover:shadow-md"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Total Price */}
                    <div className="text-right">
                      <p className="text-lg font-bold text-[#1a2456]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col space-y-2">
                      <button
                        onClick={() => handleBuyNow(item)}
                        className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#1a2456] to-[#2a3566] text-white text-sm font-medium rounded-lg hover:from-[#2a3566] hover:to-[#3a4566] transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Buy Now
                      </button>
                      <button
                        onClick={() => handleRemoveItem(item.cartId, item.name)}
                        className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-lg hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        <Trash2 size={14} className="mr-2" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({items.length} items)</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-[#1a2456] to-[#2a3566] text-white py-4 px-6 rounded-lg hover:from-[#2a3566] hover:to-[#3a4566] transform hover:scale-105 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Proceed to Checkout
                </div>
              </button>

              <div className="mt-4 text-center">
                <Link
                  to="/women"
                  className="inline-flex items-center text-sm text-[#1a2456] hover:text-[#2a3566] font-medium transition-all duration-200 hover:underline"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Remove Confirmation Modal */}
      {showRemoveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Remove Item</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to remove "{itemToRemove?.itemName}" from your cart?
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowRemoveModal(false)}
                className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmRemove}
                className="flex-1 py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}; 