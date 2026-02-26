import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

import googleCertBadge from '../assets/google_badge.png'; // Import Google IT Support badge image
import postmanCertBadge from '../assets/postman_badge.png'; // Import Postman API Fundamentals badge image

const AboutSection = styled(motion.section)`
  background-color: ${({ theme }) => theme.body};
  padding: 100px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 32px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 36px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.accent};
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  max-width: 250px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const AboutText = styled(motion.p)`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.secondaryText};
`;

const BadgeImage = styled.img`
  width: 120px; /* Adjust the size as needed */
  height: auto;
  box-shadow: 0 5px 10px rgba(0,0,0,0.3); /* Shadow for 3D effect */
  transform: perspective(500px) rotateY(0deg);
  border-radius: 5px;
  margin: 10px; /* Space between badges */
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover,
  &:focus-visible {
    transform: perspective(500px) rotateY(10deg) translateY(-4px);
    box-shadow: 0 10px 18px rgba(0,0,0,0.35);
  }
`;

const BadgesContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const About = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <AboutSection
      id="about"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isSectionVisible ? "visible" : "hidden"}
    >
      <SectionTitle variants={itemVariants}>About Me</SectionTitle>
      <ProfileImage
        src={profile}
        alt="Profile Picture"
        loading="lazy"
        decoding="async"
        variants={itemVariants}
      />
      <AboutText variants={itemVariants}>
        Hello! I'm Mandip Amgain, a dedicated software engineer specializing in secure application development and AI integration. With a strong foundation in Computer Science and an ongoing B.S. in Information Technology at Northeastern University, I build resilient systems, innovative gamification engines, and LLM-powered tools. I am passionate about pushing the boundaries of what's possible at the intersection of Cybersecurity, Artificial Intelligence, and scalable web architecture.
      </AboutText>
      <BadgesContainer variants={itemVariants}>
        <BadgeImage src={googleCertBadge} alt="Google IT Support Badge" loading="lazy" decoding="async" />
        <BadgeImage src={postmanCertBadge} alt="Postman API Fundamentals Badge" loading="lazy" decoding="async" />
      </BadgesContainer>
    </AboutSection>
  );
};

export default About;
