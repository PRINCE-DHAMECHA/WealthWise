import React, { useEffect, useState } from "react";
import { Header } from "../components";
import { useAppContext } from "../context/appContext.js";
import RingLoader from "react-spinners/RingLoader";
import { TiExportOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const Watchlist = () => {
  const [loading, setLoading] = useState(true);
  const [watchlist, setWatchlist] = useState([]);
  const { currentColor, authFetch } = useAppContext();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await authFetch.get("stockWatch/get");
        setWatchlist(data.watches);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="m-2 md:m-10 mb-10 mt-24 md:mx-9 mx-2 p-2 md:p-6 dark:bg-secondary-dark-bg bg-white rounded-3xl text-center">
      <div className="text-center w-full">
        <Header title="My Watchlist" />
        {loading ? (
          <div className="w-full p-20">
            <div className="m-auto w-7">
              <RingLoader color={currentColor} className="-ml-5" />
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center items-center gap-10 mx-1 dark:text-white">
            {watchlist.map((watch) => {
              return (
                <div style={{ width: "32rem" }} key={watch._id}>
                  <div
                    style={{
                      borderLeft: `4px solid ${currentColor}`,
                    }}
                    className="rounded-lg border border-gray-100 cursor-pointer dark:shadow-md shadow-sm dark:bg-[#3d4249] dark:border-gray-700 dark:hover:shadow-xl hover:shadow-md"
                  >
                    <div className="flex md:p-5 p-3 justify-around">
                      <div className="w-2/3 flex flex-col gap-3 justify-between text-left md:px-1 m-auto">
                        <span className="md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                          {watch.name}
                        </span>
                        <span className="pr-1 md:text-lg text-base  text-gray-900 dark:text-white">
                          LTP: {watch.currentPrice} &#8377;
                        </span>
                      </div>
                      <div className="w-1/3 text-right flex justify-end md:px-1 m-auto">
                        <Link
                          to={`/stockDetails/${watch.name}/${watch.symbol}`}
                          style={{ background: currentColor }}
                          className="flex items-center md:py-2 px-4 py-2 md:px-4 text-sm text-md text-center rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-80 text-white font-light tracking-widest hover:skew-x-2 mr-0"
                        >
                          Explore
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
