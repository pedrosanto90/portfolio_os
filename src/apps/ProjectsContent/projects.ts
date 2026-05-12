/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  name: string;
  description: string;
  gh_link: string;
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
];
