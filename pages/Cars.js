import React from 'react';
import { Box, Typography } from '@mui/material';
import AllCard from '../Components/AllCard/AllCard';

const Cars = () => {
    return (
        <Box sx={{ width: '100%' }}>
        <Typography variant="h1" component="div" gutterBottom>
        Select a car maker
        </Typography>
       <AllCard></AllCard>
      </Box>
    );
};

export default Cars;