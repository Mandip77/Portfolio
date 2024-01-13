import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';

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

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Column = styled(motion.div)`
  flex: 1;
  min-width: 300px;
  padding: 20px;
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  max-width: 250px; // Adjusted for better layout
  border-radius: 50%;
  margin-bottom: 20px;
`;

const SectionSubtitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #ccc; // Lighter gray for readability
`;

const About = () => {
  const motionSettings = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  return (
      <AboutSection id="about">
        <SectionTitle>About Me</SectionTitle>
        <Row>
          <Column {...motionSettings}>
            <ProfileImage
                src={profile}
                alt="Profile"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            />
            <SectionSubtitle>Who Am I?</SectionSubtitle>
            <AboutText>
              Hello! I'm Mandip Amgain, a dedicated computer science student with a passion for software development. Currently pursuing my BSc in Computer Science, I'm seeking opportunities to apply and grow my skills in real-world scenarios.
            </AboutText>
          </Column>
          <Column {...motionSettings}>
            <SectionSubtitle>My Skills</SectionSubtitle>
            <AboutText>
              With proficiency in JavaScript and Python, I specialize in developing web applications using React. I'm constantly exploring new technologies and applying them to my projects, some of which are showcased in my portfolio.
            </AboutText>
            <SectionSubtitle>My Journey</SectionSubtitle>
            <AboutText>
              My journey in tech started with curiosity and has evolved through hands-on project experience, academic learning, and self-driven exploration of programming concepts and technologies.
            </AboutText>
          </Column>
        </Row>
      </AboutSection>
  );
};

export default About;
