// src/components/InventoryTracking.js

import React, { useEffect, useState } from "react";
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
import axios from "axios";

const InventoryTracking = () => {
  const [inventoryData, setInventoryData] = useState([]);

  // Function to determine stock status
  const getStatus = (stock) => {
    if (stock <= 5) return "Critical";
    if (stock <= 15) return "Low";
    return "In Stock";
  };

  // Fetch product data from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/products"); // Update with your actual endpoint
        const products = response.data.map((product) => ({
          product: product.title,
          stock: product.stock,
          status: getStatus(product.stock),
        }));
        setInventoryData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
