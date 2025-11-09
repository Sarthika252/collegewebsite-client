// import React from 'react';
// import { Box, Typography } from '@mui/material';

// function Footer() {
//   return (
//     <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 2, textAlign: 'center' }}>
//       <Typography variant="body2">
//         © {new Date().getFullYear()} D.Y. Patil College of Engineering & Technology, Kolhapur
//       </Typography>
//       <Typography variant="body2">All Rights Reserved</Typography>
//     </Box>
//   );
// }

// export default Footer;
import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: '#0A2472', color: 'white', textAlign: 'center', py: 3, mt: 4 }}>
      <Typography variant="body1" sx={{ fontWeight: 500 }}>
        D.Y. Patil College of Engineering & Technology, Kolhapur
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Kasaba Bawada, Kolhapur – Maharashtra, India
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        © {new Date().getFullYear()} All Rights Reserved
      </Typography>
    </Box>
  );
}

export default Footer;