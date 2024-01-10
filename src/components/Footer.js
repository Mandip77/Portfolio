import React from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const Container = styled(AnimatePresence.div)`
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

const SocialIcons = styled(AnimatePresence.ul)`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcon = styled(AnimatePresence.li)`
  margin: 0 8px;
`;

const SocialLink = styled.a`
  color: #03fffb;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1, ease: 'easeInOut' } },
  };

  const socialIconVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
  };

  return (
    <FooterContainer>
      <Container
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <SocialIcons>
          {[{icon: FaGithub, href: "#"}, {icon: FaLinkedin, href: "#"}, {icon: FaTwitter, href: "#"}].map((social, index) => (
            <SocialIcon key={index} variants={socialIconVariants}>
              <SocialLink href={social.href}>
                <social.icon />
              </SocialLink>
            </SocialIcon>
          ))}
        </SocialIcons>
        <p>&copy; 2023 Mandip - Portfolio. All rights reserved.</p>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
