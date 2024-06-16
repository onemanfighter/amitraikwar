import { render } from '@testing-library/react';
import TooltipButtons from '../TooltipButtons';

describe('Tooltip buttons', () => {
  it('should renders correctly', () => {
    const { container } = render(<TooltipButtons />);

    expect(container).toMatchSnapshot();
  });
});
