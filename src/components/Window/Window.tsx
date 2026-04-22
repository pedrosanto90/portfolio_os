/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Square, X } from 'lucide-react';
import type { WindowState } from '../../types';

interface WindowProps {
  win: WindowState;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  isActive: boolean;
}

export default function Window({ win, onClose, onMinimize, onFocus, isActive }: WindowProps) {
  if (!win.isOpen || win.isMinimized) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      onMouseDown={onFocus}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="absolute bg-[#c0c0c0] p-0.5 retro-bevel-out window-shadow flex flex-col min-w-75"
      style={{ zIndex: win.zIndex }}
    >
      <div className={`${isActive ? 'win95-title-bar' : 'win95-title-bar-inactive'} flex justify-between items-center px-1 py-0.5 mb-1 cursor-default`}>
        <div className="flex items-center gap-1">
          <win.icon className="text-white w-3 h-3" />
          <span className="text-white font-display text-[12px] font-bold truncate">{win.title}</span>
        </div>
        <div className="flex gap-1">
          <button
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            className="w-4 h-4 bg-[#c0c0c0] border border-black flex items-center justify-center text-black hover:bg-[#dfdfdf]"
          >
            <span className="font-bold text-[10px]">_</span>
          </button>
          <button
            className="w-4 h-4 bg-[#c0c0c0] border border-black flex items-center justify-center text-black hover:bg-[#dfdfdf]"
          >
            <Square className="w-2 h-2" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="w-4 h-4 bg-[#c0c0c0] border border-black flex items-center justify-center text-black hover:bg-[#dfdfdf]"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Menu Bar (Dummy) */}
      <div className="flex gap-4 px-2 py-0.5 text-[11px] font-display border-b border-white mb-1">
        <span className="hover:underline cursor-default">File</span>
        <span className="hover:underline cursor-default">Edit</span>
        <span className="hover:underline cursor-default">View</span>
        <span className="hover:underline cursor-default">Help</span>
      </div>

      <div className="grow overflow-auto bg-white m-1 retro-bevel-in">
        {win.content}
      </div>
    </motion.div>
  );
}
