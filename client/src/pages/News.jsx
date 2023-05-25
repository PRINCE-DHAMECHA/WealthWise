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
  const [inp, setinp] = useState("");

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
    default: 2,
    3000: 4,
    2000: 3,
    1200: 2,
    1000: 2,
    500: 1,
  };
  return (
    <div className="m-2 md:m-10 mb-10 mt-24 md:mt-2 md:mx-9 mx-2 p-2 md:p-6 dark:bg-secondary-dark-bg bg-white rounded-3xl text-center">
      <div className="text-center w-full">
        <Header title={"Headlines"} />
        <div className="m-auto mb-3 w-full xl:w-96">
          <div className="input-group w-full xl:w-96 relative flex flex-wrap items-stretch  mb-4 rounded">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 inline w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search Headlines"
              onChange={(e) => setinp(e.target.value)}
              aria-label="Search"
              aria-describedby="button-addon2"
            />
          </div>
        </div>
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
              {news
                ?.filter((n) => {
                  return (
                    n.title.toLowerCase().includes(inp.toLowerCase()) ||
                    n?.description?.toLowerCase()?.includes(inp.toLowerCase())
                  );
                })
                .map((n) => (
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
