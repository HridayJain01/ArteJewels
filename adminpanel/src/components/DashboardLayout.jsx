// src/components/DashboardLayout.jsx

import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const drawerWidth = 240;

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon className="text-customPurple-900" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" className="text-customPurple-900" />
        </ListItem>
        <ListItem button component={Link} to="/products">
          <ListItemIcon>
            <ShoppingCartIcon className="text-customPurple-900" />
          </ListItemIcon>
          <ListItemText
            primary="Product List"
            className="text-customPurple-900"
          />
        </ListItem>
        <ListItem button component={Link} to="/orders">
          <ListItemIcon>
            <AttachMoneyIcon className="text-customPurple-900" />
          </ListItemIcon>
          <ListItemText
            primary="Order List"
            className="text-customPurple-900"
          />
        </ListItem>
        <ListItem button component={Link} to="/inventory">
          <ListItemIcon>
            <InventoryIcon className="text-customPurple-900" />
          </ListItemIcon>
          <ListItemText primary="Inventory" className="text-customPurple-900" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box className="flex">
      {/* AppBar */}
      <AppBar position="fixed" className="z-[theme.zIndex.drawer+1]">
        <Toolbar className="bg-customPurple-900">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="mr-2 sm:hidden"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        className="block sm:hidden"
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        className="hidden sm:block"
        sx={{
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* Main content area */}
      <Box
        component="main"
        className="flex-grow p-3"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
