import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Heart, Star } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'food', name: 'Pet Food', icon: '🍽️' },
    { id: 'toys', name: 'Toys', icon: '🎾' },
    { id: 'accessories', name: 'Accessories', icon: '🦮' },
    { id: 'health', name: 'Health & Care', icon: '💊' },
    { id: 'beds', name: 'Beds & Comfort', icon: '🛏️' }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Dog Food - Chicken & Rice',
      category: 'food',
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.8,
      reviews: 124,
      image: '🐕',
      description: 'High-quality protein-rich dog food with natural ingredients',
      inStock: true,
      isNew: true
    },
    {
      id: 2,
      name: 'Interactive Cat Toy Set',
      category: 'toys',
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.6,
      reviews: 89,
      image: '🐱',
      description: 'Engaging toys to keep your cat active and entertained',
      inStock: true,
      isNew: false
    },
    {
      id: 3,
      name: 'Comfortable Pet Bed - Large',
      category: 'beds',
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.9,
      reviews: 156,
      image: '🛏️',
      description: 'Plush, orthopedic bed perfect for large dogs',
      inStock: true,
      isNew: false
    },
    {
      id: 4,
      name: 'Durable Leash & Collar Set',
      category: 'accessories',
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.7,
      reviews: 203,
      image: '🦮',
      description: 'Strong, comfortable leash with matching collar',
      inStock: true,
      isNew: false
    },
    {
      id: 5,
      name: 'Natural Cat Food - Salmon',
      category: 'food',
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.5,
      reviews: 67,
      image: '🐱',
      description: 'Grain-free cat food with real salmon as first ingredient',
      inStock: false,
      isNew: true
    },
    {
      id: 6,
      name: 'Pet Vitamins & Supplements',
      category: 'health',
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.4,
      reviews: 92,
      image: '💊',
      description: 'Complete vitamin supplement for overall pet health',
      inStock: true,
      isNew: false
    },
    {
      id: 7,
      name: 'Bird Seed Mix - Premium',
      category: 'food',
      price: 14.99,
      originalPrice: 19.99,
      rating: 4.6,
      reviews: 45,
      image: '🐦',
      description: 'Nutritious seed mix for all types of pet birds',
      inStock: true,
      isNew: false
    },
    {
      id: 8,
      name: 'Small Pet Habitat',
      category: 'accessories',
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.8,
      reviews: 78,
      image: '🐰',
      description: 'Spacious habitat perfect for hamsters, guinea pigs, and rabbits',
      inStock: true,
      isNew: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pet Supplies & Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover premium pet food, toys, accessories, and everything your furry friends need to be happy and healthy.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 font-medium">Filter by:</span>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
                <span className="text-6xl">{product.image}</span>
                {product.isNew && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </div>
                )}
                {!product.inStock && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    OUT OF STOCK
                  </div>
                )}
                <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>

                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  {product.originalPrice > product.price && (
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>

                <button
                  disabled={!product.inStock}
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    product.inStock
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-lg hover:scale-105'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products; 