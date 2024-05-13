import { render } from '@testing-library/react';
import { BirthdayIcon } from '../Birthday';
import { EmailIcon } from '../Email';
import { LocationIcon } from '../Location';
import { PhoneIcon } from '../Phone';

describe('Profile Icon', () => {
  it(' `BirthdayIcon` renders correctly', () => {
    const { container } = render(<BirthdayIcon />);

    expect(container).toMatchSnapshot();
  });

  it(' `EmailIcon` renders correctly', () => {
    const { container } = render(<EmailIcon />);

    expect(container).toMatchSnapshot();
  });

  it(' `LocationIcon` renders correctly', () => {
    const { container } = render(<LocationIcon />);

    expect(container).toMatchSnapshot();
  });

  it(' `PhoneIcon` renders correctly', () => {
    const { container } = render(<PhoneIcon />);

    expect(container).toMatchSnapshot();
  });
});
