import { render } from '@testing-library/react';
import MainScreen from '../MainScreen';

describe('MainScreen', () => {
  it.skip('should render correctly', () => {
    const { container } = render(<MainScreen />);

    expect(container).toMatchSnapshot();
  });
});
