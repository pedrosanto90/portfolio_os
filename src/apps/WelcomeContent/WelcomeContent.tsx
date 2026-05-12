/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Waves } from "lucide-react";
import { useEffect, useState } from "react";

import openMeteo from "./openMeteo";

export default function WelcomeContent() {
  const [forecast, setForecast] = useState<any>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentSwell, setCurrentSwell] = useState<number | null>(null);

  const dateNow = new Date();

  useEffect(() => {
    openMeteo().then(setForecast);
  }, []);

  useEffect(() => {
    dateNow.setHours(dateNow.getHours());
    setCurrentTime(dateNow);
  }, []);

  useEffect(() => {
    if (!forecast) return;
    const key = currentTime.toISOString().slice(0, 13);
    const i = forecast.time.findIndex((t: Date) =>
      t.toISOString().startsWith(key),
    );

    if (i !== -1) setCurrentSwell(forecast.wave_height[i].toFixed(2));
  }, [forecast, currentTime]);

  console.log("Fetching weather data...", forecast);
  return (
    <div className="p-4 flex flex-col gap-4 text-on-surface">
      <div className="bg-black text-[#008080] p-2 retro-bevel-in overflow-hidden font-mono text-sm">
        <span className="marquee-track">
          WELCOME TO SURF_PORT OS! STATUS: HANGING TEN | CURRENT SWELL:{" "}
          {currentSwell}m & GLASSY | SYSTEM READY...
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-4 h-50">
        <div className="w-65">
          <div className="w-32 h-32 bg-[#808080] retro-bevel-in p-0.5 shrink-0">
            <img
              src="avatar.jpg"
              alt="Avatar"
              className="w-30 h-30 object-cover grayscale brightness-90"
            />
          </div>
          <div className="flex flex-row gap-2 mt-2">
            <h1 className="font-display font-bold text-sm text-[#000080]">
              Loc:
            </h1>
            <p className="font-display text-sm text-[#000080]">
              Ericeira, Lisbon, PT
            </p>
          </div>

          <div className="flex flex-row gap-2">
            <h1 className="font-display font-bold text-sm text-[#000080]">
              Status:
            </h1>
            <p className="font-display text-sm text-[#000080]">On the lineup</p>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="font-display font-bold text-sm text-[#000080]">
              Exp:
            </h1>
            <p className="font-display text-sm text-[#000080]">V1.0Y</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-1 retro-bevel-out retro-bevel-in window-shadow p-2">
          <h2 className="font-display font-bold text-lg text-[#000080]">
            Pedro Espirito Santo
          </h2>
          <p className="text-sm leading-tight font-sans">
            A Technical Beach Bum mastering both the codebase and the swell.
            <br />
            Welcome to my digital shore.
            <br />I specialize in Angular, React, TypeScript, PostgreSQL and
            high-performance pixels.
          </p>
          {/* <div className="flex gap-2 mt-2"> */}
          {/*   <button className="px-4 py-1 bg-[#a63004] text-white font-display text-[12px] font-bold uppercase retro-bevel-out active:retro-bevel-in active:translate-x-px active:translate-y-px"> */}
          {/*     Hire Me */}
          {/*   </button> */}
          {/*   <button className="px-4 py-1 bg-[#c0c0c0] text-black font-display text-[12px] font-bold uppercase retro-bevel-out active:retro-bevel-in active:translate-x-px active:translate-y-px"> */}
          {/*     Resumé */}
          {/*   </button> */}
          {/* </div> */}
        </div>
      </div>

      <div className="flex flex-col gap-1 border-t border-gray-300 pt-4">
        <div className="flex justify-between text-[10px] font-bold uppercase">
          <span>Loading Creative Flow...</span>
          <span>85%</span>
        </div>
        <div className="h-5 bg-[#e3e2e2] retro-bevel-in p-0.5">
          <div className="h-full bg-[#008080] w-[85%] flex items-center justify-end px-1">
            <Waves className="text-white w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
