import { lazy } from 'react';
import { LazyComponentProvider } from '@providers';

const StudyChannels = lazy(() => import('@screens/screen/Screen'));

const Top = lazy(() => import('@screens/screen/Screen'));

const LazyStudyChannelsScreen = () => {
  return (
    <LazyComponentProvider>
      <StudyChannels />
    </LazyComponentProvider>
  );
};

const LazyTopScreen = () => {
  return (
    <LazyComponentProvider>
      <Top />
    </LazyComponentProvider>
  );
};

export { LazyStudyChannelsScreen, LazyTopScreen };
