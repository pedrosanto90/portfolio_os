/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function LogContent() {
  return (
    <div className="bg-white h-full font-mono text-xs p-4 overflow-y-auto leading-relaxed text-black">
      <div className="border-b border-gray-300 pb-2 mb-4">
        <h1 className="text-lg font-bold uppercase">System_Log_2024.txt</h1>
        <p className="text-[10px] text-gray-500">Last Modified: Oct 24, 2024</p>
      </div>
      <div className="space-y-4">
        <p>Log Content</p>
      </div>
    </div>
  );
}
