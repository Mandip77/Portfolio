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
              Greetings, I am Mandip Amgain, a dedicated professional in the field of computer science and software development. Holding an Associate in Science in Computer Science from Bunker Hill Community College, I am currently enhancing my expertise with a Bachelor of Science in Information Technology at Northeastern University.

              My academic foundation is enriched with practical skills in software development, with a specialized focus on artificial intelligence. This expertise is backed by a strong proficiency in [mention specific skills or programming languages], developed through rigorous academic training and practical application.

              Throughout my career, I have engaged in [mention any significant projects or achievements], showcasing my ability for technical innovation, strategic problem-solving, and effective project execution. I am keenly interested in applying these skills in diverse professional settings, contributing to impactful technological advancements.

              I am actively seeking opportunities for freelancing and collaborations in the realm of software development. My objective is to engage in projects that challenge my skills and expand my horizons, especially those at the forefront of software development and artificial intelligence.

              I welcome the opportunity to collaborate with like-minded professionals and organizations on innovative projects. If you are seeking a committed, technically skilled, and forward-thinking professional for your next project, let’s connect and explore the possibilities of working together.
          </AboutText>

          <BadgesContainer>
              <BadgeImage src={googleCertBadge} alt="Google IT Support Badge" />
              <BadgeImage src={postmanCertBadge} alt="Postman API Fundamentals Badge" />
          </BadgesContainer>
      </AboutSection>
  );
};

export default About;
