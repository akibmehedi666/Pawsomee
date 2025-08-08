import React, { useState } from 'react';
import { Search, Filter, Heart, MapPin, Calendar, Users } from 'lucide-react';

const Adoption = () => {
  const [selectedSpecies, setSelectedSpecies] = useState('all');
  const [selectedAge, setSelectedAge] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const species = [
    { id: 'all', name: 'All Pets', icon: '🐾' },
    { id: 'dog', name: 'Dogs', icon: '🐕' },
    { id: 'cat', name: 'Cats', icon: '🐱' },
    { id: 'bird', name: 'Birds', icon: '🐦' },
    { id: 'small', name: 'Small Pets', icon: '🐰' }
  ];

  const ages = [
    { id: 'all', name: 'All Ages' },
    { id: 'young', name: 'Young (0-2 years)' },
    { id: 'adult', name: 'Adult (3-7 years)' },
    { id: 'senior', name: 'Senior (8+ years)' }
  ];

  const pets = [
    {
      id: 1,
      name: 'Buddy',
      species: 'dog',
      breed: 'Golden Retriever',
      age: 'young',
      ageYears: 1,
      gender: 'Male',
      size: 'Large',
      color: 'Golden',
      location: 'San Francisco, CA',
      description: 'Buddy is a friendly and energetic Golden Retriever who loves to play fetch and go for walks. He gets along great with other dogs and children.',
      personality: ['Friendly', 'Energetic', 'Good with kids', 'Loves water'],
      health: 'Vaccinated, neutered, microchipped',
      image: '🐕',
      isFeatured: true,
      adoptionFee: 250
    },
    {
      id: 2,
      name: 'Luna',
      species: 'cat',
      breed: 'Domestic Shorthair',
      age: 'adult',
      ageYears: 4,
      gender: 'Female',
      size: 'Medium',
      color: 'Black & White',
      location: 'San Francisco, CA',
      description: 'Luna is a sweet and gentle cat who enjoys quiet time and gentle pets. She would do best in a calm household.',
      personality: ['Gentle', 'Quiet', 'Independent', 'Loves sunbathing'],
      health: 'Vaccinated, spayed, microchipped',
      image: '🐱',
      isFeatured: false,
      adoptionFee: 150
    },
    {
      id: 3,
      name: 'Charlie',
      species: 'bird',
      breed: 'Cockatiel',
      age: 'adult',
      ageYears: 3,
      gender: 'Male',
      size: 'Small',
      color: 'Yellow & Gray',
      location: 'San Francisco, CA',
      description: 'Charlie is a talkative and social cockatiel who loves to sing and interact with his human friends.',
      personality: ['Social', 'Talkative', 'Playful', 'Musical'],
      health: 'Vaccinated, healthy, comes with cage',
      image: '🐦',
      isFeatured: false,
      adoptionFee: 100
    },
    {
      id: 4,
      name: 'Max',
      species: 'dog',
      breed: 'Labrador Mix',
      age: 'young',
      ageYears: 2,
      gender: 'Male',
      size: 'Large',
      color: 'Black',
      location: 'San Francisco, CA',
      description: 'Max is a smart and loyal dog who loves to learn new tricks. He would be perfect for an active family.',
      personality: ['Smart', 'Loyal', 'Active', 'Trainable'],
      health: 'Vaccinated, neutered, microchipped',
      image: '🐕',
      isFeatured: true,
      adoptionFee: 200
    },
    {
      id: 5,
      name: 'Bella',
      species: 'cat',
      breed: 'Persian',
      age: 'senior',
      ageYears: 9,
      gender: 'Female',
      size: 'Medium',
      color: 'White',
      location: 'San Francisco, CA',
      description: 'Bella is a calm and affectionate senior cat who would love a quiet home to spend her golden years.',
      personality: ['Calm', 'Affectionate', 'Quiet', 'Loves cuddles'],
      health: 'Vaccinated, spayed, microchipped, senior wellness check',
      image: '🐱',
      isFeatured: false,
      adoptionFee: 75
    },
    {
      id: 6,
      name: 'Pepper',
      species: 'small',
      breed: 'Guinea Pig',
      age: 'young',
      ageYears: 1,
      gender: 'Female',
      size: 'Small',
      color: 'Brown & White',
      location: 'San Francisco, CA',
      description: 'Pepper is a sweet guinea pig who loves fresh vegetables and gentle handling. Perfect for a first-time pet owner.',
      personality: ['Gentle', 'Quiet', 'Loves treats', 'Easy to care for'],
      health: 'Healthy, comes with habitat and supplies',
      image: '🐰',
      isFeatured: false,
      adoptionFee: 50
    }
  ];

  const filteredPets = pets.filter(pet => {
    const matchesSpecies = selectedSpecies === 'all' || pet.species === selectedSpecies;
    const matchesAge = selectedAge === 'all' || pet.age === selectedAge;
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpecies && matchesAge && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Companion
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Give a loving home to one of our wonderful rescue pets. Each adoption includes vaccinations, 
            spay/neuter, and microchipping.
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
                  placeholder="Search pets by name, breed, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filter Labels */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600 font-medium">Filters:</span>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="space-y-4 mt-6">
            {/* Species Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Species</h3>
              <div className="flex flex-wrap gap-3">
                {species.map((specie) => (
                  <button
                    key={specie.id}
                    onClick={() => setSelectedSpecies(specie.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedSpecies === specie.id
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span>{specie.icon}</span>
                    {specie.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Age Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Age</h3>
              <div className="flex flex-wrap gap-3">
                {ages.map((age) => (
                  <button
                    key={age.id}
                    onClick={() => setSelectedAge(age.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedAge === age.id
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {age.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              {/* Pet Image */}
              <div className="relative h-64 bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
                <span className="text-8xl">{pet.image}</span>
                {pet.isFeatured && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    FEATURED
                  </div>
                )}
                <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Pet Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{pet.name}</h3>
                  <span className="text-lg font-semibold text-orange-600">
                    ${pet.adoptionFee}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="font-medium">{pet.breed}</span>
                    <span>•</span>
                    <span>{pet.ageYears} year{pet.ageYears !== 1 ? 's' : ''} old</span>
                    <span>•</span>
                    <span>{pet.gender}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{pet.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {pet.description}
                </p>

                {/* Personality Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pet.personality.slice(0, 3).map((trait, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                  {pet.personality.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                      +{pet.personality.length - 3} more
                    </span>
                  )}
                </div>

                <button className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200">
                  Learn More & Apply
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPets.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No pets found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters to find your perfect companion.
            </p>
          </div>
        )}

        {/* Adoption Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Adopt from Pawsome Pet Shop?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Loving Care
              </h3>
              <p className="text-gray-600">
                All our pets receive the best care and attention while waiting for their forever homes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Support
              </h3>
              <p className="text-gray-600">
                Our team provides ongoing support and guidance throughout the adoption process.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Health Guarantee
              </h3>
              <p className="text-gray-600">
                All pets are vaccinated, spayed/neutered, and microchipped before adoption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adoption; 