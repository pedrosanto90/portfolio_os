/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  path: string;
}

const rawPosts = import.meta.glob("./posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const posts: BlogPost[] = [
  {
    id: "first-wave",
    title: "SURF_SWELL_SYNC",
    date: "2026-04-26",
    excerpt: "The First One",
    path: "./posts/first-wave.md",
  },
];

export function getPostBody(post: BlogPost): string {
  return rawPosts[post.path] ?? "";
}
