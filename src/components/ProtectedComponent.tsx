import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, User } from "firebase/auth";

interface ProtectedComponentProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

const ProtectedComponent: React.FC<ProtectedComponentProps> = ({ children, fallback }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return user ? <>{children}</> : <>{fallback}</>;
};

export default ProtectedComponent;