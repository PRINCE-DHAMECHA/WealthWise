import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { themeColors } from "../data/dummy";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const CustomColorPicker = ({ id, mode }) => {
  const { setColor } = useAppContext();
  return (
    <ColorPickerComponent
      id={id}
      mode={mode}
      modeSwitcher={false}
      inline
      showButtons={false}
      change={(args) => {
        // document.getElementById("preview").style.backgroundColor =
        //   args.currentValue.hex;
        setColor(args.currentValue.hex);
      }}
    />
  );
};

const ColorPicker = () => {
  const { currentColor, setColor } = useAppContext();
  return (
    <div className="m-2 md:m-10 mb-10 mt-24 md:mt-2 mx-2 md:mx-9 p-2 pb-10 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />

      <div className="text-center">
        {/* <div id="preview" /> */}
        <div
          className="md:w-1/2 w-5/6 mb-5 rounded-md p-5 text-white text-center m-auto shadow-md dark:shadow-gray-600"
          style={{
            borderLeft: `2px solid ${currentColor}`,
            borderRadius: "10px",
          }}
        >
          <p className="m-auto block text-lg text-black dark:text-white">
            Current Theme : <b>{currentColor}</b>
          </p>
        </div>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl text-white font-semibold mt-4 mb-4">
              Inline Picker
            </p>
            <CustomColorPicker id="inline-picker" mode="Picker" />
          </div>
          <div>
            <p className="text-2xl  text-white font-semibold mt-2 mb-4">
              Inline Pallete
            </p>
            <CustomColorPicker id="inline-palette" mode="Palette" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
