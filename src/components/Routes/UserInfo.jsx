import { useEffect, useState } from 'react';
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
          <div key={id} className=" h-screen flex flex-col items-center">
            <div>
              <img
                src={uinfo.avatar_url}
                className="w-[350px] border-2 border-teal-400 md:mx-0 mx-auto rounded-full"
              />
            </div>
            <div>
              <h1 className="text-3xl pb-4 mt-5 ">
                <a href={uinfo.html_url} target="_blank">
                  {uinfo?.name}
                </a>
              </h1>
            </div>
            <h1 className="text-center text-2xl mb-5">
              <span className="text-purple-800">@{uinfo?.login}</span>
            </h1>
            <div className="flex justify-between gap-10">
              <h1 className=" py-1 px-3">
                <box-icon type="solid" name="location-plus"></box-icon>
                <span className=" ml-3 text-2xl">{uinfo?.location}</span>
              </h1>
              <h1 className="py-1 px-3">
                <box-icon name="calendar" type="solid"></box-icon>
                <span className="ml-3 text-2xl">
                  Joined {new Date(uinfo?.created_at).toLocaleDateString()}
                </span>
              </h1>
            </div>
            <div className="flex gap-10 ">
              <h1 className="bg-gray-400 px-8 py-4 mt-10 rounded text-2xl text-center">
                <span>FOLLOWERS</span>
                <br /> {uinfo?.followers}
              </h1>
              <h1 className="bg-gray-400 px-8 py-4 mt-10 rounded text-2xl text-center">
                <span>FOLLOWING</span>
                <br /> {uinfo?.following}
              </h1>

              <h1 className="bg-gray-400 px-8 py-4 mt-10 rounded text-2xl text-center">
                <span>REPOSITORIES</span>
                <br /> {uinfo?.public_repos}
              </h1>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserInfo;
