import { render, screen, waitFor } from '@testing-library/react';
import App from '../../App';
import axios from 'axios';

jest.mock('axios');

test('renders bugs from API', async () => {
  axios.get.mockResolvedValue({ data: [{ _id: '1', title: 'Bug 1', status: 'open' }] });
  render(<App />);
  await waitFor(() => expect(screen.getByText('Bug 1')).toBeInTheDocument());
});