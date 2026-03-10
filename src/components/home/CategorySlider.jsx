import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, Stethoscope, Heart, Apple, Leaf, Baby, ChevronRight } from 'lucide-react';

const iconMap = {
  Pill: Pill,
  Stethoscope: Stethoscope,
  Heart: Heart,
  Apple: Apple,
  Leaf: Leaf,
  Baby: Baby
};

const CategorySlider = ({ categories }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
            <p className="text-gray-500">Explore our wide range of healthcare products</p>
          </div>
          <Link to="/categories" className="hidden sm:flex items-center gap-1 text-primary font-semibold hover:text-primary-dark transition-colors">
            View All <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Pill;
            return (
              <Link 
                key={cat.id} 
                to={`/products?category=${encodeURIComponent(cat.name)}`}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 bg-white hover:bg-gray-50 hover:border-primary/30 transition-all shadow-sm hover:shadow-md h-full gap-4 relative overflow-hidden"
              >
                {/* Background Decor */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full ${cat.color} blur-2xl opacity-40 group-hover:opacity-80 transition-opacity -mr-10 -mt-10`}></div>
                
                <div className={`w-16 h-16 rounded-full ${cat.color} flex items-center justify-center text-primary mb-2 shadow-inner z-10 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-center font-semibold text-gray-800 text-sm z-10">
                  {cat.name}
                </h3>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
