// import React from 'react';
// import { Container, Typography, Grid, Card, CardContent, CardMedia} from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const departments = [
//   { name: 'Computer Science and Engineering', img: '/images/department1.jpg' },
//   { name: 'Mechanical Engineering', img: '/images/department2.jpg' },
//   { name: 'Electronics & Telecommunication', img: '/images/department3.jpg' },
//   { name: 'Civil Engineering', img: '/images/department4.jpg' },
// ];

// function Departments() {
//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Departments
//       </Typography>
//       <Grid container spacing={3} sx={{ mt: 2 }}>
//         {departments.map((dept, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image={dept.img}
//                 alt={dept.name}
//               />
//               <CardContent>
//                 <Typography variant="h6">{dept.name}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default Departments;
import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const departments = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    image: '/images/computer.jpg',
    desc: 'Comprehensive understanding of computer & software development.'
  },
  {
    id: 'aiml',
    name: 'Artificial Intelligence & Machine Learning',
    image: '/images/aiml.jpg',
    desc: 'Explore AI, ML, and Deep Learning with cutting-edge research.'
  },
  {
    id: 'chemical',
    name: 'Chemical Engineering',
    image: '/images/chemical.jpg',
    desc: 'Dedicated to innovations in chemical processes and evolution.'
  },
  {
    id: 'datascience',
    name: 'Data Science',
    image: '/images/datascience.jpeg',
    desc: 'Learn data analytics, big data, and predictive modeling.'
  },
  {
    id: 'entc',
    name: 'Electronics And Telecommunication',
    image: '/images/entc.png',
    desc: 'Focuses on designing and testing electronic systems, devices.'
  },
  {
    id: 'civil',
    name: 'Civil Engineering',
    image: '/images/civil.jpg',
    desc: 'Focuses on the design,construction, and maintenance of the physical environment.'
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    image: '/images/mechanical.jpg',
    desc: 'Design, development,and testing of mechanical systems.'
  },
];

function Departments() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom color="primary" align="center">
        Departments
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {departments.map((dept) => (
          <Grid item xs={12} sm={6} md={4} key={dept.id}>
            {/* <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="180"
                image={dept.image}
                alt={dept.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" color="primary">
                  {dept.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {dept.desc}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                  onClick={() => navigate(`/departments/${dept.id}`)}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card> */}
            <Card
  sx={{
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 3,
    boxShadow: 3,
  }}
>
  <CardMedia
    component="img"
    height="180"
    image={dept.image}
    alt={dept.name}
    sx={{ objectFit: 'cover' }}
  />
  <CardContent sx={{ flexGrow: 1 }}>
    <Typography gutterBottom variant="h6" color="primary">
      {dept.name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {dept.desc}
    </Typography>
  </CardContent>
  <Box sx={{ textAlign: 'center', mb: 2 }}>
    <Button
      variant="contained"
      color="primary"
      onClick={() => navigate(`/departments/${dept.id}`)}
    >
      Learn More
    </Button>
  </Box>
</Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Departments;