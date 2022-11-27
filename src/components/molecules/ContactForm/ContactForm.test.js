import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('tests contactForm component', () => {
  test('render component', () => {
    render(<ContactForm />);
    const messageInput = screen.getByLabelText('Message:');
    const emailInput = screen.getByLabelText('Your email:');
    const nameInput = screen.getByLabelText('Your name:');
    const button = screen.getByRole('button', { name: 'Send me a message' });
    expect(messageInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('changes input value when user is typing', () => {
    render(<ContactForm />);
    const messageInput = screen.getByLabelText('Message:');
    const emailInput = screen.getByLabelText('Your email:');
    const nameInput = screen.getByLabelText('Your name:');
    expect(messageInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(nameInput.value).toBe('');
    fireEvent.change(nameInput, { target: { value: 'Michał Went' } });
    fireEvent.change(messageInput, { target: { value: 'Some kind of message' } });
    fireEvent.change(emailInput, { target: { value: 'abc@gmail.com' } });
    expect(messageInput.value).toBe('Some kind of message');
    expect(emailInput.value).toBe('abc@gmail.com');
    expect(nameInput.value).toBe('Michał Went');
  });

  test('clears input when message is sent', async () => {
    render(<ContactForm />);
    const messageInput = screen.getByLabelText('Message:');
    const emailInput = screen.getByLabelText('Your email:');
    const nameInput = screen.getByLabelText('Your name:');
    const button = screen.getByRole('button', { name: 'Send me a message' });
    fireEvent.change(nameInput, { target: { value: 'Michał Went' } });
    fireEvent.change(messageInput, { target: { value: 'Some kind of message' } });
    fireEvent.change(emailInput, { target: { value: 'abc@gmail.com' } });
    fireEvent.click(button);
    await waitFor(
      () => {
        expect(messageInput.value).toBe('');
      },
      { timeout: 3000 }
    );
    await waitFor(() => {
      expect(emailInput.value).toBe('');
    });
    await waitFor(() => {
      expect(nameInput.value).toBe('');
    });
  });

  test('shows information when required inputs are empty', () => {
    render(<ContactForm />);
    const messageInput = screen.getByLabelText('Message:');
    const button = screen.getByRole('button', { name: 'Send me a message' });
    const hiddenInfo = screen.queryByText('Field required');
    expect(hiddenInfo).not.toBeInTheDocument();
    fireEvent.change(messageInput, { target: { value: 'Some kind of message' } });
    fireEvent.click(button);
    const shownInfo = screen.getByText('Field required');
    expect(shownInfo).toBeInTheDocument();
  });
});
