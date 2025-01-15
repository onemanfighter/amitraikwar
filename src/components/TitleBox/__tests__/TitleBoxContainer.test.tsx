import TitleBoxContainer from '../TitleBoxContainer';
import { renderWithProvidersAndRouter } from '../../../testUtils';

const title = 'Test Title';
const icon = 'test-icon';
const props = {
  title,
  icon,
  children: 'Test Children',
};

describe('TitleBoxContainer', () => {
  it('should set the document title', () => {
    const { container } = renderWithProvidersAndRouter(
      <TitleBoxContainer {...props} />,
    );

    expect(container).toMatchSnapshot();
  });
});
