import React, { lazy, Suspense } from 'react';
import GlobalStyles from './components/GlobalStyles';
import Navigation from './components/Navigation';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    minHeight: '100vh', 
    backgroundColor: '#000', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    color: '#03fffb'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <GlobalStyles />
      <Navigation />
      <Hero />
      <Suspense fallback={null}>
        <About />
      </Suspense>
      <Suspense fallback={null}>
        <Skills />
      </Suspense>
      <Suspense fallback={null}>
        <Projects />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
