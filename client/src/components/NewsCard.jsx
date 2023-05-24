import React from "react";
import { useAppContext } from "../context/appContext";

const NewsCard = ({ news }) => {
  const { currentColor } = useAppContext();
  return (
    <div
      style={{
        borderLeft: `2px solid ${currentColor}`,
        borderRadius: "10px",
      }}
      className="flex flex-col dark:text-white m-5 p-3 shadow-md dark:shadow-gray-600 max-h-52 overflow-scroll gap-4 scrollClass"
    >
      <div
        style={{
          color: currentColor,
        }}
        className="text-left"
      >
        <p className="text-base">{news.title}</p>
      </div>
      <div className="text-left">
        <p className="text-sm">{news.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
