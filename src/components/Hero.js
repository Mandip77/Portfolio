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
    z-index: -2;
    opacity: 0.6;
`;

// Overlay for better text readability
const VideoOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
    z-index: -1;
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

// Cyber glow button styling
const CyberButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: #07d8db;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid #07d8db;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  box-shadow: 0 0 10px rgba(7, 216, 219, 0.2), inset 0 0 10px rgba(7, 216, 219, 0.1);

  &:hover {
    background-color: rgba(7, 216, 219, 0.1);
    box-shadow: 0 0 20px rgba(7, 216, 219, 0.5), inset 0 0 15px rgba(7, 216, 219, 0.3);
    text-shadow: 0 0 8px #07d8db;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

function Hero() {
    const resumeLink = process.env.PUBLIC_URL + "/Resume.pdf"; // Use PUBLIC_URL for correct path

    return (
        <HeroSection>
            <HeroVideo
                src={backgroundVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="Background video"
            />
            <VideoOverlay />
            <HeroContainer>
                <HeroTitle className="terminal-text" style={{ display: 'inline-block' }}>&gt; Hi, I'm Mandip Amgain_</HeroTitle>
                <HeroDescription>IT & Cybersecurity Professional. Passionate about defending digital infrastructure, actively pursuing entry-level roles to build a foundation for a career in Penetration Testing.</HeroDescription>
                <ButtonContainer>
                    <HeroButton href={resumeLink} download="Mandip_Amgain_Resume.pdf" aria-label="Download resume">
                        Download My Resume
                    </HeroButton>
                    <CyberButton href="https://Mandip77.github.io/cyber-blog/" target="_blank" rel="noopener noreferrer" aria-label="Visit Cybersecurity Research Lab">
                        Cyber Research Lab
                    </CyberButton>
                </ButtonContainer>
            </HeroContainer>
        </HeroSection>
    );
}

export default Hero;
