import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    bio: string;
  } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating fetching user data from local storage or API
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");

    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        User Profiles
      </h1>
      <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-4 text-indigo-600">
          {user.name}'s Profile
        </h2>
        <div className="text-lg mb-2">
          <strong className="text-indigo-500">Email:</strong> {user.email}
        </div>
        <div className="text-lg mb-4">
          <strong className="text-indigo-500">Bio:</strong> {user.bio}
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate("/profile/edit")}
            className="px-6 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-all duration-200"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
