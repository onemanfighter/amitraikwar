import { lazy } from 'react';
import { LazyComponentProvider } from '@providers';

const AboutUs = lazy(() => import('@screens/screen/Screen'));
const ContactUs = lazy(() => import('@screens/screen/Screen'));
const FeatureMedia = lazy(() => import('@screens/screen/Screen'));
const PrivacyPolicy = lazy(() => import('@screens/screen/Screen'));

const LazyAboutUsScreen = () => {
  return (
    <LazyComponentProvider>
      <AboutUs />
    </LazyComponentProvider>
  );
};

const LazyContactUsScreen = () => {
  return (
    <LazyComponentProvider>
      <ContactUs />
    </LazyComponentProvider>
  );
};

const LazyFeatureMediaScreen = () => {
  return (
    <LazyComponentProvider>
      <FeatureMedia />
    </LazyComponentProvider>
  );
};

const LazyPrivacyPolicyScreen = () => {
  return (
    <LazyComponentProvider>
      <PrivacyPolicy />
    </LazyComponentProvider>
  );
};

export {
  LazyAboutUsScreen,
  LazyContactUsScreen,
  LazyFeatureMediaScreen,
  LazyPrivacyPolicyScreen,
};
