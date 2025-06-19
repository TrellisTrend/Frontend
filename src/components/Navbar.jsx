// import { Link, NavLink } from "react-router-dom";
// import { assets } from "../assets/frontend_assets/assets";
// import { useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const { carts } = useSelector((state) => state.allCart);
//   const [ loggedIn, setLoggedIn ] = useState(true);
//   return (
//     <nav className="w-full bg-gray-100 h-[60px] flex justify-between items-center px-4 py-4 md:px-[6vw] lg:px-[8vw] border-b-2 border-gray-300">
//       <NavLink
//         className="flex flex-col items-center  w-24 sm:w-36 rounded-md"
//         to="/"
//       >
//         <p className="text-[12px] px-2 font-bold md:text-xl">Trellis Trend</p>
//         <hr className=" w-2/4 border-none bg-red-400  h-[1.5px] hidden" />
//       </NavLink>

//       <div className="flex flex-row justify-center items-center  ">
//         <NavLink
//           className="flex flex-col items-center w-14  sm:w-32 rounded-md"
//           to="/collection"
//         >
//           <p className="text-[12px] px-2 font-bold md:text-xl ">Collection</p>
//           <hr className=" w-2/4 border-none bg-red-400  h-[1.5px] hidden" />
//         </NavLink>

//         <NavLink
//           className="flex flex-col items-center w-14  sm:w-32 rounded-md"
//           to="/about"
//         >
//           <p className="text-[12px] px-2 font-bold md:text-xl ">About</p>
//           <hr className=" w-2/4 border-none bg-red-400  h-[1.5px] hidden" />
//         </NavLink>

//         <NavLink
//           className="flex flex-col items-center w-14  sm:w-32 rounded-md"
//           to="/contact"
//         >
//           <p className="text-[12px] px-2 font-bold md:text-xl ">Contact</p>
//           <hr className=" w-2/4 border-none bg-red-400  h-[1.5px] hidden" />
//         </NavLink>
//       </div>

//       <div className="flex items-center gap-6">
//         {loggedIn && (
//           <>
//             <div className="group relative">
//               <img
//                 src={assets.profile_icon}
//                 alt="Image Icon"
//                 className="w-6 cursor-pointer"
//               />
//               <div className="group-hover:block hidden absolute  right-0 pt-4 ">
//                 <div className="flex flex-col gap-2 w-40 bg-slate-300 text-white px-3 py-2 rounded-lg">
//                   <NavLink
//                     to="/dashboard"
//                     className="flex items-center gap-2 cursor-pointer hover:text-black"
//                   >
//                     <img
//                       src={assets.profile_icon}
//                       alt="profile Icon"
//                       className="w-6"
//                     />
//                     <p>Dashboard</p>
//                   </NavLink>

                  
//                   <NavLink
//                     to="/login"
//                     className="flex items-center gap-2 cursor-pointer hover:text-black"
//                   >
//                     <img
//                       src={assets.profile_icon}
//                       alt="profile Icon"
//                       className="w-6"
//                     />
//                     <p>Logout</p>
//                   </NavLink>
//                 </div>
//               </div>
//             </div>

//             <Link to="/cart" className=" mr-5">
//               <div className="relative w-fit mx-auto">
//                 <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
//                   <span>
//                     <FaShoppingCart />
//                   </span>
//                 </div>
//                 {carts.length > 0 && (
//                   <span className="absolute -top-1 -right-1 font-bold badge badge-sm indicator-item p-[2px] bg-error text-white h-4 w-4 text-[8px]">
//                     {carts.length ? carts.length : 0}
//                   </span>
//                 )}
//               </div>
//             </Link>

//             <div>
//               <img
//                 onClick={() => setVisible(true)}
//                 src={assets.menu_icon}
//                 alt="menu Icon"
//                 className="w-6 cursor-pointer sm:hidden"
//               />
//             </div>
//           </>
//         )}

//         {!loggedIn && (
//           <button className="text-[12px] p-2 font-bold md:text-xl border-2 rounded-2xl py-1 border-blue-500">Join Us</button>
//         )}
//       </div>

//       <div
//         className={`absolute top-0 right-0 bottom-0 bg-white transition-all ${
//           visible ? "w-full" : "w-0"
//         }`}
//       >
//         {/* <div className="flex flex-col ">
//           <div
//             onClick={() => setVisible(false)}
//             className="flex items-center gap-3 p-3"
//           >
//             <img
//               src={assets.dropdown_icon}
//               alt="close Icon"
//               className="w-4 h-6 cursor-pointer rotate-180"
//             />
//             <p>Back</p>
//           </div>

//           <NavLink
//             onClick={() => setVisible(false)}
//             to="/"
//             className="px-4 py-2"
//           >
//             Trellis Trend
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             to="/about"
//             className="px-4 py-2"
//           >
//             About
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             to="/contact"
//             className="px-4 py-2"
//           >
//             Contact
//           </NavLink>
//         </div> */}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useState } from "react";
import { FaShoppingCart, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { carts } = useSelector((state) => state.allCart);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="w-full bg-white h-[70px] flex justify-between items-center px-4 py-4 md:px-[6vw] lg:px-[8vw] border-b-2 border-gray-200 shadow-sm">
      {/* Logo Section */}
      <NavLink
        className="flex flex-col items-center w-24 sm:w-36 rounded-md group"
        to="/"
      >
        <p className="text-[14px] px-2 font-bold md:text-xl text-gray-800 group-hover:text-indigo-600 transition-colors">
          Trellis Trend
        </p>
        <hr className="w-0 group-hover:w-2/4 border-none bg-indigo-500 h-[2px] transition-all duration-300 mt-1" />
      </NavLink>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex flex-row justify-center items-center space-x-2">
        <NavLink
          className={({ isActive }) => 
            `flex flex-col items-center px-4 py-2 rounded-md group transition-colors ${
              isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-500'
            }`
          }
          to="/collection"
        >
          <span className="font-medium">Collection</span>
          <hr className="w-0 group-hover:w-full border-none bg-indigo-500 h-[2px] transition-all duration-300 mt-1" />
        </NavLink>

        <NavLink
          className={({ isActive }) => 
            `flex flex-col items-center px-4 py-2 rounded-md group transition-colors ${
              isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-500'
            }`
          }
          to="/about"
        >
          <span className="font-medium">About</span>
          <hr className="w-0 group-hover:w-full border-none bg-indigo-500 h-[2px] transition-all duration-300 mt-1" />
        </NavLink>

        <NavLink
          className={({ isActive }) => 
            `flex flex-col items-center px-4 py-2 rounded-md group transition-colors ${
              isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-500'
            }`
          }
          to="/contact"
        >
          <span className="font-medium">Contact</span>
          <hr className="w-0 group-hover:w-full border-none bg-indigo-500 h-[2px] transition-all duration-300 mt-1" />
        </NavLink>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            {/* Profile Dropdown */}
            <div className="group relative">
              <button 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-indigo-50 transition-colors"
                aria-label="User profile"
              >
                <FaUser className="text-gray-600 text-lg" />
              </button>
              
              <div className="group-hover:block hidden absolute right-0 pt-2 z-50">
                <div className="flex flex-col gap-1 w-48 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg border border-gray-200">
                  <NavLink
                    to="/dashboard"
                    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    <FaUser className="text-gray-500" />
                    <span>Dashboard</span>
                  </NavLink>

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-red-50 hover:text-red-600 transition-colors text-left"
                  >
                    <FaSignOutAlt className="text-gray-500" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cart Icon */}
            <Link to="/cart" className="relative" aria-label="Shopping cart">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-sm hover:bg-indigo-50 transition-colors">
                <FaShoppingCart className="text-gray-600" />
                {carts.length > 0 && (
                  <span className="absolute -top-1 -right-1 font-bold badge badge-sm indicator-item p-[2px] bg-red-500 text-white h-5 w-5 text-xs flex items-center justify-center">
                    {carts.length}
                  </span>
                )}
              </div>
            </Link>
          </>
        ) : (
          <div className="flex gap-3">
            <NavLink
              to="/login"
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Join Us
            </NavLink>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setVisible(true)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          aria-label="Open menu"
        >
          <img src={assets.menu_icon} alt="Menu" className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Menu */}
      {visible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl">
            <div className="p-4 border-b flex justify-between items-center">
              <span className="font-bold text-lg">Menu</span>
              <button 
                onClick={() => setVisible(false)}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            
            <div className="flex flex-col p-4">
              <NavLink
                onClick={() => setVisible(false)}
                to="/collection"
                className="px-4 py-3 border-b hover:bg-gray-50"
              >
                Collection
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                to="/about"
                className="px-4 py-3 border-b hover:bg-gray-50"
              >
                About
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                to="/contact"
                className="px-4 py-3 border-b hover:bg-gray-50"
              >
                Contact
              </NavLink>
              
              {user ? (
                <>
                  <NavLink
                    onClick={() => setVisible(false)}
                    to="/dashboard"
                    className="px-4 py-3 border-b hover:bg-gray-50"
                  >
                    Dashboard
                  </NavLink>
                  <button
                    onClick={() => {
                      handleLogout();
                      setVisible(false);
                    }}
                    className="px-4 py-3 border-b hover:bg-gray-50 text-left text-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    onClick={() => setVisible(false)}
                    to="/login"
                    className="px-4 py-3 border-b hover:bg-gray-50"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    onClick={() => setVisible(false)}
                    to="/register"
                    className="px-4 py-3 bg-indigo-600 text-white rounded-md text-center mt-2 hover:bg-indigo-700"
                  >
                    Join Us
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;