import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ExperienceSection = styled(motion.section)`
  background-color: ${({ theme }) => theme.body};
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 36px;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.accent};
  text-align: center;
`;

const TimelineContainer = styled.div`
  max-width: 800px;
  width: 100%;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background-color: ${({ theme }) => theme.cardBorder};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: ${({ position }) => (position === 'left' ? '0' : '50%')};

  @media (max-width: 768px) {
    left: 0;
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: -10px;
    background-color: ${({ theme }) => theme.body};
    border: 3px solid ${({ theme }) => theme.accent};
    top: 15px;
    border-radius: 50%;
    z-index: 1;

    ${({ position }) =>
    position === 'right' &&
    `
      left: -10px;
    `}

    @media (max-width: 768px) {
      left: 10px;
    }
  }
`;

const ContentBox = styled.div`
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.cardBg};
  position: relative;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(3, 255, 251, 0.1);
    border-color: ${({ theme }) => theme.accent};
  }
`;

const DateText = styled.span`
  color: #07d20d;
  font-size: 14px;
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  margin-bottom: 5px;
`;

const Subtitle = styled.h4`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 15px;
  line-height: 1.5;
`;

const experienceData = [
  {
    type: 'school',
    title: 'Northeastern University',
    subtitle: 'Bachelor of Science in Information Technology',
    date: '2023 - Present',
    description: 'Focusing on Systems Administration, Cloud Computing, and Software Development.',
  },
  {
    type: 'school',
    title: 'Bunker Hill Community College',
    subtitle: 'Associate in Science in Computer Science',
    date: 'Graduated 2023',
    description: 'Built a strong foundation in algorithms, data structures, and object-oriented programming (Java/C++).',
  },
  {
    type: 'certificate',
    title: 'Google IT Support',
    subtitle: 'Professional Certificate',
    date: 'Issued 2022',
    description: 'Comprehensive training in troubleshooting, customer service, networking, operating systems, and system administration.',
  },
  {
    type: 'certificate',
    title: 'Postman API Fundamentals',
    subtitle: 'Student Expert Certification',
    date: 'Issued 2023',
    description: 'Demonstrated proficiency in API testing, documentation, and automation using Postman.',
  },
];

function Experience() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    <ExperienceSection
      id="experience"
      ref={sectionRef}
      initial="hidden"
      animate={isSectionVisible ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="container" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SectionTitle variants={itemVariants}>Experience & Education</SectionTitle>
        <TimelineContainer>
          {experienceData.map((item, index) => (
            <TimelineItem
              key={index}
              position={index % 2 === 0 ? 'left' : 'right'}
              variants={itemVariants}
            >
              <ContentBox>
                <DateText>{item.date}</DateText>
                <Title>{item.title}</Title>
                <Subtitle>{item.subtitle}</Subtitle>
                <Description>{item.description}</Description>
              </ContentBox>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </div>
    </ExperienceSection>
  );
}

export default Experience;
