// src/components/ProductManagement.jsx

import React from "react";
import { Typography, Box } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Rings", value: 400 },
  { name: "Necklaces", value: 300 },
  { name: "Bracelets", value: 200 },
  { name: "Earrings", value: 100 },
];

const COLORS = ["#3F183B", "#4F264A", "#5E345A", "#9D6B98"]; // Use shades of customPurple

const ProductManagement = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <Typography variant="h6" gutterBottom className="text-customPurple-900">
        Product Management
      </Typography>
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default ProductManagement;
