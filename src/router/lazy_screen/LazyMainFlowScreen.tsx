import { lazy } from 'react';
import { LazyComponentProvider } from '@providers';

const About = lazy(() => import('@screens/mainFlow/About/About'));
const Blogs = lazy(() => import('@screens/mainFlow/Blogs/Blogs'));
const Contact = lazy(() => import('@screens/mainFlow/Contact/Contact'));
const Experience = lazy(
  () => import('@screens/mainFlow/Experience/Experience'),
);
const Home = lazy(() => import('@screens/mainFlow/Home/Home'));
const Projects = lazy(() => import('@screens/mainFlow/Projects/Projects'));
const Resume = lazy(() => import('@screens/mainFlow/Resume/Resume'));
const Skills = lazy(() => import('@screens/mainFlow/Skills/Skills'));

const LazyAboutScreen = () => {
  return (
    <LazyComponentProvider>
      <About />
    </LazyComponentProvider>
  );
};

const LazyBlogsScreen = () => {
  return (
    <LazyComponentProvider>
      <Blogs />
    </LazyComponentProvider>
  );
};

const LazyContactScreen = () => {
  return (
    <LazyComponentProvider>
      <Contact />
    </LazyComponentProvider>
  );
};

const LazyExperienceScreen = () => {
  return (
    <LazyComponentProvider>
      <Experience />
    </LazyComponentProvider>
  );
};

const LazyHomeScreen = () => {
  return (
    <LazyComponentProvider>
      <Home />
    </LazyComponentProvider>
  );
};

const LazyProjectsScreen = () => {
  return (
    <LazyComponentProvider>
      <Projects />
    </LazyComponentProvider>
  );
};

const LazyResumeScreen = () => {
  return (
    <LazyComponentProvider>
      <Resume />
    </LazyComponentProvider>
  );
};

const LazySkillsScreen = () => {
  return (
    <LazyComponentProvider>
      <Skills />
    </LazyComponentProvider>
  );
};

export {
  LazyAboutScreen,
  LazyBlogsScreen,
  LazyContactScreen,
  LazyExperienceScreen,
  LazyHomeScreen,
  LazyProjectsScreen,
  LazyResumeScreen,
  LazySkillsScreen,
};
