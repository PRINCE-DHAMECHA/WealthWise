// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// import React from "react";
// import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
// import { useAppContext } from "../context/appContext";

// const SetTheme = () => {
//   const { currentMode, setMode, currentColor } = useAppContext();

//   return (
//     <>
//       <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
//         <TooltipComponent content="Switch Mode" position="Top">
//           {/* onClick={() => setThemeSettings(true)} */}
//           <button
//             type="button"
//             className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
//             onClick={setMode}
//             style={{ background: currentColor, borderRadius: "50%" }}
//           >
//             {(currentMode === "Dark")
//              ? (<IoSunnyOutline value="Light" />) : (<IoMoonOutline value="Dark" />)}
//           </button>
//         </TooltipComponent>
//       </div>
//       {/* {themeSettings && <ThemeSettings />} */}
//     </>
//   );
// };

// export default SetTheme;
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useState } from "react";
import InfoCard from "./InfoCard";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useAppContext } from "../context/appContext";
import { HiOutlineLightBulb } from "react-icons/hi";

const SetTheme = () => {
  const { currentMode, currentColor } = useAppContext();
  const [dis, setDis] = useState(false);

  return (
    <>
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent content="Info" position="Top">
          {/* onClick={() => setThemeSettings(true)} */}
          <button
            type="button"
            className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
            onClick={() => setDis((prev) => !prev)}
            style={{ background: currentColor, borderRadius: "50%" }}
          >
            <HiOutlineLightBulb />
          </button>
        </TooltipComponent>
      </div>
      {dis && <InfoCard />}
    </>
  );
};

export default SetTheme;
