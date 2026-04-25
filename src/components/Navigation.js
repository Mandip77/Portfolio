import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';
import logo from '../assets/logo.png';

const NavBar = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 68px;
  display: flex;
  align-items: center;
  background: ${({ $scrolled, theme }) =>
    $scrolled ? theme.navBg : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(20px)' : 'none')};
  -webkit-backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(20px)' : 'none')};
  border-bottom: ${({ $scrolled, theme }) =>
    $scrolled ? `1px solid ${theme.cardBorder}` : '1px solid transparent'};
  transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 8px;
`;

const LogoText = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
  letter-spacing: -0.02em;

  @media (max-width: 480px) {
    display: none;
  }
`;

const DesktopLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled.button`
  background: none;
  border: none;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.secondaryText};
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.surfaceHover};
  }
`;

const CyberLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.accentCyan};
  padding: 8px 14px;
  border-radius: 8px;
  text-decoration: none;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    background: ${({ theme }) => `${theme.accentCyan}15`};
  }
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ThemeBtn = styled.button`
  background: ${({ theme }) => theme.surfaceHover};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  color: ${({ theme }) => theme.text};
  min-width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  gap: 8px;
  padding: 0 12px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: #fff;
    border-color: ${({ theme }) => theme.accent};
  }
`;

const HamburgerBtn = styled.button`
  background: ${({ theme }) => theme.surfaceHover};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  color: ${({ theme }) => theme.text};
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;

  @media (min-width: 901px) {
    display: none;
  }

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: #fff;
    border-color: ${({ theme }) => theme.accent};
  }
`;

const MobileOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
`;

const MobileDrawer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(280px, 85vw);
  z-index: 1000;
  background: ${({ theme }) => theme.body};
  border-left: 1px solid ${({ theme }) => theme.cardBorder};
  padding: 80px 24px 40px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
`;

const MobileNavLink = styled.button`
  background: none;
  border: none;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.secondaryText};
  padding: 14px 16px;
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  transition: color 0.2s ease, background 0.2s ease;
  width: 100%;

  &:hover {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.surfaceHover};
  }
`;

const MobileCyberLink = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.accentCyan};
  padding: 14px 16px;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => `${theme.accentCyan}15`};
  }
`;

const MobileDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.cardBorder};
  margin: 8px 0;
`;

const navItems = [
  { name: 'About', sectionId: 'about' },
  { name: 'Skills', sectionId: 'skills' },
  { name: 'Experience', sectionId: 'experience' },
  { name: 'Apps', sectionId: 'vibe-coded-apps' },
  { name: 'Projects', sectionId: 'projects' },
  { name: 'Blog', sectionId: 'blog' },
  { name: 'Contact', sectionId: 'contact' },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const drawerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    if (isOpen) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <NavBar
        $scrolled={scrolled}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <NavInner>
          <LogoBtn onClick={scrollToTop} aria-label="Scroll to top">
            <LogoImg src={logo} alt="MA" />
            <LogoText>Mandip Amgain</LogoText>
          </LogoBtn>

          <DesktopLinks>
            {navItems.map((item) => (
              <NavLink key={item.sectionId} onClick={() => scrollTo(item.sectionId)}>
                {item.name}
              </NavLink>
            ))}
            <CyberLink
              href="https://Mandip77.github.io/cyber-blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cyber Lab ↗
            </CyberLink>
          </DesktopLinks>

          <RightGroup>
            <ThemeBtn
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </ThemeBtn>
            <HamburgerBtn
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              <FaBars />
            </HamburgerBtn>
          </RightGroup>
        </NavInner>
      </NavBar>

      <AnimatePresence>
        {isOpen && (
          <>
            <MobileOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <MobileDrawer
              ref={drawerRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            >
              {navItems.map((item) => (
                <MobileNavLink key={item.sectionId} onClick={() => scrollTo(item.sectionId)}>
                  {item.name}
                </MobileNavLink>
              ))}
              <MobileDivider />
              <MobileCyberLink
                href="https://Mandip77.github.io/cyber-blog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cyber Research Lab ↗
              </MobileCyberLink>

              <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
                <ThemeBtn
                  onClick={toggleTheme}
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                  style={{ width: '100%', borderRadius: 10, justifyContent: 'center' }}
                >
                  {theme === 'dark' ? <FaSun /> : <FaMoon />}
                  <span style={{ marginLeft: 8, fontSize: 14 }}>
                    {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                  </span>
                </ThemeBtn>
              </div>
            </MobileDrawer>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
