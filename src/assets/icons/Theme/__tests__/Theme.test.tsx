import { render } from '@testing-library/react';
import { SunIcon } from '../Sun';
import { MoonIcon } from '../Moon';

describe('Theme Icon', () => {
  it(' `MoonIcon` renders correctly', () => {
    const { container } = render(<MoonIcon />);

    expect(container).toMatchSnapshot();
  });

  it(' `SunIcon` renders correctly', () => {
    const { container } = render(<SunIcon />);

    expect(container).toMatchSnapshot();
  });
});
