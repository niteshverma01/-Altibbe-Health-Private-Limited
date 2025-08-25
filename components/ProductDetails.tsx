"use client";

import { ArrowLeft, Star, Heart, ShoppingCart, Shield, Leaf, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/lib/types";

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetails({ product, onBack }: ProductDetailsProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-br from-blue-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center gap-3 text-slate-600 hover:text-purple-600 transition-all duration-300 hover:scale-105 group"
            >
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-semibold text-lg">Back to Products</span>
            </button>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="lg" className="gap-2 glass-effect border-white/30 hover:bg-white/20 transition-all duration-300">
                <Heart className="w-5 h-5" />
                Save
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 gap-2 text-lg px-6 py-3 rounded-2xl animate-glow">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Hero */}
        <div className="glass-effect rounded-3xl border border-white/20 p-8 mb-12 neo-brutalism relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 animate-gradient"></div>
          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
              <div className="absolute top-6 left-6">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-base font-semibold">
                  {product.category}
                </Badge>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 holographic">
                {product.name}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {product.description}
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400 animate-pulse" />
                  <span className="text-xl font-bold">{product.rating}</span>
                  <span className="text-slate-500 text-lg">({product.reviews.length} reviews)</span>
                </div>
                <Separator orientation="vertical" className="h-8" />
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ${product.price}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-10">
                {product.features.map((feature, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="border-purple-200 text-purple-700 bg-purple-50 px-4 py-2 text-base hover:bg-purple-100 transition-colors duration-300"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modular Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Nutrition Info Card */}
          <div className="glass-effect rounded-3xl border border-white/20 p-8 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-2 neo-brutalism group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center animate-glow group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors duration-300">Nutrition Facts</h3>
            </div>
            <div className="space-y-4">
              {Object.entries(product.nutrition).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-slate-600 capitalize text-base">{key}:</span>
                  <span className="font-semibold text-slate-900 text-base">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Traceability Card */}
          <div className="glass-effect rounded-3xl border border-white/20 p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 neo-brutalism group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center animate-glow group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">Traceability</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 text-base">Origin:</span>
                <span className="font-semibold text-slate-900 text-base">{product.traceability.origin}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 text-base">Harvested:</span>
                <span className="font-semibold text-slate-900 text-base">{product.traceability.harvestDate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 text-base">Batch:</span>
                <span className="font-semibold text-slate-900 text-base">{product.traceability.batchNumber}</span>
              </div>
              <div className="flex items-center gap-3 pt-3">
                <Award className="w-5 h-5 text-amber-500 animate-pulse" />
                <span className="text-base text-slate-600 font-medium">Certified Organic</span>
              </div>
            </div>
          </div>

          {/* Sustainability Card */}
          <div className="glass-effect rounded-3xl border border-white/20 p-8 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-2 neo-brutalism group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center animate-glow group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">Sustainability</h3>
            </div>
            <div className="space-y-4">
              {product.sustainability.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-base text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Info Card */}
          <div className="glass-effect rounded-3xl border border-white/20 p-8 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2 neo-brutalism group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center animate-glow group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors duration-300">Shipping</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 text-base">Standard:</span>
                <span className="font-semibold text-slate-900 text-base">3-5 days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 text-base">Express:</span>
                <span className="font-semibold text-slate-900 text-base">1-2 days</span>
              </div>
              <div className="flex items-center gap-3 pt-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-base text-slate-600 font-medium">Free shipping over $50</span>
              </div>
            </div>
          </div>

          {/* Reviews Summary Card */}
          <div className="glass-effect rounded-3xl border border-white/20 p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 neo-brutalism md:col-span-2 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center animate-glow group-hover:scale-110 transition-transform duration-300">
                <Star className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">Customer Reviews</h3>
            </div>
            <div className="space-y-6">
              {product.reviews.slice(0, 3).map((review, index) => (
                <div key={index} className="border-b border-white/20 last:border-0 pb-6 last:pb-0">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="font-semibold text-slate-900 text-base">{review.user}</span>
                  </div>
                  <p className="text-slate-600 text-base leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}