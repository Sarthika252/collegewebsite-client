import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';

// Define navigation links
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Admission', path: '/admission' },
  { label: 'Departments', path: '/departments' },
  { label: 'Contact', path: '/contact' },
  { label: 'Sign In', path: '/signin' },
  { label: 'Sign Up', path: '/signup' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Drawer for mobile view
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        D.Y. Patil College
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={item.path}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" color="primary" position="static">
        <Toolbar>
          {/* Logo and title */}
          <SchoolIcon sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            D.Y. Patil College of Engineering & Technology
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.label} component={Link} to={item.path} sx={{ color: '#fff' }}>
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer (appears in mobile view) */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
