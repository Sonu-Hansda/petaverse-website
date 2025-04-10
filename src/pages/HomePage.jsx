import React from "react";
import { Link, useNavigate } from "react-router-dom";
import breedingIcon from "../Assets/breeding.png";
import adoptIcon from "../Assets/adopt.png";
import groomingIcon from "../Assets/grooming.png";
import sellIcon from "../Assets/sell.png";
import shelterIcon from "../Assets/shelter.png";
import trainingIcon from "../Assets/training.png";
import ServiceCard from "../components/ServiceCard";
import tomImg from "../Assets/tom.jpeg";
import dog2 from "../Assets/dog2.jpeg";
import dog3 from "../Assets/dog3.jpeg";
import PetCard from "../components/PetCard";
import ProtectedComponent from "../components/ProtectedComponent";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      <section
        className="flex flex-col justify-center items-center h-screen w-full text-center bg-gradient-to-r from-blue-500 to-blue-700"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?q=80&w=1790&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundBlendMode: "overlay",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/10 p-8 rounded-xl">
            <h1 className="text-white text-5xl font-bold mb-6 animate-fade-in">
              Connecting Pet Lovers to Pet Care
            </h1>
            <p className="text-white text-xl mb-8">
              Premium services for your furry friends — from grooming to adoption.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#services"
                className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
              >
                Explore Services
              </a>
              <a
                href="#adopt"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-lg transition"
              >
                Adopt a Pet
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything your pet needs, delivered with care and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCard
              serviceimg={breedingIcon}
              altText="Breeding"
              text="Breeding"
              description="Ethically bred pets from trusted partners with full health guarantees."
              path="/"
              className="h-full transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              iconClass="text-blue-500"
            />
            <ServiceCard
              serviceimg={shelterIcon}
              altText="Shelter"
              text="Shelter"
              description="Find your new furry friend at our trusted shelters. Every pet deserves a loving home."
              path="/"
              className="h-full transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              iconClass="text-green-500"
            />
            <ServiceCard
              serviceimg={sellIcon}
              altText="Sell"
              text="Sell"
              description="Sell your pet products with ease. Reach a wide audience of pet lovers."
              path="/"
              className="h-full transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              iconClass="text-orange-500"
            />
            <ServiceCard
              serviceimg={trainingIcon}
              altText="Training"
              text="Training"
              description="Professional training services to help your pet learn good behavior and obedience."
              path="/"
              className="h-full transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              iconClass="text-red-500"
            />
            <ServiceCard
              serviceimg={groomingIcon}
              altText="Grooming"
              text="Grooming"
              description="Certified groomers using organic products for a stress-free experience."
              path="/"
              className="h-full transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              iconClass="text-purple-500"
            />
            <ServiceCard
              serviceimg={adoptIcon}
              altText="Adopt"
              text="Adopt"
              description="Give a second chance to a pet in need. Find your perfect companion today."
              path="/"
              className="h-full transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              iconClass="text-teal-500"
            />
          </div>

        </div>
      </section>

      <section id="adopt" className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Meet Our Pets</h2>
          <p className="text-gray-600 text-center mb-12">
            Adopt your new best friend today.
          </p>

          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-white rounded-full mix-blend-soft-light animate-float1"></div>
            <div className="absolute top-1/4 right-10 w-48 h-48 bg-blue-300 rounded-full mix-blend-soft-light animate-float2"></div>
            <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-purple-300 rounded-full mix-blend-soft-light animate-float3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            <PetCard
              petimg={tomImg}
              petName="Tom"
              petBreed="Golden Retriever"
              petAge="2 years"
              petStatus="available"
              className="transition hover:shadow-xl"
            />
            <PetCard
              petimg={dog2}
              petName="Chutki"
              petBreed="German Shepherd"
              petAge="2 years"
              petStatus="adopted"
              className="transition hover:shadow-xl"
            />
            <PetCard
              petimg={dog3}
              petName="Luci"
              petBreed="Chinese Crested"
              petAge="1.5 years"
              petStatus="available"
              className="transition hover:shadow-xl"
            />
          </div>
        </div>
      </section>

      <ProtectedComponent children={<></>} fallback={<section className="py-16 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white rounded-full mix-blend-soft-light animate-float1"></div>
          <div className="absolute top-1/4 right-10 w-48 h-48 bg-blue-300 rounded-full mix-blend-soft-light animate-float2"></div>
          <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-purple-300 rounded-full mix-blend-soft-light animate-float3"></div>
        </div>

        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Join Our Pet Community
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Get access to exclusive tips, discounts, and pet care resources.
          </p>
          <Link to={"/signup"}
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in-up delay-200"
          >
            Sign Up Now
          </Link>
        </div>
      </section>} />

    </div>
  );
};

export default HomePage;