import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

// Sample Data
interface OrderData {
  day: string;
  totalOrders: number;
  deliveredOrders: number;
}

const dailyOrders: OrderData[] = [
  { day: "Mon", totalOrders: 50, deliveredOrders: 40 },
  { day: "Tue", totalOrders: 45, deliveredOrders: 35 },
  { day: "Wed", totalOrders: 35, deliveredOrders: 25 },
  { day: "Thu", totalOrders: 60, deliveredOrders: 50 },
  { day: "Fri", totalOrders: 70, deliveredOrders: 60 },
  { day: "Sat", totalOrders: 55, deliveredOrders: 45 },
  { day: "Sun", totalOrders: 65, deliveredOrders: 50 },
];

// Add undeliveredOrders
const processedOrders = dailyOrders.map((item) => ({
  day: item.day,
  deliveredOrders: item.deliveredOrders,
  undeliveredOrders: item.totalOrders - item.deliveredOrders,
}));

// Light Theme Custom Tooltip
const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    const delivered = payload.find((p) => p.dataKey === "deliveredOrders");
    const undelivered = payload.find((p) => p.dataKey === "undeliveredOrders");

    return (
      <div className="bg-white border border-gray-200 p-3 rounded shadow text-sm text-gray-800">
        <p className="font-semibold text-blue-600 mb-1">📅 Day: {label}</p>
        {delivered && (
          <p className="text-blue-500">
            📦 Delivered Orders:{" "}
            <span className="font-semibold">{delivered.value}</span>
          </p>
        )}
        {undelivered && (
          <p className="text-gray-600">
            🚚 Undelivered Orders:{" "}
            <span className="font-semibold">{undelivered.value}</span>
          </p>
        )}
      </div>
    );
  }
  return null;
};

// Main Component
const OrderBarChart: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-0 text-gray-800 ">
      <div className="col-span-1 lg:col-span-4 bg-white rounded-xl px-4 py-2 border border-gray-200 shadow-md transition-all hover:shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold text-gray-700">Daily Orders</h4>
          <div className="text-sm text-gray-500">May 2025</div>
        </div>

        {processedOrders.length === 0 ? (
          <div className="text-center text-gray-500">No data available</div>
        ) : (
          <ResponsiveContainer width="100%" height={244}>
            <BarChart data={processedOrders}>
              <XAxis dataKey="day" stroke="#6b7280" fontSize={12} />
              <YAxis stroke="#6b7280" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="deliveredOrders"
                fill="#3b82f6"
                barSize={15}
                name="Delivered Orders"
                stackId="a"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="undeliveredOrders"
                fill="#d1d5db"
                barSize={15}
                name="Undelivered Orders"
                stackId="a"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default OrderBarChart;
