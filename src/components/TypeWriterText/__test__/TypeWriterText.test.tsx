import { render } from '@testing-library/react';
import TypeWriterText from '../TypeWriterText';

jest.mock('react-type-animation', () => ({
  TypeAnimation: ({
    fixedText,
    textSequence,
  }: {
    fixedText: string;
    textSequence: Array<{ text: string; wait: number }>;
  }) => <div>{fixedText}</div>,
}));

describe('TypeWriterText', () => {
  it('should renders correctly', async () => {
    const { container } = render(
      <TypeWriterText
        fixedText="Hello"
        textSequence={[
          {
            text: 'World',
            wait: 2000,
          },
        ]}
      />,
    );

    jest.runAllTimersAsync();

    expect(container).toMatchSnapshot();
  });

  it('should renders correctly with empty text', async () => {
    const { container } = render(
      <TypeWriterText fixedText="" textSequence={[]} />,
    );

    jest.runAllTimersAsync();

    expect(container).toMatchSnapshot();
  });

  it('should renders correctly with empty textSequence', async () => {
    const { container } = render(
      <TypeWriterText fixedText="Hello" textSequence={[]} />,
    );

    jest.runAllTimersAsync();

    expect(container).toMatchSnapshot();
  });
});
