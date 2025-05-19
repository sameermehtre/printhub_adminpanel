import React from "react";
import OrderStatusCards from "./components/OrderStatusCards";
import RecentFilesTable from "./components/RecentFilesTable";
import OrderLineChart from "./components/OrderLineChart";
import OrderRecivedCategories from "./components/OrderRecivedCategories";
import SummaryCard from "./components/SummaryCard";
import { summaryData } from "../transactions/data/dummyData";

const Dashboard = () => {
  return (
    <div className="h-full overflow-y-auto text-gray-800 pr-1 scroll-smooth">
      <div className="space-y-5">
        <OrderStatusCards />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="col-span-1 md:col-span-3">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Order Categories - 2/3 width */}
              <div className="w-full md:w-2/3">
                <OrderRecivedCategories />
              </div>

              {/* Summary Cards - 1/3 width */}
              <div className="w-full md:w-1/3 grid grid-cols-1 gap-4">
                {summaryData.map((item, index) => (
                  <SummaryCard key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <OrderLineChart />
          </div>
        </div>

        {/* RecentFilesTable section */}
        <RecentFilesTable />
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
};

export default Dashboard;
