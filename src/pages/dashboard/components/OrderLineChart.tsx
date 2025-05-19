import React from "react";
import {
  AreaChart,
  Area,
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

interface OrderData {
  date: string;
  totalOrders: number;
  deliveredOrders: number;
}

const dailyOrders: OrderData[] = [
  { date: "May 1", totalOrders: 50, deliveredOrders: 44 },
  { date: "May 2", totalOrders: 45, deliveredOrders: 39 },
  { date: "May 3", totalOrders: 35, deliveredOrders: 35 },
  { date: "May 4", totalOrders: 60, deliveredOrders: 58 },
  { date: "May 5", totalOrders: 70, deliveredOrders: 62 },
  { date: "May 6", totalOrders: 55, deliveredOrders: 45 },
  { date: "May 7", totalOrders: 65, deliveredOrders: 49 },
  { date: "May 8", totalOrders: 44, deliveredOrders: 44 },
  { date: "May 9", totalOrders: 55, deliveredOrders: 49 },
  { date: "May 10", totalOrders: 33, deliveredOrders: 31 },
  { date: "May 11", totalOrders: 65, deliveredOrders: 49 },
  { date: "May 12", totalOrders: 45, deliveredOrders: 40 },
  { date: "May 13", totalOrders: 15, deliveredOrders: 15 },
  { date: "May 14", totalOrders: 25, deliveredOrders: 19 },
];

const processedOrders = dailyOrders.map((item) => ({
  date: item.date,
  totalOrders: item.totalOrders,
  undeliveredOrders: item.totalOrders - item.deliveredOrders,
}));

const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    const total = payload.find((p) => p.dataKey === "totalOrders");
    const undelivered = payload.find((p) => p.dataKey === "undeliveredOrders");

    return (
      <div className="bg-white border border-gray-200 p-3 rounded shadow text-sm text-gray-800">
        <p className="font-semibold text-gray-800 mb-1">📅 Date: {label}</p>
        {total && (
          <p className="text-blue-600">
            📦 Total Orders:{" "}
            <span className="font-semibold">{total.value}</span>
          </p>
        )}
        {undelivered && (
          <p className="text-red-500">
            🚚 Undelivered:{" "}
            <span className="font-semibold">{undelivered.value}</span>
          </p>
        )}
      </div>
    );
  }
  return null;
};

const OrderLineChart: React.FC = () => {
  // Responsive height adjustment: smaller height on narrow screens
  const [containerWidth, setContainerWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setContainerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartHeight = containerWidth < 640 ? 160 : 215; // Tailwind 'sm' breakpoint at 640px

  return (
    <div
      className="bg-white rounded-lg pb-3  shadow-md border border-gray-200 max-w-full"
      style={{
        background: `linear-gradient(160deg, #0DB5B566 -60%, white 40%, transparent 100%)`,
      }}
    >
      <div className="flex justify-between items-center p-4 mb-1">
        <h4 className="text-lg font-semibold text-gray-700 ">Daily Orders</h4>
        <div className="text-sm text-gray-500">May 2025</div>
      </div>

      <ResponsiveContainer width="100%" height={chartHeight}>
        <AreaChart
          data={processedOrders}
          margin={{ top: 10, right: 0, left: -20, bottom: 0 }} // Adjust margins to eliminate spacing
        >
          <defs>
            <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="undeliveredGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#ef4444" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="date"
            stroke="#6b7280"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />

          {/* Removed YAxis */}
          {/* <YAxis ... /> */}

          <Tooltip content={<CustomTooltip />} />

          <Area
            type="monotone"
            dataKey="totalOrders"
            stroke="#3b82f6"
            fill="url(#totalGradient)"
            strokeWidth={1}
            dot={false}
            activeDot={{ r: 4 }}
            name="Total Orders"
            isAnimationActive={true}
            animationDuration={1200}
            animationEasing="ease-in-out"
          />
          <Area
            type="monotone"
            dataKey="undeliveredOrders"
            stroke="#ef4444"
            fill="url(#undeliveredGradient)"
            strokeWidth={1}
            dot={false}
            activeDot={{ r: 4 }}
            name="Undelivered Orders"
            isAnimationActive={true}
            animationDuration={1200}
            animationEasing="ease-in-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderLineChart;
