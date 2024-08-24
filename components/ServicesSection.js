import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import BusinessIcon from "@mui/icons-material/Business";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";

const ServicesSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{ marginTop: "4rem", marginBottom: "3rem" }}
    >
      <Typography variant="h4" component="h2" gutterBottom textAlign="center">
        Our Services
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            onClick={() => alert("Coming Soon")}
            style={{
              padding: "2rem",
              textAlign: "center",
              backgroundColor: "#ff4500", // Orange Red
              color: "#ffffff", // White text
              borderRadius: "8px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <BusinessIcon sx={{ fontSize: 50, color: "#fff" }} />
            <Typography variant="h6" component="h3">
              Business Consultation
            </Typography>
            <Typography variant="body2">
              Expert advice to help you navigate the complexities of business.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            onClick={() => alert("Coming Soon")}
            style={{
              padding: "2rem",
              textAlign: "center",
              backgroundColor: "#ff6347", // Tomato Red
              color: "#ffffff", // White text
              borderRadius: "8px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              cursor: "pointer",
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
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            onClick={() => alert("Coming Soon")}
            style={{
              padding: "2rem",
              textAlign: "center",
              backgroundColor: "#ff8c00", // Dark Orange
              color: "#ffffff", // White text
              borderRadius: "8px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              cursor: "pointer",
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
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            onClick={() => alert("Coming Soon")}
            style={{
              padding: "2rem",
              textAlign: "center",
              backgroundColor: "#ffd700", // Gold
              color: "#ffffff", // White text
              borderRadius: "8px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              cursor: "pointer",
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
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default ServicesSection;
