import React from 'react';
import Logo from './components/Logo';
import { Route, Routes } from 'react-router-dom';
import Users from './components/Routers/Users';

const App = () => {
  return (
    <div className="min-h-screen bg-teal-600">
      <div className="container text-gray-200 py-3">
        <Logo />
        <Routes>
          <Route path="/" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
