import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Section = styled(motion.section)`
  background-color: ${({ theme }) => theme.body};
  padding: 100px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 36px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.accent};
`;

const SectionIntro = styled(motion.p)`
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto 50px;
  color: ${({ theme }) => theme.secondaryText};
  line-height: 1.6;
`;

const WorkflowHighlight = styled.span`
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 30px;
  justify-items: center;
  margin-bottom: 50px;
`;

const Card = styled(motion.div)`
  max-width: 400px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.cardBg};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  text-align: left;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(3, 255, 251, 0.2);
  }
`;

const CardHeader = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.cardBg}; /* Using simple cardBg for cleaner light mode */
  border-bottom: 1px solid ${({ theme }) => theme.cardBorder};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatusBadge = styled.span`
  font-size: 12px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: ${({ status }) => status === 'Live' ? 'rgba(7, 210, 13, 0.2)' : 'rgba(255, 165, 0, 0.2)'};
  color: ${({ status }) => status === 'Live' ? '#07d20d' : '#ffa500'};
  border: 1px solid ${({ status }) => status === 'Live' ? '#07d20d' : '#ffa500'};
`;

const Details = styled.div`
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Tagline = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 20px;
  font-style: italic;
`;

const HighlightList = styled.ul`
  margin: 0 0 20px 0;
  padding-left: 20px;
  color: ${({ theme }) => theme.secondaryText};
`;

const HighlightItem = styled.li`
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 1.5;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 25px;
`;

const TechBadge = styled.span`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.secondaryText};
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: auto;
`;

const Button = styled.a`
  flex: 1;
  text-align: center;
  padding: 10px 0;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  ${({ primary, theme }) => primary ? `
    background-color: ${theme.buttonBg};
    color: ${theme.buttonText};
    border: none;
    
    &:hover {
      opacity: 0.9;
      box-shadow: 0 4px 8px rgba(3, 255, 251, 0.3);
    }
  ` : `
    background-color: transparent;
    color: ${theme.accent};
    border: 1px solid ${theme.accent};

    &:hover {
      background-color: ${theme.accent}1A; /* 10% opacity hex */
    }
  `}

  ${({ disabled }) => disabled && `
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
    border-color: #555;
    color: #555;
  `}
`;

const apps = [
  {
    title: 'CSV Merger Desktop App',
    tagline: 'A modern, feature-rich desktop tool for filtering, mapping, and combining bulk CSV data.',
    status: 'Live',
    highlights: [
      'Multi-file selection & cross-column mapping',
      'Advanced filtering and duplicate handling',
      'Local batch processing with saved configurations'
    ],
    techStack: ['Python', 'Pandas', 'Tkinter', 'PyInstaller'],
    liveUrl: 'https://mandip77.github.io/csv-merger/',
    repoUrl: 'https://github.com/Mandip77/csv-merger',
    primaryBtnText: 'Project Site',
    secondaryBtnText: 'GitHub Repo'
  },
  {
    title: 'Powerball Prediction Model',
    tagline: 'Machine learning and LLM approach to predict drawn numbers.',
    status: 'In Progress',
    highlights: [
      'Distinguishes regular white balls from the Powerball',
      'Utilizes historical data and advanced AI models',
      'Full end-to-end data science pipeline'
    ],
    techStack: ['Python', 'Scikit-Learn', 'LLM', 'Data Science'],
    liveUrl: '#',
    repoUrl: '#',
    primaryBtnText: 'View Project',
    secondaryBtnText: 'GitHub Repo'
  },
  {
    title: 'AI Content Repurposer',
    tagline: 'AI Content Repurposing application with robust security.',
    status: 'Live',
    highlights: [
      'Protected routes and user authentication',
      'Hybrid hosting strategy for reliability',
      'Scalable monorepo architecture'
    ],
    techStack: ['React', 'Node.js', 'AI Integration', 'Cybersecurity'],
    liveUrl: 'https://vibe-coding-apps.vercel.app/',
    repoUrl: 'https://github.com/Mandip77/Vibe-Coding-Apps',
    primaryBtnText: 'Project Site',
    secondaryBtnText: 'GitHub Repo'
  }
];

function VibeCodedApps() {
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
    <Section
      id="vibe-coded-apps"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isSectionVisible ? "visible" : "hidden"}
    >
      <div className="container">
        <SectionTitle variants={itemVariants}>Vibe-Coded Apps</SectionTitle>
        <SectionIntro variants={itemVariants}>
          architecture → <WorkflowHighlight>task planning</WorkflowHighlight> → <WorkflowHighlight>agent execution</WorkflowHighlight> → walkthrough review → <WorkflowHighlight>testing</WorkflowHighlight> → deployment
        </SectionIntro>

        <Grid variants={containerVariants}>
          {apps.map((app) => (
            <Card key={app.title} variants={itemVariants}>
              <CardHeader>
                <Title style={{ fontSize: '20px', marginBottom: 0 }}>{app.title}</Title>
                <StatusBadge status={app.status}>{app.status}</StatusBadge>
              </CardHeader>
              <Details>
                <Tagline>{app.tagline}</Tagline>
                <HighlightList>
                  {app.highlights.map((highlight, idx) => (
                    <HighlightItem key={idx}>{highlight}</HighlightItem>
                  ))}
                </HighlightList>
                <TechStack>
                  {app.techStack.map((tech) => (
                    <TechBadge key={tech}>{tech}</TechBadge>
                  ))}
                </TechStack>

                <ButtonGroup>
                  <Button
                    href={app.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    primary
                    disabled={!app.liveUrl || app.liveUrl === '#'}
                  >
                    {app.primaryBtnText}
                  </Button>
                  {app.secondaryBtnText && (
                    <Button
                      href={app.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      disabled={!app.repoUrl || app.repoUrl === '#'}
                    >
                      {app.secondaryBtnText}
                    </Button>
                  )}
                </ButtonGroup>
              </Details>
            </Card>
          ))}
        </Grid>
      </div>
    </Section>
  );
}

export default VibeCodedApps;
