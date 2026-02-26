import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#f4f4f4',
    text: '#121212',
    accent: '#008080', // Teal
    secondaryText: '#555',
    cardBg: '#fff',
    cardBorder: '#ddd',
    buttonBg: '#008080',
    buttonText: '#fff',
    navBg: '#fff',
};

export const darkTheme = {
    body: '#020617', // Very dark slate/blue for cybersecurity feel
    text: '#e2e8f0',
    accent: '#00ffcc', // Bright neon cyan/green
    secondaryText: '#94a3b8',
    cardBg: '#0f172a',
    cardBorder: '#1e293b',
    buttonBg: '#00ffcc',
    buttonText: '#020617',
    navBg: '#020617',
};

const GlobalStyles = createGlobalStyle`
    /* Reset CSS */
    *, *::before, *::after {
        box-sizing: border-box;
    }

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: ${({ theme }) => theme.accent} }
    }

    .terminal-text {
        overflow: hidden;
        border-right: .15em solid ${({ theme }) => theme.accent};
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .15em;
        animation: 
            typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
    }

    html, body {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth; /* Smooth scrolling */
    }

    body {
        font-family: 'Roboto', Arial, sans-serif;
        font-size: 16px;
        line-height: 1.6;
        font-weight: 400;
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: background-color 0.3s ease, color 0.3s ease;
        overflow-x: hidden; /* Prevent horizontal scroll */
    }

    /* Container for consistent spacing and alignment */
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        color: ${({ theme }) => theme.accent};
    }

    /* Heading styles */
    h1, h2, h3 {
        margin-bottom: 0.5em;
        color: ${({ theme }) => theme.accent};
    }

    h1 {
        font-size: 2.25em; /* 36px */
        font-weight: 700;
    }

    h2 {
        font-size: 1.5em; /* 24px */
        font-weight: 600;
    }

    h3 {
        font-size: 1.25em; /* 20px */
        font-weight: 500;
    }

    /* Paragraph styles */
    p {
        font-size: 1em; /* 16px */
        margin-bottom: 1em;
        color: ${({ theme }) => theme.secondaryText};
    }

    /* Link styles */
    a {
        color: ${({ theme }) => theme.accent};
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            opacity: 0.8;
        }
    }

    /* Button styles */
    button {
        padding: 12px 24px;
        border: none;
        border-radius: 4px;
        background-color: ${({ theme }) => theme.buttonBg};
        color: ${({ theme }) => theme.buttonText};
        font-size: 1em; /* 16px */
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
            opacity: 0.9;
        }
    }

    /* Responsive typography */
    @media (max-width: 768px) {
        body {
            font-size: 14px;
        }

        h1 {
            font-size: 2em; /* 28px */
        }

        h2 {
            font-size: 1.75em; /* 24px */
        }

        h3 {
            font-size: 1.5em; /* 20px */
        }
    }

    /* Additional custom styles */
    /* Add your custom styles here */

`;

export default GlobalStyles;
