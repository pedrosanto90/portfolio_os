/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ReactMarkdown from 'react-markdown';
import { getPostBody, type BlogPost } from '../LogsContent/posts';

interface PostContentProps {
  post: BlogPost;
}

export default function PostContent({ post }: PostContentProps) {
  const body = getPostBody(post);

  return (
    <div className="bg-white h-full font-mono text-xs p-4 overflow-y-auto leading-relaxed text-black">
      <div className="border-b border-gray-300 pb-2 mb-4">
        <p className="text-[10px] text-gray-500 uppercase">Posted: {post.date}</p>
      </div>
      <article className="space-y-3 break-words">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="font-display text-lg font-bold uppercase mb-2 border-b border-gray-300 pb-1">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="font-display text-sm font-bold uppercase mt-4 mb-1">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="font-display text-xs font-bold uppercase mt-3 mb-1">
                {children}
              </h3>
            ),
            p: ({ children }) => <p className="text-xs">{children}</p>,
            a: ({ children, href }) => (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-[#0000ee] underline hover:text-[#0000aa]"
              >
                {children}
              </a>
            ),
            ul: ({ children }) => <ul className="list-disc pl-5 space-y-1">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal pl-5 space-y-1">{children}</ol>,
            li: ({ children }) => <li className="text-xs">{children}</li>,
            code: ({ children, className }) => {
              const isBlock = className?.includes('language-');
              if (isBlock) return <code className={className}>{children}</code>;
              return (
                <code className="bg-[#dfdfdf] retro-bevel-in px-1 py-0.5 text-[11px]">
                  {children}
                </code>
              );
            },
            pre: ({ children }) => (
              <pre className="bg-[#dfdfdf] retro-bevel-in p-2 text-[11px] my-2 whitespace-pre-wrap break-words">
                {children}
              </pre>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-[#808080] bg-[#dfdfdf] pl-2 py-1 italic">
                {children}
              </blockquote>
            ),
            hr: () => <hr className="border-t border-gray-300 my-3" />,
          }}
        >
          {body}
        </ReactMarkdown>
      </article>
    </div>
  );
}
