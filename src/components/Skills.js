import styled from 'styled-components';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

import { SiKalilinux, SiAmazonaws, SiDocker, SiGithub } from 'react-icons/si';

import javaIcon from '../assets/java-svgrepo-com.svg';
import pythonIcon from '../assets/python.png';
import htmlIcon from '../assets/html-5-svgrepo-com.svg';
import cssIcon from '../assets/css-3-svgrepo-com.svg';
import jsIcon from '../assets/js-svgrepo-com.svg';
import mysqlIcon from '../assets/sql-server-icon-png-11359.png';
import kotlinIcon from '../assets/kotlin.svg';
import reactIcon from '../assets/react.svg';
import postmanIcon from '../assets/postman.svg';

const Section = styled(motion.section)`
  background-color: transparent;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

const SectionLabel = styled.div`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent};
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 12px;
`;

const Heading = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.text};
`;

const GradientSpan = styled.span`
  background: linear-gradient(135deg, ${({ theme }) => theme.accent} 0%, ${({ theme }) => theme.accentCyan} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CategorySection = styled.div`
  margin-bottom: 52px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryLabel = styled.h3`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.secondaryText};
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.cardBorder};
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 14px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  backdrop-filter: blur(12px);
  cursor: default;
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    transform: translateY(-5px);
    box-shadow: 0 12px 32px ${({ theme }) => theme.glowColor};
  }

  @media (max-width: 480px) {
    padding: 14px 10px;
    gap: 8px;
    border-radius: 10px;
  }
`;

const IconWrap = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const SkillSvgIcon = styled.span`
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.secondaryText};

  ${SkillCard}:hover & {
    color: ${({ theme }) => theme.accent};
  }
`;

const SkillName = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const DotsRow = styled.div`
  display: flex;
  gap: 4px;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ filled, theme }) => filled ? theme.accent : theme.cardBorder};
  transition: background 0.2s ease;

  ${SkillCard}:hover & {
    background: ${({ filled, theme }) => filled ? theme.accentLight : theme.cardBorder};
  }
`;

const categories = [
  {
    label: 'Languages',
    skills: [
      { name: 'Java', icon: javaIcon, level: 2 },
      { name: 'Python', icon: pythonIcon, level: 2 },
      { name: 'JavaScript', icon: jsIcon, level: 2 },
      { name: 'Kotlin', icon: kotlinIcon, level: 2 },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'HTML', icon: htmlIcon, level: 2 },
      { name: 'CSS', icon: cssIcon, level: 2 },
      { name: 'React', icon: reactIcon, level: 2 },
    ],
  },
  {
    label: 'Backend & Infrastructure',
    skills: [
      { name: 'MySQL', icon: mysqlIcon, level: 2 },
      { name: 'Docker', SvgIcon: SiDocker, level: 2 },
      { name: 'AWS', SvgIcon: SiAmazonaws, level: 2 },
    ],
  },
  {
    label: 'Security & Tools',
    skills: [
      { name: 'Kali Linux', SvgIcon: SiKalilinux, level: 2 },
      { name: 'Postman', icon: postmanIcon, level: 2 },
      { name: 'GitHub', SvgIcon: SiGithub, level: 2 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

function Skills() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.08, triggerOnce: true });

  return (
    <Section
      id="skills"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isSectionVisible ? 'visible' : 'hidden'}
    >
      <Inner>
        <Header data-num="01">
          <SectionLabel>Tech Stack</SectionLabel>
          <Heading>
            Tools I <GradientSpan>work with</GradientSpan>
          </Heading>
        </Header>

        {categories.map((cat) => (
          <CategorySection key={cat.label}>
            <CategoryLabel>{cat.label}</CategoryLabel>
            <SkillsGrid variants={containerVariants}>
              {cat.skills.map((skill) => (
                <SkillCard key={skill.name} variants={cardVariant}>
                  <IconWrap>
                    {skill.SvgIcon
                      ? <SkillSvgIcon><skill.SvgIcon /></SkillSvgIcon>
                      : <SkillIcon src={skill.icon} alt={skill.name} loading="lazy" decoding="async" />
                    }
                  </IconWrap>
                  <SkillName>{skill.name}</SkillName>
                  <DotsRow>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Dot key={n} filled={n <= skill.level} />
                    ))}
                  </DotsRow>
                </SkillCard>
              ))}
            </SkillsGrid>
          </CategorySection>
        ))}
      </Inner>
    </Section>
  );
}

export default Skills;
