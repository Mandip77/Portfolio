import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import backgroundVideo from '../assets/video (2160p).mp4';

const scanline = keyframes`
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`;

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
  opacity: 0.25;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    radial-gradient(ellipse 80% 55% at 50% -10%, ${({ theme }) => theme.accent}28 0%, transparent 65%),
    linear-gradient(to bottom, rgba(8,8,14,0.3) 0%, rgba(8,8,14,0.72) 60%, rgba(8,8,14,1) 100%);
`;

/* Very subtle moving scanline for depth */
const Scanline = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(to bottom, transparent, ${({ theme }) => theme.accent}06, transparent);
    animation: ${scanline} 8s linear infinite;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  max-width: 900px;
  width: 100%;
  padding: 0 24px;
  text-align: center;
`;

const Prompt = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.accentLime};
  letter-spacing: 0.06em;
  margin-bottom: 28px;
`;

const PromptCursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 16px;
  background: ${({ theme }) => theme.accentLime};
  border-radius: 1px;
  animation: blink 1.1s step-end infinite;

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const NameRow = styled(motion.div)`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: clamp(12px, 2.5vw, 24px);
  flex-wrap: wrap;
  margin-bottom: 12px;
  line-height: 1;
`;

const NameSolid = styled.span`
  font-size: clamp(3.2rem, 9vw, 7rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  color: #fff;
`;

/* Outlined / stroke-only text — the visual signature */
const NameOutline = styled.span`
  font-size: clamp(3.2rem, 9vw, 7rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  -webkit-text-stroke: 2px ${({ theme }) => theme.accent};
  color: transparent;

  @media (max-width: 480px) {
    -webkit-text-stroke: 1.5px ${({ theme }) => theme.accent};
  }
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(0.95rem, 2.2vw, 1.15rem);
  color: rgba(240, 240, 250, 0.58);
  max-width: 580px;
  margin: 0 auto 44px;
  line-height: 1.75;
  font-weight: 400;
`;

const ButtonRow = styled(motion.div)`
  display: flex;
  gap: 14px;
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
  padding: 12px 30px;
  background: ${({ theme }) => theme.accent};
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: all 0.25s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${({ theme }) => theme.accentLight};
    color: #fff;
    box-shadow: 0 0 36px ${({ theme }) => theme.glowColor};
    transform: translateY(-2px);
  }

  @media (max-width: 480px) { width: 100%; font-size: 13px; }
`;

const OutlineBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 12px 30px;
  background: transparent;
  color: ${({ theme }) => theme.accentCyan};
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.accentCyan}55;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: all 0.25s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${({ theme }) => theme.accentCyan}18;
    border-color: ${({ theme }) => theme.accentCyan};
    color: ${({ theme }) => theme.accentCyan};
    transform: translateY(-2px);
    box-shadow: 0 0 28px ${({ theme }) => theme.accentCyan}30;
  }

  @media (max-width: 480px) { width: 100%; font-size: 13px; }
`;

const ScrollHint = styled(motion.div)`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: rgba(255,255,255,0.22);
  font-size: 10px;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const ScrollLine = styled(motion.div)`
  width: 1px;
  height: 36px;
  background: linear-gradient(to bottom, ${({ theme }) => theme.accent}80, transparent);
`;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

function Hero() {
  const resumeLink = process.env.PUBLIC_URL + '/Resume.pdf';

  return (
    <HeroSection id="hero">
      <HeroVideo src={backgroundVideo} autoPlay loop muted playsInline preload="auto" aria-hidden="true" />
      <Overlay />
      <Scanline />

      <motion.div
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Content>
          <Prompt variants={fadeUpVariant}>
            ~/portfolio<PromptCursor />
          </Prompt>

          <NameRow variants={fadeUpVariant}>
            <NameSolid>Mandip</NameSolid>
            <NameOutline>Amgain</NameOutline>
          </NameRow>

          <Subtitle variants={fadeUpVariant}>
            IT &amp; Cybersecurity Professional — aspiring penetration tester and full-stack
            builder. I secure systems and ship products.
          </Subtitle>

          <ButtonRow variants={fadeUpVariant}>
            <PrimaryBtn href={resumeLink} download="Mandip_Amgain_Resume.pdf" aria-label="Download resume">
              Download Resume
            </PrimaryBtn>
            <OutlineBtn
              href="https://Mandip77.github.io/cyber-blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cyber Research Lab ↗
            </OutlineBtn>
          </ButtonRow>
        </Content>
      </motion.div>

      <ScrollHint
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <ScrollLine
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        scroll
      </ScrollHint>
    </HeroSection>
  );
}

export default Hero;
