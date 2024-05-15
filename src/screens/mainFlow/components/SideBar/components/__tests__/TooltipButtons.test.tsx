import { fireEvent, render, screen } from '@testing-library/react';
import TooltipButtons from '../TooltipButtons';

const mockConsole = jest.spyOn(console, 'log');
describe('Tooltip buttons', () => {
  it('should renders correctly', () => {
    const { container } = render(<TooltipButtons />);

    expect(container).toMatchSnapshot();
  });

  it.skip('should open modal when search button is clicked', () => {
    render(<TooltipButtons />);

    fireEvent.click(screen.getByLabelText('Search'));

    expect(mockConsole).toHaveBeenCalledWith('Search button clicked');
  });
});
