import { render, screen } from '@testing-library/react';
import HeaderText from '../HeaderText';
import { ThemeProvider } from '@providers';
import { CSSReset } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

describe('Header Text', () => {
  it('should renders correctly', () => {
    const { container } = render(
      <ThemeProvider>
        <BrowserRouter>
          <HeaderText />
        </BrowserRouter>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render header text correctly', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <HeaderText />
        </BrowserRouter>
      </ThemeProvider>,
    );

    expect(screen.findByText('Amit Raikwar')).toBeDefined();
  });
});
