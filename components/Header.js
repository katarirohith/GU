// src/components/Header.js
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
              color="primary"
              sx={{ marginRight: "10px" }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/about"
              variant="contained"
              color="primary"
              sx={{ marginRight: "10px" }}
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
              color="primary"
              sx={{ marginLeft: "auto" }}
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
