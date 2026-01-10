import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const Container = styled(motion.div)`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SocialIcons = styled(motion.ul)`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcon = styled(motion.li)`
  margin: 0 8px;
`;

const SocialLink = styled.a`
  color: #03fffb;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 24px;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    color: #04c3c5;
    transform: translateY(-3px) scale(1.1);
    outline: 2px solid #03fffb;
    outline-offset: 4px;
  }
`;

const FooterText = styled.p`
  margin: 20px 0 0 0;
  color: #ccc;
  font-size: 14px;

  @media (min-width: 768px) {
    margin: 0 0 0 40px;
  }
`;

function Footer() {
  const [footerRef, isFooterVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: 'easeInOut',
        staggerChildren: 0.1,
      } 
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: 'easeInOut' } 
    },
  };

  return (
    <FooterContainer ref={footerRef}>
      <Container
        initial="hidden"
        animate={isFooterVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <SocialIcons>
          {[{icon: FaGithub, href: "https://github.com/Mandip77"}, {icon: FaLinkedin, href: "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BAm%2F0Y%2BdCSUqnET6EflxAyw%3D%3D"}, {icon: FaTwitter, href: "https://twitter.com/renderingsoul8"}].map((social, index) => (
            <SocialIcon key={index} variants={socialIconVariants}>
              <SocialLink 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit my ${social.icon.name === 'FaGithub' ? 'GitHub' : social.icon.name === 'FaLinkedin' ? 'LinkedIn' : 'Twitter'} profile`}
              >
                <social.icon />
              </SocialLink>
            </SocialIcon>
          ))}
        </SocialIcons>
        <FooterText>&copy; {new Date().getFullYear()} Mandip Amgain - Portfolio. All rights reserved.</FooterText>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
