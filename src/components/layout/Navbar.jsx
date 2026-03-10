import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import LoginModal from '../auth/LoginModal';
import { useCart } from '../../contexts/CartContext';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const { cartCount } = useCart();
  return (
    <nav className="bg-white shadow-soft sticky w-full z-50 top-0">
      <div className="container-custom py-3">
        {/* Top bar */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Medivik Logo" className="h-25" />
          </Link>

          {/* Search Bar - Desktop hidden on small screens */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8 relative">
            <input
              type="text"
              placeholder="Search for medicines, health products..."
              className="w-full pl-5 pr-12 py-2.5 bg-gray-100 border-none rounded-full focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-inner"
            />
            <button className="absolute right-2 top-1.5 p-1 text-gray-400 hover:text-primary">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setIsLoginOpen(true)}
              className="hidden md:flex flex-col items-center text-gray-600 hover:text-primary transition-colors"
            >
              <User className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Login/Signup</span>
            </button>
            <Link to="/cart" className="flex flex-col items-center text-gray-600 hover:text-primary transition-colors relative">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 mb-1" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-accent text-gray-900 text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-medium hidden sm:block">Cart</span>
            </Link>
            <button className="md:hidden text-gray-600">
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Nav / Categories - Desktop hidden on small */}
      <div className="hidden md:block border-t border-gray-100 bg-gray-50/50">
        <div className="container-custom">
          <ul className="flex items-center gap-8 py-2.5 text-sm font-medium text-gray-600">
            <li><Link to="/categories" className="hover:text-primary transition-colors">Medicines</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Healthcare Devices</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Personal Care</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Nutrition & Supplements</Link></li>
            <li><Link to="/prescription" className="text-primary hover:text-primary-dark font-semibold transition-colors flex items-center gap-1">Upload Prescription</Link></li>
          </ul>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </nav>
  );
};

export default Navbar;
