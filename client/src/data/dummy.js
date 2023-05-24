import React from "react";
import {
  AiOutlineBarChart,
  AiFillHome,
  AiOutlineAreaChart,
  AiFillBank,
  AiOutlineEye,
} from "react-icons/ai";
import { BsFillCalculatorFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { TbNotes } from "react-icons/tb";
import { FaCar, FaGratipay } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { TiNews } from "react-icons/ti";

export const links = [
  {
    title: "General",
    links: [
      {
        name: "Home",
        to: "landing",
        icon: <AiFillHome />,
      },
      {
        name: "Theme Picker",
        to: "ThemePicker",
        icon: <FiEdit />,
      },
    ],
  },
  {
    title: "Stocks",
    links: [
      {
        name: "Stocks",
        to: "stockHome",
        icon: <AiOutlineAreaChart />,
      },
      {
        name: "My Watchlist",
        to: "watchlist",
        icon: <AiOutlineEye />,
      },
      {
        name: "News",
        to: "news",
        icon: <TiNews />,
      },
    ],
  },
  {
    title: "Account",
    links: [
      {
        name: "Accounts",
        to: "accounts",
        icon: <CgProfile />,
      },
      {
        name: "Tips",
        to: "tips",
        icon: <FaGratipay />,
      },
    ],
  },
  {
    title: "Virtual Stocks",
    links: [
      {
        name: "Desk",
        to: "Portfolio",
        icon: <CgProfile />,
      },
      {
        name: "MarketView",
        to: "MarketView",
        icon: <AiOutlineBarChart />,
      },
    ],
  },
  {
    title: "Loans",
    links: [
      {
        name: "Loan Desk",
        to: "loanDesk",
        icon: <GiReceiveMoney />,
        // <TbNotes />,
      },
      {
        name: "Loans",
        to: "notes",
        icon: <AiFillBank />,
      },
    ],
  },
  {
    title: "Calculators",
    links: [
      {
        name: "Buy A Car",
        to: "buyCar",
        icon: <FaCar />,
      },
      {
        name: "Loan Calculator",
        to: "loanCalc",
        icon: <BsFillCalculatorFill />,
      },
      {
        name: "SIP",
        to: "sip",
        icon: <IoIosTrendingUp />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const quotes = [
  '"The biggest risk of all is not taking one."',
  '"Returns matter a lot. It\'s our capital."',
  '"It\'s not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for."',
  '"Know what you own, and know why you own it." ',
  "\"Financial peace isn't the acquisition of stuff. It's learning to live on less than you make, so you can give money back and have money to invest. You can't win until you do this.\"",
  '"Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas."',
  '"A fat purse quickly empties if there be no golden stream to refill it."',
  '"A part of all you earn is yours to keep."',
  '"Good luck waits to come to that man who accepts opportunity."',
  '"Better a little caution than a great regret."',
  '"We cannot afford to be without adequate protection."',
  '"We cannot afford to be without adequate protection."',
  '"Money is everywhere, It affects all of us, And confuses most of us."',
  '"History never repeats itself, Man always does."',
  '"What seems crazy to you might make sense to me."',
  '"Everyone talks about retirement, But apparently very few do anything about it."',
  '"Nothing is as good or as bad as it seems."',
  '"Leave room for understanding when judging failures."',
  '"The hardest financial skills is getting the goalpost to stop moving."',
  '"There are many things never worth risking, No matter the potential gain."',
  '"$81.5B of Buffet\'s $84.5B net worth came after his 65th birthday. Our minds  are not built to handle such absurdities."',
  '"You don\'t need tremendous force to create tremendous results."',
  "\"Buffet's fortune isn't due to just being good investor, But being good investor since he was a child.\"",
  '"Buffet\'s skill is investing, But his secret is time."',
  '"You can be wrong half the time and still make a fortune."',
  '"There are 100B planets in our galaxy and only one, As far as we know, With intelligent life."',
  '"Controlling your time is the highest dividend money pays."',
  '"Spending money to show people how much money you have is the fastest way to have less money."',
  '"The only factor you can control generates one of the only things that matters.  How wonderful."',
  '"Building wealth has little to do with your income or investment returns, And lots to do with your savings rate."',
  '"The value of wealth is relative to what you need"',
  '"Past a certain level of income, What you need is just what sits below your ego."',
  '"You don\'t need a specific reason to save."',
  '"The flexibility and control over your time is unseen return oon wealth."',
  "\"You're not a spreadsheet, You're a person, A screwed up emotional one.\"",
  '"History is the study of change, Ironically used as a map of future."',
  '"You\'ll likely miss the outlier events that move the needle the most."',
  "\"History can be a misleading guide to the future of the economy and stock market because it doesn't account for structural changes that are relevant to today's world.\"",
  '"The most important part of every plan is planning on your plan not going according to plan."',
  '"Long-Term planning is harder than it seems because people\'s goals and desires change over time"',
  '"Avoid the extreme ends of financial planning."',
  '"Everything has a price, But not all prices appear on labels"',
  '"Beware taking financial cues from people playing a different game than you are."',
  '"Progress happens too slowly to notice, But setbacks happen too quickly to ignore."',
  '"The more you want something to be true, The more likely you are to believe a story that overestimates the odds of it being true."',
  '"Manage your money in a way that helps you sleep at night."',
  '"If you want to do better as an investor, The single most powerful thing you can do is increase your time horizon."',
  '"Just save, You don\'t need a specific reason to save."',
  '"Knowing what to measure and how to measure it makes a complicated world much less so."',
  '"Expert depends on the fact that you don\'t have the information they do."',
];

export const MarketViewData = [
  {
    stockName: "Prince Cinemas",
    key: 1,
    sector: "Entertainment",
  },
  {
    stockName: "Dhruvi StudyNotes",
    key: 2,
    sector: "Education",
  },
  {
    stockName: "Aneri Content",
    key: 3,
    sector: "Marketing",
  },
  {
    stockName: "Krishna Zoo",
    key: 4,
    sector: "Wildlife",
  },
  {
    stockName: "Kanan Ielts",
    key: 5,
    sector: "Education",
  },
  {
    stockName: "Adarsh Gaming",
    key: 6,
    sector: "Gaming",
  },
  {
    stockName: "Namra Pharma",
    key: 7,
    sector: "pharmaceutical",
  },
  {
    stockName: "Aditya Studio",
    key: 8,
    sector: "Art",
  },
  {
    stockName: "Parshwa Electrics",
    key: 9,
    sector: "Energy",
  },
  {
    stockName: "Darshana Music",
    key: 10,
    sector: "Talent",
  },
];

export const InformationData = [
  {
    routeName : "landing",
    title:"Landing Page Title",
    contents : [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  {
    routeName : "ThemePicker",
    title:"Facts about Themes",
    contents : [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  {
    routeName : "stockHome",
    title:"Stock Search Page Title",
    contents : [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  {
    routeName : "watchlist",
    title:"Facts about Themes",
    contents : [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  {
    routeName : "news",
    title:"Facts about Themes",
    contents : [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  {
    routeName : "sip",
    title:"Systematic Investment Plan",
    contents : [
      "SIP is a popular investment method where investors can regularly invest a fixed amount in mutual funds at periodic intervals.",
      "SIPs allow individuals to start investing with a small amount of money regularly. It makes investing more accessible to a wide range of people, regardless of their financial capability.",
      "SIPs offer flexibility to investors. Investors can choose the investment amount, frequency (monthly, quarterly, etc.), and the duration of the investment based on their financial goals and risk appetite.",
      "SIPs harness the power of compounding over time. By investing regularly and staying invested for the long term, investors can benefit from the compounding effect, where their investment grows not only on the principal amount but also on the returns generated.",
      "SIPs invest in mutual funds, which are professionally managed by fund managers. These fund managers conduct thorough research and make investment decisions on behalf of investors, aiming to maximize returns and manage risks.",
      "SIPs are suitable for long-term wealth creation and goal-based investing. By staying invested over an extended period, investors may benefit from the potential growth of their investments, particularly in equity-oriented funds.",
      "SIPs remove the need to time the market. Since investments are made at regular intervals, investors do not have to worry about trying to predict the best entry points. ",
      "SIPs offer the flexibility to increase the investment amount periodically. As investors' financial situation improves or they have surplus funds, they can choose to increase their SIP investments to accelerate wealth creation.",
      "SIPs are ideal for goal-based investing. Whether it's saving for retirement, a child's education, buying a house, or any other financial goal, SIPs provide a disciplined approach to achieve long-term objectives by investing systematically over a period.",
      "SIP investments offer transparency to investors. They can track their investments regularly, access account statements, and monitor the performance of the mutual funds they have invested in. ",
      "A SIP Calculator is a valuable financial planning tool that helps individuals estimate the potential returns on their investments through SIPs. It provides insights into the future value of their investments based on various parameters.",
      "Using a SIP Calculator, investors can set specific financial goals and determine the investment amount required to achieve those goals. They can input parameters such as the desired investment duration, expected rate of return, and monthly investment amount to calculate the corpus they can accumulate over time.",
      "A SIP Calculator provides a projection of the investment growth over the chosen investment period. It helps individuals visualize the potential value of their investments and make informed decisions about their investment strategy.",
      "SIP Calculators allow investors to perform scenario analysis by adjusting the parameters. They can explore different investment amounts, investment durations, and expected rates of return to understand how these variables impact the final investment value.",
      " SIP Calculators empower investors by providing them with a tool to assess the feasibility and potential outcomes of their investment plans. It helps individuals make well-informed decisions and align their investments with their financial goals.",
    ],
  },
  {
    routeName : "loanCalc",
    title:"Facts about Loan",
    contents : [
      "Loans provide individuals and businesses with access to funds that they can use for various purposes, such as purchasing a home, financing education, starting a business, or covering unexpected expenses.",
      "There are various types of loans available to cater to different needs, including personal loans, home loans, auto loans, student loans, business loans, and more. Each type of loan is designed to serve a specific purpose and comes with its own terms and conditions.",
      "Loans involve the payment of interest, which is the cost of borrowing money. The interest rate on a loan can vary based on factors such as the type of loan, the borrower's creditworthiness, prevailing market rates, and the duration of the loan.",
      "Loans come with specific repayment terms, including the duration of the loan and the installment amount. Repayment terms can vary depending on the type of loan and the lender's policies. It's important to understand the repayment schedule and obligations before taking out a loan.",
      "Lenders assess the creditworthiness of borrowers before approving a loan. Factors such as credit history, income stability, employment status, and debt-to-income ratio are considered during the loan application process. A good credit score and financial stability can increase the chances of loan approval.",
      "Some loans require collateral, such as a property or asset, which acts as security for the lender. These are secured loans. On the other hand, unsecured loans do not require collateral but may have stricter credit requirements and higher interest rates.",
      "Taking out a loan comes with the responsibility of repaying the borrowed amount along with interest within the agreed-upon terms. Borrowers need to manage their finances effectively to ensure timely repayments and maintain a good credit record.",
      "Loan repayment behavior, including making timely payments, affects the borrower's credit score. Responsible loan management can help improve the credit score over time, opening doors to better loan options and favorable interest rates in the future.",
      "Before taking out a loan, it's important to assess one's financial situation and determine the affordability of the loan. Borrowers should consider their income, expenses, and existing financial commitments to ensure they can comfortably repay the loan without straining their finances.",
      "Loans should be used wisely to align with financial goals. Whether it's for investment, education, home purchase, or debt consolidation, borrowers should evaluate the potential benefits and long-term impact of the loan on their financial well-being.",
      "A loan calculator is a useful financial planning tool that helps individuals estimate and analyze the financial aspects of a loan. It allows users to calculate monthly payments, interest costs, and other important loan details.",
      "Loan calculators generate an amortization schedule, which is a table that shows the repayment schedule of the loan over its duration. It breaks down each payment into principal and interest components, allowing borrowers to track their loan repayment progress.",
      "Loan calculators can accurately calculate the interest costs associated with a loan. By inputting the loan amount, interest rate, and loan term, borrowers can understand the total interest they will pay over the loan duration.",
      "Loan calculators are flexible tools that allow users to adjust various loan parameters, such as the loan amount, interest rate, loan term, and repayment frequency. This flexibility enables borrowers to customize the calculations based on their specific needs.",
      "Loan calculators can serve as educational tools, helping individuals learn about loan mechanics, interest calculations, and the impact of different loan parameters. They promote financial literacy and help borrowers make responsible borrowing decisions.",
    ],
  },
  {
    routeName : "buyCar",
    title:"20-10-4 Rule for Buying Car",
    contents : [
      "The 20-10-4 rule is a guideline that suggests allocating a maximum of 20% of your annual income toward car-related expenses, including loan payments, insurance, fuel, and maintenance.",
      "According to the rule, it's recommended to make a down payment of at least 20% of the car's purchase price. This helps reduce the loan amount and associated interest costs.",
      "The rule suggests limiting the loan term to a maximum of 4 years (48 months). Opting for a shorter loan term can help save on interest payments and ensure faster loan repayment.",
      "The 20-10-4 rule emphasizes the importance of budgeting and ensuring that car-related expenses fit comfortably within your overall financial plan. It encourages individuals to consider the long-term financial impact of car ownership.",
      "Following the 20-10-4 rule promotes financial stability by ensuring that car payments are manageable within your income and other financial obligations. It helps avoid excessive debt burdens and potential financial stress.",
      "While the 20-10-4 rule provides a general guideline, it's important to consider individual circumstances and adjust accordingly. Factors such as personal financial goals, savings, and other financial obligations may require some flexibility in adhering strictly to the rule.",
      "A car affordability calculator is a useful financial planning tool that helps individuals determine how much they can afford to spend on a car based on their financial situation.",
      "The calculator helps users assess the affordability of a car purchase by considering factors such as the interest rate, loan duration, and user-provided inputs.",
      "The calculator calculates the minimum salary required to qualify for a loan based on the user-provided car price and the assumption of a fixed interest rate. This helps users understand the income level needed to support the desired car purchase.",
      " The calculator determines the recommended down payment amount based on the assumption of a fixed interest rate and a loan duration of 4 years. A higher down payment reduces the loan amount and can result in lower monthly EMIs.",
      "The calculator calculates the monthly Equated Monthly Installment (EMI) based on the user-provided car price, down payment, interest rate, and loan duration. The EMI represents the regular payment amount to be made towards the loan each month.",
      "The calculator serves as a budgeting tool, allowing users to understand the financial commitment associated with a car purchase. It helps users determine whether the monthly EMI fits comfortably within their budget.",
      "The calculator assumes a loan duration of 4 years (48 months) for the calculations. This helps users assess the impact of the loan term on their monthly EMIs and overall loan cost.",
      "The car affordability calculator assists users in making informed financial decisions. By considering the minimum salary, down payment, and monthly EMI, users can better plan their finances and align their car purchase with their budgetary constraints.",
      "The calculator provides estimates and should be used for informational purposes only. Users are advised to consult with financial advisors or loan professionals for personalized advice based on their specific financial situation and goals.",
    ],
  }
];
