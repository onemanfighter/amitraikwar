import { render } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact', () => {
  it('should render correctly', () => {
    const { container } = render(<Contact />);

    expect(container).toMatchSnapshot();
  });
});
