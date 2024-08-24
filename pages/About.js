// src/pages/About.js
import React from "react";
import Layout from "../components/Layout";
import { Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <Container maxWidth="lg" style={{ padding: "4rem 0" }}>
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
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
              height: "auto", // Adjust height based on content
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
              Who We Are
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Growth Universe is a forward-thinking organization focused on
              empowering businesses through innovative solutions and strategic
              growth planning. Our team of experts is dedicated to providing the
              tools and insights needed for sustainable success in today's
              dynamic market environment.
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Our mission is to be the catalyst for positive change, helping our
              clients navigate the complexities of business and achieve their
              full potential. Whether it's through market analysis, strategic
              planning, or customer engagement, we are committed to delivering
              results that make a real impact.
            </Typography>
          </Paper>
        </motion.div>

        {/* Our Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem" }}
        >
          <Paper
            elevation={3}
            style={{
              padding: "2rem",
              backgroundColor: "#2c5282", // Darker blue background
              color: "#ffffff", // White text
              borderRadius: "8px",
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              At Growth Universe, we envision a world where businesses can
              thrive through continuous innovation and a deep understanding of
              market dynamics. Our vision is to lead the way in business growth
              strategies by staying ahead of the curve and delivering
              unparalleled value to our clients.
            </Typography>
          </Paper>
        </motion.div>

        {/* Our Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem" }}
        >
          <Paper
            elevation={3}
            style={{
              padding: "2rem",
              backgroundColor: "#3182ce", // Lighter blue background
              color: "#ffffff", // White text
              borderRadius: "8px",
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom>
              Our Values
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Integrity, innovation, and customer-centricity are at the core of
              everything we do. We believe in fostering long-term relationships
              with our clients by consistently delivering on our promises and
              exceeding expectations.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Layout>
  );
};

export default About;
