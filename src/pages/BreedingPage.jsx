import React, { useState } from "react";
import { Link } from "react-router-dom";

const breedData = {
  Maltese: {
    description: "Gentle, playful, and great for families.",
    height: "9-10 inches",
    weight: "4-7 pounds",
    lifespan: "12-15 years",
    image: "https://images.unsplash.com/photo-1606972103271-a5b6f2b97e42?q=80&w=1470&auto=format"
  },
  Beagle: {
    description: "Curious, friendly, and excellent with kids.",
    height: "13-15 inches",
    weight: "20-30 pounds",
    lifespan: "10-15 years",
    image: "https://images.unsplash.com/photo-1601758003122-53c40e686a19?q=80&w=1470&auto=format"
  },
  Bulldog: {
    description: "Docile, willful, and surprisingly affectionate.",
    height: "14-15 inches",
    weight: "40-50 pounds",
    lifespan: "8-10 years",
    image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=1470&auto=format"
  }
};

export default function BreedingPage() {
  const [breed, setBreed] = useState("Maltese");
  const [petType, setPetType] = useState("Dog");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section 
  className="relative text-white py-24 text-center overflow-hidden"
  style={{
    background: 'linear-gradient(135deg, rgba(59,130,246,0.9) 0%, rgba(99,102,241,0.9) 50%, rgba(168,85,247,0.9) 100%)',
  }}
>
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/paw-print.png')] opacity-30"></div>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
      Premium Breeding Services
    </h1>
    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
      Connect with <span className="font-semibold">certified breeders</span> for genetically tested, well-socialized pets.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link 
        to="/" 
        className="inline-block bg-white text-blue-600 hover:text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        Back to Home
      </Link>
      <Link 
        to="/contact" 
        className="inline-block border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all duration-300"
      >
        Contact Breeders
      </Link>
    </div>
  </div>

  {/* Floating paw prints decoration */}
  <div className="absolute bottom-5 right-5 opacity-70">
    <svg className="w-16 h-16 animate-float" fill="white" viewBox="0 0 24 24">
      <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm-1 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>
  </div>
</section>

      {/* Breed Selector */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Your Perfect Breed</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Pet Type</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
              >
                <option>Dog</option>
                <option>Cat</option>
                <option>Bird</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Breed</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              >
                {Object.keys(breedData).map((breedOption) => (
                  <option key={breedOption}>{breedOption}</option>
                ))}
              </select>
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition">
            Book {breed} Consultation
          </button>
        </div>
      </section>

      {/* Breed Info */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">{breed}</h2>
              <p className="text-blue-600 text-lg mb-6">{breedData[breed].description}</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3">
                    ✓
                  </span>
                  <span><strong>Height:</strong> {breedData[breed].height}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3">
                    ✓
                  </span>
                  <span><strong>Weight:</strong> {breedData[breed].weight}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3">
                    ✓
                  </span>
                  <span><strong>Lifespan:</strong> {breedData[breed].lifespan}</span>
                </li>
              </ul>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition">
                Contact Breeder
              </button>
            </div>
            
            <div className="h-64 lg:h-auto">
              <img 
                src={breedData[breed].image} 
                alt={breed}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}