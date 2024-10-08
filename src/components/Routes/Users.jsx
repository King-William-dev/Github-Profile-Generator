import React, { useEffect, useRef, useState } from 'react';
import UsersContainer from '../UsersContainer';
import Loading from '../Loading';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  let URL = 'https://api.github.com/users';

  const user = useRef('');

  async function GitHubUsers() {
    if (user.current.value === '') {
      setLoading(true);
      const res = await fetch(URL);
      const data = await res.json();
      setUsers(data);
      setLoading(null);
    }
  }

  async function FindUser() {
    setLoading(true);
    if (user.current.value !== '') {
      setUsers();
      const res = await fetch(URL + '/' + user.current.value);
      const data = await res.json();
      setUsers(() => [data]);
      user.current.value = '';
    } else {
      GitHubUsers();
    }
    setLoading(null);
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
          ref={user}
        />
        <button
          onClick={FindUser}
          className="bg-teal-600 font-semibold px-4 h-10 mt-10"
        >
          Search
        </button>
      </div>
      {loading ? <Loading /> : <UsersContainer users={users} />}
    </div>
  );
};

export default Users;
