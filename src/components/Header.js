// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
// import { Link } from 'react-router-dom';
// import SchoolIcon from '@mui/icons-material/School';
// import Navbar from './Navbar';

// function Header() {
//     return <Navbar />
// //   return (
// //     <AppBar position="static" color="primary">
// //       <Toolbar>
// //         <SchoolIcon sx={{ mr: 2 }} />
// //         <Typography variant="h6" sx={{ flexGrow: 1 }}>
// //           D.Y. Patil College of Engineering & Technology, Kolhapur
// //         </Typography>
// //         <Box>
// //           <Button color="inherit" component={Link} to="/">Home</Button>
// //           <Button color="inherit" component={Link} to="/admission">Admission</Button>
// //           <Button color="inherit" component={Link} to="/departments">Departments</Button>
// //           <Button color="inherit" component={Link} to="/contact">Contact</Button>
// //           <Button color="inherit" component={Link} to="/signin">Sign In</Button>
// //         </Box>
// //       </Toolbar>
// //     </AppBar>
// //   );
// }
// export default Header;




import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Place COEK logo in /src/assets/

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Admission', path: '/admission' },
  { label: 'Departments', path: '/departments' },
  { label: 'Contact', path: '/contact' },
  { label: 'Sign In', path: '/signin' },
 // {label : 'Sign Up', path: '/signup'},
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: '#0A2472' }}>
        D.Y. Patil College
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.label} component={Link} to={item.path}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: '#0A2472', color: '#ffffff', boxShadow: 2 }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img src={logo} alt="DY Patil Logo" style={{ height: 50, marginRight: 10 }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                D.Y. Patil College of Engineering & Technology
              </Typography>
              <Typography variant="body2">
                Kasaba Bawada, Kolhapur
              </Typography>
            </Box>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: '#ffffff',
                  fontWeight: 600,
                  mx: 1,
                  '&:hover': { bgcolor: '#0A2472', color: '#fff' },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
}

export default Header;







// import React, { useState, useEffect } from 'react';
// import {
//   AppBar, Toolbar, Typography, Button, IconButton, Drawer,
//   List, ListItem, ListItemText, Box
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import SchoolIcon from '@mui/icons-material/School';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.png';

// function Header({ user, setUser}) {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   //const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   const storedUser = localStorage.getItem('user');
//   //   if (storedUser) setUser(JSON.parse(storedUser));
//   // }, []);
//   useEffect(() => {
//   const storedUser = localStorage.getItem('user');
//   if (storedUser) {
//     try {
//       setUser(JSON.parse(storedUser));
//     } catch (err) {
//       console.error("Invalid user JSON in localStorage:", err);
//       localStorage.removeItem('user'); // remove corrupted data
//     }
//   }
// }, []);

//   const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//     navigate('/signin');
//   };

//   const navItems = [
//     { label: 'Home', path: '/' },
//     { label: 'Admission', path: '/admission' },
//     { label: 'Departments', path: '/departments' },
//     { label: 'Contact', path: '/contact' },
//   ];

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         D.Y. Patil College
//       </Typography>
//       <List>
//         {navItems.map((item) => (
//           <ListItem button key={item.label} component={Link} to={item.path}>
//             <ListItemText primary={item.label} />
//           </ListItem>
//         ))}
//         {user ? (
//           <ListItem button onClick={handleLogout}>
//             <ListItemText primary="Logout" />
//           </ListItem>
//         ) : (
//           <ListItem button component={Link} to="/signin">
//             <ListItemText primary="Sign In" />
//           </ListItem>
//         )}
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       {/* <AppBar position="static" color="primary">
//         <Toolbar>
//           <SchoolIcon sx={{ mr: 2 }} />
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             D.Y. Patil College of Engineering & Technology
//           </Typography> */}
//            <AppBar position="static" sx={{ bgcolor: '#0A2472', color: '#ffffff', boxShadow: 2 }}>
//          <Toolbar>
//           <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
//              <img src={logo} alt="DY Patil Logo" style={{ height: 50, marginRight: 10 }} />
//              <Box>
//                <Typography variant="h6" sx={{ fontWeight: 700 }}>
//                  D.Y. Patil College of Engineering & Technology
//                </Typography>
//                <Typography variant="body2">
//                 Kasaba Bawada, Kolhapur
//                </Typography>
//              </Box>
//            </Box>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button key={item.label} component={Link} to={item.path} sx={{ color: '#fff' }}>
//                 {item.label}
//               </Button>
//             ))}
//             {user ? (
//               <>
//                 <Typography variant="body1" sx={{ display: 'inline', mx: 2 }}>
//                   Hello, {user.name.split(' ')[0]}
//                 </Typography>
//                 <Button color="inherit" onClick={handleLogout}>
//                   Logout
//                 </Button>
//               </>
//             ) : (
//               <Button component={Link} to="/signin" sx={{ color: '#fff' }}>
//                 Sign In
//               </Button>
//             )}
//           </Box>

//           <IconButton color="inherit" edge="end" onClick={handleDrawerToggle} sx={{ display: { sm: 'none' } }}>
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
//         {drawer}
//       </Drawer>
//     </>
//   );
// }

// export default Header;