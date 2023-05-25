import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { MdNavigateNext } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { InformationData } from "../data/dummy";

const InfoCard = ({}) => {
  const { currentColor } = useAppContext();
  const [details, setDetails] = useState("");
  const [title, setTitle] = useState("");

  let r = parseInt(currentColor.substring(1, 3), 16);
  let g = parseInt(currentColor.substring(3, 5), 16);
  let b = parseInt(currentColor.substring(5, 7), 16);
  r = Math.min(r + 40, 255);
  g = Math.min(g + 40, 255);
  b = Math.min(b + 40, 255);
  let rgba2 = `rgba(${r}, ${g}, ${b}, 1.0)`;

  const location = useLocation();
  const currentRoute = location.pathname.replace("/", "");

  const handleButtonClick = () => {
    const infoFetched = InformationData.find(
      (obj) => obj.routeName === currentRoute
    );
    const rand = Math.floor(Math.random() * 15);
    const newDetails = infoFetched.contents[rand];
    setDetails(newDetails);
    setTitle(infoFetched.title);
  };

  useEffect(() => {
    handleButtonClick();
  }, []);

  return (
    <div
      style={{ zIndex: "100000" }}
      className="md:w-1/4 w-4/5 fixed bottom-7 right-9"
    >
      <div
        style={{
          borderLeft: `2px solid white`,
          borderRadius: "10px",
          backgroundColor: `${rgba2}`,
          margin: "10px",
          zIndex: "1000000",
        }}
        className="rounded-lg overflow-scroll scrollClass h-52 py-2"
      >
        <h2 className="text-xl text-white font-bold px-4">{title}</h2>
        <p className="text-themeColor tracking-wide text-white px-4 py-2">
          {details}
        </p>
        <div className="flex justify-end">
          <button
            className="absolute top-4 right-4 text-xl text-white"
            onClick={handleButtonClick}
          >
            <MdNavigateNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
