import React, { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import { Header } from "../components";
import { useAppContext } from "../context/appContext";
import { useParams } from "react-router-dom";
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

    const [amount, setAmount] = useState(5000);
    const [rate, setRate] = useState(15);
    const [period, setPeriod] = useState(26);

    const [invested, setInvested] = useState('');
    const [wealthGained, setWealtheGained] = useState('');
    const [totalWealth, setTotalWealth] = useState('');

    useEffect(() => {
        setLoading(false);
        handleChange();
    }, []);

    const handleChange = () => {
        setLoading(true);
        const invest = amount * period * 12;
        const n = period * 12, r = rate / 12 / 100;
        const total = amount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
        const gained = total - invest;
        setInvested(invest);
        setWealtheGained(gained);
        setTotalWealth(total);
        setLoading(false);
    };

    let chartInstance;
    function clickHandler() {
        chartInstance.exportModule.export("PNG", "SIP Calculator");
    }
    const palettes = [
        "#C94D6D",
        "#7031AC",
        "#E4BF58",
        "#4174C9",
        "#3C9D4E",
        "#6FAAB0",
    ];

    const dataChart = [
        { x: 'Invested Amount', y: invested },
        { x: 'Wealth Gain', y: wealthGained },
    ];

    return (
        <div className="m-2 md:m-10 mb-10 mt-24 md:mx-9 mx-2 p-2 md:p-6 dark:bg-secondary-dark-bg bg-white rounded-3xl text-center">
            <div className="text-center w-full">
                <Header title={"SIP Calculator"} />
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
                            className="flex flex-col justify-center lg:w-1/2 text-left text-base lg:text-lg dark:text-white gap-6 p-6"
                        >

                            <div className="flex flex-row">
                                <p className="lg:w-1/2 w-full m-auto dark:text-white">
                                    Monthly SIP Amount : {" "}
                                </p>
                                <div className="w-full">
                                    <input
                                        value={amount}
                                        onChange={(e) => {
                                            setAmount(e.target.value);
                                        }}
                                        type="number"
                                        className="lg:w-2/3 m-auto xl:h-9 h-7 mx-auto  text-center border-1 border-solid border-black rounded-md text-black"
                                        min={"0"}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                              e.preventDefault();
                                              handleChange();
                                            }
                                          }}
                                    ></input>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <p className="lg:w-1/2 w-full m-auto dark:text-white">
                                    Investment Period (years) :{" "}
                                </p>
                                <div className="w-full">
                                    <input
                                        value={period}
                                        onChange={(e) => {
                                            setPeriod(e.target.value);
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                              e.preventDefault();
                                              handleChange();
                                            }
                                          }}
                                        type="number"
                                        className="lg:w-2/3 m-auto xl:h-9 h-7 mx-auto  text-center border-1 border-solid border-black rounded-md text-black"
                                        min={"0"}
                                    ></input>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <p className="lg:w-1/2 w-full m-auto dark:text-white">
                                    Expected Return Rate (p.a.) :{" "}
                                </p>
                                <div className="w-full">
                                    <input
                                        value={rate}
                                        onChange={(e) => {
                                            setRate(e.target.value);
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                              e.preventDefault();
                                              handleChange();
                                            }
                                          }}
                                        type="number"
                                        className="lg:w-2/3 m-auto xl:h-9 h-7 mx-auto  text-center border-1 border-solid border-black rounded-md text-black"
                                        min={"0"}
                                    ></input>
                                </div>
                            </div>
                            <button
                                onClick={handleChange}
                                style={{
                                    backgroundColor: currentColor,
                                    borderRadius: "10px",
                                }}
                                className={`text-md text-white p-3 hover:drop-shadow-xl `}
                            >
                                Calculate
                            </button>
                            <p>Wealth Gained : <b> {wealthGained.toLocaleString('en-IN', { maximumFractionDigits: 2, })} </b> </p>
                            <p>Invested : {invested.toLocaleString('en-IN')}</p>
                            <p>Total wealth : {totalWealth.toLocaleString('en-IN', { maximumFractionDigits: 2, })}</p>
                        </div>
                        <div
                            style={{
                                borderLeft: `2px solid ${currentColor}`,
                                borderRadius: "10px",
                            }}
                            className="flex flex-col justify-center text-center lg:w-1/2 lg:text-left text-base lg:text-lg dark:text-white gap-6 p-6 "
                        >
                            {/* Chart Analysis */}
                            <button value="print" onClick={clickHandler.bind(this)}>
                                <TiExportOutline color={`${currentColor}`} />
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
                                        radius="90%"
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
                    </div>
                )}
            </div>
        </div>
    )
};

export default SIP;