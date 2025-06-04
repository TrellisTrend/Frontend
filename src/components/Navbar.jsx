import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

import { useSelector } from "react-redux";


const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {carts} = useSelector((state) => state.allCart);
  return (
    <nav className="w-full bg-gray-100 h-[60px] flex justify-between items-center px-4 py-4 md:px-[6vw] lg:px-[8vw] border-b-2 border-gray-300">
      <NavLink
        className="flex flex-col items-center  w-24 sm:w-36 rounded-md"
        to="/"
      >
        <p className="text-[12px] px-2 font-bold md:text-xl">Trellis Trend</p>
        <hr className=" w-2/4 border-none bg-red-400  h-[1.5px] hidden" />
      </NavLink>

      <div className="flex flex-row justify-center items-center  ">
        <NavLink
          className="flex flex-col items-center w-14  sm:w-32 rounded-md"
          to="/collection"
        >
          <p className="text-[12px] px-2 font-bold md:text-xl ">Collection</p>
          <hr className=" w-2/4 border-none bg-red-400  h-[1.5px] hidden" />
        </NavLink>

        <NavLink
          className="flex flex-col items-center w-14  sm:w-32 rounded-md"
          to="/about"
        >
          <p className="text-[12px] px-2 font-bold md:text-xl ">About</p>
          <hr className=" w-2/4 border-none bg-red-400  h-[1.5px] hidden" />
        </NavLink>

        <NavLink
          className="flex flex-col items-center w-14  sm:w-32 rounded-md"
          to="/contact"
        >
          <p className="text-[12px] px-2 font-bold md:text-xl ">Contact</p>
          <hr className=" w-2/4 border-none bg-red-400  h-[1.5px] hidden" />
        </NavLink>
      </div>

      <div className="flex items-center gap-6">
        

        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="Image Icon"
            className="w-6 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute  right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-40 bg-slate-300 text-white px-3 py-2 rounded-lg">
              <NavLink
                to="/profile"
                className="flex items-center gap-2 cursor-pointer hover:text-black"
              >
                <img
                  src={assets.profile_icon}
                  alt="profile Icon"
                  className="w-6"
                />
                <p>My Profile</p>
              </NavLink>

              <NavLink
                to="/order"
                className="flex items-center gap-2 cursor-pointer hover:text-black"
              >
                <img
                  src={assets.profile_icon}
                  alt="profile Icon"
                  className="w-6"
                />
                <p>Orders</p>
              </NavLink>
              <NavLink
                to="/logout"
                className="flex items-center gap-2 cursor-pointer hover:text-black"
              >
                <img
                  src={assets.profile_icon}
                  alt="profile Icon"
                  className="w-6"
                />
                <p>Logout</p>
              </NavLink>
            </div>
          </div>
        </div>

        <Link to="/cart" className=" mr-5">
          <div className="relative w-fit mx-auto">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
              <span>
                <FaShoppingCart />
              </span>
            </div>

            <span className="absolute -top-1 -right-1 font-bold badge badge-sm indicator-item p-[2px] bg-error text-white h-4 w-4 text-[8px]">{carts.length ? carts.length : 0}</span>
          </div>
        </Link>

        <div>
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            alt="menu Icon"
            className="w-6 cursor-pointer sm:hidden"
          />
        </div>
      </div>

      <div
        className={`absolute top-0 right-0 bottom-0 bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        {/* <div className="flex flex-col ">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-3 p-3"
          >
            <img
              src={assets.dropdown_icon}
              alt="close Icon"
              className="w-4 h-6 cursor-pointer rotate-180"
            />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="px-4 py-2"
          >
            Trellis Trend
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="px-4 py-2"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="px-4 py-2"
          >
            Contact
          </NavLink>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
