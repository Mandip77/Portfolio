import styled from 'styled-components';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import textEditorGif from '../assets/text_editor.gif';
import superBudgetAnimation from '../assets/SuperBudget_Animation.webp';

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

/* ── Featured card (reused for EcoBarter + Awn Creel) ── */
const FeaturedCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(16px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 40px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: ${({ $accent }) => $accent ? `${$accent}80` : '#16a34a80'};
    box-shadow: 0 16px 48px ${({ $accent }) => $accent ? `${$accent}25` : 'rgba(22,163,74,0.15)'};
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedBanner = styled.div`
  min-height: 260px;
  background: linear-gradient(135deg, #052e16 0%, #14532d 50%, #166534 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 36px 24px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 80% at 50% 50%, rgba(22,163,74,0.25) 0%, transparent 70%);
  }

  @media (max-width: 480px) {
    min-height: 200px;
    padding: 28px 20px;
  }
`;

const FeaturedBannerTitle = styled.h3`
  font-size: clamp(1.6rem, 5vw, 2.2rem);
  font-weight: 900;
  color: #fff;
  letter-spacing: -0.03em;
  position: relative;
  z-index: 1;
  text-align: center;
`;

const FeaturedBannerTagline = styled.p`
  font-size: 13px;
  color: rgba(255,255,255,0.65);
  text-align: center;
  position: relative;
  z-index: 1;
  max-width: 240px;
  line-height: 1.5;
`;

const FeaturedBannerBadge = styled.div`
  position: relative;
  z-index: 1;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 20px;
  background: rgba(22,163,74,0.3);
  color: #4ade80;
  border: 1px solid rgba(74,222,128,0.4);
`;

const FeaturedDetails = styled.div`
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
`;

const FeaturedTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.02em;
`;

const FeaturedDesc = styled.p`
  font-size: 14px;
  line-height: 1.75;
  color: ${({ theme }) => theme.secondaryText};
  margin: 0;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

const TechTag = styled.span`
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  background: ${({ accent }) => accent ? `${accent}18` : 'transparent'};
  color: ${({ accent, theme }) => accent || theme.secondaryText};
  border: 1px solid ${({ accent, theme }) => accent ? `${accent}45` : theme.cardBorder};
`;

const BtnRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 44px;
  padding: 10px 22px;
  background: ${({ accent }) => accent || '#6366f1'};
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.22s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    opacity: 0.88;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px ${({ accent }) => accent ? `${accent}50` : 'rgba(99,102,241,0.4)'};
  }
`;

const OutlineBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 44px;
  padding: 10px 22px;
  background: transparent;
  color: ${({ accent, theme }) => accent || theme.accent};
  font-size: 13px;
  font-weight: 600;
  border-radius: 10px;
  border: 1px solid ${({ accent, theme }) => accent ? `${accent}55` : theme.cardBorder};
  text-decoration: none;
  transition: all 0.22s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${({ accent, theme }) => accent ? `${accent}18` : theme.surfaceHover};
    color: ${({ accent, theme }) => accent || theme.accent};
    border-color: ${({ accent, theme }) => accent || theme.accent};
  }
`;

/* ── Grid cards ── */
const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(14px);
  display: flex;
  flex-direction: column;
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    transform: translateY(-6px);
    box-shadow: 0 16px 40px ${({ theme }) => theme.glowColor};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardDetails = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

const CardDesc = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${({ theme }) => theme.secondaryText};
  flex: 1;
  margin: 0;
`;

const RoleBadge = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 20px;
  background: ${({ accent }) => `${accent}20`};
  color: ${({ accent }) => accent};
  border: 1px solid ${({ accent }) => `${accent}45`};
  font-family: 'JetBrains Mono', monospace;
`;

const HighlightList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const HighlightItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.secondaryText};
  line-height: 1.5;

  &::before {
    content: '→';
    color: ${({ accent }) => accent || 'inherit'};
    font-size: 11px;
    margin-top: 2px;
    flex-shrink: 0;
  }
`;

const ECOBARTER_STACK = ['SvelteKit 5', 'Go (Gin)', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'NATS', 'Docker', 'Traefik'];
const AWNCREEL_STACK = ['Node.js', 'Express', 'AWS Lightsail', 'AWS S3', 'Docker', 'AWS Amplify', 'CI/CD'];
const AWNCREEL_HIGHLIGHTS = [
  'Architected AWS Lightsail migration for the Node.js/Express backend',
  'Engineered S3 presigned URLs middleware to prevent unauthorized access to proprietary patterns',
  'Containerized full stack with Docker for dev/prod environment parity',
  'Orchestrated automated CI/CD pipeline via AWS Amplify from GitHub',
  'Implemented XSS sitewide mitigation: escapeHtml helper, textContent/createElement refactor',
  'Hardened checkout flow to block unauthorized order creation without verified session',
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.12 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function Projects() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.08, triggerOnce: true });

  return (
    <Section
      id="projects"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isSectionVisible ? 'visible' : 'hidden'}
    >
      <Inner>
        <Header data-num="03">
          <SectionLabel>Work</SectionLabel>
          <Heading>
            Featured <GradientSpan>Projects</GradientSpan>
          </Heading>
        </Header>

        {/* Featured: EcoBarter */}
        <FeaturedCard variants={itemVariant} $accent="#16a34a">
          <FeaturedBanner>
            <FeaturedBannerBadge>Live · Full-Stack</FeaturedBannerBadge>
            <FeaturedBannerTitle>EcoBarter</FeaturedBannerTitle>
            <FeaturedBannerTagline>A sustainable, money-free marketplace powered by circular trade loops</FeaturedBannerTagline>
          </FeaturedBanner>
          <FeaturedDetails>
            <FeaturedTitle>Circular Trade Platform</FeaturedTitle>
            <FeaturedDesc>
              Full-stack microservices platform where users trade goods and skills without money. A Go-based matching engine finds 2–4-way circular trade loops automatically. Physical handoffs are verified via QR codes, EigenTrust reputation tracks trust scores, and real-time chat keeps traders in sync.
            </FeaturedDesc>
            <TechTags>
              {ECOBARTER_STACK.map((t) => (
                <TechTag key={t} accent="#16a34a">{t}</TechTag>
              ))}
            </TechTags>
            <BtnRow>
              <PrimaryBtn
                href="https://ecobarter.man-dip.dev"
                target="_blank"
                rel="noopener noreferrer"
                accent="#16a34a"
              >
                Live Demo ↗
              </PrimaryBtn>
              <OutlineBtn
                href="https://github.com/Mandip77/Eco-Barter"
                target="_blank"
                rel="noopener noreferrer"
                accent="#16a34a"
              >
                GitHub
              </OutlineBtn>
            </BtnRow>
          </FeaturedDetails>
        </FeaturedCard>

        {/* Featured: Awn Creel */}
        <FeaturedCard variants={itemVariant} $accent="#d97706">
          <FeaturedBanner style={{ background: 'linear-gradient(135deg, #1c1007 0%, #451a03 50%, #78350f 100%)' }}>
            <FeaturedBannerBadge style={{ background: 'rgba(217,119,6,0.25)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.4)' }}>
              Live · Capstone · Real Client
            </FeaturedBannerBadge>
            <FeaturedBannerTitle>Awn Creel</FeaturedBannerTitle>
            <FeaturedBannerTagline>Boutique design business digitalized into a secure cloud marketplace</FeaturedBannerTagline>
          </FeaturedBanner>
          <FeaturedDetails>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <FeaturedTitle style={{ marginBottom: 0 }}>Lead Full-Stack &amp; Security Engineer</FeaturedTitle>
              <RoleBadge accent="#d97706">College Capstone</RoleBadge>
            </div>
            <HighlightList>
              {AWNCREEL_HIGHLIGHTS.map((h) => (
                <HighlightItem key={h} accent="#d97706">{h}</HighlightItem>
              ))}
            </HighlightList>
            <TechTags>
              {AWNCREEL_STACK.map((t) => (
                <TechTag key={t} accent="#d97706">{t}</TechTag>
              ))}
            </TechTags>
            <BtnRow>
              <PrimaryBtn
                href="https://awncreel.com"
                target="_blank"
                rel="noopener noreferrer"
                accent="#d97706"
              >
                Live Site ↗
              </PrimaryBtn>
            </BtnRow>
          </FeaturedDetails>
        </FeaturedCard>

        {/* Grid */}
        <Grid variants={containerVariants}>
          <Card variants={itemVariant}>
            <CardImage src={superBudgetAnimation} alt="Budget Management" loading="lazy" />
            <CardDetails>
              <CardTitle>Budget Management</CardTitle>
              <CardDesc>
                Spring Boot web app for creating budget categories, tracking allocations, transactions, and visualizing spending in an interactive dashboard.
              </CardDesc>
              <BtnRow>
                <OutlineBtn
                  href="https://github.com/Mandip77/Budget_Management"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </OutlineBtn>
              </BtnRow>
            </CardDetails>
          </Card>

          <Card variants={itemVariant}>
            <CardImage src={textEditorGif} alt="Simple Text Editor" loading="lazy" />
            <CardDetails>
              <CardTitle>Simple Text Editor</CardTitle>
              <CardDesc>
                Lightweight Java Swing text editor with open/save, cut/copy/paste, and custom formatting built from scratch.
              </CardDesc>
              <BtnRow>
                <OutlineBtn
                  href="https://github.com/Mandip77/Simple-TextEditor-Java"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </OutlineBtn>
              </BtnRow>
            </CardDetails>
          </Card>
        </Grid>
      </Inner>
    </Section>
  );
}

export default Projects;
