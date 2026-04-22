/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function LogsContent() {
  return (
    <div className="bg-white h-full font-mono text-xs p-4 overflow-y-auto leading-relaxed text-black">
      <div className="border-b border-gray-300 pb-2 mb-4">
        <h1 className="text-lg font-bold uppercase">System_Log_2024.txt</h1>
        <p className="text-[10px] text-gray-500">Last Modified: Oct 24, 2024</p>
      </div>
      <div className="space-y-4">
        <p>&gt; Starting process: SURF_SWELL_SYNC...</p>
        <p>&gt; Today the swell was solid 6ft. The tide was pushing but the wind held off. Reminded me of a React component update—everything has to be in sync for the ride to be smooth.</p>
        <p>&gt; I've been experimenting with low-latency canvas rendering. Much like a quick bottom turn, efficiency is all about minimizing friction.</p>
        <p>&gt; Tip of the day: Use `useMemo` for heavy calculations. It's like waxing your board; a little effort prevents a lot of drag.</p>
        <p>&gt; ...End of file.</p>
      </div>
    </div>
  );
}
