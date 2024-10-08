import React from 'react';

const Logo = () => {
  return (
    <div className="flex pb-2 justify-center items-center border-b">
      <img
        src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
        className="w-24 rounded-full border-4"
      />
      <h2 className="text-2xl px-2">Search Github User Profile</h2>
    </div>
  );
};

export default Logo;
