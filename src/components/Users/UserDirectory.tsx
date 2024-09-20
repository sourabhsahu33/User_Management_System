import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const UserDirectory: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Fetch users error:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-8 px-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 py-4 border-b">User Directory</h2>
        <ul className="divide-y divide-gray-200">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user._id} className="p-4 hover:bg-gray-50 transition duration-300">
                <Link 
                  to={`/users/${user._id}`}
                  className="text-xl font-semibold text-blue-600 hover:underline"
                >
                  {user.name}
                </Link>
              </li>
            ))
          ) : (
            <li className="p-4 text-center text-gray-600">No users found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserDirectory;
