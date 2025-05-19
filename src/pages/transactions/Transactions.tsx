import React, { useState } from "react";
import SummaryCard from "../transactions/components/SummaryCard";
import RevenueSection from "../transactions/components/RevenueSection";
import { summaryData } from "../transactions/data/dummyData";
import TodaysRevenueSection from "./components/TodaysRevenueSection";
import RecentTransactions from "./components/RecentTransactions";
import UsersAcceptedOrdersChart from "./components/UsersAcceptedOrdersChart";
import YearlyRevenueSection from "./components/YearlyRevenueSection";

export default function Transaction() {
  const [viewMode, setViewMode] = useState<"weekly" | "monthly">("monthly");

  return (
    <div className="h-full overflow-y-auto text-gray-800 pr-2 scroll-smooth">
      <div className="space-y-6">
        {/* Grid layout for OrderStatusCards and OrderLineChart */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="col-span-1 md:col-span-4 space-y-4">
            {/* Row 1: Today's Revenue Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <TodaysRevenueSection />
              <YearlyRevenueSection />
            </div>

            {/* Row 2: Summary Cards (can be in a grid themselves if needed) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {summaryData.map((item, index) => (
                <SummaryCard key={index} {...item} />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <UsersAcceptedOrdersChart />
              <RecentTransactions />
            </div>
          </div>
          {/* Revenue Section */}
          <div className="col-span-1 md:col-span-2">
            <RevenueSection viewMode={viewMode} setViewMode={setViewMode} />
          </div>
        </div>
      </div>

      {/* Light theme scrollbar customization */}
      <style>
        {`
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #cbd5e1; /* Tailwind slate-300 */
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: #94a3b8; /* Tailwind slate-400 */
          }

          ::-webkit-scrollbar-track {
            background-color: #f1f5f9; /* Tailwind slate-100 */
          }
        `}
      </style>
    </div>
  );
}
