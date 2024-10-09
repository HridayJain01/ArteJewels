import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const GaugeChart = ({ value, maxValue }) => {
  const data = [{ value }, { value: maxValue - value }];

  // Use custom theme colors
  const COLORS = ["#9D6B98", "#F4E3F3"];

  return (
    <div className="w-full h-52 flex justify-center items-center">
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <text x={100} y={120} textAnchor="middle" dominantBaseline="middle">
          {`${value} / ${maxValue}`}
        </text>
      </PieChart>
    </div>
  );
};

export default GaugeChart;
