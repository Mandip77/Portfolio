import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import textEditorGif from '../assets/text_editor.gif';
import superBudgetAnimation from '../assets/SuperBudget_Animation.webp';

const ProjectsSection = styled(motion.section)`
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

const ProjectsList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  justify-items: center;
  margin-bottom: 50px;
`;

const Project = styled(motion.div)`
  max-width: 300px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.cardBg};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(3, 255, 251, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectDetails = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.secondaryText};
`;

const ProjectLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid ${({ theme }) => theme.accent};
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.buttonText || '#000'};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(3, 255, 251, 0.3);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.accent};
    outline-offset: 2px;
  }
`;

const projects = [
  {
    title: 'Budget Management',
    description: 'Spring Boot web app for creating budget categories, tracking allocations, transactions, and visualizing spending in an interactive dashboard.',
    image: superBudgetAnimation,
    githubUrl: 'https://github.com/Mandip77/Budget_Management',
    imageAlt: 'Budget Management',
  },
   {
    title: 'Simple Text Editor',
    description: 'Lightweight Java Swing text editor with open/save, cut/copy/paste and custom formatting.',
    image: textEditorGif,
    githubUrl: 'https://github.com/Mandip77/Simple-TextEditor-Java',
    imageAlt: 'Text Editor Demo',
  },
];

function Projects() {
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <ProjectsSection
      id="projects"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isSectionVisible ? "visible" : "hidden"}
    >
      <div className="container">
        <SectionTitle variants={itemVariants}>Projects</SectionTitle>
        <ProjectsList variants={containerVariants}>
          {projects.map((project) => (
            <Project key={project.title} variants={itemVariants}>
              <ProjectImage
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
              />
              <ProjectDetails>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>
                  {project.description}
                </ProjectDescription>
                <ProjectLink
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} project on GitHub`}
                >
                  View on GitHub
                </ProjectLink>
              </ProjectDetails>
            </Project>
          ))}
        </ProjectsList>
      </div>
    </ProjectsSection>
  );
}

export default Projects;
