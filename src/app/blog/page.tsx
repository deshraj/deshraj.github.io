import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Essays and notes by Deshraj Yadav on AI agents, memory systems, machine learning, and building production software.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Deshraj Yadav",
    description:
      "Essays and notes by Deshraj Yadav on AI agents, memory systems, machine learning, and building production software.",
    url: "https://deshraj.xyz/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-4">Blog</h1>
      <p className="text-muted mb-12 leading-relaxed">
        Essays and notes on AI agents, memory systems, and building production
        software.
      </p>

      {posts.length === 0 ? (
        <p className="text-muted text-sm">No posts yet. Check back soon.</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="group rounded-lg border border-border overflow-hidden hover:border-[#d0d0d0] hover:shadow-sm transition-all">
                <Link href={`/blog/${post.slug}`} className="block">
                  {post.frontmatter.cover && (
                    <div className="aspect-[5/2] w-full overflow-hidden bg-[var(--color-bg)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.frontmatter.cover}
                        alt={post.frontmatter.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h2 className="font-medium leading-snug">
                      {post.frontmatter.title}
                    </h2>
                    <p className="text-sm text-muted mt-2 leading-relaxed">
                      {post.frontmatter.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted mt-3">
                      <time dateTime={post.frontmatter.date}>
                        {formatDate(post.frontmatter.date)}
                      </time>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                    {post.frontmatter.tags &&
                      post.frontmatter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {post.frontmatter.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] uppercase tracking-wider text-muted border border-border rounded-full px-2 py-0.5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
