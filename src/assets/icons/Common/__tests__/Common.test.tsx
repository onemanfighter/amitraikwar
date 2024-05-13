import { render } from '@testing-library/react';
import { SearchIcon } from '../Search';
import { ThreeDIcon } from '../3D';
import { TwoDIcon } from '../2D';

describe('Common Icon', () => {
  it(' `SearchIcon` renders correctly', () => {
    const { container } = render(<SearchIcon />);

    expect(container).toMatchSnapshot();
  });

  it(' `ThreeDIcon` renders correctly', () => {
    const { container } = render(<ThreeDIcon />);

    expect(container).toMatchSnapshot();
  });

  it(' `TwoDIcon` renders correctly', () => {
    const { container } = render(<TwoDIcon />);

    expect(container).toMatchSnapshot();
  });
});
