import { render } from '@testing-library/react';
import LazyComponentProvider from '../LazyComponentProvider';

describe('LazyProvider', () => {
  it('should sets and render child correctly', () => {
    const { container } = render(
      <LazyComponentProvider>
        <div>Test</div>
      </LazyComponentProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
