import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../../components/BugForm';

test('calls onSubmit with title and description', () => {
  const onSubmit = jest.fn();
  render(<BugForm onSubmit={onSubmit} />);
  fireEvent.change(screen.getByPlaceholderText(/Title/i), { target: { value: 'Bug 1' } });
  fireEvent.change(screen.getByPlaceholderText(/Description/i), { target: { value: 'Desc' } });
  fireEvent.click(screen.getByText(/Add Bug/i));
  expect(onSubmit).toHaveBeenCalledWith({ title: 'Bug 1', description: 'Desc' });
});