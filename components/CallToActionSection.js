import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
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
          backgroundColor: "#ff4500", // Orange Red
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
          color="info"
          style={{ textDecoration: "none" }}
        >
          Contact Us
        </Button>
      </Paper>
    </motion.div>
  );
};

export default CallToActionSection;
