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
      <div className="fixed right-4 bottom-[2px]" style={{ zIndex: "100000" }}>
        <button
          type="button"
          className="text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white bg-white"
          onClick={() => setDis((prev) => !prev)}
          style={{ background: "white", borderRadius: "50%" }}
        >
          <HiOutlineLightBulb color={currentColor} />
        </button>
      </div>
      {dis && <InfoCard />}
    </>
  );
};

export default Info;
