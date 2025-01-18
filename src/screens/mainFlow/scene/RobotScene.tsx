/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { lazy, Suspense, useEffect, useRef } from 'react';

import { Environment, Html, useProgress } from '@react-three/drei';
import { Box, Progress } from '@chakra-ui/react';
import { useMousePositions } from '@hooks';
import gsap from 'gsap';
import { Mesh } from 'three';
import { CharacterType } from '.';

const LoaderComponent = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <Box width="100vw" height="100vh">
        <Progress width={300} value={progress} max={100} />
      </Box>
      Loading...
    </Html>
  );
};

const AdamHead = lazy(() => import('./AdamHead'));
const LieutenantHead = lazy(() => import('./LieutenantHead'));
const IonDrive = lazy(() => import('./IonDrive'));
const Copernicus = lazy(() => import('./Copernicus'));

const RobotScene = ({ type = 'copernicus' }: { type: CharacterType }) => {
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
      y: x !== 0 ? x / 5000 - 0.25 : -0.25,
      x: y !== 0 ? -y / 5000 - 0.17 : -0.17,
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
        position: type === 'copernicus' ? [0, -3, -20] : [0, -3, 20],
        fov: 20,
      }}
    >
      <ambientLight intensity={0.5} color={'violet'} />
      <directionalLight position={[2, 0, 2]} intensity={0.1} color={'violet'} />
      <directionalLight position={[-4, 1, 4]} intensity={0.2} color={'blue'} />
      <Suspense fallback={<LoaderComponent />}>
        {type === 'adam' ? (
          <AdamHead ref={ref} />
        ) : type === 'copernicus' ? (
          <Copernicus ref={ref} />
        ) : (
          <LieutenantHead ref={ref} />
        )}
      </Suspense>
      <Environment preset="city" blur={0.8} />
    </Canvas>
  );
};

export default RobotScene;
