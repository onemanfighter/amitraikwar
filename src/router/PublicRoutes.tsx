import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from 'react-router-dom';
import { LazyMainScreen } from './lazyScreen';

const publicRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<LazyMainScreen />}>
      {/* Main screen routes. */}

      {/* Main flow screen routes. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>,
  ),
);

export { publicRouter };
