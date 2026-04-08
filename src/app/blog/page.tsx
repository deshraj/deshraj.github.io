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
        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <article>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <h2 className="font-medium leading-snug group-hover:text-muted transition-colors">
                    {post.frontmatter.title}
                  </h2>
                  <p className="text-sm text-muted mt-1 leading-relaxed">
                    {post.frontmatter.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted mt-2">
                    <time dateTime={post.frontmatter.date}>
                      {formatDate(post.frontmatter.date)}
                    </time>
                    <span>·</span>
                    <span>{post.readingTime}</span>
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
