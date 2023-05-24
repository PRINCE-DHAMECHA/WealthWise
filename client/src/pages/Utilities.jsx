import React from "react";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { Navbar, Sidebar } from "../components";
import SetTheme from "../components/SetTheme";
import Info from "../components/Info";

const Demo = () => {
  const { activeMenu, currentColor } = useAppContext();
  return (
    <>
      <div className="">
        <div className="flex dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="hidden dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg  navbar w-full">
              <Navbar />
            </div>
            <Outlet />
          </div>
        </div>
        <Info />
        <div
          style={{
            backgroundColor: currentColor,
            zIndex: "10000",
            opacity: "90%",
          }}
          className="fixed w-full bottom-0 right-0 text-white py-3 px-4 flex items-center space-x-4 overflow-hidden"
        >
          <span className="font-bold">News:</span>
          <marquee className="flex-grow">Stock Latest News</marquee>
        </div>
      </div>
    </>
  );
};

export default Demo;
