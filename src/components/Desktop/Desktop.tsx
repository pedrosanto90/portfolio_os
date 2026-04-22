/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence } from 'motion/react';
import { Monitor, Users, Waves, Trash2 } from 'lucide-react';
import type { WindowState } from '../../types';
import DesktopIcon from '../DesktopIcon';
import Window from '../Window';

interface DesktopProps {
  windows: WindowState[];
  activeWindowId: string;
  onOpenWindow: (id: string) => void;
  onCloseWindow: (id: string) => void;
  onToggleMinimize: (id: string) => void;
  onFocusWindow: (id: string) => void;
}

export default function Desktop({
  windows,
  activeWindowId,
  onOpenWindow,
  onCloseWindow,
  onToggleMinimize,
  onFocusWindow,
}: DesktopProps) {
  return (
    <main className="relative grow p-8 z-10">
      <div className="grid grid-cols-1 gap-6 w-max">
        <DesktopIcon label="My Board" icon={Monitor} onClick={() => onOpenWindow('welcome')} />
        <DesktopIcon label="The Lineup" icon={Users} onClick={() => onOpenWindow('projects')} />
        <DesktopIcon label="Waves" icon={Waves} onClick={() => onOpenWindow('logs')} />
        <DesktopIcon label="Trash" icon={Trash2} onClick={() => {}} />
      </div>

      <AnimatePresence>
        {windows.map(win => (
          <Window
            key={win.id}
            win={win}
            isActive={activeWindowId === win.id}
            onClose={() => onCloseWindow(win.id)}
            onMinimize={() => onToggleMinimize(win.id)}
            onFocus={() => onFocusWindow(win.id)}
          />
        ))}
      </AnimatePresence>
    </main>
  );
}
