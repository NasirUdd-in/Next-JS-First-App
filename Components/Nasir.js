import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';

const Nasir = () => {
    const [car, setCar] = useState({});
    
    useEffect(() => {
       fetch("")
       .then((response) => response.json())
      .then((data) => console.log(data));
       
      }, []);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <Container sx={{ Width: 120,marginTop: 20  }}>
           
        <FormControl >
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            {
                car?.results?.map((carone,index) =>  <MenuItem key={index}> {(carone?.car_manufacturer?.maker_name)}</MenuItem>)
            }
           
          </Select>
        </FormControl>
      </Container>
    );
};


export default Nasir;