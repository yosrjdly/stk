"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { ExpandLess, ExpandMore, Brightness4, Brightness7 } from "@mui/icons-material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorageIcon from '@mui/icons-material/Storage';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import HelpIcon from '@mui/icons-material/Help';

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    color: "#6c757d",
    icon: <DashboardIcon />,
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
    color: "#1a73e8",
    icon: <LocalShippingIcon />,
  },
  {
    title: "Orders",
    subItems: [
      { title: "Cash Sale", path: "/dashboard/orders/cashSale" },
      { title: "Orders", path: "/dashboard/orders/orders" },
    ],
    color: "#e91e63",
    icon: <ShoppingCartIcon />,
  },
  {
    title: "Stock",
    subItems: [
      { title: "Add Article", path: "/dashboard/stock/addArticle" },
      { title: "Entred Stock", path: "/dashboard/stock/entredStock" },
      { title: "Notification", path: "/dashboard/stock/notification" },
      { title: "Stock", path: "/dashboard/stock/stock" },
    ],
    color: "#4caf50",
    icon: <StorageIcon />,
  },
  {
    title: "Management",
    subItems: [
      { title: "Delivery Company", path: "/management/deliveryCompany" },
      { title: "Profile", path: "/dashboard/management/profile" },
      { title: "Profit", path: "/dashboard/management/profit" },
      { title: "Spending", path: "/dashboard/management/spending" },
      { title: "User", path: "/dashboard/management/user" },
    ],
    color: "#adb5bd",
    icon: <SupervisedUserCircleIcon />,
  },
  {
    title: "Data",
    subItems: [
      { title: "Archived Parcel", path: "/dashboard/data/archivedParcel" },
      { title: "Command Deleted", path: "/dashboard/data/commandDeleted" },
      { title: "Deleted Parcel", path: "/dashboard/data/deletedParcel" },
      { title: "Inventory Removed", path: "/dashboard/data/inventoryRemoved" },
    ],
    color: "#f44335",
    icon: <DataUsageIcon />,
  },
  {
    title: "Support",
    subItems: [
      { title: "About Us", path: "/dashboard/support/aboutUs" },
      { title: "Claims", path: "/dashboard/support/claims" },
      { title: "User Guide", path: "/dashboard/support/userGuide" },
    ],
    color: "#fb8c00",
    icon: <HelpIcon />,
  },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname(); // Get current route
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <Drawer variant="permanent" sx={{ width: 250, flexShrink: 0, marginTop: 2 }}>
      <Box sx={{ height: "100%", width: 250, padding: 2, backgroundColor: "#212529", borderRadius: 5, margin: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }}>
          <Typography variant="h6" sx={{ color: "white" }}>Promolik</Typography>
        </Box>
        <Divider sx={{ backgroundColor: "#6c757d" }} />
        <List>
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.subItems ? (
                <>
                  <ListItemButton
                    sx={{
                      backgroundColor: pathname.includes(item.subItems.map(sub => sub.path)) ? item.color : "transparent",
                      borderRadius: "10px",
                      marginBottom: 1,
                      color: "white",
                    }}
                    onClick={() => toggleSection(item.title)}
                  >
                    {item.icon}
                    <ListItemText primary={item.title} sx={{ ml: 2 }} />
                    {openSections[item.title] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openSections[item.title]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.subItems.map((subItem, subIndex) => {
                        const isActive = pathname === subItem.path;
                        return (
                          <ListItemButton
                            key={subIndex}
                            sx={{
                              pl: 4,
                              backgroundColor: isActive ? item.color : "transparent",
                              borderRadius: isActive ? "10px" : "0px",
                              marginBottom: 1,
                              color: "white",
                            }}
                            onClick={() => router.push(subItem.path)}
                          >
                            <ListItemText primary={subItem.title} />
                          </ListItemButton>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItemButton
                  sx={{
                    backgroundColor: pathname === item.path ? item.color : "transparent",
                    borderRadius: "10px",
                    marginBottom: 1,
                    color: "white",
                  }}
                  onClick={() => router.push(item.path)}
                >
                  {item.icon}
                  <ListItemText primary={item.title} sx={{ ml: 2 }} />
                </ListItemButton>
              )}
              <Divider />
            </div>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
