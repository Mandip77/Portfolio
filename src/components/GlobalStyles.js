import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    box-sizing: border-box;
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
    background-color: #000;
    color: #fff;
    overflow-x: hidden; /* Prevent horizontal scroll */
  }

  /* Container for consistent spacing and alignment */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    color: #03fffb;
  }

  /* Heading styles */
  h1, h2, h3 {
    margin-bottom: 0.5em;
    color: #03fffb;
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
    color: #aaa;
  }

  /* Link styles */
  a {
    color: #03fffb;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #06d6a0;
    }
  }

  /* Button styles */
  button {
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    background-color: #03fffb;
    color: #000;
    font-size: 1em; /* 16px */
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #06d6a0;
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
