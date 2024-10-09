// src/pages/InventoryPage.jsx

import React from "react";
import { Typography, Paper, Box } from "@mui/material";

const InventoryPage = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Inventory Tracking
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h6">
          Inventory tracking details go here...
        </Typography>
        {/* Add your inventory tracking content here */}
      </Paper>
    </Box>
  );
};

export default InventoryPage;