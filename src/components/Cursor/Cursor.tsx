import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useSpringMousePosition } from '../../hooks';
import { useCursor } from './CursorProvider';

const FollowCursor = () => {
  const { insets } = useCursor();
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useSpringMousePosition(ref);

  const { width, height, top, left } = insets ?? {
    width: 56,
    height: 56,
    top: 0,
    left: 0,
  };
  const props = {
    boxShadow: '0 0 50px 10px violet',
    width: width,
    height: height,
    transition: !insets ? 'all 0.0s ease' : 'all 0.5s ease',
    borderRadius: insets ? '5px' : '50%',
  };

  return (
    <motion.div
      className="cursor"
      ref={ref}
      style={{
        x: top === 0 ? x : left,
        y: top === 0 ? y : top,
        backgroundColor: '#fff',
        mixBlendMode: 'difference',
        zIndex: 999,
        position: 'fixed',
        pointerEvents: 'none',
        ...props,
      }}
    />
  );
};

export default FollowCursor;
