"use client";

import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ProductCard";
import ProductDetails from "@/components/ProductDetails";
import { products } from "@/lib/data";
import { Product } from "@/lib/types";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Food", "Wellness", "Lifestyle", "Skincare"];

  const filteredProducts = products.filter((product: Product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedProduct) {
    return <ProductDetails product={selectedProduct} onBack={() => setSelectedProduct(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-br from-blue-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center animate-glow">
                  <span className="text-white font-bold text-xl holographic">H</span>
                </div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-2xl animate-pulse-ring"></div>
              </div>
              <h1 className="text-3xl font-bold holographic">Hedamo</h1>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 glass-effect border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <ShoppingCart className="w-4 h-4" />
              Cart
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            <span className="inline-block animate-float">Premium</span>{" "}
            <span className="inline-block animate-float" style={{ animationDelay: "0.5s" }}>
              Products,
            </span>
            <span className="block holographic text-6xl sm:text-7xl lg:text-8xl mt-4">Thoughtfully Crafted</span>
          </h2>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Discover our curated collection of organic, sustainable products designed to enhance your lifestyle while caring
            for the planet.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full animate-gradient"></div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12 p-8 glass-effect rounded-3xl border border-white/20 shadow-2xl neo-brutalism">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg border-white/30 focus:border-purple-400 focus:ring-purple-200 bg-white/50 rounded-2xl"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="lg"
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg animate-glow"
                    : "border-white/30 hover:border-purple-400 bg-white/30 hover:bg-white/50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-32 h-32 glass-effect rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
              <Search className="w-16 h-16 text-slate-400" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">No products found</h3>
            <p className="text-lg text-slate-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/20 glass-effect mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-lg text-slate-600 font-light">
            &copy; 2024 Hedamo. Crafting premium experiences with sustainable practices.
          </p>
        </div>
      </footer>
    </div>
  );
}