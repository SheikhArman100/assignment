import AddUser from "../components/AddUser.jsx";
import Pagination from "../components/Pagination.jsx";
import SearchUser from "../components/SearchUser.jsx";
import Sort from "../components/Sort.jsx";
import UserCard from "../components/UserCard.jsx";

const Users = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold">Users</h2>
      <div className="flex items-center justify-between mt-3">
        <SearchUser />
        <AddUser />
      </div>
      <div className="flex items-center justify-end px-8">
        <Sort />
      </div>
      <div className="flex flex-col items-center gap-y-6 py-6">
        <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-10 ">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
        <Pagination/>
      </div>
    </div>
  );
};

export default Users;
