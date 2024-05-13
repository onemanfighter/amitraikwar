import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from '../NavigationBar';
import { ThemeProvider } from '@providers';

describe('NavigationBar', () => {
  it('should renders correctly', () => {
    const { container } = render(
      <ThemeProvider>
        <BrowserRouter>
          <NavigationBar />
        </BrowserRouter>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should show all the navigation tabs', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <NavigationBar />
        </BrowserRouter>
      </ThemeProvider>,
    );

    expect(screen.findByText('Home')).toBeDefined();
    expect(screen.findByText('About')).toBeDefined();
    expect(screen.findByText('Experience')).toBeDefined();
    expect(screen.findByText('Blogs')).toBeDefined();
    expect(screen.findByText('Contact')).toBeDefined();
    expect(screen.findByText('Projects')).toBeDefined();
    expect(screen.findByText('Skills')).toBeDefined();
    expect(screen.findByText('Resume')).toBeDefined();
  });
});
