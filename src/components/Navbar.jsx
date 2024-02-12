import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="w-full h-16  border-b border-b-gray-400 flex  items-center justify-center px-8 lg:px-[2rem] xl:px-[4rem]">
       <Link to="/" className="text-3xl font-bold italic font-serif">LOGO</Link>

    </div>
  )
}

export default Navbar