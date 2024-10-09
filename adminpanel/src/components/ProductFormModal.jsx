// src/components/ProductFormModal.jsx

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import axios from "axios"; // Import axios

const categories = ["Necklace", "Ring", "Bracelet", "Earrings"];

const ProductFormModal = ({ open, onClose, onSave, initialProduct }) => {
  const [product, setProduct] = useState({
    title: "",
    rate: "",
    category: "",
    stock: "",
    imageUrl: "",
    description: "",
  });

  // Populate the form if editing an existing product
  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct);
    } else {
      setProduct({
        title: "",
        rate: "",
        category: "",
        stock: "",
        imageUrl: "",
        description: "",
      });
    }
  }, [initialProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async () => {
    if (
      product.title &&
      product.rate &&
      product.category &&
      product.stock &&
      product.imageUrl &&
      product.description
    ) {
      try {
        const response = await axios.post(
          "http://localhost:5001/api/products",
          product
        );
        onSave(response.data);
        onClose();
      } catch (error) {
        console.error("Error adding product:", error);
        alert("Failed to add product.");
      }
    } else {
      alert("All fields are required.");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {initialProduct ? "Edit Product" : "Add Product"}
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="title"
          label="Product Title"
          fullWidth
          value={product.title}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="rate"
          label="Rate"
          type="number"
          fullWidth
          value={product.rate}
          onChange={handleChange}
        />
        <TextField
          select
          margin="dense"
          name="category"
          label="Category"
          fullWidth
          value={product.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          margin="dense"
          name="stock"
          label="Stock"
          type="number"
          fullWidth
          value={product.stock}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="imageUrl"
          label="Image URL"
          fullWidth
          value={product.imageUrl}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          fullWidth
          value={product.description}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>
          {initialProduct ? "Save" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductFormModal;
