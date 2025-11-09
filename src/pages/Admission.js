import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

function Admission() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admission Process
      </Typography>
      <Box sx={{ mb: 3 }}>
        <img
          src="/images/admission.jpg"
          alt="Admission"
          style={{ width: '100%', borderRadius: 8 }}
        />
      </Box>
      <Typography variant="body1" paragraph>
        D.Y. Patil College of Engineering & Technology, Kolhapur offers admission to undergraduate and postgraduate programs
        based on merit, entrance exams, and management quota. The college follows a transparent admission procedure ensuring
        quality and fairness.
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Steps for Admission:
      </Typography>
      <ul>
        <li>Check eligibility criteria for the chosen program.</li>
        <li>Fill online application form.</li>
        <li>Submit required documents (marksheets, certificates, etc.).</li>
        <li>Attend counseling and entrance exams if applicable.</li>
        <li>Complete fee payment to confirm admission.</li>
      </ul>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Apply Now
      </Button>
    </Container>
  );
}

export default Admission;
