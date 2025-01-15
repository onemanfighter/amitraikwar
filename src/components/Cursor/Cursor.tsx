import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useSpringMousePosition } from '../../hooks';

const FollowCursor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useSpringMousePosition(ref);

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
        backgroundColor: '#fff',
        mixBlendMode: 'difference',
        boxShadow: '0 0 50px 10px violet',
        zIndex: 999,
        width: '56px',
        height: '56px',
        borderRadius: '50%',
      }}
    />
  );
};

export default FollowCursor;
