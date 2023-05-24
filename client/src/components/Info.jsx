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
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <button
          type="button"
          className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
          onClick={() => setDis((prev) => !prev)}
          style={{ background: currentColor, borderRadius: "50%" }}
        >
          {dis ? <IoCloseSharp /> :<HiOutlineLightBulb />}
        </button>
      </div>
      {dis && <InfoCard />}
    </>
  );
};

export default Info;
