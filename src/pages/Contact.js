import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

function Contact() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Box sx={{ mb: 3 }}>
        <img
          src="/images/contacts.jpg"
          alt="Contact"
          style={{ width: '100%', borderRadius: 8 , height:"50vh", objectFit:"cover" }}
        />
      </Box>
      <Typography variant="body1" paragraph>
        For any inquiries, please fill the form below or contact us at:
      </Typography>
      <Typography variant="body1" paragraph>
        📧 Email: info@dypatilcollege.edu.in <br />
        📞 Phone: +91-231-1234567 <br />
        🏢 Address: Kasaba Bawada, Kolhapur, Maharashtra, India
      </Typography>
      <Box component="form" sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Name" variant="outlined" required />
        <TextField label="Email" variant="outlined" required type="email" />
        <TextField label="Message" variant="outlined" required multiline rows={4} />
        <Button variant="contained" color="primary">Send Message</Button>
      </Box>
    </Container>
  );
}

export default Contact;
