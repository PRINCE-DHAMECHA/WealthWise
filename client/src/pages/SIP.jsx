import React, { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import { Header } from "../components";
import { useAppContext } from "../context/appContext";
import { TiExportOutline } from "react-icons/ti";
import {
  AccumulationChartComponent,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  Export,
  Inject,
} from "@syncfusion/ej2-react-charts";

const SIP = () => {
  const { currentColor, currentMode } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [err, seterr] = useState(false);

  const [amount, setAmount] = useState(1500);
  const [rate, setRate] = useState(12);
  const [period, setPeriod] = useState(25);

  const [invested, setInvested] = useState(0);
  const [wealthGained, setWealtheGained] = useState(0);
  const [totalWealth, setTotalWealth] = useState(0);

  useEffect(() => {
    setLoading(false);
    handleChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, rate, period]);

  const handleChange = () => {
    seterr(false);
    if (
      amount <= 0 ||
      amount >= 500000000 ||
      rate <= 0 ||
      rate > 100 ||
      period >= 90 ||
      period <= 0
    ) {
      seterr(true);
      return;
    }
    setLoading(true);
    const invest = amount * period * 12;
    const n = period * 12,
      r = rate / 12 / 100;
    const total = amount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const gained = total - invest;
    setInvested(invest.toFixed(2));
    setWealtheGained(gained.toFixed(2));
    setTotalWealth(total.toFixed(2));
    seterr(false);
    setLoading(false);
  };

  let chartInstance;
  function clickHandler() {
    chartInstance.exportModule.export(
      "PNG",
      `SIP__amount=${amount}_period=${period}_rate=${rate}`
    );
  }
  const palettes = [
    "#F87171",
    "#47D773",
    "#E4BF58",
    "#4174C9",
    "#3C9D4E",
    "#6FAAB0",
  ];

  const dataChart = [
    { x: "Invested Amount", y: invested },
    { x: "Wealth Gain", y: wealthGained },
  ];

  return (
    <div className="text-center w-full">
      <Header title={"SIP Calculator"} />
      {loading ? (
        <div className="w-full p-20">
          <div className="m-auto w-7">
            <RingLoader color={currentColor} className="-ml-5" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col xl:flex-row justify-center gap-6">
          <div className="flex flex-col xl:w-1/2 gap-6 justify-center">
            <div
              style={{
                borderLeft: `2px solid ${currentColor}`,
                borderRadius: "10px",
              }}
              className="flex flex-col justify-center text-left text-sm lg:text-lg dark:text-white gap-6 p-6 shadow-md dark:shadow-gray-600"
            >
              <div className="flex flex-row">
                <p className="xl:w-1/2 w-full m-auto dark:text-white">
                  Monthly SIP Amount :{" "}
                </p>
                <div className="w-full xl:w-1/2 m-auto">
                  <input
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      handleChange();
                    }}
                    type="number"
                    className="lg:w-2/3 m-auto xl:h-9 h-7 mx-auto text-center border-1 border-solid border-black rounded-md text-black block"
                  ></input>
                </div>
              </div>
              <div className="flex flex-row">
                <p className="xl:w-1/2 w-full m-auto dark:text-white">
                  Investment Period (years) :{" "}
                </p>
                <div className="w-full xl:w-1/2 m-auto">
                  <input
                    value={period}
                    onChange={(e) => {
                      setPeriod(e.target.value);
                      handleChange();
                    }}
                    type="number"
                    className="lg:w-2/3 m-auto xl:h-9 h-7 mx-auto  text-center border-1 border-solid border-black rounded-md text-black block"
                  ></input>
                </div>
              </div>
              <div className="flex flex-row">
                <p className="xl:w-1/2 w-full m-auto dark:text-white">
                  Expected Return Rate (p.a.) :{" "}
                </p>
                <div className="w-full xl:w-1/2 m-auto">
                  <input
                    value={rate}
                    onChange={(e) => {
                      setRate(e.target.value);
                      handleChange();
                    }}
                    type="number"
                    className="lg:w-2/3 m-auto xl:h-9 h-7 mx-auto  text-center border-1 border-solid border-black rounded-md text-black block"
                  ></input>
                </div>
              </div>
            </div>
            <div
              style={{
                borderLeft: `2px solid ${currentColor}`,
                borderRadius: "10px",
              }}
              className="flex flex-col justify-center text-left text-sm lg:text-lg dark:text-white gap-6 p-6 shadow-md dark:shadow-gray-600"
            >
              <p>
                Return Earned :{" "}
                <span className="font-medium text-green-400">
                  {" "}
                  {err
                    ? "NA"
                    : Number(wealthGained).toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                      })}
                  &#8377;{" "}
                </span>{" "}
              </p>
              <p>
                Invested :
                <span className="font-medium text-red-400">
                  {" "}
                  {err
                    ? "NA"
                    : Number(invested).toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                      })}
                  &#8377;
                </span>
              </p>
              <p>
                Total wealth :{" "}
                {err
                  ? "NA"
                  : Number(totalWealth).toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
                &#8377;
              </p>
            </div>
          </div>
          <div
            style={{
              borderLeft: `2px solid ${currentColor}`,
              borderRadius: "10px",
            }}
            className="flex flex-col justify-center text-center xl:w-1/2 lg:text-left text-base lg:text-lg dark:text-white gap-6 p-3 shadow-md dark:shadow-gray-600"
          >
            {err ? (
              <div className="m-auto text-red-500">
                Please Provide Valid Values
              </div>
            ) : (
              <div className="flex flex-col">
                {/* Chart Analysis */}

                <button
                  className="m-auto mr-0"
                  value="print"
                  onClick={clickHandler.bind(this)}
                >
                  <TiExportOutline size={"20px"} color={`${currentColor}`} />
                </button>
                <AccumulationChartComponent
                  id="charts"
                  legendSettings={{
                    visible: true,
                    toggleVisibility: false,
                    textStyle: {
                      color: currentMode === "Dark" ? "white" : "black",
                    },
                    alignment: "Center",
                    position: "Bottom",
                  }}
                  tooltip={{ enable: true }}
                  ref={(chart) => (chartInstance = chart)}
                  background="none"
                  height="360rem"
                >
                  <Inject
                    services={[
                      AccumulationLegend,
                      AccumulationTooltip,
                      AccumulationDataLabel,
                      Export,
                    ]}
                  />
                  <AccumulationSeriesCollectionDirective>
                    <AccumulationSeriesDirective
                      dataSource={dataChart}
                      xName="x"
                      yName="y"
                      radius="100%"
                      palettes={palettes}
                      dataLabel={{
                        position: "Inside",
                        visible: true,
                        name: "text",
                      }}
                    />
                  </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SIP;
