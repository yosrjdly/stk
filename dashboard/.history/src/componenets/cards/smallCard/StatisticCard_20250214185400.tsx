'use client';

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';

const StatisticCard = ({
  title,
  value,
  icon,
  bgColor,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  bgColor: string;
}) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-block', mx: 2 }}>
      {/* Floating Icon */}
      <Box
        sx={{
          position: 'absolute',
          top: -20, 
          left: 20,
          width: 50,
          height: 50,
          borderRadius: '50%',
          backgroundColor: bgColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 3,
        }}
      >
        {icon}
      </Box>

      {/* Card */}
      <Card
        sx={{
          width: 200,
          height: 100,
          borderRadius: 3,
          textAlign: 'center',
          boxShadow: 3,
          backgroundColor: 'white',
          pt: 3,
        }}
      >
        <CardContent>
          <Typography variant="body2" sx={{ color: 'gray' }}>
            {title}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2D3E50' }}>
            {value}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

const DashboardStats = () => {
  const stats = [
    { title: 'Benifice', value: '0.000', icon: <MonetizationOnIcon sx={{ color: 'white' }} />, bgColor: 'black' },
    { title: 'Colis', value: '1,250', icon: <LocalShippingIcon sx={{ color: 'white' }} />, bgColor: '#1a73e8' },
    { title: 'Commande', value: '750', icon: <ShoppingCartIcon sx={{ color: 'white' }} />, bgColor: '#e91e63' },
    { title: 'Stock', value: '500', icon: <InventoryIcon sx={{ color: 'white' }} />, bgColor: '#4caf50' },
  ];

  return (
    <Box display="flex" justifyContent="center" gap={1} flexWrap="wrap" mt={2}>
      {stats.map((stat, index) => (
        <StatisticCard key={index} title={stat.title} value={stat.value} icon={stat.icon} bgColor={stat.bgColor} />
      ))}
    </Box>
  );
};

export default DashboardStats;
