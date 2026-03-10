import React from 'react';
import ProductCard from '../ui/ProductCard';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const FeaturedProducts = ({ products }) => {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-500">Top selling medicines and healthcare products</p>
          </div>
          <Link to="/products" className="hidden sm:flex items-center gap-1 text-primary font-semibold hover:text-primary-dark transition-colors">
            View All <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <Link to="/products" className="inline-flex items-center gap-2 btn-secondary w-full justify-center">
            View All Products <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
