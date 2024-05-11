import { render } from '@testing-library/react';
import Projects from '../Projects';

describe('Projects', () => {
  it('should render correctly', () => {
    const { container } = render(<Projects />);

    expect(container).toMatchSnapshot();
  });
});
