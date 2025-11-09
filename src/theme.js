import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A2472', 
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: '#212121',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: 'Poppins, Roboto, sans-serif',
    h4: {
      fontWeight: 600,
      color: '#004A99s',
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.8,
    },
  },
});

export default theme;