/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useWindowManager } from '../../WindowManagerContext';
import { posts } from './posts';

export default function LogsContent() {
  const { openPostWindow } = useWindowManager();

  return (
    <div className="bg-white h-full font-mono text-xs p-4 overflow-y-auto leading-relaxed text-black">
      <div className="border-b border-gray-300 pb-2 mb-4">
        <h1 className="text-lg font-bold uppercase">System_Log_Index.txt</h1>
        <p className="text-[10px] text-gray-500">{posts.length} entries — click to open</p>
      </div>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <button
              type="button"
              onClick={() => openPostWindow(post)}
              className="w-full text-left p-2 bg-[#c0c0c0] retro-bevel-out hover:bg-[#dfdfdf] active:retro-bevel-in cursor-default"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-display font-bold text-[12px] uppercase truncate">
                  &gt; {post.title}
                </span>
                <span className="text-[10px] text-gray-700 shrink-0">{post.date}</span>
              </div>
              <p className="text-[11px] mt-1 text-gray-800">{post.excerpt}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
