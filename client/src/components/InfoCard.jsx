import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import { MdNavigateNext } from "react-icons/md";
import { useLocation } from "react-router-dom";

const InfoCard = ({}) => {
  const { currentColor } = useAppContext();

  let r = parseInt(currentColor.substring(1, 3), 16);
  let g = parseInt(currentColor.substring(3, 5), 16);
  let b = parseInt(currentColor.substring(5, 7), 16);
  r = Math.min(r + 70, 255);
  g = Math.min(g + 70, 255);
  b = Math.min(b + 70, 255);
  let rgba2 = `rgba(${r}, ${g}, ${b}, 1.0)`;

  const location = useLocation();
  const currentRoute = location.pathname.replace("/", "");

  return (
    <div
      style={{ zIndex: "100000" }}
      className="md:w-1/4 w-4/5 h-1/4 fixed bottom-10 right-5"
    >
      <div
        style={{
          borderLeft: `2px solid ${currentColor}`,
          borderRadius: "10px",
          backgroundColor: `${rgba2}`,
          margin: "10px",
          zIndex: "1000000",
        }}
        className="rounded-lg relative"
      >
        <h2 className="text-xl text-white font-bold px-4 py-2">
          {currentRoute}
        </h2>
        <p className="text-themeColor text-white px-4 py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsam
          error asperiores dolorem iste quasi eaque esse possimus delectus quae
          ad culpa dolores ducimus consequatur, quia debitis molestiae animi
          praesentium.
        </p>
        <div className="flex justify-end">
          <button className="absolute top-2 right-6 text-xl text-white">
            <MdNavigateNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
