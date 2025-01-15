import { lazy } from 'react';
import { LazyComponentProvider } from '@providers';

const MainScreen = lazy(() => import('@screens/mainFlow/MainScreen'));

export const LazyMainScreen = () => {
  return (
    <LazyComponentProvider>
      <MainScreen />
    </LazyComponentProvider>
  );
};
