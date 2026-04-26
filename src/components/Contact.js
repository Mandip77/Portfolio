import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Section = styled(motion.section)`
  background-color: transparent;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

const SectionLabel = styled.div`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent};
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 12px;
`;

const Heading = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.text};
`;

const GradientSpan = styled.span`
  background: linear-gradient(135deg, ${({ theme }) => theme.accent} 0%, ${({ theme }) => theme.accentCyan} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 56px;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const InfoCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const InfoHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.02em;
`;

const InfoText = styled.p`
  font-size: 15px;
  line-height: 1.75;
  color: ${({ theme }) => theme.secondaryText};
`;

const SocialList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 12px;
  text-decoration: none;
  color: ${({ theme }) => theme.secondaryText};
  font-size: 14px;
  font-weight: 500;
  transition: all 0.22s ease;
  backdrop-filter: blur(12px);

  svg {
    font-size: 18px;
    color: ${({ theme }) => theme.accent};
    flex-shrink: 0;
  }

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.text};
    transform: translateX(4px);
    box-shadow: 0 4px 20px ${({ theme }) => theme.glowColor};
  }
`;

const FormCol = styled(motion.div)``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.secondaryText};
  letter-spacing: 0.03em;
`;

const inputBase = ({ $hasError, theme }) => `
  width: 100%;
  min-height: 48px;
  padding: 13px 16px;
  background: ${theme.cardBg};
  border: 1px solid ${$hasError ? '#f87171' : theme.cardBorder};
  border-radius: 12px;
  color: ${theme.text};
  font-size: 16px;
  font-family: inherit;
  outline: none;
  backdrop-filter: blur(12px);
  -webkit-appearance: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder { color: ${theme.secondaryText}; opacity: 0.6; }

  &:focus {
    border-color: ${$hasError ? '#f87171' : theme.accent};
    box-shadow: 0 0 0 3px ${$hasError ? 'rgba(248,113,113,0.15)' : `${theme.accent}25`};
  }
`;

const Input = styled.input`${(props) => inputBase(props)}`;
const Textarea = styled.textarea`
  ${(props) => inputBase(props)}
  height: 140px;
  resize: vertical;
`;

const ErrorMsg = styled.p`
  font-size: 12px;
  color: #f87171;
  margin: 0;
`;

const CharCount = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.secondaryText};
  text-align: right;
  margin: 0;
`;

const SubmitBtn = styled.button`
  min-height: 48px;
  padding: 14px 32px;
  background: ${({ theme }) => theme.accent};
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.22s ease;
  align-self: flex-start;
  -webkit-tap-highlight-color: transparent;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 8px 28px ${({ theme }) => theme.glowColor};
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const StatusMsg = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ $error }) => $error ? '#f87171' : '#4ade80'};
  margin: 0;
`;

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const MIN_MSG = 10;
const MAX_MSG = 1000;

const socialLinks = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Mandip77', text: 'github.com/Mandip77' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/mandip-amgain', text: 'linkedin.com/in/mandip-amgain' },
  { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/renderingsoul8', text: '@renderingsoul8' },
  { icon: FaEnvelope, label: 'Email', href: 'mailto:amgain.m@northeastern.edu', text: 'amgain.m@northeastern.edu' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const slideRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.08, triggerOnce: true });

  const emailServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const validateField = (name, value) => {
    if (name === 'name') {
      if (!value.trim()) return 'Name is required';
      if (value.trim().length < 2) return 'Name must be at least 2 characters';
    }
    if (name === 'email') {
      if (!value.trim()) return 'Email is required';
      if (!validateEmail(value.trim())) return 'Please enter a valid email address';
    }
    if (name === 'message') {
      if (!value.trim()) return 'Message is required';
      if (value.trim().length < MIN_MSG) return `Message must be at least ${MIN_MSG} characters`;
      if (value.trim().length > MAX_MSG) return `Message cannot exceed ${MAX_MSG} characters`;
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };
    setErrors(newErrors);
    if (newErrors.name || newErrors.email || newErrors.message) {
      setStatus({ type: 'error', message: 'Please fix the errors above.' });
      return;
    }

    setIsSending(true);
    setStatus({ type: null, message: '' });

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setStatus({ type: 'error', message: 'Email service not configured.' });
      setIsSending(false);
      return;
    }

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: emailServiceId,
          template_id: emailTemplateId,
          user_id: emailPublicKey,
          template_params: formData,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus({ type: 'success', message: 'Message sent! I\'ll get back to you soon.' });
      e.target.reset();
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section
      id="contact"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isSectionVisible ? 'visible' : 'hidden'}
    >
      <Inner>
        <Header data-num="06">
          <SectionLabel>Get In Touch</SectionLabel>
          <Heading>
            Let's <GradientSpan>Connect</GradientSpan>
          </Heading>
        </Header>

        <Grid>
          <InfoCol variants={slideLeft}>
            <InfoHeading>Open to opportunities</InfoHeading>
            <InfoText>
              I'm actively looking for entry-level security analyst and penetration testing roles. Whether you have a job opportunity, want to collaborate on a project, or just want to say hi my inbox is always open.
            </InfoText>
            <SocialList>
              {socialLinks.map(({ icon: Icon, label, href, text }) => (
                <SocialLink key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon />
                  {text}
                </SocialLink>
              ))}
            </SocialList>
          </InfoCol>

          <FormCol variants={slideRight}>
            <Form id="contact-form" onSubmit={handleSubmit} noValidate>
              <FieldWrap>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  $hasError={!!errors.name}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  required
                />
                {errors.name && <ErrorMsg id="name-error">{errors.name}</ErrorMsg>}
              </FieldWrap>

              <FieldWrap>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  $hasError={!!errors.email}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  required
                />
                {errors.email && <ErrorMsg id="email-error">{errors.email}</ErrorMsg>}
              </FieldWrap>

              <FieldWrap>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about the opportunity or project..."
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  $hasError={!!errors.message}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : 'message-count'}
                  maxLength={MAX_MSG}
                  required
                />
                {errors.message
                  ? <ErrorMsg id="message-error">{errors.message}</ErrorMsg>
                  : <CharCount id="message-count">{formData.message.length} / {MAX_MSG}</CharCount>
                }
              </FieldWrap>

              <SubmitBtn type="submit" disabled={isSending}>
                {isSending ? 'Sending…' : 'Send Message →'}
              </SubmitBtn>

              {status.message && (
                <StatusMsg $error={status.type === 'error'}>{status.message}</StatusMsg>
              )}
            </Form>
          </FormCol>
        </Grid>
      </Inner>
    </Section>
  );
}

export default Contact;
