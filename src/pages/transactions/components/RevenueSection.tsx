import React from "react";
import DonutChart from "./Charts";
import { revenueData } from "../data/dummyData";

interface Props {
  viewMode: "weekly" | "monthly";
  setViewMode: (mode: "weekly" | "monthly") => void;
}

const RevenueSection: React.FC<Props> = ({ viewMode, setViewMode }) => {
  const data = revenueData[viewMode];

  if (!data) {
    return (
      <div className="bg-white  p-6 rounded-lg shadow-md text-red-500">
        No data available for the selected view.
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden border border-gray-200 p-6 rounded-lg shadow-xl bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, #0DB5B5 0%, white 60%, transparent 100%)",
          opacity: 0.4,
          zIndex: 0,
        }}
      />
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-indigo-600">Revenue</h2>
          <div>
            <label htmlFor="viewMode" className="sr-only">
              Select View Mode
            </label>
            <select
              id="viewMode"
              aria-label="Select view mode"
              value={viewMode}
              onChange={(e) =>
                setViewMode(e.target.value as "weekly" | "monthly")
              }
              className="border border-gray-300 rounded px-2 py-1 text-sm bg-white text-gray-800"
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>

        <div className="mt-2 text-lg font-medium text-green-600 ">
          ₹{data.total.toLocaleString("en-IN")}
          <div className="text-sm text-gray-500">Total {viewMode} revenue</div>
        </div>

        <div className="mt-6 p-2 ">
          <h3 className="text-lg font-medium text-gray-700  mb-2">
            {viewMode === "weekly"
              ? "Weekly Revenue Distribution"
              : "Monthly Revenue Distribution"}
          </h3>
          <DonutChart data={data.donut} total={data.total} />
        </div>
      </div>
    </div>
  );
};

export default RevenueSection;
