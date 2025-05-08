import React from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundVideo from '../assets/video (2160p).mp4';
// Fade-in animation
const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

// Hero section styling
const HeroSection = styled.section`
    position: relative;
    padding: 100px;
    text-align: center;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    animation: ${fadeIn} 1.5s ease-out;
`;

// Background video styling
const HeroVideo = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0.7;
`;

// Content container styling
const HeroContainer = styled.div`
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
`;

// Title styling
const HeroTitle = styled.h1`
    font-size: 3rem;
    color: #fff;
    margin-bottom: 1rem;
    font-weight: 600;
`;

// Description styling
const HeroDescription = styled.p`
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 2rem;
`;

// Button styling
const HeroButton = styled.a`
  display: inline-block;
  background-color: #07d8db;
  color: #fff;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  &:hover {
    background-color: #04c3c5;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

function Hero() {
    const resumeLink = "/Resume.pdf"; // Ensure the resume is in the public folder

    return (
        <HeroSection>
            <HeroVideo src={backgroundVideo} autoPlay loop muted playsInline />
            <HeroContainer>
                <HeroTitle>Welcome to My Website</HeroTitle>
                <HeroDescription>Learn about my skills and projects.</HeroDescription>
                <HeroButton href={resumeLink} download="Mandip's_Resume">
                    Download My Resume
                </HeroButton>
            </HeroContainer>
        </HeroSection>
    );
}

export default Hero;
