import styled from 'styled-components';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';
import googleCertBadge from '../assets/google_badge.png';
import postmanCertBadge from '../assets/postman_badge.png';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Section = styled(motion.section)`
  background-color: ${({ theme }) => theme.body};
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const ImageCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (max-width: 960px) {
    align-items: center;
  }
`;

const ProfileWrap = styled.div`
  position: relative;
  width: clamp(200px, 60vw, 280px);
  height: clamp(200px, 60vw, 280px);

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.accentCyan});
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.accentCyan});
    filter: blur(20px);
    opacity: 0.4;
    z-index: -1;
  }
`;

const ProfileImg = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.body};
`;

const BadgesRow = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const BadgeImg = styled.img`
  width: clamp(70px, 20vw, 90px);
  height: auto;
  border-radius: 8px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);

  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  }
`;

const TextCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent};
  font-family: 'JetBrains Mono', monospace;
`;

const Heading = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.text};
  line-height: 1.15;
`;

const GradientSpan = styled.span`
  background: linear-gradient(135deg, ${({ theme }) => theme.accent} 0%, ${({ theme }) => theme.accentCyan} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Body = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.secondaryText};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 8px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  backdrop-filter: blur(12px);
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    transform: translateY(-3px);
  }
`;

const StatNumber = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${({ theme }) => theme.accent};
  letter-spacing: -0.03em;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.secondaryText};
  margin-top: 4px;
  font-weight: 500;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { number: '3+', label: 'Years Coding' },
  { number: '10+', label: 'Projects Built' },
  { number: '2', label: 'Certifications' },
];

function About() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <Section
      id="about"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isSectionVisible ? 'visible' : 'hidden'}
    >
      <Inner>
        <Grid>
          <ImageCol variants={slideLeft}>
            <ProfileWrap>
              <ProfileImg src={profile} alt="Mandip Amgain" loading="lazy" decoding="async" />
            </ProfileWrap>
            <BadgesRow>
              <BadgeImg src={googleCertBadge} alt="Google IT Support Certificate" loading="lazy" decoding="async" />
              <BadgeImg src={postmanCertBadge} alt="Postman API Fundamentals Certificate" loading="lazy" decoding="async" />
            </BadgesRow>
          </ImageCol>

          <TextCol variants={slideRight}>
            <div>
              <SectionLabel>About Me</SectionLabel>
            </div>
            <Heading>
              Builder by craft,<br />
              <GradientSpan>defender by calling</GradientSpan>
            </Heading>
            <Body>
              I'm Mandip Amgain — an IT and cybersecurity professional actively pursuing entry-level security analyst and penetration testing roles. Currently finishing my B.S. in Information Technology at Northeastern University, I focus on uncovering vulnerabilities and securing digital systems.
            </Body>
            <Body>
              With a strong foundation in software development — from Java microservices to full-stack SvelteKit apps — I bring a builder's perspective to security. Whether I'm running independent lab research or architecting distributed systems, my goal is the same: understand how things break, then make them unbreakable.
            </Body>
            <StatsGrid>
              {stats.map((s) => (
                <StatCard key={s.label}>
                  <StatNumber>{s.number}</StatNumber>
                  <StatLabel>{s.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </TextCol>
        </Grid>
      </Inner>
    </Section>
  );
}

export default About;
