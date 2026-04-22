/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function ProjectsContent() {
  return (
    <div className="p-2 h-full flex flex-col bg-[#dfdfdf]">
      <div className="bg-white border-inset p-2 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full overflow-y-auto retro-bevel-in m-1">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col bg-[#c0c0c0] p-1 border border-white shadow-[1px_1px_0_0_#000]">
            <div className="h-24 bg-gray-400 overflow-hidden relative border border-black mb-2">
              <img
                src={`https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=400&h=200&random=${i}`}
                alt={`Project ${i}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute top-1 left-1 bg-[#000080] text-white text-[8px] px-1 font-bold">PREMIUM.V{i}</div>
            </div>
            <h3 className="font-display font-bold text-[12px] uppercase">PROJECT_WAVE_{i}</h3>
            <p className="text-[10px] my-1 grow">Experimental UI for maritime data visualization and swell analysis.</p>
            <button className="mt-2 w-full py-0.5 bg-[#c0c0c0] border-t border-l border-white border-b border-r font-display text-[10px] font-bold uppercase">Open Path</button>
          </div>
        ))}
      </div>
    </div>
  );
}
