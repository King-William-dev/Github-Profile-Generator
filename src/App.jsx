import React from 'react';
import Logo from './components/Logo';
import { Route, Routes } from 'react-router-dom';
import Users from './components/Routes/Users';
import UserInfo from './components/Routes/UserInfo';

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-900 dark:bg-neutral-900">
      <div className="container text-gray-300 py-3">
        <Logo />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:name" element={<UserInfo />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
