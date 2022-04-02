import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import AllCard from '../Components/AllCard/AllCard';

const Cars = () => {
    return (
       <Container>
<Typography variant="h4" sx={{ fontWeight: 'bold', mt: 5,  }}component="div" gutterBottom>
        Select a car maker
        </Typography>
       <AllCard></AllCard>
       </Container>
        
     
    );
};

export default Cars;