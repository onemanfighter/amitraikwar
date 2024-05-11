import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(<App />);

  expect(container).toMatchSnapshot();
  // [Todo]: Fix this test
  // expect(screen.getByText('App made by Amit')).toBeDefined();
});
