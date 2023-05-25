import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";

const NewsLine = () => {
  const { currentColor, authFetch } = useAppContext();
  const [news, setNews] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const handleFetch = async () => {
      try {
        const { data } = await authFetch.get("/news/getNews");
        const { resNews } = data;
        let s = "";
        for (let n of resNews.newsArr) {
          s += n.title;
          s += ". . . . .";
        }
        setNews(s);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    handleFetch();
  }, []);
  return (
    <div
      style={{
        backgroundColor: currentColor,
        zIndex: "10000",
        opacity: "90%",
      }}
      className="fixed w-full bottom-0 right-0 text-white py-3 px-4 flex items-center space-x-4 overflow-hidden"
    >
      <marquee className="flex-grow">{news}</marquee>
    </div>
  );
};

export default NewsLine;
