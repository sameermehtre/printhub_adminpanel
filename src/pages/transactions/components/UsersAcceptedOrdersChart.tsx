import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import { acceptedOrdersData } from "../data/dummyData";
// Custom tooltip content with styling

const CustomTooltip: React.FC<TooltipProps<any, string>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
        <p className="font-semibold mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p
            key={`tooltip-${index}`}
            className="text-sm"
            style={{ color: entry.color }}
          >
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const colorMap = {
  admin: "#7c3aed", // purple
  user1: "#22c55e", // green
  user2: "#facc15", // yellow
};

const UsersAcceptedOrdersChart: React.FC = () => {
  return (
    <div className="w-full max-w-4xl p-2 bg-white border border-gray-200 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-sm font-semibold mb-2 text-gray-800 tracking-wide">
        Accepted Orders Overview
      </h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={acceptedOrdersData}>
          <defs>
            <linearGradient id="colorAdmin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colorMap.admin} stopOpacity={0.8} />
              <stop offset="95%" stopColor={colorMap.admin} stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="colorUser1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colorMap.user1} stopOpacity={0.8} />
              <stop offset="95%" stopColor={colorMap.user1} stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="colorUser2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colorMap.user2} stopOpacity={0.8} />
              <stop offset="95%" stopColor={colorMap.user2} stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            tick={{ fill: "#4b5563", fontWeight: "600" }}
            axisLine={{ stroke: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#6b7280", fontWeight: "500" }}
            axisLine={{ stroke: "#d1d5db" }}
            tickLine={false}
            allowDecimals={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="admin"
            stroke="url(#colorAdmin)"
            fillOpacity={1}
            fill="url(#colorAdmin)"
            strokeWidth={3}
            activeDot={{ r: 6, strokeWidth: 3, stroke: colorMap.admin }}
            dot={{
              r: 4,
              strokeWidth: 2,
              stroke: colorMap.admin,
              fill: "white",
            }}
          />
          <Line
            type="monotone"
            dataKey="user1"
            stroke="url(#colorUser1)"
            fillOpacity={1}
            fill="url(#colorUser1)"
            strokeWidth={3}
            activeDot={{ r: 6, strokeWidth: 3, stroke: colorMap.user1 }}
            dot={{
              r: 4,
              strokeWidth: 2,
              stroke: colorMap.user1,
              fill: "white",
            }}
          />
          <Line
            type="monotone"
            dataKey="user2"
            stroke="url(#colorUser2)"
            fillOpacity={1}
            fill="url(#colorUser2)"
            strokeWidth={3}
            activeDot={{ r: 6, strokeWidth: 3, stroke: colorMap.user2 }}
            dot={{
              r: 4,
              strokeWidth: 2,
              stroke: colorMap.user2,
              fill: "white",
            }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Custom label row below the chart */}
      <div className="flex justify-center space-x-12">
        {Object.entries(colorMap).map(([key, color]) => (
          <div key={key} className="flex items-center space-x-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="  text-gray-700">{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersAcceptedOrdersChart;
