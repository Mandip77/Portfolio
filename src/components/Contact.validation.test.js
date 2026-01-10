import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

// Mock EmailJS to avoid actual API calls during testing
global.fetch = jest.fn();

describe('Contact Form Validation', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetAllMocks();
    process.env = {
      ...originalEnv,
      REACT_APP_EMAILJS_SERVICE_ID: 'service_test',
      REACT_APP_EMAILJS_TEMPLATE_ID: 'template_test',
      REACT_APP_EMAILJS_PUBLIC_KEY: 'public_test',
    };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('Name Validation', () => {
    test('shows error when name is empty', async () => {
      render(<Contact />);

      const nameInput = screen.getByLabelText(/your name/i);
      
      // Click and blur without entering anything
      await userEvent.click(nameInput);
      await userEvent.click(screen.getByLabelText(/your email/i)); // Move to next field

      await waitFor(() => {
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      });
      expect(nameInput).toHaveAttribute('aria-invalid', 'true');
    });

    test('shows error when name is less than 2 characters', async () => {
      render(<Contact />);

      const nameInput = screen.getByLabelText(/your name/i);
      
      await userEvent.type(nameInput, 'A');
      await userEvent.click(screen.getByLabelText(/your email/i)); // Blur by clicking next field

      await waitFor(() => {
        expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
      });
      expect(nameInput).toHaveAttribute('aria-invalid', 'true');
    });

    test('accepts valid name (2+ characters)', async () => {
      render(<Contact />);

      const nameInput = screen.getByLabelText(/your name/i);
      
      await userEvent.type(nameInput, 'John Doe');
      await userEvent.click(screen.getByLabelText(/your email/i)); // Blur by clicking next field

      await waitFor(() => {
        const errorMessage = screen.queryByText(/name/i);
        expect(errorMessage).not.toBeInTheDocument();
      });
      expect(nameInput).toHaveAttribute('aria-invalid', 'false');
    });

    test('validates name on blur', async () => {
      render(<Contact />);

      const nameInput = screen.getByLabelText(/your name/i);
      
      await userEvent.type(nameInput, 'A');
      await userEvent.click(screen.getByLabelText(/your email/i)); // Blur by clicking next field

      await waitFor(() => {
        expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
      });
    });
  });

  describe('Email Validation', () => {
    test('shows error when email is empty', async () => {
      
      render(<Contact />);

      const emailInput = screen.getByLabelText(/your email/i);
      
      await userEvent.click(emailInput);
      fireEvent.blur(emailInput);

      await waitFor(() => {
        expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      });
      expect(emailInput).toHaveAttribute('aria-invalid', 'true');
    });

    test('shows error for invalid email format', async () => {
      
      render(<Contact />);

      const emailInput = screen.getByLabelText(/your email/i);
      
      const invalidEmails = [
        'invalid',
        'invalid@',
        '@invalid.com',
        'invalid@.com',
        'invalid.com',
        'invalid@com',
      ];

      for (const email of invalidEmails) {
        await userEvent.clear(emailInput);
        await userEvent.type(emailInput, email);
        fireEvent.blur(nameInput || emailInput || messageInput);

        await waitFor(() => {
          expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
        });
        expect(emailInput).toHaveAttribute('aria-invalid', 'true');
      }
    });

    test('accepts valid email format', async () => {
      
      render(<Contact />);

      const emailInput = screen.getByLabelText(/your email/i);
      
      const validEmails = [
        'test@example.com',
        'user.name@example.co.uk',
        'user+tag@example.com',
        'user123@test-domain.com',
      ];

      for (const email of validEmails) {
        await userEvent.clear(emailInput);
        await userEvent.type(emailInput, email);
        fireEvent.blur(nameInput || emailInput || messageInput);

        await waitFor(() => {
          const errorMessage = screen.queryByText(/email/i);
          expect(errorMessage).not.toBeInTheDocument();
        });
        expect(emailInput).toHaveAttribute('aria-invalid', 'false');
      }
    });

    test('validates email on blur', async () => {
      
      render(<Contact />);

      const emailInput = screen.getByLabelText(/your email/i);
      
      await userEvent.type(emailInput, 'invalid-email');
      fireEvent.blur(nameInput || emailInput || messageInput);

      await waitFor(() => {
        expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
      });
    });
  });

  describe('Message Validation', () => {
    test('shows error when message is empty', async () => {
      
      render(<Contact />);

      const messageInput = screen.getByLabelText(/your message/i);
      
      await userEvent.click(messageInput);
      fireEvent.blur(messageInput);

      await waitFor(() => {
        expect(screen.getByText(/message is required/i)).toBeInTheDocument();
      });
      expect(messageInput).toHaveAttribute('aria-invalid', 'true');
    });

    test('shows error when message is less than 10 characters', async () => {
      
      render(<Contact />);

      const messageInput = screen.getByLabelText(/your message/i);
      
      await userEvent.type(messageInput, 'Short');
      fireEvent.blur(messageInput);

      await waitFor(() => {
        expect(screen.getByText(/message must be at least 10 characters/i)).toBeInTheDocument();
      });
      expect(messageInput).toHaveAttribute('aria-invalid', 'true');
    });

    test('shows error when message exceeds 1000 characters', async () => {
      
      render(<Contact />);

      const messageInput = screen.getByLabelText(/your message/i);
      
      // Create a message with 1001 characters
      const longMessage = 'a'.repeat(1001);
      await userEvent.type(messageInput, longMessage);
      fireEvent.blur(messageInput);

      await waitFor(() => {
        expect(screen.getByText(/message must be no more than 1000 characters/i)).toBeInTheDocument();
      });
      expect(messageInput).toHaveAttribute('aria-invalid', 'true');
    });

    test('accepts valid message (10-1000 characters)', async () => {
      
      render(<Contact />);

      const messageInput = screen.getByLabelText(/your message/i);
      
      await userEvent.type(messageInput, 'This is a valid message that is long enough.');
      fireEvent.blur(messageInput);

      await waitFor(() => {
        const errorMessage = screen.queryByText(/message/i);
        // Should not show error, but might show character count
        const errorText = screen.queryByText(/must be/i);
        expect(errorText).not.toBeInTheDocument();
      });
      expect(messageInput).toHaveAttribute('aria-invalid', 'false');
    });

    test('validates message on blur', async () => {
      
      render(<Contact />);

      const messageInput = screen.getByLabelText(/your message/i);
      
      await userEvent.type(messageInput, 'Short');
      fireEvent.blur(messageInput);

      await waitFor(() => {
        expect(screen.getByText(/message must be at least 10 characters/i)).toBeInTheDocument();
      });
    });
  });

  describe('Character Counter', () => {
    test('displays character count for message field', async () => {
      
      render(<Contact />);

      const messageInput = screen.getByLabelText(/your message/i);
      
      await userEvent.type(messageInput, 'Hello world!');
      
      await waitFor(() => {
        expect(screen.getByText(/12 \/ 1000 characters/i)).toBeInTheDocument();
      });
    });

    test('updates character count as user types', async () => {
      
      render(<Contact />);

      const messageInput = screen.getByLabelText(/your message/i);
      
      await userEvent.type(messageInput, 'Hi');
      expect(screen.getByText(/2 \/ 1000 characters/i)).toBeInTheDocument();
      
      await userEvent.type(messageInput, ' there!');
      await waitFor(() => {
        expect(screen.getByText(/10 \/ 1000 characters/i)).toBeInTheDocument();
      });
    });

    test('shows correct count at maximum length', async () => {
      
      render(<Contact />);

      const messageInput = screen.getByLabelText(/your message/i);
      
      const maxMessage = 'a'.repeat(1000);
      await userEvent.type(messageInput, maxMessage);
      
      await waitFor(() => {
        expect(screen.getByText(/1000 \/ 1000 characters/i)).toBeInTheDocument();
      });
    });
  });

  describe('Visual Error Indicators', () => {
    test('shows red border on invalid name field', async () => {
      
      render(<Contact />);

      const nameInput = screen.getByLabelText(/your name/i);
      
      await userEvent.type(nameInput, 'A');
      await userEvent.click(screen.getByLabelText(/your email/i)); // Blur by clicking next field

      await waitFor(() => {
        // Check that the styled component receives the error prop
        expect(nameInput).toHaveAttribute('aria-invalid', 'true');
      });
    });

    test('shows red border on invalid email field', async () => {
      
      render(<Contact />);

      const emailInput = screen.getByLabelText(/your email/i);
      
      await userEvent.type(emailInput, 'invalid-email');
      fireEvent.blur(nameInput || emailInput || messageInput);

      await waitFor(() => {
        expect(emailInput).toHaveAttribute('aria-invalid', 'true');
      });
    });

    test('shows red border on invalid message field', async () => {
      
      render(<Contact />);

      const messageInput = screen.getByLabelText(/your message/i);
      
      await userEvent.type(messageInput, 'Short');
      fireEvent.blur(messageInput);

      await waitFor(() => {
        expect(messageInput).toHaveAttribute('aria-invalid', 'true');
      });
    });
  });

  describe('Form Submission', () => {
    test('prevents submission with invalid data', async () => {
      
      global.fetch = jest.fn().mockResolvedValue({ ok: true });
      
      render(<Contact />);

      const nameInput = screen.getByLabelText(/your name/i);
      const emailInput = screen.getByLabelText(/your email/i);
      const messageInput = screen.getByLabelText(/your message/i);
      const submitButton = screen.getByRole('button', { name: /send message/i });

      // Fill with invalid data
      await userEvent.type(nameInput, 'A'); // Too short
      await userEvent.type(emailInput, 'invalid'); // Invalid email
      await userEvent.type(messageInput, 'Short'); // Too short

      await userEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/please fix the errors before submitting/i)).toBeInTheDocument();
      });

      expect(global.fetch).not.toHaveBeenCalled();
    });

    test('allows submission with valid data', async () => {
      
      global.fetch = jest.fn().mockResolvedValue({ ok: true });
      
      render(<Contact />);

      const nameInput = screen.getByLabelText(/your name/i);
      const emailInput = screen.getByLabelText(/your email/i);
      const messageInput = screen.getByLabelText(/your message/i);
      const submitButton = screen.getByRole('button', { name: /send message/i });

      // Fill with valid data
      await userEvent.type(nameInput, 'John Doe');
      await userEvent.type(emailInput, 'john@example.com');
      await userEvent.type(messageInput, 'This is a valid message that meets all requirements.');

      await userEvent.click(submitButton);

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText(/message sent/i)).toBeInTheDocument();
      });
    });

    test('clears errors and resets form after successful submission', async () => {
      
      global.fetch = jest.fn().mockResolvedValue({ ok: true });
      
      render(<Contact />);

      const nameInput = screen.getByLabelText(/your name/i);
      const emailInput = screen.getByLabelText(/your email/i);
      const messageInput = screen.getByLabelText(/your message/i);
      const submitButton = screen.getByRole('button', { name: /send message/i });

      await userEvent.type(nameInput, 'John Doe');
      await userEvent.type(emailInput, 'john@example.com');
      await userEvent.type(messageInput, 'This is a valid message that meets all requirements.');

      await userEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/message sent/i)).toBeInTheDocument();
      });

      // Form should be reset
      expect(nameInput.value).toBe('');
      expect(emailInput.value).toBe('');
      expect(messageInput.value).toBe('');
    });
  });

  describe('Real-time Validation', () => {
    test('validates on input change after initial error', async () => {
      
      render(<Contact />);

      const nameInput = screen.getByLabelText(/your name/i);
      
      // Create error first
      await userEvent.type(nameInput, 'A');
      await userEvent.click(screen.getByLabelText(/your email/i)); // Blur by clicking next field
      
      await waitFor(() => {
        expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
      });

      // Fix the error
      await userEvent.type(nameInput, 'ndrew');
      
      await waitFor(() => {
        expect(screen.queryByText(/name must be at least 2 characters/i)).not.toBeInTheDocument();
      });
    });

    test('does not show error until field is touched (blurred)', async () => {
      
      render(<Contact />);

      const nameInput = screen.getByLabelText(/your name/i);
      
      // Type invalid data but don't blur
      await userEvent.type(nameInput, 'A');
      
      // Should not show error yet
      expect(screen.queryByText(/name must be at least 2 characters/i)).not.toBeInTheDocument();
      
      // Blur to trigger validation
      fireEvent.blur(nameInput);
      
      await waitFor(() => {
        expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
      });
    });
  });
});
