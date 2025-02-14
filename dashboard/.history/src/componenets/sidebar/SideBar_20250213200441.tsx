// components/Sidebar.js
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "Data",
    subItems: [
      { title: "Archived Parcel", path: "/dashboard/data/archivedParcel" },
      { title: "Command Deleted", path: "/dashboard/data/commandDeleted" },
      { title: "Deleted Parcel", path: "/dashboard/data/deletedParcel" },
      { title: "Inventory Removed", path: "/dashboard/data/inventoryRemoved" },
    ],
  },
  {
    title: "Management",
    subItems: [
      { title: "Delivery Company", path: "/dashboard/management/deliveryCompany" },
      { title: "Profile", path: "/dashboard/management/profile" },
      { title: "Profit", path: "/dashboard/management/profit" },
      { title: "Spending", path: "/dashboard/management/spending" },
      { title: "User", path: "/dashboard/management/user" },
    ],
  },
  {
    title: "Orders",
    subItems: [
      { title: "Cash Sale", path: "/dashboard/orders/cashSale" },
      { title: "Orders", path: "/dashboard/orders/orders" },
    ],
  },
  {
    title: "Parcel",
    subItems: [
      { title: "Exchange List", path: "/dashboard/parcel/exchangeList" },
      { title: "Exchange Return", path: "/dashboard/parcel/exchangeReturn" },
      { title: "Exchange Creation", path: "/dashboard/parcel/exchangeCreation" },
      { title: "Package Creation", path: "/dashboard/parcel/packageCreation" },
      { title: "Package Edit", path: "/dashboard/parcel/packageEdit" },
      { title: "Package List", path: "/dashboard/parcel/packageList" },
      { title: "Parcel Return", path: "/dashboard/parcel/parcelReturn" },
    ],
  },
  {
    title: "Stock",
    subItems: [
      { title: "Add Article", path: "/dashboard/stock/addArticle" },
      { title: "Entred Stock", path: "/dashboard/stock/entredStock" },
      { title: "Notification", path: "/dashboard/stock/notification" },
      { title: "Stock", path: "/dashboard/stock/stock" },
    ],
  },
  {
    title: "Support",
    subItems: [
      { title: "About Us", path: "/dashboard/support/aboutUs" },
      { title: "Claims", path: "/dashboard/support/claims" },
      { title: "User Guide", path: "/dashboard/support/userGuide" },
    ],
  },
];

export default function Sidebar() {
  const router = useRouter();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          backgroundColor: "#2d2d31", // Set background color
          borderRadius: "8px", // Add border radius
          padding: 2,
        },
      }}
    >
      <Box sx={{ width: 250, padding: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
          Admin Panel
        </Typography>
        <Divider sx={{ borderColor: "white" }} />
        <List>
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.subItems ? (
                <>
                  <ListItemButton onClick={() => toggleSection(item.title)}>
                    <ListItemText primary={item.title} sx={{ color: "white" }} />
                    {openSections[item.title] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openSections[item.title]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.subItems.map((subItem, subIndex) => (
                        <ListItemButton
                          key={subIndex}
                          sx={{ pl: 4 }}
                          onClick={() => router.push(subItem.path)}
                        >
                          <ListItemText primary={subItem.title} sx={{ color: "white" }} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItemButton onClick={() => router.push(item.path)}>
                  <ListItemText primary={item.title} sx={{ color: "white" }} />
                </ListItemButton>
              )}
              <Divider sx={{ borderColor: "white" }} />
            </div>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
