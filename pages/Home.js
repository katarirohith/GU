import React from "react";
import Layout from "../components/Layout";
import { Container } from "@mui/material";
import HeroSection from "../components/HeroSection";
import MissionSection from "../components/MissionSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialSection from "../components/TestimonialSection";
import CallToActionSection from "../components/CallToActionSection";

const Home = () => {
  return (
    <Layout>
      <Container
        maxWidth="lg"
        style={{ padding: "4rem 0", backgroundColor: "#ffefd5" }}
      >
        <HeroSection />
        <MissionSection />
        <ServicesSection />
        <TestimonialSection />
        <CallToActionSection />
      </Container>
    </Layout>
  );
};

export default Home;
