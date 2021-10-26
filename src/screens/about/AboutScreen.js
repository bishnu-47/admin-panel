import { Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer.js";
import "./aboutScreen.scss";

const AboutScreen = () => {
  return (
    <div className="aboutScreen">
      <Navbar />
      <Container maxWidth="md" className="aboutContainer">
        <Typography variant="h4" align="center" gutterBottom>
          About
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          <span>This project was created as an assignment for </span>
          <a href="https://botbaba.io/" target="_blank">
            botbaba.io
          </a>
          .
        </Typography>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutScreen;
