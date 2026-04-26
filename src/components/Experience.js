import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Section = styled(motion.section)`
  background-color: transparent;
`;

const Inner = styled.div`
  max-width: 800px;
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

const Timeline = styled.div`
  position: relative;
  padding-left: 44px;

  @media (max-width: 480px) {
    padding-left: 36px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.accent},
      ${({ theme }) => theme.accentCyan}
    );
    opacity: 0.3;
    border-radius: 2px;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Dot = styled.div`
  position: absolute;
  left: -36px;
  top: 18px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ theme }) => theme.cardBg};
  border: 2px solid ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: ${({ theme }) => theme.accent};
  backdrop-filter: blur(8px);
  z-index: 1;
  transition: background 0.25s ease, box-shadow 0.25s ease;

  ${TimelineItem}:hover & {
    background: ${({ theme }) => theme.accent};
    color: #fff;
    box-shadow: 0 0 20px ${({ theme }) => theme.glowColor};
  }

  @media (max-width: 480px) {
    left: -30px;
    width: 36px;
    height: 36px;
    font-size: 13px;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 16px;
  padding: 24px 28px;
  backdrop-filter: blur(14px);
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    transform: translateX(4px);
    box-shadow: 0 8px 32px ${({ theme }) => theme.glowColor};
  }

  @media (max-width: 480px) {
    padding: 18px 16px;
    border-radius: 12px;
  }
`;

const DateBadge = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  font-family: 'JetBrains Mono', monospace;
  color: ${({ theme }) => theme.accentCyan};
  background: ${({ theme }) => `${theme.accentCyan}18`};
  border: 1px solid ${({ theme }) => `${theme.accentCyan}35`};
  padding: 3px 10px;
  border-radius: 20px;
  margin-bottom: 12px;
`;

const Title = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 4px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${({ theme }) => theme.secondaryText};
  margin: 0;
`;

const experienceData = [
  {
    type: 'school',
    title: 'Northeastern University',
    subtitle: 'B.S. in Information Technology',
    date: '2023 – Present',
    description: 'Focusing on Systems Administration, Cloud Computing, and Software Development. Active cybersecurity researcher.',
  },
  {
    type: 'school',
    title: 'Bunker Hill Community College',
    subtitle: 'A.S. in Computer Science',
    date: 'Graduated 2023',
    description: 'Built a strong foundation in algorithms, data structures, and object-oriented programming with Java and C++.',
  },
  {
    type: 'certificate',
    title: 'Google IT Support',
    subtitle: 'Professional Certificate',
    date: 'Issued 2022',
    description: 'Comprehensive training in troubleshooting, networking, operating systems, and system administration.',
  },
  {
    type: 'certificate',
    title: 'Postman API Fundamentals',
    subtitle: 'Student Expert Certification',
    date: 'Issued 2023',
    description: 'Demonstrated proficiency in API testing, documentation, and automation using Postman.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariant = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function Experience() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.08, triggerOnce: true });

  return (
    <Section
      id="experience"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isSectionVisible ? 'visible' : 'hidden'}
    >
      <Inner>
        <Header data-num="02">
          <SectionLabel>Background</SectionLabel>
          <Heading>
            Experience &amp; <GradientSpan>Education</GradientSpan>
          </Heading>
        </Header>

        <Timeline>
          {experienceData.map((item, i) => (
            <TimelineItem key={i} variants={itemVariant}>
              <Dot>{item.type === 'school' ? <FaGraduationCap /> : <FaCertificate />}</Dot>
              <Card>
                <DateBadge>{item.date}</DateBadge>
                <Title>{item.title}</Title>
                <Subtitle>{item.subtitle}</Subtitle>
                <Desc>{item.description}</Desc>
              </Card>
            </TimelineItem>
          ))}
        </Timeline>
      </Inner>
    </Section>
  );
}

export default Experience;
