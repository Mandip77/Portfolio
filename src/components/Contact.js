import React from 'react';
import styled from 'styled-components';

import contactGif from '../assets/happy-hacker.gif';

const ContactSection = styled.section`
  background-color: #000;
  padding: 100px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 50px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: #03fffb;
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const ContactGif = styled.img`
  width: 80%;
  max-width: 300px;
  margin: 20px 0;
  @media (min-width: 769px) {
    margin-right: 40px;
    width: 300px;
  }
`;

const ContactForm = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const FormButton = styled.button`
  background-color: #00af91;
  color: #fff;
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007e68;
  }
`;

function Contact() {
  return (
    <ContactSection id="contact">
      <div className="container">
        <SectionTitle>Contact</SectionTitle>
        <ContactContainer>
          <ContactGif src={contactGif} alt="Happy Hacker GIF" />
          <ContactForm>
            <Form id="contact-form" method="POST">
              <FormInput type="text" name="name" placeholder="Your Name" required aria-label="Your Name" />
              <FormInput type="email" name="email" placeholder="Your Email" required aria-label="Your Email" />
              <FormTextarea name="message" placeholder="Your Message" required aria-label="Your Message"></FormTextarea>
              <FormButton type="submit">Send Message</FormButton>
            </Form>
          </ContactForm>
        </ContactContainer>
      </div>
    </ContactSection>
  );
}

export default Contact;
