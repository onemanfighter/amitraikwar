import { useMotionValue, useSpring, spring, frame } from 'framer-motion';
import { RefObject, useEffect } from 'react';
import { SPRING_SETTING } from './constants';

const useSpringMousePosition = (ref: RefObject<HTMLDivElement | null>) => {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, SPRING_SETTING);
  const y = useSpring(yPoint, SPRING_SETTING);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      frame.read(() => {
        xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [ref, xPoint, yPoint]);

  return { x, y };
};

export default useSpringMousePosition;
