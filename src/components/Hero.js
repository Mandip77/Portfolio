import React from 'react';
import styled from 'styled-components';

import backgroundVideo from '../assets/video (2160p).mp4';

const HeroSection = styled.section`
  position: relative;
  padding: 100px;
  text-align: center;
  overflow: hidden; // Ensure video doesn't overflow section boundaries
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; // Full viewport height
`;

const HeroVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.7; // Adjusted opacity for better text readability
`;

const HeroContainer = styled.div`
  position: relative;
  z-index: 2; // Ensuring text is above the video
  max-width: 800px; // Restricting width for better readability
  margin: 0 auto;
`;

const HeroTitle = styled.h1` // Changed to h1 for better SEO
  font-size: 3rem; // Responsive font size
  color: #fff;
  margin-bottom: 1rem;
`;

const HeroDescription = styled.p`
  font-size: 1.5rem; // Responsive font size
  color: #fff;
  margin-bottom: 2rem;
`;

const HeroButton = styled.a`
  display: inline-block;
  background-color: #07d8db;
  color: #fff;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  font-size: 1rem;

  &:hover {
    background-color: #04c3c5;
  }
`;

function Hero() {
  return (
    <HeroSection>
      <HeroVideo src={backgroundVideo} autoPlay loop muted playsInline />
      <HeroContainer>
        <HeroTitle>Welcome to My Website</HeroTitle>
        <HeroDescription>Learn about my skills and projects.</HeroDescription>
        <HeroButton href="#projects">Get Started</HeroButton>
      </HeroContainer>
    </HeroSection>
  );
}

export default Hero;
