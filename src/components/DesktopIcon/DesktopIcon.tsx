/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface DesktopIconProps {
  label: string;
  icon: any;
  onClick: () => void;
}

export default function DesktopIcon({ label, icon: Icon, onClick }: DesktopIconProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center p-2 text-center cursor-pointer select-none group w-24"
    >
      <div className="w-12 h-12 mb-1 flex items-center justify-center">
        <Icon className="text-white w-10 h-10 drop-shadow-[2px_2px_#000]" />
      </div>
      <span className="font-display text-[11px] text-white drop-shadow-[1px_1px_#000] group-hover:bg-[#000080] px-1">
        {label}
      </span>
    </button>
  );
}
