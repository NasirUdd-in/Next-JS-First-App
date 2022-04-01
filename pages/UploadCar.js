import React from 'react';
import { Box, Container } from '@mui/material';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
  });
const UploadCar = () => {
    return (
       
        <Container sx={{width: 500, mt: 20}}>

            <FormControl sx={{ width: '35ch'}}>
            <OutlinedInput placeholder="CarName" sx={{ width: '35ch', mt: 5 }}/> 
            <OutlinedInput placeholder="Price" sx={{ width: '35ch', mt: 5 }}/> 
            <OutlinedInput placeholder="Maker Name" sx={{ width: '35ch', mt: 5 }}/> 
            <OutlinedInput placeholder="Car Year" sx={{ width: '35ch', mt: 5 }}/> 
            <OutlinedInput placeholder="Car Color" sx={{ width: '35ch', mt: 5 }}/> 
            <OutlinedInput placeholder="Registration Year" sx={{ width: '35ch', mt: 5 }}/> 
            <OutlinedInput placeholder="Transmission Type" sx={{ width: '35ch', mt: 5 }}/> 
            <OutlinedInput placeholder="Description" sx={{ width: '35ch', mt: 5 }}/> 
            </FormControl>

           <Box sx={{ mt: 10}}>
           <label htmlFor="contained-button-file" >
           <Input accept="image/*" id="contained-button-file" multiple type="file" />
           <Button variant="contained" component="span">
          Upload
          </Button>
          </label>
           </Box>
           <Box>
           <Button variant="contained" sx={{width: 320, mt: 5}}>Submit</Button>
           </Box>
        </Container>
    );
};

export default UploadCar;