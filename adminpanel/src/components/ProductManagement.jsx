// src/components/ProductManagement.jsx

import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import axios from "axios";

const COLORS = ["#3F183B", "#4F264A", "#5E345A", "#9D6B98"]; // Use shades of customPurple

const ProductManagement = () => {
  const [data, setData] = useState([]);

  // Fetch all orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/orders'); // Update this URL as needed
        const orders = response.data;

        // Initialize counts for each category
        let ringsCount = 0;
        let necklacesCount = 2;
        let braceletsCount = 0;
        let earringsCount = 0;

        // Aggregate counts based on items in orders
        orders.forEach(order => {
          order.items.forEach(item => {
            // Convert category to lowercase and compare
            switch (item.category.toLowerCase()) {
              case "ring":
                ringsCount += item.quantity || 0; // Add 0 if quantity is undefined
                break;
              case "necklace":
                necklacesCount += item.quantity || 0; // Add 0 if quantity is undefined
                break;
              case "bracelet":
                braceletsCount += item.quantity || 0; // Add 0 if quantity is undefined
                break;
              case "earring":
                earringsCount += item.quantity || 0; // Add 0 if quantity is undefined
                break;
              default:
                break;
            }
          });
        });

        // Create an array for the PieChart data
        const chartData = [
          { name: "Ring", value: ringsCount },
          { name: "Necklace", value: necklacesCount },
          { name: "Bracelet", value: braceletsCount },
          { name: "Earring", value: earringsCount },
        ].filter(item => item.value > 0); // Filter out categories with a count of 0

        setData(chartData); // Set the processed data for the chart
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

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
            <Tooltip formatter={(value, name) => [`${value}`, name]} /> {/* Format tooltip */}
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default ProductManagement;
