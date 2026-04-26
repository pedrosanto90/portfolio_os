/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useMemo, useState } from 'react';
import { Monitor, FolderOpen, FileText } from 'lucide-react';
import type { WindowState } from './types';
import WelcomeContent from './apps/WelcomeContent';
import ProjectsContent from './apps/ProjectsContent';
import LogsContent from './apps/LogsContent';
import PostContent from './apps/PostContent';
import type { BlogPost } from './apps/LogsContent/posts';
import { WindowManagerContext, type WindowManager } from './WindowManagerContext';
import Header from './components/Header';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';

export default function App() {
  const [isStartOpen, setStartOpen] = useState(false);
  const [windows, setWindows] = useState<WindowState[]>([
    { id: 'welcome', title: 'Welcome_to_the_Beach.exe', icon: Monitor, isOpen: true, isMinimized: false, zIndex: 10, content: <WelcomeContent /> },
    { id: 'projects', title: 'The_Lineup.explorer', icon: FolderOpen, isOpen: false, isMinimized: false, zIndex: 1, content: <ProjectsContent /> },
    { id: 'logs', title: 'Waves_Blog.txt', icon: FileText, isOpen: false, isMinimized: false, zIndex: 1, content: <LogsContent /> },
  ]);
  const [activeWindowId, setActiveWindowId] = useState('welcome');

  const openWindow = (id: string) => {
    setWindows(prev => {
      const maxZ = Math.max(...prev.map(w => w.zIndex), 0);
      return prev.map(w =>
        w.id === id
          ? { ...w, isOpen: true, isMinimized: false, zIndex: maxZ + 1 }
          : w
      );
    });
    setActiveWindowId(id);
    setStartOpen(false);
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: false } : w));
  };

  const toggleMinimize = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: !w.isMinimized } : w));
  };

  const focusWindow = (id: string) => {
    setWindows(prev => {
      const maxZ = Math.max(...prev.map(w => w.zIndex), 0);
      return prev.map(w => w.id === id ? { ...w, zIndex: maxZ + 1 } : w);
    });
    setActiveWindowId(id);
  };

  const openPostWindow = useCallback((post: BlogPost) => {
    const id = `post-${post.id}`;
    setWindows(prev => {
      const maxZ = Math.max(...prev.map(w => w.zIndex), 0);
      if (prev.some(w => w.id === id)) {
        return prev.map(w =>
          w.id === id
            ? { ...w, isOpen: true, isMinimized: false, zIndex: maxZ + 1 }
            : w
        );
      }
      return [
        ...prev,
        {
          id,
          title: post.title,
          icon: FileText,
          isOpen: true,
          isMinimized: false,
          zIndex: maxZ + 1,
          content: <PostContent post={post} />,
        },
      ];
    });
    setActiveWindowId(id);
  }, []);

  const windowManager = useMemo<WindowManager>(() => ({ openPostWindow }), [openPostWindow]);

  return (
    <WindowManagerContext.Provider value={windowManager}>
    <div className="relative w-full h-screen overflow-hidden flex flex-col font-sans">
      {/* Background */}
      <div className="absolute inset-0 z-0 text-white">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1920"
          alt="Sea background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[#008080]/30 mix-blend-overlay"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-linear-to-b from-[#ff8c00] to-transparent opacity-20 blur-3xl"></div>
      </div>

      <Header />

      <Desktop
        windows={windows}
        activeWindowId={activeWindowId}
        onOpenWindow={openWindow}
        onCloseWindow={closeWindow}
        onToggleMinimize={toggleMinimize}
        onFocusWindow={focusWindow}
      />

      <Taskbar
        windows={windows}
        activeWindowId={activeWindowId}
        isStartOpen={isStartOpen}
        onToggleStart={() => setStartOpen(!isStartOpen)}
        onOpenWindow={openWindow}
        onFocus={focusWindow}
        onToggleMinimize={toggleMinimize}
      />
    </div>
    </WindowManagerContext.Provider>
  );
}
