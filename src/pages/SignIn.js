// import React, { useState } from 'react';
// import { Container, Typography, TextField, Button, Box } from '@mui/material';
// import axios from 'axios';

// function SignIn() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/signin', form);
//       setMessage(res.data.message);
//       localStorage.setItem('token', res.data.token);
//     } catch (err) {
//       setMessage(err.response.data.message || 'Error occurred');
//     }
//   };

//   return (
//     <Container sx={{ mt: 4, maxWidth: 500 }}>
//       <Typography variant="h4" gutterBottom>
//         Sign In
//       </Typography>
//       <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//         <TextField label="Email" name="email" type="email" variant="outlined" required onChange={handleChange} />
//         <TextField label="Password" name="password" type="password" variant="outlined" required onChange={handleChange} />
//         <Button variant="contained" color="primary" type="submit">Login</Button>
//       </Box>
//       {message && <Typography sx={{ mt: 2 }}>{message}</Typography>}
//     </Container>
//   );
// }

// export default SignIn;
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../api';

function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //await axios.post('http://localhost:5000/api/auth/signin', formData);
      await axios.post(`${API_URL}/api/auth/signin`, formData);
      alert('Login successful!');
     // setUser(response.data.user);
      //localStorage.setItem('user',JSON.stringify(response.data.user));
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Invalid credentials');
    }
  };
//    const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await axios.post("http://localhost:5000/api/auth/signin", formData);

//     // ✅ Check backend response properly
//     if (response.data && response.data.user) {
//       localStorage.setItem("user", JSON.stringify(response.data.user));
//       setUser(response.data.user);
//       alert("Login successful!");
//       navigate("/");
//     } else {
//       alert("Invalid credentials");
//     }
//   } catch (error) {
//     console.error("Login error:", error.response?.data || error.message);
//     alert("Invalid credentials");
//   }
// };
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h4" color="primary" align="center" gutterBottom>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Email" name="email" margin="normal" onChange={handleChange} required />
          <TextField fullWidth label="Password" name="password" type="password" margin="normal" onChange={handleChange} required />

          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
            Sign In
          </Button>

          <Typography align="center" sx={{ mt: 2 }}>
            Don’t have an account?{' '}
            <span
              onClick={() => navigate('/signup')}
              style={{ color: '#004A99', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Sign Up
            </span>
          </Typography>
        </form>
      </Box>
    </Container>
  );
}


export default SignIn;
