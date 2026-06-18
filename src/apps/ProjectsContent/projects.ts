/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  name: string;
  description: string;
  gh_link?: string;
  ws_link?: string;
  image?: string;
  tag?: string;
}

export const projects: Project[] = [
  {
    id: "tmdb-explorer",
    name: "TMDB_EXPLORER",
    description:
      "A project to explore more about RxJS and Angular using the TMDB API.",
    gh_link: "https://github.com/pedrosanto90/tmdb-explorer",
    ws_link: "https://pedrosanto90.github.io/tmdb-explorer",
    tag: "V1",
  },
  {
    id: "live-soccer",
    name: "LIVE_SOCCER",
    description:
      "A tournament-management app for organizing and following live soccer tournaments, built with Next.js and Supabase.",
    ws_link: "https://live-soccer.pedroesanto.com",
    tag: "V1",
  },
];
