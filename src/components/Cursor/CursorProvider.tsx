import { createContext, useContext, useState } from 'react';
import FollowCursor from './Cursor';

export const CursorContext = createContext<{
  cursorState: boolean;
  insets:
    | {
        height: number;
        width: number;
        top: number;
        left: number;
        borderRadius?: string;
      }
    | undefined;
  toggle: () => void;
  setCursorInsets: (
    args:
      | {
          height: number;
          width: number;
          top: number;
          left: number;
          borderRadius?: string;
        }
      | undefined,
  ) => void;
}>({
  cursorState: true,
  insets: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
  setCursorInsets: (
    args:
      | {
          height: number;
          width: number;
          top: number;
          left: number;
          borderRadius?: string;
        }
      | undefined,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  ) => {},
});

const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorState, setCursorState] = useState(true);
  const [insets, setCursorSize] = useState<
    | {
        height: number;
        width: number;
        top: number;
        left: number;
        borderRadius?: string;
      }
    | undefined
  >(undefined);

  const toggle = () => {
    setCursorState((prev) => !prev);
  };

  const setCursorInsets = (
    args:
      | {
          height: number;
          width: number;
          top: number;
          left: number;
        }
      | undefined,
  ) => {
    setCursorSize(args);
  };

  return (
    <CursorContext.Provider
      value={{ cursorState, insets, toggle, setCursorInsets }}
    >
      <FollowCursor />
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

export default CursorProvider;
