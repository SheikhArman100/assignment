import { IoSearchOutline } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const SearchUser = ({ searchQuery, setSearchParams }) => {
  const handleSearch = (value) => {
    setSearchParams((prev) => {
      prev.set("search", value);
      return prev;
    });
  };

  return (
    <div className="flex-1 max-w-[20rem] flex items-center justify-between border border-border py-2 px-3  rounded-md">
      <input
        type="text"
        placeholder="search user..."
        className="font-semibold"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <IoSearchOutline className="size-6" />
    </div>
  );
};

export default SearchUser;
