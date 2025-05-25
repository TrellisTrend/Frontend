
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useState } from "react";


const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="w-full bg-gray-100 h-[60px] flex justify-between items-center px-2">

       <NavLink className="flex flex-col items-center  w-24 sm:w-36 rounded-md" to="/">
          <p className="text-[12px] px-2 font-bold md:text-xl">E-commerce</p>
          <hr className=" w-2/4 border-none bg-red-400  h-[1.5px] hidden"/>
        </NavLink>

     

       

        <div className="flex flex-row justify-center items-center  ">

        <NavLink className="flex flex-col items-center w-14  sm:w-32 rounded-md" to="/collection">
          <p className="text-[12px] px-2 font-bold md:text-xl ">Collection</p>
          <hr className=" w-2/4 border-none bg-red-400  h-[1.5px] hidden"/>
        </NavLink>
          
        <NavLink className="flex flex-col items-center w-14  sm:w-32 rounded-md" to="/about">
          <p className="text-[12px] px-2 font-bold md:text-xl ">About</p>
          <hr className=" w-2/4 border-none bg-red-400  h-[1.5px] hidden"/>
        </NavLink>

        <NavLink className="flex flex-col items-center w-14  sm:w-32 rounded-md" to="/contact">
          <p className="text-[12px] px-2 font-bold md:text-xl ">Contact</p>
          <hr className=" w-2/4 border-none bg-red-400  h-[1.5px] hidden"/>
        </NavLink>
          
        </div>
        
    

      <div className="flex items-center gap-6">

        <img src={assets.search_icon} alt="search Icon" className="w-6 cursor-pointer"/>

        <div className="group relative">
          <img src={assets.profile_icon} alt="cart Icon" className="w-6 cursor-pointer"/>
          <div className="group-hover:block hidden absolute  right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-40 bg-slate-300 text-white px-3 py-2 rounded-lg">

              <NavLink to="/profile" className="flex items-center gap-2 cursor-pointer hover:text-black">
                <img src={assets.profile_icon} alt="profile Icon" className="w-6"/>
                <p>My Profile</p>
              </NavLink>
              <NavLink to="/order" className="flex items-center gap-2 cursor-pointer hover:text-black">
                <img src={assets.profile_icon} alt="profile Icon" className="w-6"/>
                <p>Orders</p>
              </NavLink>
              <NavLink to="/logout" className="flex items-center gap-2 cursor-pointer hover:text-black">
                <img src={assets.profile_icon} alt="profile Icon" className="w-6"/>
                <p>Logout</p>
              </NavLink>

            </div>

          </div>
        </div>

        <Link to='/cart' className="relative">
        <img src={assets.cart_icon} alt="cart Icon" className="w-6 cursor-pointer"/>

        <p className="absolute right-[-3px] top-[-3px] w-4 leading-4 bg-slate-500 text-red-600 aspect-square rounded-full text-[8px] text-center">10</p>

        </Link>

        <div>
          <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="menu Icon" className="w-6 cursor-pointer sm:hidden"/>
        </div>

      </div>

      <div className={`absolute top-0 right-0 bottom-0 bg-white transition-all ${visible ? 'w-full' :'w-0'}`}>
        <div className="flex flex-col ">

          <div onClick={()=>setVisible(false)} className="flex items-center gap-3 p-3"> 
            <img src={assets.dropdown_icon} alt="close Icon" className="w-4 h-6 cursor-pointer rotate-180"/>
            <p>Back</p>
          </div>

          
          <NavLink onClick={()=>setVisible(false)} to="/" className="px-4 py-2">E-commerce</NavLink>
          <NavLink onClick={()=>setVisible(false)} to="/about" className="px-4 py-2">About</NavLink>
          <NavLink onClick={()=>setVisible(false)} to="/contact" className="px-4 py-2">Contact</NavLink>
        
       
         </div>
      </div>

    </nav>
  );
};

export default Navbar;
