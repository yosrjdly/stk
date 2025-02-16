// components/SearchCard.tsx
import React from 'react';
import { TextField, Card, CardContent, Box, Button } from '@mui/material';

const SearchCard = () => {
  return (
    <Card
      sx={{
        maxWidth:600 ,
        borderRadius: 2,
        backgroundColor: 'white',
        boxShadow: 3,
        p: 2,
      }}
    >
      <CardContent>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <TextField
            label="Barcode"
            variant="outlined"
            placeholder="Enter barcode"
            fullWidth
            sx={{
              borderRadius: '8px',
            }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            placeholder="Enter phone number"
            fullWidth
            sx={{
              borderRadius: '8px',
            }}
          />
          <TextField
            label="First Name"
            variant="outlined"
            placeholder="Enter first name"
            fullWidth
            sx={{
              borderRadius: '8px',
            }}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            placeholder="Enter last name"
            fullWidth
            sx={{
              borderRadius: '8px',
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#E91E63', // Pink color
              color: 'white',
              borderRadius: '8px',
              marginTop: 2,
              '&:hover': {
                backgroundColor: '#C2185B', // Darker pink on hover
              },
            }}
          >
            Confirm
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SearchCard;
