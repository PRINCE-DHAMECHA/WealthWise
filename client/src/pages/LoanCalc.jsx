import React, { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import { Header } from "../components";
import { useAppContext } from "../context/appContext";
import { TiExportOutline } from "react-icons/ti";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  Legend,
  Tooltip,
  MultiColoredLineSeries,
  Category,
  DataLabel,
  Zoom,
  Export,
} from "@syncfusion/ej2-react-charts";

const LoanCalc = () => {
  const { currentColor, currentMode } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(150000);
  const [rate, setRate] = useState(8);
  const [loanTerm, setLoanTerm] = useState(15);
  const [loanTermUnit, setLoanTermUnit] = useState("years");
  const [viewOption, setViewOption] = useState("yearly");
  const [emi, setEMI] = useState(0);
  const [monthlyReport, setMonthlyReport] = useState([]);
  const [yearlyReport, setYearlyReport] = useState([]);
  const [err, setErr] = useState(false);

  const chartData = yearlyReport.map((entry, index) => ({
    x: index + 1,
    principalPaid: entry.principalPaid,
    interestPaid: entry.interestPaid,
    principalAxisColor: "#47D773",
    interestAxisColor: "#F87171",
  }));

  useEffect(() => {
    setLoading(false);
    handleChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, rate, loanTerm, loanTermUnit]);

  const handleChange = () => {
    setLoading(true);
    if (
      amount <= 0 ||
      amount >= 1000000000 ||
      rate <= 0 ||
      rate > 100 ||
      (loanTermUnit === "years" && (loanTerm >= 100 || loanTerm <= 0)) ||
      (loanTermUnit === "months" && (loanTerm >= 1200 || loanTerm <= 11))
    ) {
      setErr(true);
      setLoading(false);
      return;
    }
    setErr(true);
    const r = rate / (12 * 100);
    const n = loanTermUnit === "years" ? loanTerm * 12 : loanTerm;
    const numerator = amount * r * Math.pow(1 + r, n);
    const denominator = Math.pow(1 + r, n) - 1;
    const emiValue = numerator / denominator;
    setEMI(emiValue.toFixed(2));

    const monthReport = [],
      yearReport = [];
    const principal = parseFloat(amount);
    let remainingPrincipal = principal,
      interestPaymentYearly = 0,
      principalPaymentYearly = 0;
    let j = 1;
    for (let i = 1; i <= n; i++) {
      const interestPayment = remainingPrincipal * r;
      interestPaymentYearly += interestPayment;
      const principalPayment = emiValue - interestPayment;
      principalPaymentYearly += principalPayment;
      const monthEndBalance = remainingPrincipal - principalPayment;
      if (i % 12 === 0 || i === n) {
        yearReport.push({
          year: j,
          principalPaid: principalPaymentYearly.toFixed(2),
          interestPaid: interestPaymentYearly.toFixed(2),
          balance: monthEndBalance.toFixed(2),
        });
        interestPaymentYearly = 0;
        principalPaymentYearly = 0;
        j++;
      }
      monthReport.push({
        month: i,
        principalPaid: principalPayment.toFixed(2),
        interestPaid: interestPayment.toFixed(2),
        balance: monthEndBalance.toFixed(2),
      });

      remainingPrincipal = monthEndBalance;
    }
    setMonthlyReport(monthReport);
    setYearlyReport(yearReport);
    setErr(false);
    setLoading(false);
  };

  const primaryxAxis = {
    valueType: "Category",
    labelFormat: "n2",
    labelPlacement: "OnTicks",
    majorGridLines: {
      color: currentColor,
      width: 0,
    },
    labelStyle: {
      color: currentMode === "Dark" ? "white" : "black",
      fontWeight: "light",
    },
  };
  const primaryyAxis = {
    valueType: "Double",
    majorGridLines: {
      width: 0.1,
    },
    labelStyle: {
      color: currentMode === "Dark" ? "white" : "black",
      fontWeight: "light",
    },
    rangePadding: "Additional",
  };

  let chartInstance;
  function clickHandler(e) {
    chartInstance.exportModule.export(
      "PNG",
      `Loan__principal=${amount}_period=${loanTerm}${loanTermUnit}_rate=${rate}_EMI=${emi}`
    );
  }

  return (
    <div>
      <div className="text-center w-full">
        <Header title={"Loan Calculator"} />
        {loading ? (
          <div className="w-full p-20">
            <div className="m-auto w-7">
              <RingLoader color={currentColor} className="-ml-5" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row justify-center gap-5">
            <div className="lg:w-1/2 flex justify-center flex-col gap-5">
              <div
                style={{
                  borderLeft: `2px solid ${currentColor}`,
                  borderRadius: "10px",
                }}
                className="flex flex-col justify-center text-left text-sm lg:text-lg dark:text-white gap-6 p-6 shadow-md dark:shadow-gray-600"
              >
                <div className="flex flex-row">
                  <p className="w-1/3 m-auto dark:text-white">Amount: </p>
                  <div className="w-2/3">
                    <input
                      value={amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                      }}
                      type="number"
                      className="m-auto xl:h-9 h-7 mx-auto  text-center border-1 border-solid border-black rounded-md text-black"
                      min={"0"}
                    ></input>
                  </div>
                </div>
                <div className="flex flex-row">
                  <p className="w-1/3 m-auto dark:text-white">Rate ( % ) : </p>
                  <div className="w-2/3">
                    <input
                      value={rate}
                      onChange={(e) => {
                        setRate(e.target.value);
                      }}
                      type="number"
                      className="m-auto xl:h-9 h-7 mx-auto  text-center border-1 border-solid border-black rounded-md text-black"
                      min={"0"}
                    ></input>
                  </div>
                </div>
                <div className="flex flex-row">
                  <p className="w-1/3 m-auto mt-0 dark:text-white">
                    Loan Term:{" "}
                  </p>
                  <div className="w-2/3 flex 2xl:flex-row flex-col justify-start">
                    <input
                      value={loanTerm}
                      onChange={(e) => {
                        setLoanTerm(e.target.value);
                      }}
                      type="number"
                      className="m-auto ml-0 xl:h-9 h-7  text-center border-1 border-solid border-black rounded-md text-black"
                      min="0"
                    />
                  </div>
                </div>
                <div className="flex flex-row -mt-5">
                  <div className="w-1/2 text-left">
                    <select
                      value={loanTermUnit}
                      onChange={(e) => {
                        setLoanTermUnit(e.target.value);
                      }}
                      className="m-auto ml-0 xl:h-9 h-7  text-center border-1 border-solid border-black rounded-md text-black"
                    >
                      <option value="years">Years</option>
                      <option value="months">Months</option>
                    </select>
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
                  {" "}
                  Principal :{" "}
                  {err
                    ? "NA"
                    : Number(amount).toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                      })}{" "}
                  &#8377;{" "}
                </p>
                <p>EMI : {err ? "NA" : emi} &#8377; </p>
                <p>
                  {" "}
                  Repayment :{" "}
                  <span className="text-red-400">
                    {err
                      ? "NA"
                      : Number(emi * loanTerm * 12).toLocaleString("en-IN", {
                          maximumFractionDigits: 2,
                        })}{" "}
                    &#8377; {err ? "" : " ( "}
                    {err
                      ? ""
                      : Number((emi * loanTerm * 12) / amount).toLocaleString(
                          "en-IN",
                          { maximumFractionDigits: 2 }
                        )}
                    {err ? "" : "x )"}
                  </span>
                </p>
                <p>
                  {" "}
                  Interest :{" "}
                  <span className="text-red-400">
                    {err
                      ? "NA"
                      : Number(emi * loanTerm * 12 - amount).toLocaleString(
                          "en-IN",
                          {
                            maximumFractionDigits: 2,
                          }
                        )}{" "}
                    &#8377;
                  </span>
                </p>
              </div>
            </div>

            <div
              style={{
                borderLeft: `2px solid ${currentColor}`,
                borderRadius: "10px",
              }}
              className="flex flex-col justify-center text-center lg:w-1/2 lg:text-left text-sm lg:text-lg dark:text-white gap-9 py-6 md:px-4 px-2 shadow-md dark:shadow-gray-600"
            >
              {err ? (
                <div className="m-auto text-red-500">
                  Please Provide Valid Values
                </div>
              ) : (
                <div>
                  {/* Chart Analysis */}
                  <div className="flex flex-row mb-5">
                    <p className="w-2/3 m-auto text-left lg:text-xl text-lg font-medium">
                      Loan Report Chart
                    </p>
                    <button
                      className="m-auto mr-4"
                      value="print"
                      onClick={clickHandler.bind(this)}
                    >
                      <TiExportOutline
                        size={"20px"}
                        color={`${currentColor}`}
                      />
                    </button>
                  </div>
                  <ChartComponent
                    id="loan-chart"
                    primaryXAxis={primaryxAxis}
                    primaryYAxis={primaryyAxis}
                    tooltip={{ enable: true }}
                    legendSettings={{
                      background: "none",
                      textStyle: {
                        color: currentMode === "Dark" ? "white" : "black",
                      },
                    }}
                    ref={(chart) => (chartInstance = chart)}
                    background="none"
                    height="350rem"
                    margin={"auto"}
                  >
                    <Inject
                      services={[
                        Legend,
                        DataLabel,
                        Tooltip,
                        LineSeries,
                        Category,
                        Zoom,
                        MultiColoredLineSeries,
                        Export,
                      ]}
                    />
                    <SeriesCollectionDirective>
                      <SeriesDirective
                        dataSource={chartData}
                        xName="x"
                        yName="principalPaid"
                        width={2}
                        name="Principal Paid"
                        marker={{
                          visible: true,
                          height: 5,
                          width: 5,
                        }}
                        type="MultiColoredLine"
                        pointColorMapping="principalAxisColor"
                        legendShape="Circle"
                      />
                      <SeriesDirective
                        dataSource={chartData}
                        xName="x"
                        yName="interestPaid"
                        width={2}
                        name="Interest Paid"
                        marker={{
                          visible: true,
                          height: 5,
                          width: 5,
                        }}
                        type="MultiColoredLine"
                        pointColorMapping="interestAxisColor"
                        legendShape="Circle"
                      />
                    </SeriesCollectionDirective>
                  </ChartComponent>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <br />
      <div
        style={{
          borderBottom: `2px solid ${currentColor}`,
          borderTop: `2px solid ${currentColor}`,
          borderRadius: "10px",
        }}
        className="flex flex-col w-full justify-center shadow-lg dark:shadow-gray-600 p-4 py-8 m-auto"
      >
        <div className="flex justify-center flex-col text-center dark:text-white">
          <p
            style={{ borderBottom: `2px solid ${currentColor}` }}
            className="inline text-3xl p-2 mb-5 font-medium dark:text-white m-auto"
          >
            Loan Report
          </p>
          {err ? (
            "NA"
          ) : (
            <div className="flex flex-col justify-center text-center lg:text-left text-xs lg:text-lg dark:text-white gap-6 lg:p-6">
              {/* Toggle button */}
              <div className="flex flex-row justify-center gap-3">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="viewOption"
                    value="yearly"
                    checked={viewOption === "yearly"}
                    onChange={() => setViewOption("yearly")}
                  />
                  Yearly
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="viewOption"
                    value="monthly"
                    checked={viewOption === "monthly"}
                    onChange={() => setViewOption("monthly")}
                  />
                  Monthly
                </label>
              </div>
              {/* Loan data table */}
              <div>
                <div
                  className="flex mb-5 rounded-md"
                  style={{
                    borderBottom: `2px solid ${currentColor}`,
                  }}
                >
                  <p className="text-center w-1/4">
                    {viewOption === "yearly" ? "Year" : "Month"}
                  </p>
                  <p className="text-center w-1/4">Principal Paid</p>
                  <p className="text-center w-1/4">Interest Paid</p>
                  <p className="text-center w-1/4">
                    {viewOption === "yearly"
                      ? "Year-End Loan"
                      : "Month-End Loan"}
                  </p>
                </div>
                <div className="flex flex-col gap-3 p-2 h-96 overflow-scroll scrollClass">
                  {viewOption === "yearly"
                    ? yearlyReport.map((data) => (
                        <div
                          className="shadow-md rounded-xl flex gap-3 py-3"
                          style={{ borderLeft: `2px solid ${currentColor}` }}
                          key={data.year}
                        >
                          <p className="text-center w-1/4 overflow-scroll scrollClass2">
                            {data.year}
                          </p>
                          <p className="text-center w-1/4 overflow-scroll scrollClass2">
                            {data.principalPaid}
                          </p>
                          <p className="text-center w-1/4 overflow-scroll scrollClass2">
                            {data.interestPaid}
                          </p>
                          <p className="text-center w-1/4 overflow-scroll scrollClass2">
                            {data.balance}
                          </p>
                        </div>
                      ))
                    : monthlyReport.map((data) => (
                        <div
                          className="shadow-md rounded-xl flex py-3"
                          style={{ borderLeft: `2px solid ${currentColor}` }}
                          key={data.month}
                        >
                          <p className="text-center w-1/4">{data.month}</p>
                          <p className="text-center w-1/4">
                            {data.principalPaid}
                          </p>
                          <p className="text-center w-1/4">
                            {data.interestPaid}
                          </p>
                          <p className="text-center w-1/4">{data.balance}</p>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanCalc;
