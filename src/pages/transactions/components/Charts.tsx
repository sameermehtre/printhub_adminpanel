import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

interface DonutProps {
  data: { label: string; value: number; date?: string }[]; // date is optional
  total: number;
}

const COLORS = [
  "#2563EB",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
];

// Custom label to show percentage on slices
const renderCustomizedLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DonutChart: React.FC<DonutProps> = ({ data, total }) => {
  const hasData = data && data.length > 0;

  return (
    <div className="w-full h-80 ">
      {hasData ? (
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={45}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
                nameKey="label"
                cx="50%"
                cy="50%"
                startAngle={90}
                endAngle={-270}
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label
                  value={`₹${total.toLocaleString("en-IN")}`}
                  position="center"
                  className="recharts-text"
                  fontSize={16}
                  fill="#1f2937"
                />
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f9fafb",
                  borderColor: "#e5e7eb",
                  color: "#1f2937",
                }}
                formatter={(value: number, name: string, props: any) => {
                  const entry = props?.payload;
                  return [
                    `₹${value.toLocaleString("en-IN")}`,
                    `${entry.label} (${entry.date || ""})`,
                  ];
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full text-gray-500">
          No revenue data available.
        </div>
      )}
    </div>
  );
};

export default DonutChart;
