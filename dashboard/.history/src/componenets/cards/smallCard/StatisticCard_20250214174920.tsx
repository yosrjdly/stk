'use client';

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const StatisticCard = ({ title, value }: { title: string; value: string }) => {
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
          backgroundColor: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 3,
        }}
      >
        <MonetizationOnIcon sx={{ color: 'white' }} />
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
    { title: 'Benifice', value: '0.000' },
    { title: 'Colis', value: '1,250' },
    { title: 'Commande', value: '750' },
    { title: 'Stock', value: '500' },
  ];

  return (
    <Box display="flex" justifyContent="center" gap={4} flexWrap="wrap" mt={4}>
      {stats.map((stat, index) => (
        <StatisticCard key={index} title={stat.title} value={stat.value} />
      ))}
    </Box>
  );
};

export default DashboardStats;
