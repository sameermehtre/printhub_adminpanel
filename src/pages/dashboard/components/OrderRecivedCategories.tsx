import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Xerox B/W Print", value: 400 },
  { name: "Xerox Color Print", value: 300 },
  { name: "Photo Print", value: 200 },
  { name: "Document Print", value: 250 },
  { name: "Binding", value: 150 },
];

const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#6366F1"];

const OrderRecivedCategories: React.FC = () => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg py-5 border border-gray-200 w-full max-w-md mx-auto"
      style={{
        background:
          "radial-gradient(ellipse at bottom right, #0DB5B566 -20%, white 80%, transparent 100%)",
        zIndex: 0,
      }}
    >
      <h2 className="text-lg font-semibold mb-1 text-center text-gray-700">
        Order Categories
      </h2>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={35}
            outerRadius={70}
            paddingAngle={1}
            dataKey="value"
            nameKey="name"
            isAnimationActive={true}
            animationDuration={800}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip wrapperStyle={{ fontSize: "0.75rem" }} />
          <Legend
            verticalAlign="bottom"
            height={30}
            iconSize={8}
            wrapperStyle={{ fontSize: "0.9rem" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderRecivedCategories;
