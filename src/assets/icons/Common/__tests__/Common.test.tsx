import { render } from '@testing-library/react';
import { SearchIcon } from '../Search';

describe('Common Icon', () => {
  it(' `SearchIcon` renders correctly', () => {
    const { container } = render(<SearchIcon />);

    expect(container).toMatchSnapshot();
  });
});
