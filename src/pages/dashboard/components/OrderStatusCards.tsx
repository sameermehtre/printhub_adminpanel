import React from "react";
import { Clock, Loader2, CheckCircle, Truck } from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";

const donutColors = {
  pending: ["#ef4444", "#ffffff"], // red + gray-200
  process: ["#f59e0b", "#ffffff"], // amber + gray-200
  completed: ["#22c55e", "#ffffff"], // green + gray-200
  delivered: ["#4338ca", "#ffffff"], // indigo + gray-200
};

const commonData = {
  total: 100,
};

const orderData = [
  {
    key: "pending",
    title: "Pending Orders",
    count: 10,
    icon: <Clock className="w-6 h-6 text-red-400" />,
    colors: donutColors.pending,
  },
  {
    key: "process",
    title: "In Process Orders",
    count: 20,
    icon: <Loader2 className="w-6 h-6 text-yellow-400" />,
    colors: donutColors.process,
  },
  {
    key: "completed",
    title: "Completed Orders",
    count: 20,
    icon: <CheckCircle className="w-6 h-6 text-green-400" />,
    colors: donutColors.completed,
  },
  {
    key: "delivered",
    title: "Delivered Orders",
    count: 50,
    icon: <Truck className="w-6 h-6 text-indigo-400" />,
    colors: donutColors.delivered,
  },
];

const OrderStatusCards = () => {
  const total = commonData.total;

  return (
    <div className="flex flex-wrap gap-4 px-3 py-1 justify-start">
      {orderData.map((item, index) => {
        const filled = item.count;
        const unfilled = total - filled;

        const pieData = [
          { name: "filled", value: filled },
          { name: "remaining", value: unfilled },
        ];

        return (
          <div
            key={index}
            className="flex items-center justify-between bg-white shadow-lg rounded-lg px-4 py-3 w-[260px] min-w-[240px]  hover:scale-105 hover:shadow-xl transition-all duration-300"
            style={{
              background: `linear-gradient(160deg, ${item.colors[0]}66 0%, white 120%)`,
            }}
          >
            {/* Left Side */}
            <div className="flex flex-col justify-center flex-1">
              <div className="flex items-center mb-1 space-x-2">
                <div className="bg-gray-100 p-2 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </span>
                  <span className="text-xs text-gray-600">
                    {item.count} / {total} Orders
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Pie Chart */}
            <div className="flex items-center justify-center">
              <PieChart width={60} height={60}>
                <Pie
                  data={pieData}
                  innerRadius={15}
                  outerRadius={25}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  stroke="none"
                >
                  <Cell fill={item.colors[0]} />
                  <Cell fill={item.colors[1]} />
                </Pie>
              </PieChart>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderStatusCards;
