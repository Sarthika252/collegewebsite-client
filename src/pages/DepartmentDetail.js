import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

const departmentDetails = {
     cse: {
    title: 'Computer Science & Engineering',
    image: '/images/computer.jpg',
    content: `
      The CSE department provides a comprehensive understanding of computer systems, software development, 
      and the theoretical foundations of computing.The curriculum covers core subjects such as programming 
      languages, data structures, and algorithms.
    `
  },
  chemical: {
    title: 'Chemical Engineering',
    image: '/images/chemical.jpg',
    content: `
      The Chemical Engineering Department imparts knowledge of process design,thermodynamics, and 
      environmental safety.It emphasizes sustainable and green technologies.Chemical engineers play a crucial 
      role in addressing challenges like developing sustainable energy sources and controlling pollution.
    `
  },
  datascience: {
    title: 'Data Science',
    image: '/images/datascience.jpeg',
    content: `
      The Data Science Department trains students in Python, R, SQL, and visualization tools.
      It emphasizes data-driven decision-making and machine learning model deployment.
    `
  },
  aiml: {
    title: 'Artificial Intelligence & Machine Learning',
    image: '/images/aiml.jpg',
    content: `
      The Department of AIML focuses on modern technologies such as AI, Deep Learning,and Data Mining.
      Students work on intelligent systems, NLP, and real-world AI applications.It has advanced labs and
      collaborations with tech industries. Graduates can work on developing expert systems, natural language
       processing applications, and autonomous vehicles.
    `
  },
  civil: {
    title: 'Civil Engineering',
    image: '/images/civil.jpg',
    content: `
      Civil engineering focuses on the design, construction, and maintenance of the physical environment,
      including infrastructure projects like roads, bridges, and buildings.The discipline involves structural, 
      environmental, and transportation engineering.
    `
  },
  entc: {
    title: 'Electronics and Telecommunications',
    image: '/images/entc.png',
    content: `
      ENTC engineering focuses on designing and testing electronic systems, devices,and communication products.Key areas of study include communication, integrated circuits, and signal processing. 
      ENTC engineers have diverse career opportunities in telecommunications and consumer electronics.
    `
  },
  mechanical: {
    title: 'Mechanical Engineering',
    image: '/images/mechanical.jpg',
    content: `
      Mechanical engineering is a broad discipline dealing with the design, development, and testing of mechanical systems.This field encompasses areas such as robotics and automotive engineering. 
      Mechanical engineers design various systems, applying principles of motion, energy, and force.
    `
  },
};

function DepartmentDetail() {
  const { id } = useParams();
  const dept = departmentDetails[id];

  if (!dept) return <Typography variant="h6" align="center">Department not found.</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Card sx={{ borderRadius: 3, boxShadow: 3, maxWidth: 800, mx: 'auto' }}>
        <CardMedia component="img" height="300" image={dept.image} alt={dept.title} />
        <CardContent>
          <Typography variant="h4" color="primary" gutterBottom>
            {dept.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
            {dept.content}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default DepartmentDetail;