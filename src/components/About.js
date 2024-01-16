import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';

import googleCertBadge from '../assets/google_badge.png'; // Import Google IT Support badge image
import postmanCertBadge from '../assets/postman_badge.png'; // Import Postman API Fundamentals badge image


// Background fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const AboutSection = styled.section`
  background-color: #000000; // Changed to a softer black
  padding: 100px;
  text-align: center;
  animation: ${fadeIn} 2s ease-out;
  @media (max-width: 768px) {
    padding: 50px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: #03fffb;
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  max-width: 250px; // Adjusted for better layout
  border-radius: 50%;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #ccc; // Lighter gray for readability
`;

const BadgeImage = styled.img`
  width: 120px; // Adjust the size as needed
  height: auto;
  box-shadow: 0 5px 10px rgba(0,0,0,0.3); // Shadow for 3D effect
  transform: perspective(500px) rotateY(10deg); // 3D perspective
  border-radius: 5px;
  margin: 10px; // Space between badges
`;

const BadgesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const About = () => {
  return (
      <AboutSection id="about">
        <SectionTitle>About Me</SectionTitle>
        <ProfileImage
            src={profile}
            alt="Profile Picture"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
        />
<AboutText>
    Hello! I'm Mandip Amgain, a dedicated computer science student with a passion for software development. I hold an Associate in Science in Computer Science from Bunker Hill Community College and am currently pursuing a B.S. in Information Technology at Northeastern University. I'm seeking opportunities in software development with a special interest in artificial intelligence.
</AboutText>
      </AboutSection>
  );
};

export default About;
