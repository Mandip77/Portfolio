import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

import javaIcon from '../assets/java-svgrepo-com.svg';
import pythonIcon from '../assets/python.png';
import htmlIcon from '../assets/html-5-svgrepo-com.svg';
import cssIcon from '../assets/css-3-svgrepo-com.svg';
import jsIcon from '../assets/js-svgrepo-com.svg';
import mysqlIcon from '../assets/sql-server-icon-png-11359.png';
import kotlinIcon from '../assets/kotlin.svg';
import firebaseIcon from '../assets/firebase.svg';
import reactIcon from '../assets/react.svg';
import postmanIcon from '../assets/postman.svg';

const TechStackSection = styled(motion.section)`
  background-color: ${({ theme }) => theme.body};
  padding: 100px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 36px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.accent};
`;

const TechStackList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
`;

const TechItem = styled(motion.div)`
  width: 200px;
  margin: 10px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.cardBg};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TechIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const TechName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const TechProgress = styled.div`
  height: 10px;
  background-color: ${({ theme }) => theme.cardBorder};
  border-radius: 4px;
  overflow: hidden;
`;

const TechBar = styled(motion.div)`
  height: 100%;
  background-color: ${({ theme }) => theme.accent};
  border-radius: 4px;
`;

const skills = [
  { name: 'Java', icon: javaIcon, progress: 90 },
  { name: 'Python', icon: pythonIcon, progress: 60 },
  { name: 'HTML', icon: htmlIcon, progress: 80 },
  { name: 'CSS', icon: cssIcon, progress: 80 },
  { name: 'JavaScript', icon: jsIcon, progress: 50 },
  { name: 'MySQL', icon: mysqlIcon, progress: 75 },
  { name: 'Kotlin', icon: kotlinIcon, progress: 70 },
  { name: 'Firebase', icon: firebaseIcon, progress: 80 },
  { name: 'React', icon: reactIcon, progress: 50 },
  { name: 'Postman', icon: postmanIcon, progress: 70 },
];

function TechStack() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const [animatedProgress, setAnimatedProgress] = useState({});

  useEffect(() => {
    if (isSectionVisible) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedProgress(prev => ({
            ...prev,
            [skill.name]: skill.progress,
          }));
        }, index * 100);
      });
    }
  }, [isSectionVisible]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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
    <TechStackSection
      id="skills"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isSectionVisible ? "visible" : "hidden"}
    >
      <div className="container">
        <SectionTitle variants={itemVariants}>Tech Stack</SectionTitle>
        <TechStackList variants={containerVariants}>
          {skills.map((skill) => (
            <TechItem key={skill.name} variants={itemVariants}>
              <TechIcon src={skill.icon} alt={skill.name} loading="lazy" decoding="async" />
              <TechName>{skill.name}</TechName>
              <TechProgress>
                <TechBar
                  initial={{ width: 0 }}
                  animate={{ width: `${animatedProgress[skill.name] || 0}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </TechProgress>
            </TechItem>
          ))}
        </TechStackList>
      </div>
    </TechStackSection>
  );
}

export default TechStack;
