import React from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useAppContext } from "../context/appContext";

const SetTheme = () => {
  const { currentMode, setMode, currentColor } = useAppContext();

  return (
    <>
      <div style={{ zIndex: "1000" }}>
        <button
          type="button"
          className="text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
          onClick={setMode}
          style={{
            background: currentMode !== "Dark" ? currentColor : "white",
            borderRadius: "50%",
            border: `1px solid ${currentColor}`,
          }}
        >
          {currentMode === "Dark" ? (
            <IoSunnyOutline color={currentColor} value="Light" />
          ) : (
            <IoMoonOutline color={"white"} value="Dark" />
          )}
        </button>
      </div>
    </>
  );
};
export default SetTheme;
