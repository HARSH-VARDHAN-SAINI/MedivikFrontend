import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../services/mockData';
import { Star, Shield, Truck, Heart, Share2, Plus, Minus, ShoppingCart, CheckCircle } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { useCart } from '../contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = products.find(p => p.id === id) || products[0];
    setProduct(foundProduct);
    
    // Mock similar products
    setSimilarProducts(products.filter(p => p.category === foundProduct.category && p.id !== foundProduct.id).slice(0, 5));
    setIsAddedToCart(false);
    setQuantity(1);
  }, [id]);

  if (!product) return <div className="min-h-screen py-20 text-center">Loading...</div>;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 3000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="container-custom text-sm text-gray-500 flex items-center gap-2">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/products?category=${product.category}`} className="hover:text-primary transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate max-w-[200px] md:max-w-none">{product.name}</span>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Image Gallery Mock */}
          <div className="relative group">
            {product.discount > 0 && (
              <div className="absolute top-4 left-4 z-10 bg-red-500 text-white font-bold px-3 py-1 rounded-md text-sm shadow-md">
                {product.discount}% OFF
              </div>
            )}
            <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
              <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 flex items-center justify-center min-h-[400px] md:min-h-[500px] relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            {/* Mock thumbnails */}
            <div className="flex gap-4 mt-6 justify-center">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className={`w-20 h-20 rounded-xl border-2 flex items-center justify-center cursor-pointer p-2 bg-gray-50 ${idx === 0 ? 'border-primary' : 'border-gray-100 hover:border-gray-300'}`}>
                  <img src={product.image} alt="thumbnail" className="w-full h-full object-contain mix-blend-multiply" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">
              {product.name}
            </h1>
            <Link to="#" className="text-primary font-semibold hover:underline mb-4 inline-block">
              {product.brand}
            </Link>
            
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <div className="flex items-center bg-green-100 text-primary-dark px-2 py-1 rounded text-sm font-bold">
                <span>{product.rating}</span>
                <Star className="w-4 h-4 ml-1 fill-current" />
              </div>
              <span className="text-sm text-gray-500">
                {product.reviews.toLocaleString()} Ratings & Reviews
              </span>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-4xl font-extrabold text-gray-900">₹{product.price.toFixed(2)}</span>
                {product.mrp > product.price && (
                  <span className="text-lg text-gray-400 line-through font-medium">MRP ₹{product.mrp.toFixed(2)}</span>
                )}
              </div>
              <p className="text-sm text-green-600 font-semibold mb-4">You save ₹{(product.mrp - product.price).toFixed(2)}</p>
              <p className="text-xs text-gray-500">Inclusive of all taxes</p>
            </div>

            {/* Quantity & Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-xl h-14 w-full sm:w-36 bg-white overflow-hidden shadow-sm">
                <button 
                  className="flex-1 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="flex-1 text-center font-bold text-gray-900 border-x border-gray-200">
                  {quantity}
                </span>
                <button 
                  className="flex-1 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className={`flex-1 h-14 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-md ${
                  isAddedToCart ? 'bg-green-500 text-white shadow-green-500/30' : 'btn-primary'
                }`}
              >
                {isAddedToCart ? (
                  <><CheckCircle className="w-6 h-6" /> Added to Cart</>
                ) : (
                  <><ShoppingCart className="w-6 h-6" /> Add to Cart</>
                )}
              </button>
            </div>

            {/* Delivery Check Mock */}
            <div className="bg-gray-50 rounded-xl p-5 mb-8 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Truck className="w-5 h-5 text-gray-500" /> Delivery Options
              </h4>
              <div className="flex gap-2 mb-3">
                <input type="text" placeholder="Enter Pincode" className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
                <button className="bg-white border text-primary border-primary rounded-lg px-4 py-2 text-sm font-semibold hover:bg-primary/5 transition-colors">
                  Check
                </button>
              </div>
              <p className="text-xs text-gray-500">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-full text-primary shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-gray-900">100% Genuine</h5>
                  <p className="text-xs text-gray-500">All products are authentic</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-gray-900">Safe Payment</h5>
                  <p className="text-xs text-gray-500">Your details are secure</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="bg-gray-50 py-12 border-t border-gray-100">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {similarProducts.map(prod => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
