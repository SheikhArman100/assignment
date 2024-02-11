import { IoLocationOutline } from "react-icons/io5";
import { FaBuildingColumns } from "react-icons/fa6";
const UserCard = () => {
  return (
    <div className="relative card max-w-[22rem] bg-base-100 shadow-xl p-4 border">
      <div className="flex flex-col items-center gap-x-3">
        {/* avatar */}
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-base md:text-lg font-bold">Jennie kim</h4>
          <span className="text-sm md:text-base text-gray-500 font-medium">
            jenniekim@gmail.com
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3 gap-x-2">
        <div className="w-[60%] p-2 flex   items-center justify-center gap-x-1.5 border rounded-lg bg-violet-400 text-bgColor">
          <IoLocationOutline className="size-4 shrink-0" />
          <p className="text-sm font-medium overflow-hidden">
            Dhaka,Bangladesh
          </p>
        </div>
        <div className="w-[40%] p-2 flex items-center justify-center gap-x-1.5 border rounded-lg bg-red-400 text-bgColor">
          <FaBuildingColumns className="size-4 shrink-0" />
          <p className="text-sm font-medium overflow-hidden">Company</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
