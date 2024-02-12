/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const sortOptions = [
  {
    title: "Name",
    value: "firstName",
  },
  {
    title: "Email",
    value: "email",
  },
]

const Sort = ({sortQuery,setSearchParams}) => {
  useEffect(() => {
    setSearchParams((prev) => {
      prev.set("sort", "");
      return prev;
    },{
      replace:true
    });
  
   
  }, [])
  
  
  
  const handleSort=(value)=>{
    if(sortQuery){
      setSearchParams((prev) => {
        prev.set("sort", "");
        return prev;
      },{
        replace:true
      });
    }
    setSearchParams((prev) => {
      prev.set("sort", value);
      return prev;
    },{
      replace:true
    });
    

  }
  return (
    <details className="mt-6 border border-border  py-2 px-6 rounded-md dropdown dropdown-end">
      <summary className="flex items-center gap-x-2 cursor-pointer">
        <p className="text-sm font-semibold">Sort By</p>
        <IoIosArrowDown className="size-4" />
      </summary>
      <ul className=" mt-2.5 p-2 border border-border shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit">
        {sortOptions.map((option, index) => {
          return (
            <li key={index}>
              <label>
                <input type="radio" className="radio" value={option.value} onChange={(e)=>handleSort(e.target.value)} checked={sortQuery===option.value}/>
                <span className="text-sm font-semibold">{option.title}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </details>
  );
};

export default Sort;
