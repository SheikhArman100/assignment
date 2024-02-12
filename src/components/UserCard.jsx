/* eslint-disable react/prop-types */
import { FaBuildingColumns } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const UserCard = ({user}) => {
  
  return (
    <Link to={`/users/${user.id}`} className="card w-[18rem] md:w-[22rem] bg-base-100 shadow-xl p-4 border ">
      <div className="flex flex-col items-center gap-x-3">
        {/* avatar */}
        <div className="avatar">
          <div className="w-20 rounded-full border">
            <img src={user.image} alt={user.id}/>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-base md:text-lg font-bold">{user.firstName} {user.lastName}</h4>
          <span className="text-sm md:text-base text-gray-500 font-medium">
            {user.email}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between mt-3 gap-y-2">
        <div className=" p-2 flex   items-center justify-center whitespace-nowrap gap-x-1.5 border rounded-lg bg-violet-400 text-bgColor">
          <IoLocationOutline className="size-4 shrink-0" />
          <p className="text-xs sm:text-sm font-medium overflow-hidden whitespace-nowrap ">
            {user.address.address}, {user.address.city}
          </p>
        </div>
        <div className=" p-2 flex items-center justify-center gap-x-1.5 border rounded-lg bg-red-400 text-bgColor">
          <FaBuildingColumns className="size-4 shrink-0" />
          <p className="text-sm font-medium overflow-hidden whitespace-nowrap">{user.company.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
