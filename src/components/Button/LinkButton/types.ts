import { BoxProps } from '@chakra-ui/react';

export type LinkButtonProps = {
  href: string;
  text: string;
  withUnderline?: boolean;
  withArrow?: boolean;
  animationOnHover?: boolean;
  fontSize?: BoxProps['fontSize'];
};
