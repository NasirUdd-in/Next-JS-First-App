import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import { useState, useEffect } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const names = [
      'Toyota',
      'Nissan',
      'HondaHonda',
      'Hyundai',
];
export default function AllCard() {

    const [car, setCar] = useState({});

    // useEffect(() => {
    //   fetch("https://backend.bhalogari.com/api/cars/choose-by-maker/?maker_name")
    //   .then((response) => response.json())
    //  .then((data) => setCar(data));
      
    //  }, []);

    const [carf, setCarf] = useState({});

    const handleChange = (event) => {
      const carSelect =  event.target.value;
      // const carChakni = car.results.filter(cars => cars.car_manufacturer.maker_name.toLowerCase().includes(carSelect.toLowerCase()));
      setCarf(carSelect);
      
    };
  
    const [carAll, setCarAll] = useState({});

    useEffect(() => {
      let url = `https://backend.bhalogari.com/api/cars/choose-by-maker/?maker_name=${carf}` ;
      fetch(url)
      .then((response) => response.json())
     .then((data) => setCar(data));
      
     }, [carf]);
    
   
  return (
<Container >
<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        
          onChange={handleChange}
        >
         {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>

    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {car.results?.map((data, index) => (
         
          <Grid item xs={2} sm={4} md={4} key={index}>
           <Card sx={{ maxWidth: 345 }} key={index}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={data.images.image_url}
            alt="green iguana"
          />
    
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {data.car_manufacturer.maker_name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {data.model_name.model_name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
            {data.car_type.fixed_price}
            </Typography>
            <Typography variant="h6" color="text.secondary">
            {data.car_type.car_year}
            </Typography>
            <Typography variant="h6" color="text.secondary">
            {data.car_manufacturer.maker_country}
            </Typography>
        
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            More Details
          </Button>
        </CardActions>
      </Card>
          </Grid>
        ))}
      </Grid>
</Container>

  );
}


