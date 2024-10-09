// src/components/OrderManagement.jsx

import React from "react";
import { Typography, Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Pending", orders: 12 },
  { name: "Shipped", orders: 8 },
  { name: "Delivered", orders: 15 },
  { name: "Cancelled", orders: 2 },
];

const OrderManagement = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom className="text-customPurple-900">
        Order Management
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="orders" fill="#4F264A" />{" "}
          {/* Use a shade of customPurple */}
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default OrderManagement;
