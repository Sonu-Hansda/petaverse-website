import React from "react";

interface PetCardProps {
  petimg: string;
  petName: string;
  petBreed: string;
  petAge: string;
  petStatus?: "available" | "adopted";
  className?: string;
}

export default function PetCard(props: PetCardProps) {
  const { petimg, petName, petBreed, petAge, petStatus = "available", className } = props;

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}
    >
      <div className="relative">
        <img
          src={petimg}
          alt={petName}
          className="w-full h-56 object-cover"
        />
        <span
          className={`absolute top-4 right-4 px-3 py-1 text-sm font-medium rounded-full ${
            petStatus === "available"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {petStatus.charAt(0).toUpperCase() + petStatus.slice(1)}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{petName}</h3>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Breed:</span> {petBreed}
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Age:</span> {petAge}
        </p>

        <button
          className={`w-full py-2 rounded-lg font-bold transition transform hover:scale-105 ${
            petStatus === "available"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              : "bg-gray-400 text-gray-600 cursor-not-allowed"
          }`}
          disabled={petStatus !== "available"}
        >
          {petStatus === "available" ? "Adopt Now" : "Adopted"}
        </button>
      </div>
    </div>
  );
}