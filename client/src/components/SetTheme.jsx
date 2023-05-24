import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useAppContext } from "../context/appContext";

const SetTheme = () => {
  const { currentMode, setMode, currentColor } = useAppContext();

  return (
    <>
      <div style={{ zIndex: "1000" }}>
        <TooltipComponent content="Switch Mode" position="Top">
          <button
            type="button"
            className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
            onClick={() => setDis((prev) => !prev)}
            style={{
              background: "white",
              borderRadius: "50%",
              border: `2px solid ${currentColor}`,
            }}
          >
            <HiOutlineLightBulb style={{ color: currentColor }} />
          </button>
        </TooltipComponent>
      </div>
      {/* {themeSettings && <ThemeSettings />} */}
    </>
  );
};
export default SetTheme;
