import React, { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import { Header } from "../components";
import { useAppContext } from "../context/appContext";

const BuyCar = () => {
  const { currentColor } = useAppContext();
  const [price, setPrice] = useState(700000);
  const [interest, setInterest] = useState(8.5);
  const [emi, setEmi] = useState(0);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(true);
  useEffect(() => {
    setLoading(true);
    let tempInt = interest / 12;
    tempInt = tempInt / 100;
    let payments = 48;
    let x = Math.pow(1 + tempInt, payments);
    let monthly = (((price * 4) / 5) * x * tempInt) / (x - 1);
    setEmi(monthly);
    setLoading(false);
    setErr(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChange = () => {
    if (price <= 0 || interest <= 0 || interest > 100) {
      setErr(true);
      return;
    }
    setLoading(true);
    let tempInt = interest / 12;
    tempInt = tempInt / 100;
    let payments = 48;
    let x = Math.pow(1 + tempInt, payments);
    let monthly = (((price * 4) / 5) * x * tempInt) / (x - 1);
    setEmi(monthly);
    setErr(false);
    setLoading(false);
  };
  useEffect(() => {
    handleChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price, interest]);
  return (
    <div>
      <Header title={"(20-10-4) Rule"} />
      {loading ? (
        <div className="w-full p-20">
          <div className="m-auto w-7">
            <RingLoader color={currentColor} className="-ml-5" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row justify-center gap-5">
          <div
            style={{
              borderLeft: `2px solid ${currentColor}`,
              borderRadius: "10px",
            }}
            className="flex flex-col justify-center lg:w-1/2 text-left text-sm lg:text-lg dark:text-white gap-9 p-6 shadow-md dark:shadow-gray-600"
          >
            <div className="flex flex-row">
              <p className="lg:w-1/2 w-full m-auto dark:text-white">
                Price Of Car:{" "}
              </p>
              <div className="w-full">
                <input
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  type="number"
                  className="lg:w-2/3 m-auto xl:h-9 h-7 mx-auto  text-center border-1 border-solid border-black rounded-md text-black"
                  min={"0"}
                ></input>
              </div>
            </div>
            <div className="flex flex-row">
              <p className="lg:w-1/2 w-full m-auto">Interest: </p>
              <div className="w-full">
                <input
                  value={interest}
                  onChange={(e) => {
                    setInterest(e.target.value);
                  }}
                  type="number"
                  className="lg:w-2/3 m-auto xl:h-9 h-7 mx-auto  text-center border-1 border-solid border-black rounded-md text-black"
                  min={"0"}
                ></input>
              </div>
            </div>
            <p>
              You Need to pay <b>20%</b> down payment
            </p>
            <p>
              Monthly EMI should be less <b>10%</b> of your salary
            </p>
            <p>
              EMI tenure should be maximum <b>4</b> years
            </p>
          </div>
          <div
            style={{
              borderLeft: `2px solid ${currentColor}`,
              borderRadius: "10px",
            }}
            className="flex flex-col justify-center lg:w-1/2 text-left text-sm lg:text-lg dark:text-white gap-9 p-6 shadow-md dark:shadow-gray-600"
          >
            {!err && (
              <p>
                Your salary need to be minimum{" "}
                <b>
                  {err
                    ? "NA"
                    : Number(emi * 10).toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                      })}
                </b>{" "}
                &#8377;
              </p>
            )}
            {!err && (
              <p>
                Down Payment:{" "}
                {err
                  ? "NA"
                  : (Number(price) / 5).toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
                &#8377;
              </p>
            )}
            {!err && (
              <p>
                EMI will be:{" "}
                {err
                  ? "NA"
                  : Number(emi).toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
                &#8377;
              </p>
            )}
            {!err && <p>Loan tenure: {err ? "NA" : 4} Years</p>}
            {err && (
              <p className="text-red-500 block m-auto text-xl">
                Please Provide Valid Values
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyCar;
