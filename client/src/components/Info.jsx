import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useState } from "react";
import InfoCard from "./InfoCard";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useAppContext } from "../context/appContext";
import { HiOutlineLightBulb } from "react-icons/hi";

const Info = () => {
  const { currentMode, currentColor } = useAppContext();
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
          <HiOutlineLightBulb />
        </button>
      </div>
      {dis && <InfoCard />}
    </>
  );
};

export default Info;
