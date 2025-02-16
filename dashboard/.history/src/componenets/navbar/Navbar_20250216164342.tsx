'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Menu, MenuItem } from '@mui/material';
import { Search as SearchIcon, Help as HelpIcon, Notifications as NotificationsIcon, Language as LanguageIcon, Logout as LogoutIcon } from '@mui/icons-material';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
        backgroundColor: '#ffff'
      }}
    >
      <Toolbar>
        {/* Search Bar */}
        <InputBase
          placeholder="Search…"
          startAdornment={<SearchIcon />}
          sx={{ flexGrow: 1, backgroundColor: '#f1f1f1', borderRadius: '4px', paddingLeft: '8px' }}
        />

        {/* Help Icon */}
        <IconButton color="inherit" onClick={handleMenuOpen} sx={{ backgroundColor: '#f1f1f1' }}>
          <HelpIcon />
        </IconButton>

        {/* Notifications Icon */}
        <IconButton color="inherit" sx={{ backgroundColor: '#f1f1f1' }}>
          <NotificationsIcon />
        </IconButton>

        {/* Language Icon */}
        <IconButton color="inherit" sx={{ backgroundColor: '#f1f1f1' }}>
          <LanguageIcon />
        </IconButton>

        {/* Logout Icon */}
        <IconButton color="inherit" sx={{ backgroundColor: '#f1f1f1' }}>
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
