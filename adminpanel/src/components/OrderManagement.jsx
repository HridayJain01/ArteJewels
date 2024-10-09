// src/components/OrderManagement.jsx
import React, { useState, useEffect } from "react";
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
import axios from "axios";

const OrderManagement = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/orders');
        const orders = response.data;

        // Aggregate orders by status
        const orderCounts = orders.reduce((acc, order) => {
          acc[order.status] = (acc[order.status] || 0) + 1;
          return acc;
        }, {});

        // Prepare data for the chart
        const aggregatedData = [
          { name: "Pending", orders: orderCounts.Pending || 0 },
          { name: "Shipped", orders: orderCounts.Shipped || 0 },
          { name: "Delivered", orders: orderCounts.Delivered || 0 },
          { name: "Cancelled", orders: orderCounts.Cancelled || 0 },
        ];

        setChartData(aggregatedData);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchOrderData();
  }, []);

  return (
    <Box>
      <Typography variant="h6" gutterBottom className="text-customPurple-900">
        Order Management
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="orders" fill="#4F264A" /> {/* Use a shade of customPurple */}
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default OrderManagement;
