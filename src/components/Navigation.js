import React, { useState } from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.png';

// Navigation Container
const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  height: 100vh;
  width: 250px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  z-index: 999;
  transition: left 0.3s ease;
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
`;

const HamburgerIcon = styled.div`
  width: 100%;
  height: 3px;
  background-color: #fff;
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
  color: #03fffb;
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

const NavLink = styled.a`
  color: #03fffb;
  text-decoration: none;
  padding: 10px 20px;
  display: block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigationItems = [
    { name: 'Home', sectionId: 'home' },
    { name: 'Projects', sectionId: 'projects' },
    { name: 'Skills', sectionId: 'skills' },
    { name: 'Contact', sectionId: 'contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
      <>
        <NavContainer isOpen={isOpen}>
          <Logo>
            <img src={logo} alt="MA Logo" style={{ width: '50px', height: '50px' }} />
          </Logo>
          <NavLinks>
            {navigationItems.map((item) => (
                <NavLinkItem key={item.sectionId}>
                  <NavLink to="#" onClick={() => navigateToSection(item.sectionId)}>
                    {item.name}
                  </NavLink>
                </NavLinkItem>
            ))}
          </NavLinks>
        </NavContainer>
        <HamburgerMenu onClick={toggleMenu} aria-label="Menu">
          <HamburgerIcon isOpen={isOpen} />
          <HamburgerIcon isOpen={isOpen} />
          <HamburgerIcon isOpen={isOpen} />
        </HamburgerMenu>
      </>
  );
}

export default Navigation;