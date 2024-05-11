import { render } from '@testing-library/react';
import Experience from '../Experience';

describe('Experience', () => {
  it('should render correctly', () => {
    const { container } = render(<Experience />);

    expect(container).toMatchSnapshot();
  });
});
