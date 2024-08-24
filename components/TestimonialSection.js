import React, { useState, useEffect } from "react";
import { Paper, Box, Typography, IconButton } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import testimonialImage1 from "../assets/testimonial-image1.jpg";
import testimonialImage2 from "../assets/testimonial-image2.jpg";
import testimonialImage3 from "../assets/testimonial-image3.jpg";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "“You have had such a remarkable impact on me. When I was going through a dark time, I remember how empathetic you were and how you helped me through it by letting me decide for myself instead of telling me what to do.”",
    name: "GUNJAN UMARJI",
    title: "Endocrinologist",
    image: testimonialImage1,
  },
  {
    quote:
      "“Your ability to see the good in every person, every idea, and everything is very impactful as a coach. Your warm presence and love for life often expand my thinking and let my mind run more freely.”",
    name: "DANIEL ELLIS",
    title: "Director of Marketing",
    image: testimonialImage2,
  },
  {
    quote:
      "“Progress over the ten weeks went from uncertain to complete clarity around achieving my life goals and the steps needed to achieve them, establishing clear action steps.”",
    name: "ANA RAFAELA",
    title: "Mindset Coach",
    image: testimonialImage3,
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  const handlePrev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{ marginTop: "4rem", marginBottom: "3rem", position: "relative" }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "2rem",
          display: "flex",
          backgroundColor: "#ffa07a", // Light Salmon
          color: "#ffffff", // White text
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <IconButton
          onClick={handlePrev}
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            color: "#ffffff",
          }}
        >
          <FaArrowLeft />
        </IconButton>
        <SwipeableViews
          index={index}
          onChangeIndex={handleChangeIndex}
          enableMouseEvents
        >
          {testimonials.map((testimonial, i) => (
            <Box
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                style={{
                  flex: "1",
                  padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{ borderRadius: "8px", width: "100%", height: "auto" }}
                />
              </Box>
              <Box
                style={{
                  flex: "2",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="body1" gutterBottom>
                  {testimonial.quote}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {testimonial.name}
                </Typography>
                <Typography variant="subtitle2">{testimonial.title}</Typography>
              </Box>
            </Box>
          ))}
        </SwipeableViews>
        <IconButton
          onClick={handleNext}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            color: "#ffffff",
          }}
        >
          <FaArrowRight />
        </IconButton>
      </Paper>
    </motion.div>
  );
};

export default TestimonialSection;
