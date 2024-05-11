import { render } from '@testing-library/react';
import Resume from '../Resume';

describe('Resume', () => {
  it('should render correctly', () => {
    const { container } = render(<Resume />);

    expect(container).toMatchSnapshot();
  });
});
