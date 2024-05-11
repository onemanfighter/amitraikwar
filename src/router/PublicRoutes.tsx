import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from 'react-router-dom';
import {
  LazyAboutScreen,
  LazyBlogsScreen,
  LazyContactScreen,
  LazyExperienceScreen,
  LazyHomeScreen,
  LazySkillsScreen,
  LazyProjectsScreen,
  LazyResumeScreen,
} from './lazy_screen';
import { MainScreen } from '@screens';

const publicRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<MainScreen />}>
      {/* Main screen routes. */}
      <Route path="" element={<Navigate to="/home" replace />} />
      <Route path="home" element={<LazyHomeScreen />} />
      {/* Main flow screen routes. */}
      <Route path="about" element={<LazyAboutScreen />} />
      <Route path="resume" element={<LazyResumeScreen />} />
      <Route path="skills" element={<LazySkillsScreen />} />
      <Route path="experience" element={<LazyExperienceScreen />} />
      <Route path="projects" element={<LazyProjectsScreen />} />
      <Route path="blogs" element={<LazyBlogsScreen />} />
      <Route path="contact" element={<LazyContactScreen />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Route>,
  ),
);

export { publicRouter };
