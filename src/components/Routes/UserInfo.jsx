import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const [user, setUser] = useState();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let URL = 'https://api.github.com/users';

  async function GetUserInfo() {
    const res = await fetch(URL + pathname);
    const data = await res.json();
    setUser(() => [data]);
  }
  useEffect(() => {
    GetUserInfo();
  }, [pathname]);

  return (
    <div className="py-5">
      <button
        onClick={() => navigate('/')}
        className="px-5 py-1 font-medium mx-1 my-4 bg-teal-500 rounded"
      >
        BACK
      </button>
      {user &&
        user?.map((uinfo, id) => (
          <div
            key={id}
            className="flex justify-center md:flex-row md:px-0 px-4 flex-col gap-10"
          >
            <img
              src={uinfo.avatar_url}
              className="w-[350px] border-4 border-teal-400 md:mx-0 mx-auto rounded"
            />
            <div className="text-lg px-3 leading-10">
              <h1 className="text-3xl pb-4">
                <a href={uinfo.html_url} target="_blank">
                  {uinfo?.name}
                </a>
              </h1>
              <h1>
                <span className="text-teal-400">Login Name</span>:{' '}
                {uinfo?.login}
              </h1>
              <h1>
                <span className="text-teal-400">Followers</span>:{' '}
                {uinfo?.followers}
              </h1>
              <h1>
                <span className="text-teal-400">Following</span>:{' '}
                {uinfo?.following}
              </h1>
              <h1>
                <span className="text-teal-400">Repositories</span>:{' '}
                {uinfo?.public_repos}
              </h1>
              <h1>
                <span className="text-teal-400">Joined</span>:{' '}
                {new Date(uinfo?.created_at).toLocaleDateString()}
              </h1>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserInfo;
