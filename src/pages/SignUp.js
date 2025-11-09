// import React, { useState } from 'react';
// import { Container, Typography, TextField, Button, Box } from '@mui/material';
// import axios from 'axios';

// function SignUp() {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/signup', form);
//       setMessage(res.data.message);
//     } catch (err) {
//       setMessage(err.response.data.error || 'Error occurred');
//     }
//   };

//   return (
//     <Container sx={{ mt: 4, maxWidth: 500 }}>
//       <Typography variant="h4" gutterBottom>
//         Sign Up
//       </Typography>
//       <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//         <TextField label="Name" name="name" variant="outlined" required onChange={handleChange} />
//         <TextField label="Email" name="email" type="email" variant="outlined" required onChange={handleChange} />
//         <TextField label="Password" name="password" type="password" variant="outlined" required onChange={handleChange} />
//         <Button variant="contained" color="primary" type="submit">Register</Button>
//       </Box>
//       {message && <Typography sx={{ mt: 2 }}>{message}</Typography>}
//     </Container>
//   );
// }

// export default SignUp;
import React, { useState } from 'react';
import {
  Container, TextField, Button, Typography, Box, MenuItem
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../api';

const departments = ['AIML', 'Chemical', 'Data Science', 'Computer', 'Civil', 'Mechanical'];
const years = ['First Year', 'Second Year', 'Third Year', 'Final Year'];

function SignUp() {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: '',
    mobile: '', department: '', year: '', gender: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      //await axios.post('http://localhost:5000/api/auth/signup', formData);
      await axios.post(`${API_URL}/api/auth/signin`, formData);
      alert('Registration successful! Please sign in.');
      navigate('/signin');
    } catch (err) {
      alert(err.response?.data?.message || 'Error signing up');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h4" color="primary" align="center" gutterBottom>
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Full Name" name="name" margin="normal" onChange={handleChange} required />
          <TextField fullWidth label="Email" name="email" type="email" margin="normal" onChange={handleChange} required />
          <TextField fullWidth label="Mobile Number" name="mobile" margin="normal" onChange={handleChange} />
          <TextField fullWidth select label="Department" name="department" margin="normal" onChange={handleChange}>
            {departments.map((dept) => <MenuItem key={dept} value={dept}>{dept}</MenuItem>)}
          </TextField>
          <TextField fullWidth select label="Year" name="year" margin="normal" onChange={handleChange}>
            {years.map((yr) => <MenuItem key={yr} value={yr}>{yr}</MenuItem>)}
          </TextField>
          <TextField fullWidth label="Gender" name="gender" margin="normal" onChange={handleChange} />
          <TextField fullWidth label="Password" name="password" type="password" margin="normal" onChange={handleChange} required />
          <TextField fullWidth label="Confirm Password" name="confirmPassword" type="password" margin="normal" onChange={handleChange} required />

          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
            Register
          </Button>
          <Typography align="center" sx={{ mt: 2 }}>
            Already have an account?{' '}
            <span
              onClick={() => navigate('/signin')}
              style={{ color: '#004A99', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Sign In
            </span>
          </Typography>
        </form>
      </Box>
    </Container>
  );
}


export default SignUp;
