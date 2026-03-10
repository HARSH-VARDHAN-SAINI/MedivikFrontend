import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { products, categories } from '../services/mockData';
import { Filter, ChevronDown, Check } from 'lucide-react';

const ProductList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category');

  const [displayProducts, setDisplayProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'All');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    if (activeCategory === 'All') {
      setDisplayProducts(products);
    } else {
      setDisplayProducts(products.filter(p => p.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="bg-gray-50 min-h-screen py-8 border-t border-gray-100">
      <div className="container-custom">
        {/* Breadcrumb & Title */}
        <div className="mb-6">
          <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-gray-900 font-medium">{activeCategory}</span>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {activeCategory === 'All' ? 'All Products' : activeCategory}
            </h1>
            <button 
              className="md:hidden flex items-center gap-2 btn-secondary py-1.5 px-3"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            >
              <Filter className="w-4 h-4" /> Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`
            md:block md:w-64 flex-shrink-0 bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-xl md:shadow-none p-6 md:p-0 
            fixed md:relative inset-y-0 left-0 z-40 transform transition-transform duration-300 md:transform-none ease-in-out
            ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}>
            <div className="mb-8 hidden md:block">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" /> Filters
              </h2>
            </div>
            
            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-3 flex justify-between items-center">
                Categories <ChevronDown className="w-4 h-4 text-gray-400" />
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${activeCategory === 'All' ? 'bg-primary border-primary' : 'border-gray-300 group-hover:border-primary'}`}>
                    {activeCategory === 'All' && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <span className={`text-sm ${activeCategory === 'All' ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>All Products</span>
                </label>
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${activeCategory === cat.name ? 'bg-primary border-primary' : 'border-gray-300 group-hover:border-primary'}`}>
                      {activeCategory === cat.name && <Check className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <span className={`text-sm ${activeCategory === cat.name ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                      {cat.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter Mock */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4 flex justify-between items-center">
                Price <ChevronDown className="w-4 h-4 text-gray-400" />
              </h3>
              <div className="space-y-3">
                <label className="flex justify-between text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                  <span>Under ₹500</span>
                  <span className="text-gray-400 text-xs">24</span>
                </label>
                <label className="flex justify-between text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                  <span>₹500 - ₹1000</span>
                  <span className="text-gray-400 text-xs">15</span>
                </label>
                <label className="flex justify-between text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                  <span>Over ₹1000</span>
                  <span className="text-gray-400 text-xs">8</span>
                </label>
              </div>
            </div>

            {/* Close Mobile Filter */}
            <button 
              className="md:hidden btn-primary w-full py-3"
              onClick={() => setIsMobileFilterOpen(false)}
            >
              Show Results
            </button>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 mb-6 shadow-sm">
              <span className="text-sm text-gray-500 font-medium">
                Showing <strong className="text-gray-900">{displayProducts.length}</strong> products
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 hidden sm:block">Sort by:</span>
                <select className="text-sm border-none bg-gray-50 rounded-lg py-2 px-3 focus:ring-0 cursor-pointer font-medium text-gray-700">
                  <option>Popularity</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>

            {displayProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {displayProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center h-[400px] flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  <Filter className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 max-w-sm mx-auto">
                  We couldn't find any products in this specified category. Try adjusting your filters.
                </p>
                <button 
                  onClick={() => setActiveCategory('All')}
                  className="mt-6 text-primary font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
