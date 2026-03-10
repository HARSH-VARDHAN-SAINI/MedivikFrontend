import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary-dark via-primary to-primary-light text-white py-12 md:py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-accent opacity-20 blur-3xl"></div>

      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <div className="max-w-xl">
          <span className="inline-block py-1 px-3 rounded-full bg-accent text-primary-dark text-xs font-bold tracking-wider mb-6 uppercase shadow-sm">
            Special Launch Offer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Your Health, <br/>
            <span className="text-accent">Our Priority</span>
          </h1>
          <p className="text-lg text-green-50 mb-8 max-w-lg leading-relaxed">
            Get Flat <strong className="text-accent">20% OFF</strong> on all genuine medicines and healthcare products. Fast delivery, trusted by thousands.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/products" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2">
              Shop Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/prescription" className="bg-transparent border-2 border-white/30 hover:border-white text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center gap-2">
              Upload Prescription
            </Link>
          </div>
        </div>
        
        {/* Banner Graphics */}
        <div className="hidden md:block flex-shrink-0 relative w-full max-w-md lg:max-w-lg isolate drop-shadow-2xl">
          {/* We use an abstract medical illustration placeholder */}
          <div className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1550831107-1553da8c8464?w=800&q=80" 
              alt="Healthcare Products" 
              className="rounded-2xl w-full h-auto object-cover aspect-video mix-blend-overlay opacity-90"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce shadow-soft max-w-xs transform -rotate-3">
              <div className="bg-green-100 p-2 rounded-full text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Verified</p>
                <p className="font-bold text-sm">100% Genuine Products</p>
              </div>
            </div>
            {/* Floating Badge 2 */}
            <div className="absolute -top-6 -right-6 bg-white text-gray-800 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-pulse shadow-soft max-w-[200px] transform rotate-3">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Delivery</p>
                <p className="font-bold text-sm">Super Fast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
