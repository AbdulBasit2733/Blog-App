
import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <>
    <nav className=" w-full h-14 bg-indigo-400 flex justify-between px-4 md:px-4 items-center">
      <div className=" text-2xl text-indigo-700 font-bold">Abdul Basit</div>
      <ul className= "md:flex  font-semibold">
        <Link to='/' className=" mx-[10px] cursor-pointer">Home</Link>
        <Link to='/about' className=" mx-[10px] cursor-pointer">About</Link>
        <Link to='/contact' className=" mx-[10px] cursor-pointer">Contact</Link>
        <Link to='/blogs' className=" mx-[10px] cursor-pointer">Blogs</Link>
        <Link to='/addblog' className=" mx-[10px] cursor-pointer">Add Blog</Link>
      </ul>
      <div className=" hidden md:block p-2 bg-indigo-700 text-white rounded-lg font-bold cursor-pointer">Login/SignUp</div>
      <div className=" md:hidden ">
        <a  className=" text-4xl" href="#">&#8801;</a>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
