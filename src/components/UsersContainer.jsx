import { Link } from 'react-router-dom';

const UsersContainer = ({ users }) => {
  return (
    <div className="flex gap-5 flex-wrap justify-center py-5 mt-10">
      {users &&
        users.map((user, id) => (
          <div
            key={id}
            className="flex w-[250px] border border-gray-500 p-3 flex-col items-center"
          >
            <img
              src={user?.avatar_url}
              className="w-24 mb-4 border-4 rounded-full border-teal-900"
            />
            <h2 className="text-2xl text-center mb-4">{user?.login}</h2>
            <h2 className="text-2xl text-center">{user?.name}</h2>
            <Link to={`/${user?.login}`}>
              <span className="text-gray-800 bg-teal-700 font-semibold py-1 px-4 tracking-wide rounded">
                View Profile
              </span>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default UsersContainer;
