"use client";

import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <div 
      className="group glass-effect rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 hover:-translate-y-4 hover:scale-105 cursor-pointer neo-brutalism relative"
      onClick={handleClick}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>
      <div className="absolute inset-[2px] rounded-3xl bg-white/90 backdrop-blur-sm"></div>
      
      {/* Image Container */}
      <div className="relative overflow-hidden z-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-125 transition-transform duration-1000"
        />
        {/* Shimmer effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer opacity-0 group-hover:opacity-100"></div>
        
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="glass-effect text-slate-700 border-white/30 font-semibold px-3 py-1">
            {product.category}
          </Badge>
        </div>
        <button className="absolute top-4 right-4 w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/50 transition-all duration-300 group/heart">
          <Heart className="w-5 h-5 text-slate-600 group-hover/heart:text-red-500 group-hover/heart:scale-125 transition-all duration-300" />
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:holographic transition-all duration-500">
          {product.name}
        </h3>
        <p className="text-slate-600 text-base mb-5 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.features.slice(0, 2).map((feature, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-sm border-purple-200 text-purple-700 bg-purple-50 hover:bg-purple-100 transition-colors duration-300"
            >
              {feature}
            </Badge>
          ))}
          {product.features.length > 2 && (
            <Badge variant="outline" className="text-sm text-slate-500 hover:text-slate-700 transition-colors duration-300">
              +{product.features.length - 2} more
            </Badge>
          )}
        </div>

        {/* Rating and Price */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 fill-amber-400 text-amber-400 group-hover:animate-pulse" />
            <span className="text-base font-semibold text-slate-900">{product.rating}</span>
            <span className="text-base text-slate-500">({product.reviews.length})</span>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">${product.price}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white border-0 rounded-2xl font-semibold text-lg py-3 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/30 animate-gradient relative overflow-hidden group/btn"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          <span className="relative z-10">Know More</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
        </Button>
      </div>
    </div>
  );
}