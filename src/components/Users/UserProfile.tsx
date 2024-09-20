import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

const UserProfile: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Fetch user error:', error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) return <div className="text-center text-xl">Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{user.name}'s Profile</h2>
          <p className="text-gray-600 mb-2"><strong>Email:</strong> {user.email}</p>
          <p className="text-gray-600 mb-4"><strong>Bio:</strong> {user.bio}</p>
        </div>
        <button 
          onClick={() => window.history.back()} 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
