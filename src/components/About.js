import React from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import profile from '../assets/profile.jpg';

const AboutSection = styled.section`
  background-color: #000000;
  padding: 100px;
  text-align: center;
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const Column = styled(AnimatePresence.div)`
  padding: 20px;
`;

const ProfileImage = styled(AnimatePresence.img)`
  width: 100%;
  max-width: 300px;
  border-radius: 50%;
  @media (min-width: 769px) {
    max-width: 400px;
  }
`;

const SectionSubtitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #fff; // Ensure good contrast for readability
`;

const About = () => {
  const motionSettings = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  return (
    <AboutSection id="about">
      <div className="container">
        <SectionTitle>About</SectionTitle>
        <Row>
          <Column {...motionSettings}>
            <ProfileImage
              src={profile}
              alt="Profile"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </Column>
          <Column {...motionSettings}>
            <SectionSubtitle>Who Am I?</SectionSubtitle>
            <AboutText>
              Hello! My name is Mandip Amgain and I'm a computer science student passionate about software development. I'm currently pursuing my BSc in Computer Science from [Your University] and looking for internship opportunities where I can apply and enhance my skills.
            </AboutText>
            <SectionSubtitle>My Skills</SectionSubtitle>
            <AboutText>
              I am proficient in JavaScript and Python, and I have experience with React for developing web applications. I'm always eager to learn new technologies and improve my skills. I've also been involved in several academic projects which you can check out in the Projects section.
            </AboutText>
          </Column>
        </Row>
      </div>
    </AboutSection>
  );
};

export default About;
