import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { Navbar, Sidebar } from "../components";
import Info from "../components/Info";

const Demo = () => {
  const { authFetch, activeMenu } = useAppContext();
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
          s += "     ";
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
    <>
      <div className="">
        <div className="flex dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="hidden dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg  navbar w-full">
              <Navbar />
            </div>
            <Outlet />
          </div>
        </div>
        <Info />
      </div>
    </>
  );
};

export default Demo;
