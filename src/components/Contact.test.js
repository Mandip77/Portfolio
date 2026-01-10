import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

describe('Contact form', () => {
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

  test('submits via EmailJS and shows success message', async () => {
    const fetchMock = jest.fn().mockResolvedValue({ ok: true });
    global.fetch = fetchMock;

    render(<Contact />);

    await userEvent.type(screen.getByLabelText(/your name/i), 'Jane User');
    await userEvent.type(screen.getByLabelText(/your email/i), 'jane@example.com');
    await userEvent.type(screen.getByLabelText(/your message/i), 'Hello there');

    await userEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(fetchMock).toHaveBeenCalledWith(EMAILJS_ENDPOINT, expect.objectContaining({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }));

    // Body contains the template params we send to EmailJS
    const [, fetchInit] = fetchMock.mock.calls[0];
    const body = JSON.parse(fetchInit.body);
    expect(body.template_params).toMatchObject({
      from_name: 'Jane User',
      reply_to: 'jane@example.com',
      message: 'Hello there',
    });

    expect(await screen.findByText(/message sent/i)).toBeInTheDocument();
  });

  test('shows error message when EmailJS returns failure', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false });

    render(<Contact />);

    await userEvent.type(screen.getByLabelText(/your name/i), 'Jane User');
    await userEvent.type(screen.getByLabelText(/your email/i), 'jane@example.com');
    await userEvent.type(screen.getByLabelText(/your message/i), 'Hello there');

    await userEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
  });

  test('blocks submit when EmailJS config is missing', async () => {
    process.env = originalEnv; // simulate missing env vars
    const fetchMock = jest.fn();
    global.fetch = fetchMock;

    render(<Contact />);

    await userEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(fetchMock).not.toHaveBeenCalled();
    expect(screen.getByText(/not configured/i)).toBeInTheDocument();
  });
});
