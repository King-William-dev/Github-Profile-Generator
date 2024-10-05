import React, { useEffect, useState } from 'react';
import UsersContainer from '../UsersContainer';

const Users = () => {
  const [users, setUsers] = useState([]);
  let URL = 'https://api.github.com/users';

  async function GitHubUsers() {
    const res = await fetch(URL);
    const data = await res.json();
    setUsers(data);
  }
  useEffect(() => {
    GitHubUsers();
  }, [setUsers]);
  return (
    <div>
      <div className="flex justify-center items-center h-11 py-5">
        <input
          type="text"
          placeholder="Search Github Username"
          className="h-10 md:w-1/3 w-2/3 px-4 text-gray-800 outline-none font-semibold mt-10 "
        />
        <button className="bg-teal-500 font-semibold px-4 h-10 mt-10">
          Search
        </button>
      </div>
      <UsersContainer users={users} />
    </div>
  );
};

export default Users;
