/* eslint-disable react/no-unknown-property */
import { Canvas, ThreeElements } from '@react-three/fiber';
import { lazy, Suspense, useEffect, useRef } from 'react';

import {
  Environment,
  Html,
  ScrollControls,
  useProgress,
  useScroll,
} from '@react-three/drei';
import { Box, Progress } from '@chakra-ui/react';
import { useMousePositions, useSpringMousePosition } from '@hooks';
import gsap from 'gsap';
import { useAnimate } from 'framer-motion';
import { has } from 'lodash';
import { Mesh } from 'three';

const LoaderComponent = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <Box width="100vw" height="100vh">
        <Progress width={300} value={progress} max={100} />
      </Box>
    </Html>
  );
};

const AdamHead = lazy(() => import('./AdamHead'));
const LieutenantHead = lazy(() => import('./LieutenantHead'));

const RobotScene = ({
  type = 'lieutenant',
}: {
  type: 'adam' | 'lieutenant';
}) => {
  const { x, y } = useMousePositions();
  const ref = useRef<Mesh | null>(null);
  const tl = useRef<gsap.core.Timeline>();

  useEffect(() => {
    tl.current = gsap.timeline({
      defaults: {
        ease: 'power3.out',
      },
    });
    if (!ref.current) return;
    tl.current.to(ref.current.rotation, {
      y: x !== 0 ? x / 2500 - 0.25 : -0.25,
      x: y !== 0 ? -y / 2500 - 0.2 : -0.2,
      duration: 1.5,
    });

    tl.current?.play();
  }, [x, y]);

  return (
    <Canvas
      flat
      shadows
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: 'transparent',
      }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
      performance={{ min: 0.1, max: 1 }}
      camera={{
        position: [0, -5, -20],
        fov: 10,
      }}
    >
      <ambientLight intensity={0.5} color={'violet'} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Suspense fallback={<LoaderComponent />}>
        <ScrollControls pages={3} damping={10}>
          {type === 'adam' ? (
            <AdamHead ref={ref} />
          ) : (
            <LieutenantHead ref={ref} />
          )}
        </ScrollControls>
      </Suspense>
      <Environment preset="dawn" blur={0.2} />
    </Canvas>
  );
};

export default RobotScene;
