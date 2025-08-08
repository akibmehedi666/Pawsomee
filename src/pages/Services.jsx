import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, Scissors, Stethoscope, Star, Users } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState('grooming');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    {
      id: 'grooming',
      name: 'Pet Grooming',
      icon: <Scissors className="w-8 h-8" />,
      description: 'Professional grooming services to keep your pets looking and feeling their best',
      price: 'From $45',
      duration: '1-2 hours',
      features: [
        'Bath and blow dry',
        'Haircut and styling',
        'Nail trimming',
        'Ear cleaning',
        'Teeth brushing',
        'Flea treatment'
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'veterinary',
      name: 'Veterinary Care',
      icon: <Stethoscope className="w-8 h-8" />,
      description: 'Comprehensive veterinary services for your pet\'s health and wellness',
      price: 'From $75',
      duration: '30-60 minutes',
      features: [
        'Health checkups',
        'Vaccinations',
        'Dental care',
        'Surgery services',
        'Emergency care',
        'Prescription medications'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'training',
      name: 'Pet Training',
      icon: <Users className="w-8 h-8" />,
      description: 'Professional training to help your pet become well-behaved and obedient',
      price: 'From $60',
      duration: '45-60 minutes',
      features: [
        'Basic obedience',
        'Behavior modification',
        'Puppy training',
        'Socialization',
        'House training',
        'Advanced commands'
      ],
      color: 'from-green-400 to-green-600'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const testimonials = [
    {
      name: 'Jennifer Smith',
      service: 'Grooming',
      text: 'Amazing grooming service! My dog looks and smells wonderful. The staff is so gentle and caring.',
      rating: 5
    },
    {
      name: 'David Chen',
      service: 'Veterinary',
      text: 'Dr. Johnson is fantastic! She took great care of my cat and explained everything clearly.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      service: 'Training',
      text: 'The training program worked wonders for my energetic puppy. Highly recommend!',
      rating: 5
    }
  ];

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Pet Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From grooming to veterinary care, we provide comprehensive services to keep your pets healthy, 
            happy, and looking their best.
          </p>
        </div>

        {/* Service Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                selectedService === service.id
                  ? 'bg-white shadow-2xl scale-105'
                  : 'bg-white/70 shadow-lg hover:shadow-xl hover:scale-102'
              }`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">{service.price}</span>
                <span className="text-sm text-gray-500">{service.duration}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Service Details and Booking */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Service Details */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className={`w-20 h-20 bg-gradient-to-r ${selectedServiceData.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
              {selectedServiceData.icon}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedServiceData.name}
            </h2>
            <p className="text-gray-600 mb-6">
              {selectedServiceData.description}
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-gray-900">What's Included:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedServiceData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{selectedServiceData.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>In-store service</span>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Book Your Appointment
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name} - {service.price}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedTime === time
                          ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pet Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your pet's name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pet Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Bird</option>
                  <option>Small Pet</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Instructions
                </label>
                <textarea
                  rows="3"
                  placeholder="Any special requests or notes about your pet..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{testimonial.name}</span>
                  <span className="text-sm text-gray-500">{testimonial.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Need to Contact Us?
              </h3>
              <p className="text-orange-100 mb-6">
                Have questions about our services? We're here to help!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>123 Pet Street, San Francisco, CA 94102</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span>Mon-Sat: 8AM-6PM, Sun: 10AM-4PM</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🐾</div>
              <p className="text-orange-100">
                We can't wait to meet your furry friend!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 