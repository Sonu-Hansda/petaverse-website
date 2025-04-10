import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import logo from "../Assets/logo.png";
import { getFirstLetter } from "../utils/getFirstLetter";

export default function NavBarNew() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector(".dropdown");
      if (dropdown && !dropdown.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return null;
  }

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <nav className="bg-blue-600 p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={logo}
            alt="Petaverse Logo"
            className="h-12 w-12 object-contain"
          />
          <Link
            to="/"
            className="text-white ml-2 text-2xl font-bold hover:text-blue-200 transition"
          >
            Petaverse
          </Link>
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              to="/"
              className={`${location.pathname === "/" ? "font-bold border-b-2 border-white" : ""
                } text-white hover:text-blue-200 transition`}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#services"
              className={`${location.pathname === "/breeding" ? "font-bold border-b-2 border-white" : ""
                } text-white hover:text-blue-200 transition`}
            >
              Breeding
            </a>
          </li>

          {user ? (
            <>
              <li className="relative">
                <div
                  onClick={toggleDropdown}
                  className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md cursor-pointer"
                  style={{
                    backgroundColor: "#7C3AED",
                    border: "2px solid white",
                  }}
                >
                  {getFirstLetter(user.displayName || user.email?.split("@")[0])}
                </div>

                {isDropdownOpen && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-20">
                    <li
                      className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                      onClick={() => auth.signOut()}
                    >
                      Logout
                    </li>
                  </ul>
                )}
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className={`${location.pathname === "/login" ? "font-bold border-b-2 border-white" : ""
                    } text-white hover:text-blue-200 transition`}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className={`${location.pathname === "/signup" ? "font-bold border-b-2 border-white" : ""
                    } text-white hover:text-blue-200 transition`}
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}