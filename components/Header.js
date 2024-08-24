import React from "react";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";

const Header = () => {
  return (
    <header>
      <nav>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between", // Space between left and right groups
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#2c3e50", // Optional: set a background color for the header
          }}
        >
          {/* Left-aligned buttons */}
          <Box sx={{ display: "flex" }}>
            <Button
              component={Link}
              to="/"
              variant="contained"
              sx={{
                backgroundColor: "info", // Orange Red
                color: "#ffffff", // White text
                marginRight: "10px",
                "&:hover": {
                  backgroundColor: "#ff6347", // Lighter shade on hover
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/about"
              variant="contained"
              sx={{
                backgroundColor: "info", // Dark Orange
                color: "#ffffff", // White text
                marginRight: "10px",
                "&:hover": {
                  backgroundColor: "#ffa07a", // Lighter shade on hover
                },
              }}
            >
              About
            </Button>
          </Box>

          {/* Right-aligned button */}
          <Box>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{
                backgroundColor: "info",
                color: "#ffffff", // White text
                marginLeft: "auto",
                "&:hover": {
                  backgroundColor: "#ffa07a",
                  color: "#ffffff", // Lighter shade on hover
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </nav>
    </header>
  );
};

export default Header;
