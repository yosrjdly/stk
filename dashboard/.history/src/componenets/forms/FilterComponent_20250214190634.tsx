"use client"


import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers/AdapterDateFns';

const FilterComponent: React.FC = () => {
  const [dateRange, setDateRange] = useState<{ startDate: Date | null; endDate: Date | null }>({
    startDate: new Date('2025-01-15'),
    endDate: new Date('2025-02-14'),
  });

  const [status, setStatus] = useState('all');

  const handleStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatus(event.target.value as string);
  };

  const handleToggleChange = (event: React.MouseEvent<HTMLElement>, newStatus: string | null) => {
    if (newStatus !== null) {
      setStatus(newStatus);
    }
  };

  const handleDateChange = (field: 'startDate' | 'endDate', date: Date | null) => {
    setDateRange((prev) => ({ ...prev, [field]: date }));
  };

  const handleConfirm = () => {
    // Implement filter logic here
    console.log('Filtering with:', { dateRange, status });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px', margin: 'auto' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Select value={status} onChange={handleStatusChange} displayEmpty>
          <MenuItem value="all">Filter by date of Status</MenuItem>
        </Select>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Start Date"
            value={dateRange.startDate}
            onChange={(date) => handleDateChange('startDate', date)}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="End Date"
            value={dateRange.endDate}
            onChange={(date) => handleDateChange('endDate', date)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <Button variant="contained" color="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </div>

      <ToggleButtonGroup
        color="primary"
        value={status}
        exclusive
        onChange={handleToggleChange}
        aria-label="Platform selection"
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="aramex">Aramex</ToggleButton>
        <ToggleButton value="dropeex">Dropeex</ToggleButton>
        <ToggleButton value="colis-express">Colis Express</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default FilterComponent;
