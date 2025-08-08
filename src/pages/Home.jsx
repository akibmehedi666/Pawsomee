import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, ShoppingBag, Users, Phone } from 'lucide-react';

const Home = () => {
  const featuredServices = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Pet Supplies',
      description: 'Premium food, toys, and accessories for all your furry friends',
      link: '/products',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Pet Adoption',
      description: 'Find your perfect companion from our loving rescue animals',
      link: '/adoption',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Grooming Services',
      description: 'Professional grooming to keep your pets looking their best',
      link: '/services',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Vet Care',
      description: 'Expert veterinary care and health consultations',
      link: '/services',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      pet: 'Golden Retriever',
      text: 'Pawsome Pet Shop has everything my Max needs! The staff is incredibly friendly and knowledgeable.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      pet: 'Persian Cat',
      text: 'Found my perfect companion here. The adoption process was smooth and the follow-up care is amazing.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      pet: 'Parakeet',
      text: 'Great selection of bird supplies and the grooming service made my little friend so happy!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Pet's
                <span className="block bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  Best Friend
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Welcome to Pawsome Pet Shop, where we provide everything your beloved pets need. 
                From premium supplies to professional care, we're here to make your pets happy and healthy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/adoption"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300"
                >
                  Adopt a Pet
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-orange-200 to-pink-200 rounded-2xl p-4 text-center">
                      <span className="text-4xl">🐕</span>
                      <p className="text-sm font-medium text-gray-700 mt-2">Dogs</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl p-4 text-center">
                      <span className="text-4xl">🐱</span>
                      <p className="text-sm font-medium text-gray-700 mt-2">Cats</p>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="bg-gradient-to-br from-green-200 to-teal-200 rounded-2xl p-4 text-center">
                      <span className="text-4xl">🐦</span>
                      <p className="text-sm font-medium text-gray-700 mt-2">Birds</p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-2xl p-4 text-center">
                      <span className="text-4xl">🐰</span>
                      <p className="text-sm font-medium text-gray-700 mt-2">Small Pets</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything Your Pet Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From premium pet supplies to professional services, we've got you covered
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Pet Parents Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our happy customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">Pet Parent of {testimonial.pet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Give Your Pet the Best?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of happy pet parents who trust Pawsome Pet Shop for all their pet care needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300"
            >
              Start Shopping
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 