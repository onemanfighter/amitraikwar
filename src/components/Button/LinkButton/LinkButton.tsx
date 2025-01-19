import { Button, Text } from '@chakra-ui/react';
import { LinkButtonProps } from './types';
import { ArrowIcon } from '@assets';
import { useCursor } from '../../Cursor';
import { useRef, useState } from 'react';

const LinkButton = ({
  text,
  href,
  animationOnHover,
  withUnderline,
  withArrow,
  fontSize,
}: LinkButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { setCursorInsets } = useCursor();
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    const { width, height, top, left } =
      ref.current?.getBoundingClientRect() || {
        width: 56,
        height: 56,
        top: 0,
        left: 0,
      };
    setCursorInsets(undefined);
    setTimeout(() => {
      setCursorInsets({ height, width, top, left, borderRadius: '5px' });
    }, 0);
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setCursorInsets(undefined);
    setIsHovered(false);
  };

  const translationProps = isHovered
    ? {
        transform: 'translateY(16px)',
        transition: 'transform 0.2s',
      }
    : {
        transform: 'translateY(-15px)',
        transition: 'transform 0.2s',
      };

  return (
    <Button
      ref={ref}
      flexDir={'column'}
      as="a"
      href={href}
      bg={'transparent'}
      color={'white'}
      colorScheme="violet"
      fontSize={fontSize}
      fontWeight={'300'}
      borderRadius={0}
      overflow={'clip'}
      px={2}
      maxHeight={'7'}
      _hover={{ color: 'violet' }}
      borderBottom={withUnderline ? '1px solid white' : 'none'}
      rightIcon={withArrow ? <ArrowIcon /> : undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      justifyItems={'end'}
      rowGap={2}
    >
      <Text
        pointerEvents={'none'}
        {...(animationOnHover ? translationProps : {})}
      >
        {text}
      </Text>
      {animationOnHover && (
        <Text pointerEvents={'none'} {...translationProps}>
          {text}
        </Text>
      )}
    </Button>
  );
};

export default LinkButton;
