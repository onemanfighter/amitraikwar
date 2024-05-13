import { render } from '@testing-library/react';
import SideBar from '../SideBar';
import { ThemeProvider } from '@providers';
import { BrowserRouter } from 'react-router-dom';

describe('Side bar', () => {
  it('should renders correctly', () => {
    const { container } = render(
      <ThemeProvider>
        <BrowserRouter>
          <SideBar />
        </BrowserRouter>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
