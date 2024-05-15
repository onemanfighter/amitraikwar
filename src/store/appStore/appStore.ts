import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';
import { AppStoreState } from './types';
import { createModalSlice } from '../slice/Modal';

export const appStore = create<AppStoreState>()(
  immer((...api) => ({
    Modal: createModalSlice(...api),
  })),
);
