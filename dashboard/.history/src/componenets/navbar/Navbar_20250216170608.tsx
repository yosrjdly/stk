'use client';

import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Menu, MenuItem, Link } from '@mui/material';
import { Search as SearchIcon, Help as HelpIcon, Notifications as NotificationsIcon, Language as LanguageIcon, Logout as LogoutIcon } from '@mui/icons-material';
import { useRouter,usePathname } from 'next/navigation';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isClient, setIsClient] = useState(false);
    const pathname = usePathname();
    console.log("pathname",pathname)
   // state to ensure client-side execution
  const router = useRouter();
  console.log("router ",router) // Use `useRouter` directly

  useEffect(() => {
    // Ensure that we're on the client side by checking for window
    setIsClient(true);
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  if (!isClient) {
    return null; // return null while waiting for the client-side execution
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        mx: 1,
        mt: 1,
        borderRadius: '16px',
        boxShadow: 'none',
        backdropFilter: 'blur(10px)',
        zIndex: 1200,
        backgroundColor: '#ffff',
      }}
    >
      <Toolbar>
        {/* Refresh Link and Current Route */}
        <Link 
          component="button" 
          sx={{ color: '#B0B0B0', marginRight: '16px' }} 
          onClick={handleRefresh}
        >
          Refresh Page {pathname}
          {console.log(router)}
        </Link>

        {/* Search Bar */}
        <InputBase
          placeholder="Search…"
          startAdornment={<SearchIcon />}
          sx={{ flexGrow: 1, borderRadius: '4px', paddingLeft: '8px' }}
        />

        {/* Help Icon */}
        <IconButton color="inherit" onClick={handleMenuOpen} sx={{ color: '#B0B0B0' }}>
          <HelpIcon />
        </IconButton>

        {/* Notifications Icon */}
        <IconButton color="inherit" sx={{ color: '#B0B0B0' }}>
          <NotificationsIcon />
        </IconButton>

        {/* Language Icon */}
        <IconButton color="inherit" sx={{ color: '#B0B0B0' }}>
          <LanguageIcon />
        </IconButton>

        {/* Logout Icon */}
        <IconButton color="inherit" sx={{ color: '#B0B0B0' }}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>

      {/* Help Icon Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Help Center</MenuItem>
        <MenuItem onClick={handleMenuClose}>Contact Support</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
