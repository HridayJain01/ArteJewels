// src/components/InventoryTracking.js

import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const inventoryData = [
  { product: "Ring A", stock: 15, status: "Low" },
  { product: "Necklace B", stock: 25, status: "In Stock" },
  { product: "Bracelet C", stock: 8, status: "Critical" },
  { product: "Earrings D", stock: 50, status: "In Stock" },
];

const InventoryTracking = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Inventory Tracking
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventoryData.map((row) => (
              <TableRow key={row.product}>
                <TableCell component="th" scope="row">
                  {row.product}
                </TableCell>
                <TableCell align="right">{row.stock}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default InventoryTracking;
