/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { axiosPublic } from "../libs/axios/axiosIntsance.js";
import CardSkeleton from "./CardSkeleton.jsx";
import UserCard from "./UserCard.jsx";

const UserList = ({ searchQuery, sortQuery }) => {
  //fetch users data
  const {
    data: users,
    isPending,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axiosPublic.get("/users");

      return response.data.users;
    },
  });

  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    if (searchQuery || sortQuery) {
      
      const filterData = users?.filter((user) => {
        const name = `${user.firstName} ${user.lastName}`;
        return name.toLowerCase().includes(searchQuery.toLowerCase());
      });

      const sortData = filterData?.sort((a, b) => {
        return a[sortQuery]
          ?.toLowerCase()
          .localeCompare(b[sortQuery]?.toLowerCase());
      });
      setFilterList(sortData);
    }
  }, [users, searchQuery, sortQuery]);

  if (isPending) {
    return (
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-10 ">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
          return <CardSkeleton key={index} />;
        })}
      </div>
    );
  }
  if (error) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <p className="text-2xl font font-semibold">Something went wrong</p>
      </div>
    );
  }

  return (
    <>
      {users ? (
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-10">
          {searchQuery || sortQuery
            ? filterList?.map((user, index) => (
                <UserCard key={index} user={user} />
              ))
            : users.map((user, index) => <UserCard key={index} user={user} />)}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default UserList;
