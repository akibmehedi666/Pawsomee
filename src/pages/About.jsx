import React from 'react';
import { Heart, Users, Award, MapPin, Phone, Mail, Clock } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: '👩‍💼',
      bio: 'Sarah started Pawsome Pet Shop with a simple mission: to provide the best care for pets and their families. With over 15 years of experience in pet care, she leads our team with passion and dedication.',
      specialties: ['Pet Nutrition', 'Business Management', 'Customer Care']
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Head Veterinarian',
      image: '👨‍⚕️',
      bio: 'Dr. Chen brings 12 years of veterinary experience to our team. He specializes in preventive care and emergency medicine, ensuring all our pets receive the highest quality medical attention.',
      specialties: ['Preventive Care', 'Emergency Medicine', 'Surgery']
    },
    {
      name: 'Emma Rodriguez',
      role: 'Senior Groomer',
      image: '👩‍🎨',
      bio: 'Emma is our master groomer with 8 years of experience. She has a special talent for making pets look and feel their best, and she loves working with all breeds and sizes.',
      specialties: ['Show Grooming', 'Breed-Specific Cuts', 'Puppy Grooming']
    },
    {
      name: 'David Thompson',
      role: 'Adoption Coordinator',
      image: '👨‍💼',
      bio: 'David works tirelessly to match pets with their perfect forever homes. His compassion and dedication have helped hundreds of animals find loving families.',
      specialties: ['Pet Matching', 'Behavior Assessment', 'Adoption Counseling']
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Compassion',
      description: 'We treat every pet as if they were our own, with love, care, and respect.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'We believe in building strong relationships with pet parents and our local community.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in pet care, products, and customer service.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Pets' },
    { number: '1000+', label: 'Successful Adoptions' },
    { number: '50+', label: 'Team Members' },
    { number: '10+', label: 'Years of Service' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pawsome Pet Shop was founded with a simple mission: to provide the best care, 
            products, and services for pets and their families in our community.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Pawsome Pet Shop, we believe that every pet deserves to be treated like family. 
                Our mission is to provide exceptional care, quality products, and professional services 
                that enhance the lives of pets and their human companions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We're committed to promoting responsible pet ownership, supporting animal welfare, 
                and building a community where pets and people thrive together.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl p-8 text-center">
                <div className="text-8xl mb-4">🐾</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Making a Difference
                </h3>
                <p className="text-gray-600">
                  Every day, we work to make the world a better place for pets and their families.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="space-y-1">
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full mr-1 mb-1"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 text-2xl font-bold">
                2014
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Humble Beginnings
              </h3>
              <p className="text-gray-600 text-sm">
                Pawsome Pet Shop opened its doors as a small local pet store with a big heart.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 text-2xl font-bold">
                2018
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Growing Strong
              </h3>
              <p className="text-gray-600 text-sm">
                Expanded services to include grooming, veterinary care, and pet adoption programs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 text-2xl font-bold">
                2024
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Community Leader
              </h3>
              <p className="text-gray-600 text-sm">
                Now serving thousands of pets and families as the leading pet care destination.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Visit Us Today
              </h3>
              <p className="text-orange-100 mb-6">
                We'd love to meet you and your furry friends! Stop by our store or give us a call.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>123 Pet Street, San Francisco, CA 94102</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>hello@pawsomepetshop.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span>Mon-Sat: 8AM-6PM, Sun: 10AM-4PM</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🏠</div>
              <p className="text-orange-100">
                Your pets are always welcome here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 