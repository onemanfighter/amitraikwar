import { lazy } from 'react';
import { LazyComponentProvider } from '@providers';
import { MainScreen } from '@screens';

const About = lazy(() => import('@screens/mainFlow/MainScreen'));

export const LazyMainScreen = () => {
  return (
    <LazyComponentProvider>
      <MainScreen />
    </LazyComponentProvider>
  );
};
