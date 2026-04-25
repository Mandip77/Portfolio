import styled from 'styled-components';
import { motion } from 'framer-motion';
import backgroundVideo from '../assets/video (2160p).mp4';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.35;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.18) 0%, transparent 70%),
    linear-gradient(to bottom, rgba(7,7,15,0.4) 0%, rgba(7,7,15,0.75) 60%, rgba(7,7,15,0.98) 100%);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 860px;
  width: 100%;
  padding: 0 24px;
  text-align: center;
`;

const Label = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.accent};
  letter-spacing: 0.1em;
  margin-bottom: 24px;

  &::before, &::after {
    content: '';
    width: 32px;
    height: 1px;
    background: ${({ theme }) => theme.accent};
    opacity: 0.6;
  }
`;

const Name = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin-bottom: 8px;
  color: #fff;
`;

const GradientSpan = styled.span`
  background: linear-gradient(135deg, ${({ theme }) => theme.accent} 0%, ${({ theme }) => theme.accentCyan} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: rgba(255, 255, 255, 0.65);
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.7;
  font-weight: 400;
`;

const ButtonRow = styled(motion.div)`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    padding: 0 8px;
  }
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 12px 28px;
  background: ${({ theme }) => theme.accent};
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.25s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${({ theme }) => theme.accentLight};
    color: #fff;
    box-shadow: 0 0 32px ${({ theme }) => theme.glowColor};
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 14px;
  }
`;

const OutlineBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 12px 28px;
  background: transparent;
  color: ${({ theme }) => theme.accentCyan};
  font-size: 15px;
  font-weight: 600;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.accentCyan}60;
  text-decoration: none;
  transition: all 0.25s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${({ theme }) => theme.accentCyan}18;
    border-color: ${({ theme }) => theme.accentCyan};
    color: ${({ theme }) => theme.accentCyan};
    transform: translateY(-2px);
    box-shadow: 0 0 24px ${({ theme }) => theme.accentCyan}30;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 14px;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: rgba(255,255,255,0.35);
  font-size: 11px;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.1em;
`;

const ScrollDot = styled(motion.div)`
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
`;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Hero() {
  const resumeLink = process.env.PUBLIC_URL + '/Resume.pdf';

  return (
    <HeroSection id="hero">
      <HeroVideo src={backgroundVideo} autoPlay loop muted playsInline preload="auto" aria-hidden="true" />
      <Overlay />

      <motion.div
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Content>
          <Label variants={fadeUpVariant}>IT &amp; Cybersecurity</Label>
          <Name variants={fadeUpVariant}>
            Mandip <GradientSpan>Amgain</GradientSpan>
          </Name>
          <Subtitle variants={fadeUpVariant}>
            Aspiring penetration tester and full-stack builder. I secure systems by day and ship microservices by night.
          </Subtitle>
          <ButtonRow variants={fadeUpVariant}>
            <PrimaryBtn href={resumeLink} download="Mandip_Amgain_Resume.pdf" aria-label="Download resume">
              Download Resume
            </PrimaryBtn>
            <OutlineBtn
              href="https://Mandip77.github.io/cyber-blog/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Cybersecurity Research Lab"
            >
              Cyber Research Lab ↗
            </OutlineBtn>
          </ButtonRow>
        </Content>
      </motion.div>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <ScrollDot
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        scroll
      </ScrollIndicator>
    </HeroSection>
  );
}

export default Hero;
