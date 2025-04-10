import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth,db} from "../../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { getErrorMessage } from "../utils/errorMessage";
import { ClipLoader } from "react-spinners";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
      return;
    }
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        createdAt: new Date(),
      });

      await sendEmailVerification(user);

      toast.success(
        "Account created successfully! Please check your email to verify your account.",
        {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
        }
      );
      
      navigate("/login");
    } catch (err: any) {
      const errorCode = err.code || "unknown-error";
      const errorMessage = getErrorMessage(errorCode);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
    } finally{
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white rounded-full mix-blend-soft-light animate-float1"></div>
        <div className="absolute top-1/4 right-10 w-48 h-48 bg-blue-300 rounded-full mix-blend-soft-light animate-float2"></div>
        <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-purple-300 rounded-full mix-blend-soft-light animate-float3"></div>
      </div>

      <div className="relative z-10 bg-white p-8 sm:p-12 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105 shadow-lg flex items-center justify-center"
          >
            {loading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;