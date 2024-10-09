// src/components/SalesOverview.jsx

import React from "react";
import { Typography, Box } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", sales: 4000 },
  { name: "Tue", sales: 3000 },
  { name: "Wed", sales: 5000 },
  { name: "Thu", sales: 2000 },
  { name: "Fri", sales: 2780 },
  { name: "Sat", sales: 1890 },
  { name: "Sun", sales: 2390 },
];

const SalesOverview = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <Typography variant="h6" gutterBottom className="text-customPurple-900">
        Sales Overview
      </Typography>
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#3F183B" // Use the darkest shade of customPurple
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default SalesOverview;
