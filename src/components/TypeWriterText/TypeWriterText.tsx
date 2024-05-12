import { TypeAnimation } from 'react-type-animation';
import { Speed, TypeWriterTextProps } from './type';
import { TransformToSpeed } from './constants';

const TypeWriterText = ({
  fixedText,
  textSequence,
  wrapper = 'span',
  typeSpeed = Speed.medium,
  deleteSpeed = Speed.medium,
  styles = { fontSize: '1em', display: 'inline-block' },
}: TypeWriterTextProps) => {
  const sequence = textSequence.flatMap(({ text, wait }) => [
    fixedText + text,
    wait,
  ]);

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper={wrapper}
      speed={TransformToSpeed[typeSpeed]}
      deletionSpeed={TransformToSpeed[deleteSpeed]}
      style={styles}
      repeat={Infinity}
    />
  );
};

export default TypeWriterText;
