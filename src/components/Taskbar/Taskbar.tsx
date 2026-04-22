/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Volume2, Wifi } from 'lucide-react';
import type { WindowState } from '../../types';
import StartButton from '../StartButton';
import TaskTabs from '../TaskTabs';

interface TaskbarProps {
  windows: WindowState[];
  activeWindowId: string;
  isStartOpen: boolean;
  onToggleStart: () => void;
  onOpenWindow: (id: string) => void;
  onFocus: (id: string) => void;
  onToggleMinimize: (id: string) => void;
}

export default function Taskbar({
  windows,
  activeWindowId,
  isStartOpen,
  onToggleStart,
  onOpenWindow,
  onFocus,
  onToggleMinimize,
}: TaskbarProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 w-full z-1000 flex items-center px-1 py-0.5 gap-1 bg-[#c0c0c0] h-10 border-t-2 border-t-white shadow-[inset_1px_1px_#dfdfdf,inset_-1px_-1px_#0a0a0a]">
      <StartButton isOpen={isStartOpen} onToggle={onToggleStart} onOpenWindow={onOpenWindow} />

      <div className="h-full w-0.5 bg-[#808080] mx-1 shadow-[1px_0_0_0_#fff]"></div>

      <TaskTabs
        windows={windows}
        activeWindowId={activeWindowId}
        onFocus={onFocus}
        onToggleMinimize={onToggleMinimize}
      />

      <div className="retro-bevel-in bg-[#c0c0c0] px-2 flex items-center gap-3 h-7">
        <Volume2 className="w-3 h-3 text-[#555]" />
        <Wifi className="w-3 h-3 text-[#555]" />
        <span className="font-display text-[11px] font-bold text-black border-l border-[#808080] pl-2 tabular-nums">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </footer>
  );
}
