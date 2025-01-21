import { render, renderHook, screen } from '@testing-library/react';
import LocalizationProvider from '../LocalizationProvider';
import { useTranslation } from 'react-i18next';

describe('LocalizationProvider', () => {
  it('should render correctly', () => {
    const { result } = renderHook(() => useTranslation());
    const { container } = render(
      <LocalizationProvider>
        <div> {result.current.t('coverText.name')} </div>
      </LocalizationProvider>,
    );

    expect(container).toMatchSnapshot();
    expect(screen.getByText('Amit Raikwar')).toBeDefined();
  });
});
