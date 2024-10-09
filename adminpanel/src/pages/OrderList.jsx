// src/pages/OrderList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [statusFilter, setStatusFilter] = useState("");

  // Fetch orders from backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/orders');
        setOrders(response.data);
        setFilteredOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

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

  const handleDeleteOrder = async (id) => {
    try {
      await axios.delete(`/api/orders/${id}`);
      setFilteredOrders((prev) => prev.filter((order) => order._id !== id));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await axios.put(`/api/orders/${id}`, { status: newStatus });
      const updatedOrder = response.data;
      setOrders((prev) =>
        prev.map((order) => (order._id === id ? updatedOrder : order))
      );
      setFilteredOrders(
        statusFilter
          ? orders.filter((order) => order.status === statusFilter)
          : orders
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const pendingOrders = orders.filter((order) => order.status === "Pending");
  const shortenId = (id) => {
    return id.substring(0, 4); // Adjust the length as needed
  };
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };


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
              <TableCell className="text-customPurple-900">Item</TableCell>
              <TableCell className="text-customPurple-900">Total</TableCell>
              <TableCell className="text-customPurple-900">Status</TableCell>
              <TableCell className="text-customPurple-900">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order) => (
                <TableRow key={order._id} className="hover:bg-customPurple-200">
                  <TableCell>{shortenId(order._id)}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{formatDate(order.date)}</TableCell>
                  <TableCell>
  {order.items.map((item, idx) => (
    <div key={idx}>
      {`(${item.quantity}) ${item.title} - $${item.price.toFixed(2)}`}<br />
    </div>
  ))}
</TableCell>
               <TableCell>${order.total}</TableCell>
                  <TableCell>
                    <FormControl variant="outlined" className="min-w-[120px]">
                      <Select
                        value={order.status}
                        onChange={(e) =>
                          handleStatusChange(order._id, e.target.value)
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
                      onClick={() => handleDeleteOrder(order._id)}
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
