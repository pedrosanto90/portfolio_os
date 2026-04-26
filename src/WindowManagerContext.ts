/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext } from 'react';
import type { BlogPost } from './apps/LogsContent/posts';

export interface WindowManager {
  openPostWindow: (post: BlogPost) => void;
}

export const WindowManagerContext = createContext<WindowManager | null>(null);

export function useWindowManager(): WindowManager {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) throw new Error('useWindowManager must be used inside WindowManagerContext.Provider');
  return ctx;
}
