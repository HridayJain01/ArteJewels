// src/pages/Dashboard.jsx

import React from "react";
import { Typography, Paper, Box } from "@mui/material";
import GaugeChart from "../components/GaugeChart";
import LiveRates from "../components/LiveRates";
import PendingOrders from "../components/PendingOrders";
import SalesOverview from "../components/SalesOverview";
import ProductManagement from "../components/ProductManagement";
import OrderManagement from "../components/OrderManagement";
import InventoryTracking from "../components/InventoryTracking";

const Dashboard = ({ pendingOrders }) => {
  return (
    <Box className="flex-grow p-4">
      <Typography variant="h4" gutterBottom className="text-customPurple-900">
        Jewellery E-Commerce Admin Dashboard
      </Typography>

      <Box className="flex flex-col gap-3">
        <Box className="flex flex-wrap gap-3">
          <Paper elevation={3} className="p-3 flex-1 min-w-[45%]">
            <Typography
              variant="h6"
              gutterBottom
              className="text-customPurple-900"
            >
              Sales Growth
            </Typography>
            <GaugeChart value={75} maxValue={100} />
          </Paper>

          <Paper elevation={3} className="p-3 flex-1 min-w-[45%]">
            <Typography
              variant="h6"
              gutterBottom
              className="text-customPurple-900"
            >
              Live Rates
            </Typography>
            <LiveRates />
          </Paper>

          <Paper elevation={3} className="p-3 flex-1 min-w-[45%]">
            <Typography
              variant="h6"
              gutterBottom
              className="text-customPurple-900"
            >
              Pending Orders
            </Typography>
            <PendingOrders orders={pendingOrders} />
          </Paper>

          <Paper elevation={3} className="p-3 flex-1 min-w-[45%] h-[400px]">
            <SalesOverview />
          </Paper>

          <Paper elevation={3} className="p-3 flex-1 min-w-[45%] h-[400px]">
            <ProductManagement />
          </Paper>

          <Paper elevation={3} className="p-3 flex-1 min-w-[45%]">
            <OrderManagement />
          </Paper>

          <Paper elevation={3} className="p-3 flex-1 min-w-[45%]">
            <InventoryTracking />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
