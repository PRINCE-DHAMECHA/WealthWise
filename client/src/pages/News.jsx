import React, { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import { Header } from "../components";
import { useAppContext } from "../context/appContext";
import NewsCard from "../components/NewsCard";
import Masonry from "react-masonry-css";
const News = () => {
  const { currentColor, authFetch } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    setLoading(true);
    const handleFetch = async () => {
      try {
        const { data } = await authFetch.get("/news/getNews");
        const { resNews } = data;
        console.log(resNews);
        setNews(resNews.newsArr);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    handleFetch();
  }, []);
  console.log(news);
  const breakpointObj = {
    default: 5,
    3000: 4,
    2000: 3,
    1200: 3,
    1000: 2,
    500: 1,
  };
  return (
    <div className="m-2 md:m-10 mb-10 mt-24 md:mx-9 mx-2 p-2 md:p-6 dark:bg-secondary-dark-bg bg-white rounded-3xl text-center">
      <div className="text-center w-full">
        <Header title={"Headlines"} />
        {loading ? (
          <div className="w-full p-20">
            <div className="m-auto w-7">
              <RingLoader color={currentColor} className="-ml-5" />
            </div>
          </div>
        ) : (
          <div>
            <Masonry
              className="flex animate-slide-fwd"
              breakpointCols={breakpointObj}
            >
              {news?.map((n) => (
                <NewsCard news={n} key={n._id} className="w-max" />
              ))}
            </Masonry>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
