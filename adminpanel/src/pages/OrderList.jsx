// src/pages/OrderList.jsx

import React, { useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
} from "@mui/material";
import PendingOrders from "../components/PendingOrders";

const OrderList = () => {
  // Sample orders data
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "Alice",
      date: "2024-09-01",
      total: 120.0,
      status: "Shipped",
    },
    {
      id: 2,
      customer: "Bob",
      date: "2024-09-02",
      total: 200.0,
      status: "Pending",
    },
    {
      id: 3,
      customer: "Charlie",
      date: "2024-09-03",
      total: 150.0,
      status: "Delivered",
    },
  ]);
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [statusFilter, setStatusFilter] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleStatusFilterChange = (event) => {
    const status = event.target.value;
    setStatusFilter(status);
    setFilteredOrders(
      status ? orders.filter((order) => order.status === status) : orders
    );
  };

  const handleDeleteOrder = (id) => {
    const updatedOrders = filteredOrders.filter((order) => order.id !== id);
    setFilteredOrders(updatedOrders);
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    setFilteredOrders(
      statusFilter
        ? updatedOrders.filter((order) => order.status === statusFilter)
        : updatedOrders
    );
  };

  // Extract pending orders
  const pendingOrders = orders.filter((order) => order.status === "Pending");

  return (
    <Box className="p-4">
      <Typography variant="h4" className="text-customPurple-900 mb-4">
        Order List
      </Typography>

      <Box className="flex justify-between mb-2">
        <FormControl variant="outlined" className="min-w-[120px]">
          <InputLabel id="status-filter-label">Status</InputLabel>
          <Select
            labelId="status-filter-label"
            value={statusFilter}
            onChange={handleStatusFilterChange}
            label="Status"
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Shipped">Shipped</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead className="bg-customPurple-100">
            <TableRow>
              <TableCell className="text-customPurple-900">Order ID</TableCell>
              <TableCell className="text-customPurple-900">Customer</TableCell>
              <TableCell className="text-customPurple-900">Date</TableCell>
              <TableCell className="text-customPurple-900">Total</TableCell>
              <TableCell className="text-customPurple-900">Status</TableCell>
              <TableCell className="text-customPurple-900">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order) => (
                <TableRow key={order.id} className="hover:bg-customPurple-200">
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>${order.total}</TableCell>
                  <TableCell>
                    <FormControl variant="outlined" className="min-w-[120px]">
                      <Select
                        value={order.status}
                        onChange={(e) =>
                          handleStatusChange(order.id, e.target.value)
                        }
                      >
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="Shipped">Shipped</MenuItem>
                        <MenuItem value="Delivered">Delivered</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDeleteOrder(order.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredOrders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Pass pending orders to PendingOrders component */}
      <PendingOrders orders={pendingOrders} />
    </Box>
  );
};

export default OrderList;
