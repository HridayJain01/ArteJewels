// src/components/SalesOverview.jsx

import React, { useEffect, useState } from "react";
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
import axios from "axios";

const SalesOverview = () => {
  const [salesData, setSalesData] = useState([]);

  // Fetch orders from backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/orders");
        const orders = response.data;
        const totalsByDate = {};

        // Calculate total sales per date
        orders.forEach(order => {
          const date = new Date(order.date).toLocaleDateString(); // Format date
          if (!totalsByDate[date]) {
            totalsByDate[date] = 0;
          }
          totalsByDate[date] += order.total; // Sum total for that date
        });

        // Convert totalsByDate to the required data format
        const formattedData = Object.entries(totalsByDate).map(([date, total]) => ({
          name: date,
          sales: total,
        }));

        // Sort data by date
        formattedData.sort((a, b) => new Date(a.name) - new Date(b.name));

        setSalesData(formattedData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Box sx={{ height: "100%" }}>
      <Typography variant="h6" gutterBottom className="text-customPurple-900">
        Sales Overview
      </Typography>
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={salesData}
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
