import React from "react";

interface SummaryCardProps {
  title: string;
  value: number;
  change: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, change }) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-white px-6 py-2 justify-items-center rounded-lg shadow-md w-full h-full border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300">
      <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
      <p className="text-xl font-bold text-gray-900">{value}</p>
      <p
        className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}
      >
        {isPositive ? "+" : ""}
        {change}% from last month
      </p>
    </div>
  );
};

export default SummaryCard;
