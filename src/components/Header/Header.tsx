/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Minimize2, Maximize2, X } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full bg-[#000080] px-1 h-6 z-50 border-b border-b-[#808080]">
      <div className="flex items-center gap-2">
        <span className="text-white font-bold px-2 font-display text-[12px]">Portfolio_OS_v1.0</span>
        <div className="flex gap-1">
          <button className="text-white px-2 hover:bg-[#0000a0] font-display text-[12px] font-bold">File</button>
          <button className="text-white px-2 hover:bg-[#0000a0] font-display text-[12px] font-bold">Options</button>
          <button className="text-white px-2 hover:bg-[#0000a0] font-display text-[12px] font-bold">Help</button>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button className="w-4 h-4 bg-[#c0c0c0] flex items-center justify-center retro-bevel-out text-black"><Minimize2 className="w-3 h-3" /></button>
        <button className="w-4 h-4 bg-[#c0c0c0] flex items-center justify-center retro-bevel-out text-black"><Maximize2 className="w-3 h-3" /></button>
        <button className="w-4 h-4 bg-[#c0c0c0] flex items-center justify-center retro-bevel-out text-black"><X className="w-3 h-3" /></button>
      </div>
    </header>
  );
}
