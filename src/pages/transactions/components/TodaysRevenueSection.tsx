import React from "react";
import { todaysRevenueData } from "../data/dummyData";

const TodaysRevenue: React.FC = () => {
  const { todayRevenue } = todaysRevenueData;

  return (
    <div className="max-w-sm  bg-gradient-to-r from-sky-600 to-sky-200 rounded-2xl shadow-xl text-white px-6 py-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Today's Revenue</h2>
        {/* INR money symbol icon */}
        <div className="text-4xl font-extrabold leading-none select-none">
          ₹
        </div>
      </div>
      <p className="text-4xl font-bold tracking-wide">
        {todayRevenue?.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
      <p className="mt-2 text-sm opacity-80">
        As of {new Date().toLocaleDateString("en-IN")}
      </p>
    </div>
  );
};

export default TodaysRevenue;
