import React from "react";
import { Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const HeroSection = () => {
  return (
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
          borderRadius: "8px",
          backgroundColor: "#ff4500", // Orange Red
          color: "#ffffff", // White text
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
      </Paper>
    </motion.div>
  );
};

export default HeroSection;
