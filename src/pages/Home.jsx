import React, { useState, useEffect } from 'react';
import HeroBanner from '../components/home/HeroBanner';
import CategorySlider from '../components/home/CategorySlider';
import FeaturedProducts from '../components/home/FeaturedProducts';
import { categories, products } from '../services/mockData';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Simulate API fetch for featured products
    setFeaturedProducts(products.filter(p => p.featured));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroBanner />
      <CategorySlider categories={categories} />
      <FeaturedProducts products={featuredProducts} />
    </div>
  );
};

export default Home;
