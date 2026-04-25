import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import logo from '../assets/logo.png';

const FooterEl = styled.footer`
  background-color: ${({ theme }) => theme.body};
  border-top: 1px solid ${({ theme }) => theme.cardBorder};
  padding: 48px 0 36px;
`;

const GlowLine = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, ${({ theme }) => theme.accent}, ${({ theme }) => theme.accentCyan}, ${({ theme }) => theme.accent}, transparent);
  margin-bottom: 48px;
  opacity: 0.5;
`;

const Inner = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 28px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 7px;
  opacity: 0.9;
`;

const BrandText = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.secondaryText};
`;

const Copyright = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.secondaryText};
  opacity: 0.65;
  margin: 0;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 8px;
`;

const SocialBtn = styled(motion.a)`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.secondaryText};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.22s ease;
  backdrop-filter: blur(8px);

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: #fff;
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 0 4px 16px ${({ theme }) => theme.glowColor};
    transform: translateY(-3px);
  }
`;

const socials = [
  { icon: FaGithub, href: 'https://github.com/Mandip77', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/mandip-amgain', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/renderingsoul8', label: 'Twitter' },
];

function Footer() {
  const [footerRef, isFooterVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <FooterEl ref={footerRef}>
      <GlowLine />
      <Inner
        initial={{ opacity: 0, y: 20 }}
        animate={isFooterVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Brand>
          <LogoImg src={logo} alt="MA" />
          <BrandText>Mandip Amgain</BrandText>
        </Brand>

        <Copyright>
          &copy; {new Date().getFullYear()} Mandip Amgain. All rights reserved.
        </Copyright>

        <SocialRow>
          {socials.map(({ icon: Icon, href, label }) => (
            <SocialBtn
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon />
            </SocialBtn>
          ))}
        </SocialRow>
      </Inner>
    </FooterEl>
  );
}

export default Footer;
