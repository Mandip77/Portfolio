import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';

import logo from '../assets/logo.png';

// Navigation Container
const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  height: 100vh;
  width: 250px;
  background-color: ${({ theme }) => theme.navBg};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  z-index: 999;
  transition: left 0.3s ease, background-color 0.3s ease;
  border-right: 1px solid ${({ theme }) => theme.cardBorder};

  &[aria-hidden="true"] {
    visibility: hidden;
  }

  &[aria-hidden="false"] {
    visibility: visible;
  }
`;

// Hamburger Menu Styles
const HamburgerMenu = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  
  /* Mix-blend-mode ensures visibility on light/dark backgrounds if overlapping content */
  mix-blend-mode: difference;
  color: #fff; 
`;

const HamburgerIcon = styled.div`
  width: 100%;
  height: 3px;
  background-color: currentColor;
  transition: all 0.3s linear;

  &:nth-child(1) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
  }

  &:nth-child(2) {
    transform: ${({ isOpen }) => isOpen ? 'translateX(-100%)' : 'translateX(0)'};
    opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`;

// Logo Style
const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.accent};
  margin: 80px 0 20px;
  align-self: center;
`;

// Navigation Links
const NavLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const NavLinkItem = styled.li`
  width: 100%;
`;

const NavLink = styled.button`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  padding: 10px 20px;
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.cardBorder};
    color: ${({ theme }) => theme.accent};
    outline: 2px solid ${({ theme }) => theme.accent};
    outline-offset: -2px;
  }
`;

const ThemeToggleBtn = styled.button`
  margin-top: auto;
  align-self: center;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  padding: 10px;
  
  &:hover {
    color: ${({ theme }) => theme.accent};
    background: transparent;
    opacity: 1;
  }
`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navigationItems = [
    { name: 'About Me', sectionId: 'about' },
    { name: 'Skills', sectionId: 'skills' },
    { name: 'Experience', sectionId: 'experience' },
    { name: 'Vibe-Coded Apps', sectionId: 'vibe-coded-apps' },
    { name: 'Projects', sectionId: 'projects' },
    { name: 'Blog', sectionId: 'blog' },
    { name: 'Contact', sectionId: 'contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Close menu on ESC key
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <NavContainer isOpen={isOpen} ref={navRef} aria-hidden={!isOpen}>
        <Logo onClick={scrollToTop}>
          <img src={logo} alt="MA Logo" style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
        </Logo>
        <NavLinks>
          {navigationItems.map((item) => (
            <NavLinkItem key={item.sectionId}>
              <NavLink onClick={() => navigateToSection(item.sectionId)}>
                {item.name}
              </NavLink>
            </NavLinkItem>
          ))}
        </NavLinks>

        <ThemeToggleBtn
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </ThemeToggleBtn>
      </NavContainer>
      <HamburgerMenu
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        ref={hamburgerRef}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
          }
        }}
      >
        <HamburgerIcon isOpen={isOpen} />
        <HamburgerIcon isOpen={isOpen} />
        <HamburgerIcon isOpen={isOpen} />
      </HamburgerMenu>
    </>
  );
}

export default Navigation;
