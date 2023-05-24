import React, { useState } from "react";
import InfoCard from "./InfoCard";
import { useAppContext } from "../context/appContext";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
const Info = () => {
  const { currentColor } = useAppContext();
  const [dis, setDis] = useState(false);

  return (
    <>
      <div className="fixed right-4 bottom-[2px]" style={{ zIndex: "100000" }}>
        <button
          type="button"
          className="text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white bg-white"
          onClick={() => setDis((prev) => !prev)}
          style={{ background: "white", borderRadius: "50%" }}
        >
          {dis ? <IoCloseSharp /> : <HiOutlineLightBulb />}
        </button>
      </div>
      {dis && <InfoCard />}
    </>
  );
};

export default Info;
