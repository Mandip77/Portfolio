import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 20px;
  background-color: #000;
  color: #fff;
  text-align: center;
`;

const ErrorTitle = styled.h1`
  font-size: 2.5rem;
  color: #ff6b6b;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 30px;
  max-width: 600px;
`;

const ErrorDetails = styled.pre`
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 8px;
  color: #ff6b6b;
  font-size: 0.9rem;
  max-width: 800px;
  overflow-x: auto;
  margin-bottom: 30px;
  text-align: left;
`;

const ReloadButton = styled.button`
  background-color: #03fffb;
  color: #000;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #04c3c5;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(3, 255, 251, 0.3);
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // You can also log the error to an error reporting service here
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>Oops! Something went wrong</ErrorTitle>
          <ErrorMessage>
            We're sorry, but something unexpected happened. Please try refreshing the page.
          </ErrorMessage>
          {this.state.error && (
            <ErrorDetails>
              {this.state.error.toString()}
              {this.state.errorInfo && `\n\n${this.state.errorInfo.componentStack}`}
            </ErrorDetails>
          )}
          <ReloadButton onClick={this.handleReload}>Reload Page</ReloadButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
