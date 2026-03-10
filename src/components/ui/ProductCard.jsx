import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full">
      {/* Product Image */}
      <div className="relative pt-[100%] bg-gray-50 flex-shrink-0">
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className="absolute top-0 left-0 w-full h-full object-contain p-4 mix-blend-multiply"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-gray-900 font-semibold text-sm line-clamp-2 min-h-[40px] mb-1">
          <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-xs text-gray-500 mb-2">{product.brand}</p>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center bg-green-100 text-primary-dark px-1.5 py-0.5 rounded text-xs font-bold">
            <span>{product.rating}</span>
            <Star className="w-3 h-3 ml-0.5 fill-current" />
          </div>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>

        {/* Price & Action */}
        <div className="mt-auto flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">₹{product.price.toFixed(2)}</span>
            </div>
            {product.mrp > product.price && (
              <span className="text-xs text-gray-400 line-through">MRP ₹{product.mrp.toFixed(2)}</span>
            )}
          </div>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="bg-primary/10 text-primary hover:bg-primary hover:text-white p-2 rounded-full transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
