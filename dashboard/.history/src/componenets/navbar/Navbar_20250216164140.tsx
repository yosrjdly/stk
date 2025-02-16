'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Menu, MenuItem, Switch, FormControlLabel } from '@mui/material';
import { Search as SearchIcon, Help as HelpIcon, Notifications as NotificationsIcon, Language as LanguageIcon, Logout as LogoutIcon, DarkMode as DarkModeIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [themeMode, setThemeMode] = useState(false); // Dark mode state

  const theme = useTheme();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleTheme = () => {
    setThemeMode((prev) => !prev);
    // You can add a theme switcher logic here (like changing the theme color)
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
        backgroundColor:'#ffff'
      }}
    >
      <Toolbar>
        {/* Search Bar */}
        <InputBase
          placeholder="Search…"
          startAdornment={<SearchIcon />}
          sx={{ flexGrow: 1, backgroundColor: theme.palette.background.default, borderRadius: '4px', paddingLeft: '8px' }}
        />

        {/* Help Icon */}
        <IconButton color="inherit" onClick={handleMenuOpen}>
          <HelpIcon />
        </IconButton>

        {/* Notifications Icon */}
        <IconButton color="gray">
          <NotificationsIcon />
        </IconButton>

        {/* Theme Switch */}
        <FormControlLabel
        c
          control={<Switch checked={themeMode} onChange={toggleTheme} />}
          label={<DarkModeIcon />}
        />

        {/* Language Icon */}
        <IconButton color="gray">
          <LanguageIcon />
        </IconButton>

        {/* Logout Icon */}
        <IconButton color="gray">
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
