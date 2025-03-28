import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "./Assets/logo.png";

export default function NavBarNew() {
  const location = useLocation();

  return (
    <nav className="bg-blue-600 p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={logo}
            alt="Petaverse Logo"
            className="h-12 w-12 object-contain"
          />
          <Link to="/" className="text-white ml-2 text-2xl font-bold hover:text-blue-200 transition">
            Petaverse
          </Link>
        </div>
        
        <ul className="flex space-x-6">
          <li>
            <Link 
              to="/" 
              className={`${location.pathname === "/" ? "font-bold border-b-2 border-white" : ""} text-white hover:text-blue-200 transition`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/breeding" 
              className={`${location.pathname === "/breeding" ? "font-bold border-b-2 border-white" : ""} text-white hover:text-blue-200 transition`}
            >
              Breeding
            </Link>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-blue-200 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#community" className="text-white hover:text-blue-200 transition">
              Community
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}