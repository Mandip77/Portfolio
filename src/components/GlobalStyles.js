import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  body: '#08080e',
  text: '#f0f0fa',
  accent: '#8b5cf6',
  accentLight: '#a78bfa',
  accentCyan: '#22d3ee',
  accentLime: '#a3e635',
  secondaryText: '#8890a0',
  cardBg: 'rgba(14, 14, 26, 0.94)',
  cardBorder: 'rgba(139, 92, 246, 0.16)',
  buttonBg: '#8b5cf6',
  buttonText: '#ffffff',
  navBg: 'rgba(8, 8, 14, 0.88)',
  glowColor: 'rgba(139, 92, 246, 0.38)',
  surfaceHover: 'rgba(139, 92, 246, 0.09)',
  gridDot: 'rgba(139, 92, 246, 0.10)',
};

export const lightTheme = {
  body: '#f8f7ff',
  text: '#0e0e28',
  accent: '#7c3aed',
  accentLight: '#8b5cf6',
  accentCyan: '#0891b2',
  accentLime: '#65a30d',
  secondaryText: '#52527a',
  cardBg: 'rgba(255, 255, 255, 0.94)',
  cardBorder: 'rgba(124, 58, 237, 0.14)',
  buttonBg: '#7c3aed',
  buttonText: '#ffffff',
  navBg: 'rgba(248, 247, 255, 0.88)',
  glowColor: 'rgba(139, 92, 246, 0.22)',
  surfaceHover: 'rgba(124, 58, 237, 0.07)',
  gridDot: 'rgba(124, 58, 237, 0.07)',
};

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');

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
    /* Dot grid signature pattern */
    background-image: radial-gradient(circle, ${({ theme }) => theme.gridDot} 1px, transparent 1px);
    background-size: 26px 26px;
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
  a:hover { color: ${({ theme }) => theme.accentLight}; }

  button { font-family: inherit; cursor: pointer; }
  img, video { max-width: 100%; display: block; }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accent};
    border-radius: 3px;
    opacity: 0.6;
  }

  /* Section base */
  section {
    padding: 100px 0;
    @media (max-width: 768px) { padding: 64px 0; }
    @media (max-width: 480px) { padding: 48px 0; }
  }

  /* Sticky nav offset */
  section[id] { scroll-margin-top: 80px; }

  /* Section number decoration: add data-num="01" to Header wrapper */
  [data-num] {
    position: relative;
    overflow: visible;
  }
  [data-num]::before {
    content: attr(data-num);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    font-size: clamp(80px, 18vw, 160px);
    font-weight: 900;
    font-family: 'JetBrains Mono', monospace;
    color: ${({ theme }) => theme.accent};
    opacity: 0.045;
    pointer-events: none;
    user-select: none;
    letter-spacing: -0.06em;
    line-height: 1;
    white-space: nowrap;
    z-index: 0;
  }

  /* All direct children inside [data-num] sit above the ghost number */
  [data-num] > * { position: relative; z-index: 1; }

  /* Outline text utility: transparent fill, colored stroke */
  .text-outline {
    -webkit-text-stroke: 2px ${({ theme }) => theme.accent};
    color: transparent;
  }
  .text-outline-light {
    -webkit-text-stroke: 2px #ffffff60;
    color: transparent;
  }

  /* Gradient text */
  .gradient-text {
    background: linear-gradient(135deg, ${({ theme }) => theme.accent} 0%, ${({ theme }) => theme.accentCyan} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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
