import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../services/mockData';
import { Trash2, Plus, Minus, ShieldCheck, ChevronRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    mrpTotal, 
    discountTotal, 
    subtotal, 
    shipping, 
    total 
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="w-48 h-48 mb-6 opacity-30">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 max-w-sm text-center">Add medicines and healthcare products to your cart to see them here.</p>
        <Link to="/products" className="btn-primary py-3 px-8 text-lg font-semibold">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8 border-t border-gray-100">
      <div className="container-custom">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart ({cartItems.length} Items)</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
              <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">Medicines & Healthcare</h3>
                <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">Shipment 1 of 1</span>
              </div>
              
              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-5 flex flex-col sm:flex-row gap-6">
                    {/* Item Image */}
                    <Link to={`/product/${item.id}`} className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-gray-50 rounded-xl border border-gray-100 p-2 relative group overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply transition-transform group-hover:scale-110" />
                    </Link>
                    
                    {/* Item Details */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <Link to={`/product/${item.id}`} className="font-semibold text-gray-900 leading-tight hover:text-primary transition-colors flex-1 line-clamp-2">
                          {item.name}
                        </Link>
                        <div className="text-right">
                          <p className="font-bold text-lg text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</p>
                          {item.mrp > item.price && (
                            <p className="text-sm text-gray-400 line-through">₹{(item.mrp * item.quantity).toFixed(2)}</p>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-500 mb-4">{item.brand}</p>
                      
                      <div className="mt-auto flex justify-between items-end">
                        <div className="flex items-center gap-3">
                          <button 
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-semibold w-6 text-center">{item.quantity}</span>
                          <button 
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-red-500 transition-colors p-2"
                        >
                          <Trash2 className="w-4 h-4" /> 
                          <span className="hidden sm:inline">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex items-start gap-4">
              <div className="bg-blue-50 text-blue-500 p-2 rounded-full shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                All medicines are dispensed by registered pharmacists and guaranteed 100% genuine.
              </p>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Order Summary</h3>
              
              <div className="space-y-3 pb-6 border-b border-gray-200 mb-6">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Cart Value (MRP)</span>
                  <span>₹{mrpTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-green-600 font-medium">
                  <span>Discount</span>
                  <span>- ₹{discountTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Estimated Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}</span>
                </div>
              </div>

              <div className="flex justify-between font-bold text-lg text-gray-900 mb-6">
                <span>Total Amount</span>
                <span>₹{total.toFixed(2)}</span>
              </div>

              <button className="w-full btn-primary py-4 text-lg font-bold flex items-center justify-center gap-2 mb-4 group">
                Proceed to Checkout
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-center text-gray-400">
                By clicking on Checkout, you agree to our <a href="#" className="underline hover:text-gray-700">Terms of Service</a> and <a href="#" className="underline hover:text-gray-700">Privacy Policy</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
