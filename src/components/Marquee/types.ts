import { BoxProps } from '@chakra-ui/react';
import { ComponentPropsWithoutRef } from 'react';

/**
 * Props for the Marquee component
 * @extends ComponentPropsWithoutRef<'div'>
 * @property {boolean} [reverse=false] - Whether to reverse the animation direction
 * @property {boolean} [pauseOnHover=false] - Whether to pause the animation on hover
 * @property {React.ReactNode} children - Content to be displayed in the marquee
 * @property {boolean} [vertical=false] - Whether to animate vertically instead of horizontally
 * @property {number} [repeat=4] - Number of times to repeat the content
 */
export interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: number;
  gap?: BoxProps['gap'];
}
