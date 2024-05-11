import { render } from '@testing-library/react';
import MainScreen from '../MainScreen';

describe('MainScreen', () => {
  it('should render correctly', () => {
    const { container } = render(<MainScreen />);

    expect(container).toMatchSnapshot();
  });
});
