import React, { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import { Header } from "../components";
import { useAppContext } from "../context/appContext";
import { useParams } from "react-router-dom";
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
  const params = useParams();
  const { currentColor, currentMode } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(150000);
  const [rate, setRate] = useState(8);
  const [loanTerm, setLoanTerm] = useState(15);
  const [loanTermUnit, setLoanTermUnit] = useState('years');
  const [viewOption, setViewOption] = useState('yearly');
  const [emi, setEMI] = useState('');
  const [monthlyReport, setMonthlyReport] = useState([]);
  const [yearlyReport, setYearlyReport] = useState([]);

  const chartData = yearlyReport.map((entry, index) => ({
    x: index + 1,
    principalPaid: entry.principalPaid,
    interestPaid: entry.interestPaid,
  }));

  useEffect(() => {
    setLoading(false);
    handleChange();
  }, []);

  const handleChange = () => {
    setLoading(true);
    const r = rate / (12 * 100);
    const n = (loanTermUnit == 'years') ? loanTerm * 12 : loanTerm;
    const numerator = amount * r * Math.pow(1 + r, n);
    const denominator = Math.pow(1 + r, n) - 1;
    const emiValue = numerator / denominator;
    setEMI(emiValue.toFixed(2));

    const monthReport = [], yearReport = [];
    const principal = parseFloat(amount);
    let remainingPrincipal = principal, interestPaymentYearly = 0, principalPaymentYearly = 0;
    let j = 1;
    for (let i = 1; i <= n; i++) {
      const interestPayment = remainingPrincipal * r;
      interestPaymentYearly += interestPayment;
      const principalPayment = emiValue - interestPayment;
      principalPaymentYearly += principalPayment;
      const monthEndBalance = remainingPrincipal - principalPayment;
      if (i % 12 == 0 || i == n) {
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
    chartInstance.exportModule.export("PNG", "Loan Analysis");
  }

  return (
    <div className="m-2 md:m-10 mb-10 mt-24 md:mx-9 mx-2 p-2 md:p-6 dark:bg-secondary-dark-bg bg-white rounded-3xl text-center">
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
            <div
              style={{
                borderLeft: `2px solid ${currentColor}`,
                borderRadius: "10px",
              }}
              className="flex flex-col justify-center lg:w-1/2 text-left text-base lg:text-lg dark:text-white gap-6 p-6"
            >
              <div className="flex flex-row">
                <p className="lg:w-1/2 w-full m-auto dark:text-white">
                  Amount:{" "}
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
                  ></input>
                </div>
              </div>
              <div className="flex flex-row">
                <p className="lg:w-1/2 w-full m-auto dark:text-white">
                  Rate ( % ) :{" "}
                </p>
                <div className="w-full">
                  <input
                    value={rate}
                    onChange={(e) => {
                      setRate(e.target.value);
                    }}
                    type="number"
                    className="lg:w-2/3 m-auto xl:h-9 h-7 mx-auto  text-center border-1 border-solid border-black rounded-md text-black"
                    min={"0"}
                  ></input>
                </div>
              </div>
              <div className="flex flex-row">
                <p className="lg:w-1/2 w-full m-auto dark:text-white">
                  Loan Term:{" "}
                </p>
                <div className="w-full flex item-center">
                  <select
                    value={loanTermUnit}
                    onChange={(e) => {
                      setLoanTermUnit(e.target.value);
                    }}
                    className="w-1/3 mr-2 p-2 border-1 border-solid border-black rounded-md text-black"
                  >
                    <option value="years">Years</option>
                    <option value="months">Months</option>
                  </select>
                  <input
                    value={loanTerm}
                    onChange={(e) => {
                      setLoanTerm(e.target.value);
                    }}
                    type="number"
                    className="w-2/3 p-2 border-1 border-solid border-black rounded-md text-black"
                    min="0"
                  />
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
              <ChartComponent
                id="loan-chart"
                primaryXAxis={primaryxAxis}
                primaryYAxis={primaryyAxis}
                tooltip={{ enable: true }}
                legendSettings={{ background: "white" }}
                title="Loan Report Chart"
                ref={(chart) => (chartInstance = chart)}
                background="none"
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
                    marker={{ visible: true, width: 8, height: 8 }}
                    type="MultiColoredLine"
                    pointColorMapping="color"
                  />
                  <SeriesDirective
                    dataSource={chartData}
                    xName="x"
                    yName="interestPaid"
                    width={2}
                    name="Interest Paid"
                    marker={{ visible: true, width: 8, height: 8 }}
                    type="MultiColoredLine"
                    pointColorMapping="color"
                  />
                </SeriesCollectionDirective>
              </ChartComponent>
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
        className="flex flex-col w-full justify-center shadow-lg dark:shadow-gray-600 p-4 py-8"
      >
        <div className="flex justify-center flex-col">
          <p
            style={{ borderBottom: `2px solid ${currentColor}` }}
            className="inline text-3xl p-2 mb-5 font-medium dark:text-white m-auto"
          >
            Loan Report
          </p>
          <div className="flex flex-col justify-center text-center lg:w-1/2 lg:text-left text-base lg:text-lg dark:text-white gap-6 p-6">
            <div className="flex flex-row gap-3 justify-around m-3 my-6 dark:text-white text-xl font-medium">
                  <p> Principal Amount : {amount} &#8377; </p>
                  <p>EMI : {emi} &#8377; </p>
            </div>
              {/* Toggle button */}
              <div className="flex flex-row justify-center gap-3">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="viewOption"
                    value="yearly"
                    checked={viewOption === 'yearly'}
                    onChange={() => setViewOption('yearly')}
                  />
                  Yearly
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="viewOption"
                    value="monthly"
                    checked={viewOption === 'monthly'}
                    onChange={() => setViewOption('monthly')}
                  />
                  Monthly
                </label>
              </div> 
              {/* Loan data table */}
              <table style={{ overflow: 'scroll' }}>
                <thead>
                  <tr>
                    <th>{(viewOption == 'yearly') ? "Year" : "Month" }</th>
                    <th>Principal Paid</th>
                    <th>Interest Paid</th>
                    <th>{(viewOption == 'yearly') ? "Year-End Loan" : "Month-End Loan" }</th>
                  </tr>
                </thead>
                <tbody>
                  {(viewOption == 'yearly') ? yearlyReport.map((data) => (
                    <tr key={data.year}>
                      <td>{data.year}</td>
                      <td>{data.principalPaid}</td>
                      <td>{data.interestPaid}</td>
                      <td>{data.balance}</td>
                    </tr>
                  )) : monthlyReport.map((data) => (
                    <tr key={data.month}>
                      <td>{data.month}</td>
                      <td>{data.principalPaid}</td>
                      <td>{data.interestPaid}</td>
                      <td>{data.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table> 
          </div>
        </div>
      </div>
    </div>
  )
};

export default LoanCalc;
