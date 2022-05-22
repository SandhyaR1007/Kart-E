import React from "react";
import NotificationBar from "./NotificationBar";

const Navbar = () => {
  return (
    <>
      <NotificationBar />
      <nav className=" flex items-center justify-between flex-wrap bg-white-500 p-3 px-6  fixed w-screen">
        {/* <div className="flex items-center flex-shrink-0  mr-6"> */}
        <div className="cursor-pointer">
          <span className="font-semibold text-xl ">Kart-E</span>
        </div>

        <div className="w-2/5">
          <ul className="flex items-center justify-evenly items-center">
            <li className="text-sm mt-1 uppercase px-1.5 cursor-pointer hover:border-teal-500 border-transparent border-b-2">
              Men
            </li>
            <li className="text-sm mt-1 uppercase px-1.5 cursor-pointer hover:border-teal-500 border-transparent border-b-2">
              Women
            </li>
            <li className="text-sm mt-1 uppercase px-1.5 cursor-pointer hover:border-teal-500 border-transparent border-b-2">
              Kids
            </li>
            <li className="text-sm mt-1 uppercase px-1.5 cursor-pointer hover:border-teal-500 border-transparent border-b-2">
              Beauty
            </li>
            <li className="text-sm mt-1 uppercase px-1.5 cursor-pointer hover:border-teal-500 border-transparent border-b-2">
              Home
            </li>
          </ul>
        </div>
        <div className="w-2/6 ">
          <label className="relative block">
            <span class="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                class="w-3 h-3"
                fill="none"
                stroke="gray"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 
              block bg-slate-100 w-full   rounded py-1.5 pl-9 pr-3  focus:outline-none focus:bg-white  focus:ring-slate-200 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
          {/* <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          <input
            placeholder="search"
            className="
            mt-1 block w-full px-3 py-1.5 bg-slate-100   rounded text-sm  placeholder-slate-500"
          /> */}
        </div>
        <div className="w-1/5 flex justify-end">
          <svg
            className="w-5 h-5 mx-2.5 cursor-pointer"
            fill="none"
            stroke="gray"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
          <svg
            className="w-5 h-5 mx-2.5 cursor-pointer"
            fill="none"
            stroke="gray"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            ></path>
          </svg>
          <svg
            className="w-5 h-5 mx-2.5 cursor-pointer"
            fill="none"
            stroke="gray"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        {/* </div> */}
        {/* <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
