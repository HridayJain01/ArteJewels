// src/pages/ProductList.jsx

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
  MenuItem,
  IconButton,
  Button,
} from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";
import ProductFormModal from "../components/ProductFormModal";
import axios from "axios"; // Import axios for making HTTP requests

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/products");
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (categoryFilter !== "All") {
      filtered = filtered.filter(
        (product) => product.category === categoryFilter
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, categoryFilter, products]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product._id !== productId));
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  const handleEditProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      )
    );
  };

  const handleOpenModal = (product = null) => {
    setEditProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Typography variant="h4" gutterBottom className="text-customPurple-900">
        Product List
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        {/* Search Bar */}
        <TextField
          label="Search Products"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        {/* Category Filter */}
        <TextField
          label="Category"
          select
          value={categoryFilter}
          onChange={handleCategoryChange}
          size="small"
          variant="outlined"
          sx={{ width: 200 }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Necklace">Necklace</MenuItem>
          <MenuItem value="Ring">Ring</MenuItem>
          <MenuItem value="Bracelet">Bracelet</MenuItem>
          <MenuItem value="Earrings">Earrings</MenuItem>
        </TextField>

        {/* Add Product Button */}
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => handleOpenModal()}
          className="bg-customPurple-900 text-white"
        >
          Add Product
        </Button>
      </Box>

      {/* Product Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead className="bg-customPurple-100">
            <TableRow>
              <TableCell className="text-customPurple-900">
                Product Name
              </TableCell>
              <TableCell className="text-customPurple-900">Category</TableCell>
              <TableCell className="text-customPurple-900">Price</TableCell>
              <TableCell className="text-customPurple-900">Stock</TableCell>
              <TableCell className="text-customPurple-900">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => (
                <TableRow
                  key={product._id}
                  className="hover:bg-customPurple-200"
                >
                  <TableCell>{product.title}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>${product.rate}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpenModal(product)}>
                      <Edit className="text-customPurple-900" />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(product._id)}>
                      <Delete className="text-customPurple-900" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredProducts.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Add/Edit Product Modal */}
      <ProductFormModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onSave={editProduct ? handleEditProduct : handleAddProduct}
        initialProduct={editProduct}
      />
    </Box>
  );
};

export default ProductList;
