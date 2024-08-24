// src/pages/Home.js
import React from "react";
import Layout from "../components/Layout";
import { Container, Typography, Grid, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import BusinessIcon from "@mui/icons-material/Business";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";

const Home = () => {
  return (
    <Layout>
      <Container maxWidth="lg" style={{ padding: "4rem 0" }}>
        {/* Hero Section as a Tile */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem" }}
        >
          <Paper
            elevation={3}
            style={{
              padding: "2rem",
              textAlign: "center",
              backgroundColor: "#1e3a8a", // Navy blue background
              color: "#ffffff", // White text
              borderRadius: "8px",
              height: "400px", // Fixed height
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt="Growth Universe Logo"
              style={{ width: "150px", height: "auto", marginBottom: "1rem" }}
            />
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to Growth Universe
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
              Empowering businesses to reach their full potential.
            </Typography>
            <Typography variant="subtitle1" component="p" gutterBottom>
              Your partner in sustainable growth and innovation.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/about"
              style={{ textDecoration: "none" }}
            >
              Learn More
            </Button>
          </Paper>
        </motion.div>

        {/* Mission Section as a Tile */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{ marginTop: "4rem" }}
        >
          <Paper
            elevation={3}
            style={{
              padding: "2rem",
              textAlign: "center",
              backgroundColor: "#e2e8f0", // Light grey background
              color: "#1e3a8a", // Navy blue text
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              At Growth Universe, our mission is to provide innovative solutions
              that drive growth and success for businesses of all sizes. We
              believe in a future where businesses can thrive through
              innovation, sustainability, and customer-centric strategies. Our
              dedicated team is committed to helping you navigate the
              complexities of business, ensuring long-term success.
            </Typography>
          </Paper>
        </motion.div>

        {/* Services Section as Tiles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ marginTop: "4rem", marginBottom: "3rem" }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            textAlign="center"
          >
            Our Services
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Link
                to="/services/business-consultation"
                style={{ textDecoration: "none" }} // Removing underline
              >
                <Paper
                  elevation={3}
                  style={{
                    padding: "2rem",
                    textAlign: "center",
                    backgroundColor: "#e53e3e", // Red background
                    color: "#ffffff", // White text
                    borderRadius: "8px",
                    height: "300px", // Uniform height
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <BusinessIcon sx={{ fontSize: 50, color: "#fff" }} />
                  <Typography variant="h6" component="h3">
                    Business Consultation
                  </Typography>
                  <Typography variant="body2">
                    Expert advice to help you navigate the complexities of
                    business.
                  </Typography>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Link
                to="/services/market-analysis"
                style={{ textDecoration: "none" }} // Removing underline
              >
                <Paper
                  elevation={3}
                  style={{
                    padding: "2rem",
                    textAlign: "center",
                    backgroundColor: "#3182ce", // Blue background
                    color: "#ffffff", // White text
                    borderRadius: "8px",
                    height: "300px", // Uniform height
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <AssessmentIcon sx={{ fontSize: 50, color: "#fff" }} />
                  <Typography variant="h6" component="h3">
                    Market Analysis
                  </Typography>
                  <Typography variant="body2">
                    In-depth market research to give you a competitive edge.
                  </Typography>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Link
                to="/services/growth-strategy"
                style={{ textDecoration: "none" }} // Removing underline
              >
                <Paper
                  elevation={3}
                  style={{
                    padding: "2rem",
                    textAlign: "center",
                    backgroundColor: "#38a169", // Green background
                    color: "#ffffff", // White text
                    borderRadius: "8px",
                    height: "300px", // Uniform height
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <TrendingUpIcon sx={{ fontSize: 50, color: "#fff" }} />
                  <Typography variant="h6" component="h3">
                    Growth Strategy Planning
                  </Typography>
                  <Typography variant="body2">
                    Strategic planning to ensure sustainable growth.
                  </Typography>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Link
                to="/services/customer-engagement"
                style={{ textDecoration: "none" }} // Removing underline
              >
                <Paper
                  elevation={3}
                  style={{
                    padding: "2rem",
                    textAlign: "center",
                    backgroundColor: "#805ad5", // Purple background
                    color: "#ffffff", // White text
                    borderRadius: "8px",
                    height: "300px", // Uniform height
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <PeopleIcon sx={{ fontSize: 50, color: "#fff" }} />
                  <Typography variant="h6" component="h3">
                    Customer Engagement Solutions
                  </Typography>
                  <Typography variant="body2">
                    Tools and strategies to engage and retain your customers.
                  </Typography>
                </Paper>
              </Link>
            </Grid>
          </Grid>
        </motion.div>

        {/* Call to Action Section as a Tile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ marginTop: "4rem" }}
        >
          <Paper
            elevation={3}
            style={{
              padding: "2rem",
              textAlign: "center",
              backgroundColor: "#1e3a8a", // Navy blue background
              color: "#ffffff", // White text
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" component="p" gutterBottom>
              Ready to take your business to the next level?
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/contact"
              style={{ textDecoration: "none" }} // Removing underline
            >
              Contact Us
            </Button>
          </Paper>
        </motion.div>
      </Container>
    </Layout>
  );
};

export default Home;
