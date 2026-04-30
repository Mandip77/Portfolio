import styled from 'styled-components';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

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
  margin-bottom: 16px;
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

const Intro = styled.p`
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.secondaryText};
  margin: 12px auto 56px;
  max-width: 560px;
  font-family: 'JetBrains Mono', monospace;
  line-height: 1.8;
`;

const Accent = styled.span`
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ $accent, theme }) => $accent ? `${$accent}40` : theme.cardBorder};
  border-radius: 18px;
  overflow: hidden;
  backdrop-filter: blur(14px);
  display: flex;
  flex-direction: column;
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: ${({ $accent, theme }) => $accent || theme.accent};
    transform: translateY(-6px);
    box-shadow: 0 16px 40px ${({ $accent, theme }) => $accent ? `${$accent}40` : theme.glowColor};
  }
`;

const CardTop = styled.div`
  padding: 24px 24px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.cardBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.01em;
`;

const StatusBadge = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 20px;
  white-space: nowrap;
  background: ${({ status }) =>
    status === 'Live' ? 'rgba(22,163,74,0.18)' : 'rgba(234,179,8,0.18)'};
  color: ${({ status }) => status === 'Live' ? '#4ade80' : '#fbbf24'};
  border: 1px solid ${({ status }) =>
    status === 'Live' ? 'rgba(74,222,128,0.35)' : 'rgba(251,191,36,0.35)'};
`;

const CardBody = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
`;

const Tagline = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.secondaryText};
  font-style: italic;
  line-height: 1.6;
  margin: 0;
`;

const HighlightList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const HighlightItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13.5px;
  color: ${({ theme }) => theme.secondaryText};
  line-height: 1.5;

  &::before {
    content: '→';
    color: ${({ theme }) => theme.accent};
    font-size: 12px;
    margin-top: 2px;
    flex-shrink: 0;
  }
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

const TechBadge = styled.span`
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  background: ${({ theme }) => theme.surfaceHover};
  color: ${({ theme }) => theme.secondaryText};
  border: 1px solid ${({ theme }) => theme.cardBorder};
`;

const BtnRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.a`
  flex: 1;
  min-width: 0;
  min-height: 44px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background: ${({ theme }) => theme.accent};
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
    box-shadow: 0 8px 24px ${({ theme }) => theme.glowColor};
  }
`;

const OutlineBtn = styled.a`
  flex: 1;
  min-width: 0;
  min-height: 44px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background: transparent;
  color: ${({ theme }) => theme.accent};
  font-size: 13px;
  font-weight: 600;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  text-decoration: none;
  transition: all 0.22s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${({ theme }) => theme.surfaceHover};
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
  }
`;

const apps = [
  {
    title: 'Lurk: AI Security Scanner',
    tagline: 'Production SaaS that detects security vulnerabilities in AI-generated code before it ships.',
    status: 'Live',
    accent: '#22d3ee',
    highlights: [
      'GitHub App scans every PR and posts findings as a comment within seconds',
      'Claude AI detects SQL injection, broken auth, hardcoded secrets, prompt injection & more',
      'Live dashboard with severity gauges, trend charts, and finding suppression',
      'Stripe billing (Free / Pro / Agency), API key management, weekly digest emails',
      'HMAC webhook validation, SSRF blocklist, RLS on all tables, sliding-window rate limits',
    ],
    techStack: ['Next.js', 'TypeScript', 'Claude AI', 'Supabase', 'Stripe', 'Inngest', 'Upstash Redis', 'Vercel'],
    liveUrl: 'https://lurk-cyan.vercel.app',
    repoUrl: 'https://github.com/Mandip77/Lurk',
  },
  {
    title: 'CSV Merger Desktop App',
    tagline: 'A modern desktop tool for filtering, mapping, and combining bulk CSV data.',
    status: 'Live',
    highlights: [
      'Multi-file selection & cross-column mapping',
      'Advanced filtering and duplicate handling',
      'Local batch processing with saved configurations',
    ],
    techStack: ['Python', 'Pandas', 'Tkinter', 'PyInstaller'],
    liveUrl: 'https://mandip77.github.io/csv-merger/',
    repoUrl: 'https://github.com/Mandip77/csv-merger',
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function VibeCodedApps() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.08, triggerOnce: true });

  return (
    <Section
      id="vibe-coded-apps"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isSectionVisible ? 'visible' : 'hidden'}
    >
      <Inner>
        <Header data-num="04">
          <SectionLabel>AI-Assisted Builds</SectionLabel>
          <Heading>
            Shipped with <GradientSpan>AI</GradientSpan>
          </Heading>
        </Header>
        <Intro>
          architecture → <Accent>task planning</Accent> → <Accent>agent execution</Accent> → walkthrough review → <Accent>testing</Accent> → deployment
        </Intro>

        <Grid variants={containerVariants}>
          {apps.map((app) => (
            <Card key={app.title} variants={itemVariant} $accent={app.accent}>
              <CardTop>
                <CardTitle>{app.title}</CardTitle>
                <StatusBadge status={app.status}>{app.status}</StatusBadge>
              </CardTop>
              <CardBody>
                <Tagline>{app.tagline}</Tagline>
                <HighlightList>
                  {app.highlights.map((h, i) => (
                    <HighlightItem key={i}>{h}</HighlightItem>
                  ))}
                </HighlightList>
                <TechRow>
                  {app.techStack.map((t) => (
                    <TechBadge key={t}>{t}</TechBadge>
                  ))}
                </TechRow>
                <BtnRow>
                  <PrimaryBtn href={app.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo ↗
                  </PrimaryBtn>
                  <OutlineBtn href={app.repoUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </OutlineBtn>
                </BtnRow>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}

export default VibeCodedApps;
