import React, { lazy, Suspense, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as ThemeContextProvider, ThemeContext } from './contexts/ThemeContext';
import GlobalStyles, { lightTheme, darkTheme } from './components/GlobalStyles';
import Navigation from './components/Navigation';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
// Experience Section
const Experience = lazy(() => import('./components/Experience'));
// New Vibe-Coded Apps section
const VibeCodedApps = lazy(() => import('./components/VibeCodedApps'));
const Projects = lazy(() => import('./components/Projects'));
const Blog = lazy(() => import('./components/Blog'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // We can't use theme context here easily without another wrapper, so use neutral colors or keeping previous default
    backgroundColor: '#000',
    color: '#03fffb'
  }}>
    Loading...
  </div>
);

const AppContent = () => {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <ErrorBoundary>
        <GlobalStyles />
        <Navigation />
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <VibeCodedApps />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Blog />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </StyledThemeProvider>
  );
};

function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App;
