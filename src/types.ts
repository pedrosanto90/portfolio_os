/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WindowState {
  id: string;
  title: string;
  icon: any;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  content: React.ReactNode;
}
