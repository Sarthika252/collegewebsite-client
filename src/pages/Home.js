import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Box>
      {/* 🔹 Image Slider Section */}
      <Slider {...settings}>
        <Box>
          <img
            src="/images/contacts.jpg"
            alt="College Campus"
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          />
        </Box>
        <Box>
          <img
            src="/images/admission.jpg"
            alt="Admissions"
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          />
        </Box>
        <Box>
          <img
            src="/images/library.jpeg"
            alt="Library"
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          />
        </Box>
        <Box>
          <img
            src="/images/chemical.jpg"
            alt="Labs"
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          />
        </Box>
        <Box>
          <img
            src="/images/college.jpg"
            alt="Contact"
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          />
        </Box>
      </Slider>





    <Container sx={{ mt: 4 }}>
      <Box>
        {/* <img
          src="/images/college.jpg"
          alt="College Campus"
          style={{ width: '100%', borderRadius: 8 }}
        /> */}
        <Typography variant="h4" gutterBottom sx={{ mt: 3 }}>
          Welcome to D.Y. Patil College of Engineering & Technology, Kolhapur
        </Typography>
        <Typography variant="body1">
          Established with a mission to provide quality education, D.Y. Patil College of Engineering and Technology, Kasaba Bawada, Kolhapur,
          offers a range of undergraduate and postgraduate programs in engineering disciplines...
        </Typography>
      </Box>
    </Container>
    </Box>
  );
}

export default Home;
