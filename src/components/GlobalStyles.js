import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  body: '#07070f',
  text: '#e8eaf6',
  accent: '#6366f1',
  accentLight: '#818cf8',
  accentCyan: '#22d3ee',
  secondaryText: '#8892a4',
  cardBg: 'rgba(13, 13, 30, 0.92)',
  cardBorder: 'rgba(99, 102, 241, 0.18)',
  buttonBg: '#6366f1',
  buttonText: '#ffffff',
  navBg: 'rgba(7, 7, 15, 0.85)',
  glowColor: 'rgba(99, 102, 241, 0.4)',
  surfaceHover: 'rgba(99, 102, 241, 0.08)',
};

export const lightTheme = {
  body: '#f3f3ff',
  text: '#0f0f2e',
  accent: '#4f46e5',
  accentLight: '#6366f1',
  accentCyan: '#0891b2',
  secondaryText: '#525270',
  cardBg: 'rgba(255, 255, 255, 0.92)',
  cardBorder: 'rgba(79, 70, 229, 0.15)',
  buttonBg: '#4f46e5',
  buttonText: '#ffffff',
  navBg: 'rgba(243, 243, 255, 0.85)',
  glowColor: 'rgba(99, 102, 241, 0.2)',
  surfaceHover: 'rgba(79, 70, 229, 0.06)',
};

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 400;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: ${({ theme }) => theme.accent};
    color: #fff;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
  }

  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.accentLight};
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  img, video {
    max-width: 100%;
    display: block;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.body};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accent};
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.accentLight};
  }

  /* Section base */
  section {
    padding: 100px 0;

    @media (max-width: 768px) {
      padding: 64px 0;
    }

    @media (max-width: 480px) {
      padding: 48px 0;
    }
  }

  /* Offset for sticky 68px nav */
  section[id] {
    scroll-margin-top: 80px;
  }

  /* Section label */
  .section-label {
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.accent};
    margin-bottom: 12px;
    font-family: 'JetBrains Mono', monospace;
  }

  /* Gradient text utility */
  .gradient-text {
    background: linear-gradient(135deg, ${({ theme }) => theme.accent} 0%, ${({ theme }) => theme.accentCyan} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Glass card base */
  .glass {
    background: ${({ theme }) => theme.cardBg};
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid ${({ theme }) => theme.cardBorder};
    border-radius: 16px;
  }

  /* Glow line separator */
  .glow-line {
    height: 1px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.accent}, transparent);
    border: none;
    margin: 0;
  }
`;

export default GlobalStyles;
