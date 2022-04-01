import { Box, Typography } from '@mui/material';
import React from 'react';

const About = () => {
    return (
        <Box sx={{ width: '100%' }}>
        <Typography variant="h3"  sx={{ fontWeight: 'bold', mt:10 }} component="div" gutterBottom>
        About Us
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mt:10 }} gutterBottom component="div">
        Worlds Largest Automotive Marketplace
        </Typography>
        <Typography variant="body1" sx={{ mt:10 }} gutterBottom>
        Bhalogari.com is the leading and most reliable online auto marketplace launched on September 15, 2017. Headquarter is in Dhaka(Bangladesh), its mission is to bring ease and delight in car buying and selling process Bhalogari offers a bouquet of reliable tools and services to help car consumers decide on buying the right car, at the right price and from the right partner. Innovative and prompt technical solutions, certified partners, genuine product listing with authentic information are at the core of Bhalogari.com. The platform carries rich automotive content such as expert reviews, detailed specs and prices, comparisons as well as videos and pictures of all car brands and models available in Bangladesh. Our vision is to construct a transparent ecosystem for consumers and carmanufacturers, dealers, re-sellers to ensure most reliable and enjoyable car buying and selling experience.
        </Typography>
      
      </Box>
    );
};

export default About;