/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Menu, Monitor, FolderOpen, FileText, X, ChevronRight } from 'lucide-react';

interface StartButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenWindow: (id: string) => void;
}

const menuItems = [
  { id: 'welcome', title: 'Welcome Bio', icon: Monitor },
  { id: 'projects', title: 'Projects Gallery', icon: FolderOpen },
  { id: 'logs', title: 'System Logs', icon: FileText },
  { divider: true },
  { id: 'shutdown', title: 'Shutdown...', icon: X },
] as const;

export default function StartButton({ isOpen, onToggle, onOpenWindow }: StartButtonProps) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`bg-[#c0c0c0] flex items-center px-2 py-1 gap-1 border-r-2 border-r-[#808080] border-b-2 border-b-[#808080] border-t-2 border-t-white border-l-2 border-l-white hover:bg-[#d1d1d1] transition-none active:shadow-inner active:translate-y-px active:translate-x-px ${isOpen ? 'retro-bevel-in' : ''}`}
      >
        <Menu className="w-4 h-4" />
        <span className="font-display text-[14px] font-black italic tracking-tight">Start</span>
      </button>

      {isOpen && (
        <div className="absolute bottom-10 left-0 w-64 bg-[#c0c0c0] p-0.5 retro-bevel-out window-shadow z-1001">
          <div className="flex">
            <div className="w-8 bg-[#808080] flex items-end justify-center py-4">
              <span className="text-white font-bold -rotate-90 whitespace-nowrap text-lg tracking-widest font-display">SURF_PORT OS</span>
            </div>
            <div className="grow p-1">
              {menuItems.map((item, i) => (
                'divider' in item ? (
                  <div key={i} className="h-px bg-[#808080] my-1 shadow-[0_1px_0_0_#fff]"></div>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => onOpenWindow(item.id)}
                    className="w-full flex items-center gap-3 p-1 hover:bg-[#000080] hover:text-white group text-left"
                  >
                    <item.icon className="w-5 h-5 text-[#000080] group-hover:text-white" />
                    <span className="text-[12px] font-display font-bold">{item.title}</span>
                    {item.id !== 'shutdown' && <ChevronRight className="ml-auto w-3 h-3 text-[#808080] group-hover:text-white" />}
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
