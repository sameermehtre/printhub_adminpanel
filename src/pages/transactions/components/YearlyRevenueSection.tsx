import React from "react";
import { yearlyRevenueData } from "../data/dummyData";

const currentYear = new Date().getFullYear();

const yearlyRevenue: React.FC = () => {
  const revenue = yearlyRevenueData.find((data) => data.year === currentYear);

  const formatINR = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (!revenue) {
    return (
      <div className="rounded-2xl shadow-md p-6 bg-white text-gray-700">
        <h2 className="text-xl font-semibold">Yearly Revenue</h2>
        <p className="text-sm text-gray-500">
          No data available for {currentYear}.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl shadow-lg p-6 max-w-sm w-full">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            Total Revenue - {revenue.year}
          </h2>
          <div className="text-4xl font-extrabold leading-none select-none">
            ₹
          </div>
        </div>
        <p className="text-4xl font-bold tracking-wide mt-3">
          {formatINR(revenue.totalRevenue)}
        </p>
      </div>
    </div>
  );
};

export default yearlyRevenue;
