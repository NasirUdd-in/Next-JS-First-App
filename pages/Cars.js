import React from 'react';
import { Box, Typography } from '@mui/material';
import AllCard from '../Components/AllCard/AllCard';

const Cars = () => {
    return (
        <Box sx={{ width: '100%' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mt: 5, ml: 50 }}component="div" gutterBottom>
        Select a car maker
        </Typography>
       <AllCard></AllCard>
      </Box>
    );
};

export default Cars;