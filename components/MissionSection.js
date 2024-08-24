import React from "react";
import { Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MissionSection = () => {
  return (
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
          borderRadius: "8px",
          backgroundColor: "#ff8c00", // Dark Orange
          color: "#ffffff", // White text
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
          that drive growth and success for businesses of all sizes. We believe
          in a future where businesses can thrive through innovation,
          sustainability, and customer-centric strategies. Our dedicated team is
          committed to helping you navigate the complexities of business,
          ensuring long-term success.
        </Typography>
      </Paper>
    </motion.div>
  );
};

export default MissionSection;
