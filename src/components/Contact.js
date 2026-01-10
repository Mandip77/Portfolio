import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

import contactGif from '../assets/happy-hacker.gif';

const ContactSection = styled(motion.section)`
  background-color: #000;
  padding: 100px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 50px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 36px;
  margin-bottom: 40px;
  color: #03fffb;
`;

const ContactContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const ContactGif = styled(motion.img)`
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
  margin-bottom: ${({ $hasError }) => ($hasError ? '5px' : '20px')};
  border-radius: 4px;
  border: 1px solid ${({ $hasError }) => ($hasError ? '#ff6b6b' : '#333')};
  background-color: #0a0a0a;
  color: #fff;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ $hasError }) => ($hasError ? '#ff6b6b' : '#03fffb')};
    box-shadow: 0 0 0 2px ${({ $hasError }) => ($hasError ? 'rgba(255, 107, 107, 0.2)' : 'rgba(3, 255, 251, 0.2)')};
  }

  &::placeholder {
    color: #666;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px;
  margin-bottom: ${({ $hasError }) => ($hasError ? '5px' : '20px')};
  border-radius: 4px;
  border: 1px solid ${({ $hasError }) => ($hasError ? '#ff6b6b' : '#333')};
  background-color: #0a0a0a;
  color: #fff;
  font-size: 16px;
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ $hasError }) => ($hasError ? '#ff6b6b' : '#03fffb')};
    box-shadow: 0 0 0 2px ${({ $hasError }) => ($hasError ? 'rgba(255, 107, 107, 0.2)' : 'rgba(3, 255, 251, 0.2)')};
  }

  &::placeholder {
    color: #666;
  }
`;

const ErrorMessage = styled.p`
  color: #ff6b6b;
  font-size: 14px;
  margin-bottom: 15px;
  text-align: left;
`;

const CharacterCount = styled.p`
  color: #666;
  font-size: 12px;
  margin-bottom: 20px;
  text-align: right;
  margin-top: -15px;
`;

const FormButton = styled.button`
  background-color: #03fffb;
  color: #000;
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: #04c3c5;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(3, 255, 251, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid #03fffb;
    outline-offset: 2px;
  }
`;

const StatusMessage = styled.p`
  margin-top: 12px;
  color: ${({ $error }) => ($error ? '#ff6b6b' : '#20d62f')};
`;

// Email validation regex
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Message length constants
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 1000;

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  // Client-side EmailJS configuration (if using EmailJS service)
  const emailServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  // Validate form fields
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!validateEmail(value.trim())) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < MIN_MESSAGE_LENGTH) {
          error = `Message must be at least ${MIN_MESSAGE_LENGTH} characters`;
        } else if (value.trim().length > MAX_MESSAGE_LENGTH) {
          error = `Message must be no more than ${MAX_MESSAGE_LENGTH} characters`;
        }
        break;
      default:
        break;
    }

    return error;
  };

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validate on blur or after user starts typing
    if (errors[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  // Handle blur event for validation
  const handleBlur = (event) => {
    const { name, value } = event.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Update form data from form
    const formDataObj = new FormData(event.target);
    const updatedFormData = {
      name: formDataObj.get('name'),
      email: formDataObj.get('email'),
      message: formDataObj.get('message'),
    };
    setFormData(updatedFormData);

    // Validate form
    if (!validateForm()) {
      setStatus({ type: 'error', message: 'Please fix the errors before submitting.' });
      return;
    }

    setIsSending(true);
    setStatus({ type: null, message: '' });

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setStatus({ type: 'error', message: 'Email service not configured. Please set EmailJS env vars.' });
      setIsSending(false);
      return;
    }

    try {
      const payload = {
        service_id: emailServiceId,
        template_id: emailTemplateId,
        user_id: emailPublicKey,
        template_params: {
          name: updatedFormData.name,
          email: updatedFormData.email,
          message: updatedFormData.message,
        },
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const text = await response.text().catch(() => '');
        throw new Error(text || 'Failed to send message');
      }

      setStatus({ type: 'success', message: 'Message sent! I will get back to you soon.' });
      event.target.reset();
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSending(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <ContactSection 
      id="contact"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isSectionVisible ? "visible" : "hidden"}
    >
      <div className="container">
        <SectionTitle variants={itemVariants}>Contact</SectionTitle>
        <ContactContainer variants={containerVariants}>
          <ContactGif 
            src={contactGif} 
            alt="Happy Hacker GIF" 
            loading="lazy"
            variants={itemVariants}
          />
          <ContactForm>
            <Form id="contact-form" onSubmit={handleSubmit}>
              <div>
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  $hasError={!!errors.name}
                  required
                  aria-label="Your Name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <ErrorMessage id="name-error">{errors.name}</ErrorMessage>}
              </div>
              <div>
                <FormInput
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  $hasError={!!errors.email}
                  required
                  aria-label="Your Email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <ErrorMessage id="email-error">{errors.email}</ErrorMessage>}
              </div>
              <div>
                <FormTextarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  $hasError={!!errors.message}
                  required
                  aria-label="Your Message"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : 'message-count'}
                  maxLength={MAX_MESSAGE_LENGTH}
                />
                {errors.message ? (
                  <ErrorMessage id="message-error">{errors.message}</ErrorMessage>
                ) : (
                  <CharacterCount id="message-count">
                    {formData.message.length} / {MAX_MESSAGE_LENGTH} characters
                  </CharacterCount>
                )}
              </div>
              <FormButton type="submit" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'}
              </FormButton>
              {status.message && (
                <StatusMessage $error={status.type === 'error'}>
                  {status.message}
                </StatusMessage>
              )}
            </Form>
          </ContactForm>
        </ContactContainer>
      </div>
    </ContactSection>
  );
}

export default Contact;
