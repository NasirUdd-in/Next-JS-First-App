import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";



const menuItem = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "About",
      label: "About",
    },
    {
      path: "Cars",
      label: "Cars",
    },
    {
      path: "UploadCar",
      label: "UploadCar",
    },
    {
      path: "Car",
      label: "Car",
    },
  ];
const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx = {{backgroundColor:"black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
          <Box sx={{display: 'flex'}}>
            {menuItem.map(({ path, label }, index) => (
              <Box key={index}>
                <Link href={path} passHref>
                  <Button sx={{ my: 2, color: 'var(--color-primary-accent)', display: "block" }}>
                    {label}
                  </Button>
                </Link>
              </Box>
            ))}
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;
