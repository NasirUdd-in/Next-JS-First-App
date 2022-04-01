import React from 'react';
import { Box, Container } from '@mui/material';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
  });
const Car = () => {
    return (
        
        <Container sx={{width: 500, mt: 20}}>

           <Box sx={{ mt: 10}}>
           <label htmlFor="contained-button-file" >
           <Input accept="image/*" id="contained-button-file" multiple type="file" />
           <Button variant="contained" component="span">
          Upload
          </Button>
          </label>
           </Box>
           <Box>
           <Button variant="contained" sx={{width: 100, mt: 5}}>Submit</Button>
           </Box>
        </Container>
    );
};

export default Car;