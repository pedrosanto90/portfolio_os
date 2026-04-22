/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { WindowState } from '../../types';

interface TaskTabsProps {
  windows: WindowState[];
  activeWindowId: string;
  onFocus: (id: string) => void;
  onToggleMinimize: (id: string) => void;
}

export default function TaskTabs({ windows, activeWindowId, onFocus, onToggleMinimize }: TaskTabsProps) {
  return (
    <div className="flex gap-1 grow overflow-x-auto hide-scrollbar">
      {windows.filter(w => w.isOpen).map(win => (
        <button
          key={win.id}
          onClick={() => {
            if (win.isMinimized) onToggleMinimize(win.id);
            onFocus(win.id);
          }}
          className={`flex items-center px-2 py-1 gap-1 min-w-30 transition-none text-[12px] font-display font-bold uppercase tracking-tight
            ${activeWindowId === win.id && !win.isMinimized
              ? 'bg-[#dfdfdf] shadow-[inset_2px_2px_#808080,inset_-1px_-1px_#fff] translate-x-px translate-y-px'
              : 'bg-[#c0c0c0] border-r-2 border-r-[#808080] border-b-2 border-b-[#808080] border-t-2 border-t-white border-l-2 border-l-white hover:bg-[#d1d1d1]'
            }`}
        >
          <win.icon className="w-3 h-3" />
          <span className="truncate">{win.title.split('.')[0]}</span>
        </button>
      ))}
    </div>
  );
}
