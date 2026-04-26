import styled from 'styled-components';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';
import googleCertBadge from '../assets/google_badge.png';
import postmanCertBadge from '../assets/postman_badge.png';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Section = styled(motion.section)`
  background-color: transparent;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 72px;
  align-items: center;
  margin-bottom: 72px;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
    gap: 44px;
    margin-bottom: 52px;
  }
`;

const ImageCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;

  @media (max-width: 940px) {
    align-items: center;
  }
`;

const ProfileRing = styled.div`
  position: relative;
  width: clamp(200px, 55vw, 280px);
  height: clamp(200px, 55vw, 280px);

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
    filter: blur(22px);
    opacity: 0.35;
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

const TextCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accentLime};
  font-family: 'JetBrains Mono', monospace;
`;

const Heading = styled.h2`
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.1;
  color: ${({ theme }) => theme.text};
`;

const OutlineWord = styled.span`
  -webkit-text-stroke: 2px ${({ theme }) => theme.accent};
  color: transparent;

  @media (max-width: 480px) {
    -webkit-text-stroke: 1.5px ${({ theme }) => theme.accent};
  }
`;

const Body = styled.p`
  font-size: 1.02rem;
  line-height: 1.82;
  color: ${({ theme }) => theme.secondaryText};
`;

const StatsRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 4px;
`;

const StatPill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px 20px;
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 12px;
  backdrop-filter: blur(12px);
  min-width: 80px;
  transition: border-color 0.2s ease;

  &:hover { border-color: ${({ theme }) => theme.accent}; }
`;

const StatNum = styled.span`
  font-size: 1.5rem;
  font-weight: 900;
  color: ${({ theme }) => theme.accent};
  letter-spacing: -0.03em;
  font-family: 'JetBrains Mono', monospace;
`;

const StatLabel = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.secondaryText};
  margin-top: 3px;
  font-weight: 500;
`;

/* ── Certifications ── */
const CertsHeading = styled.h3`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.secondaryText};
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 14px;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.cardBorder};
  }
`;

const CertsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const CertCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px 20px;
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 14px;
  backdrop-filter: blur(14px);
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    transform: translateY(-3px);
    box-shadow: 0 10px 28px ${({ theme }) => theme.glowColor};
  }
`;

const BadgeWrap = styled.div`
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(255,255,255,0.05);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 58px;
    height: 58px;
  }
`;

const BadgeImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CertInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

const CertName = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  line-height: 1.3;
`;

const CertIssuer = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.secondaryText};
`;

const CertMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  flex-wrap: wrap;
`;

const CertDateBadge = styled.span`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.06em;
  font-family: 'JetBrains Mono', monospace;
  color: ${({ theme }) => theme.accentCyan};
  background: ${({ theme }) => `${theme.accentCyan}15`};
  border: 1px solid ${({ theme }) => `${theme.accentCyan}30`};
  padding: 2px 8px;
  border-radius: 20px;
`;

const VerifiedBadge = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.accentLime};
  background: ${({ theme }) => `${theme.accentLime}15`};
  border: 1px solid ${({ theme }) => `${theme.accentLime}30`};
  padding: 2px 8px;
  border-radius: 20px;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const certs = [
  {
    name: 'Google IT Support',
    issuer: 'Google / Coursera',
    date: 'Issued 2022',
    image: googleCertBadge,
    alt: 'Google IT Support Professional Certificate badge',
  },
  {
    name: 'Postman API Fundamentals',
    issuer: 'Postman · Student Expert',
    date: 'Issued 2023',
    image: postmanCertBadge,
    alt: 'Postman API Fundamentals Student Expert badge',
  },
];

function About() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.08, triggerOnce: true });

  return (
    <Section
      id="about"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isSectionVisible ? 'visible' : 'hidden'}
    >
      <Inner>
        <TopGrid>
          <ImageCol variants={slideLeft}>
            <ProfileRing>
              <ProfileImg src={profile} alt="Mandip Amgain" loading="lazy" decoding="async" />
            </ProfileRing>
          </ImageCol>

          <TextCol variants={slideRight}>
            <SectionLabel>About Me</SectionLabel>
            <Heading>
              Builder by craft,{' '}
              <OutlineWord>defender</OutlineWord>{' '}
              by calling
            </Heading>
            <Body>
              I'm Mandip Amgain, an IT and cybersecurity professional actively pursuing
              entry-level security analyst and penetration testing roles. Currently finishing
              my B.S. in Information Technology at Northeastern University, I focus on
              uncovering vulnerabilities and securing digital systems.
            </Body>
            <Body>
              With a strong foundation in software development from Java microservices to
              full-stack SvelteKit apps, I bring a builder's perspective to security.
              Whether I'm running independent lab research or architecting distributed
              systems, my goal is the same: understand how things break, then make them
              unbreakable.
            </Body>
            <StatsRow>
              {[{ n: '3+', l: 'Years Coding' }, { n: '10+', l: 'Projects' }, { n: '2', l: 'Certifications' }].map(s => (
                <StatPill key={s.l}>
                  <StatNum>{s.n}</StatNum>
                  <StatLabel>{s.l}</StatLabel>
                </StatPill>
              ))}
            </StatsRow>
          </TextCol>
        </TopGrid>

        {/* Certification Cards */}
        <CertsHeading>Certifications</CertsHeading>
        <CertsGrid>
          {certs.map((c) => (
            <CertCard key={c.name} variants={fadeUp}>
              <BadgeWrap>
                <BadgeImg src={c.image} alt={c.alt} loading="lazy" decoding="async" />
              </BadgeWrap>
              <CertInfo>
                <CertName>{c.name}</CertName>
                <CertIssuer>{c.issuer}</CertIssuer>
                <CertMeta>
                  <CertDateBadge>{c.date}</CertDateBadge>
                  <VerifiedBadge>✓ Verified</VerifiedBadge>
                </CertMeta>
              </CertInfo>
            </CertCard>
          ))}
        </CertsGrid>
      </Inner>
    </Section>
  );
}

export default About;
