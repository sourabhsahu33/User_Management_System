import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Profile {
  id: number;
  name: string;
  age: string;
  address: string;
  email: string;
  department: string;
  bio: string;
}

const ProfileList: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem('profiles') || '[]');
    setProfiles(storedProfiles);
  }, []);

  const handleCreateProfile = () => {
    const newProfile: Profile = {
      id: profiles.length > 0 ? profiles[profiles.length - 1].id + 1 : 1,
      name: 'New Profile',
      age: '',
      address: '',
      email: '',
      department: '',
      bio: '',
    };
    const updatedProfiles = [...profiles, newProfile];
    setProfiles(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
    navigate(`/profile/edit/${newProfile.id}`);
  };

  const handleEditProfile = (id: number) => {
    navigate(`/profile/edit/${id}`);
  };

  const handleDeleteProfile = (id: number) => {
    const updatedProfiles = profiles.filter(profile => profile.id !== id);
    setProfiles(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
  };

  const handleRedirectHome = () => {
    navigate('/');
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen p-10 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-extrabold text-blue-800 text-center w-full">
          Users Profiles
        </h2>

        {/* Mobile View - Menu Icon */}
        <div className="block md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile View - Sidebar */}
        {menuOpen && (
          <div className="absolute top-0 right-0 h-full bg-white shadow-lg z-50 p-5">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 mb-4"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col space-y-4">
              <button
                onClick={handleRedirectHome}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 shadow-lg"
              >
                Home
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow-lg"
              >
                Logout
              </button>
            </nav>
          </div>
        )}

        {/* Full View - Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search Profiles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button
            onClick={handleRedirectHome}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 shadow-lg"
          >
            Home
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow-lg"
          >
            Logout
          </button>
        </div>
      </div>

      <motion.button
        onClick={handleCreateProfile}
        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 mb-6 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Create New Profile
      </motion.button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfiles.map((profile) => (
          <motion.div
            key={profile.id}
            className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-indigo-600 transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * profile.id }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-indigo-600">{profile.name}</h3>
            <p className="text-sm mb-1"><strong>Age:</strong> {profile.age}</p>
            <p className="text-sm mb-1"><strong>Address:</strong> {profile.address}</p>
            <p className="text-sm mb-1"><strong>Email:</strong> {profile.email}</p>
            <p className="text-sm mb-1"><strong>Department:</strong> {profile.department}</p>
            <p className="text-sm mb-4"><strong>Bio:</strong> {profile.bio}</p>
            <div className="flex justify-between">
              <motion.button
                onClick={() => handleEditProfile(profile.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Edit Profile
              </motion.button>
              <motion.button
                onClick={() => handleDeleteProfile(profile.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Delete Profile
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProfiles.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          No profiles found matching "{searchQuery}"
        </div>
      )}
    </div>
  );
};

export default ProfileList;
