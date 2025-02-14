"use client";

import { Box, CssBaseline, Toolbar } from "@mui/material";
import Sidebar from "../../componenets/sidebar/SideBar";
import Navbar from "../../componenets/navbar/Navbar"; // Assuming you have a Navbar component
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      
      {/* Sidebar (Permanent) */}
      <Sidebar />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
            top:2,
          flexGrow: 1,
          p: 3,
          width: `calc(100% - 250px)`, // Adjusting main content width to fit sidebar
          backgroundColor: "#fff",
          minHeight: "100vh",
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <Toolbar /> {/* Keeps content from being hidden behind Navbar */}
        {children}
      </Box>
    </Box>
  );
}
