import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

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
          {[{icon: FaGithub, href: "https://github.com/Mandip77"}, {icon: FaLinkedin, href: "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BAm%2F0Y%2BdCSUqnET6EflxAyw%3D%3D"}, {icon: FaTwitter, href: "https://twitter.com/renderingsoul8"}].map((social, index) => (
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
