
import { IoSearchOutline } from "react-icons/io5";

const SearchUser = () => {
  return (
    <div className="flex-1 max-w-[20rem] flex items-center justify-between border border-border py-1.5 px-3 rounded-md">
          <input type="text" placeholder="search user..." className="font-semibold" />
          <IoSearchOutline  className="size-6"/>
   </div>
  )
}

export default SearchUser