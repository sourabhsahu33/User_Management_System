// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import ProfileList from './components/Profile/ProfileList';
// import EditProfile from './components/Profile/EditProfile';
// import Profile from './components/Profile/Profile';
// import UserDirectory from './components/Users/UserDirectory';
// import UserProfile from './components/Users/UserProfile';
// import { AuthProvider } from './components/Auth/AuthContext';
// import ProtectedRoute from './components/Auth/ProtectedRoute';
// import './styles/index.css'

// const App: React.FC = () => {
//   return (
//     <div className='App'>
//     <AuthProvider>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/profiles" element={<ProtectedRoute><ProfileList /></ProtectedRoute>} />
//         <Route path="/profile/edit/:id" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
//         <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//         <Route path="/users" element={<ProtectedRoute><UserDirectory /></ProtectedRoute>} />
//         <Route path="/users/:id" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
//       </Routes>
//     </AuthProvider>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProfileList from './components/Profile/ProfileList';
import EditProfile from './components/Profile/EditProfile';
import Profile from './components/Profile/Profile';
import UserDirectory from './components/Users/UserDirectory';
import UserProfile from './components/Users/UserProfile';
import { AuthProvider } from './components/Auth/AuthContext';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import './styles/index.css'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profiles" element={<ProtectedRoute><ProfileList /></ProtectedRoute>} />
        <Route path="/profile/edit/:id" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
        {/* <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><UserDirectory /></ProtectedRoute>} />
        <Route path="/users/:id" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} /> */}
        <Route path='/profile' element={<Profile/>}> </Route>
        <Route path='/users' element={<UserDirectory/>}> </Route>
        <Route path='/users/:id' element={<UserProfile/>}> </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;

