import { useSearchParams } from "react-router-dom";
import AddUser from "../components/AddUser.jsx";
import Pagination from "../components/Pagination.jsx";
import SearchUser from "../components/SearchUser.jsx";
import Sort from "../components/Sort.jsx";
import UserList from "../components/UserList.jsx";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams({ search: "",sort:"" });
  const searchQuery = searchParams.get("search");
  const sortQuery=searchParams.get("sort")
  return (
    <div className="">
      <h2 className="text-3xl font-bold">Users</h2>
      <div className="flex items-center justify-between mt-3 gap-x-3">
        <SearchUser searchQuery={searchQuery} setSearchParams={setSearchParams} />
        <AddUser />
      </div>
      <div className="flex items-center justify-end px-8">
        <Sort sortQuery={sortQuery} setSearchParams={setSearchParams} />
      </div>
      <div className=" flex flex-col items-center   gap-y-6 py-6">
        <UserList  searchQuery={searchQuery} sortQuery={sortQuery}/>
        <Pagination />
      </div>
    </div>
  );
};

export default Users;
