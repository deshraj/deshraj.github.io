import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import { Mdx } from "@/components/mdx";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://deshraj.xyz/blog/${post.slug}`;
  // Always use the dynamically generated /opengraph-image route — guarantees
  // a clean 1200x630 PNG with title + branding regardless of the post's cover.
  const ogImage = `${url}/opengraph-image`;

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    keywords: post.frontmatter.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      publishedTime: post.frontmatter.date,
      authors: ["Deshraj Yadav"],
      tags: post.frontmatter.tags,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      creator: "@deshrajdry",
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.frontmatter.draft) notFound();

  const url = `https://deshraj.xyz/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    author: {
      "@type": "Person",
      name: "Deshraj Yadav",
      url: "https://deshraj.xyz",
    },
    publisher: {
      "@type": "Person",
      name: "Deshraj Yadav",
      url: "https://deshraj.xyz",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.frontmatter.tags?.join(", "),
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href="/blog"
        className="text-sm text-muted hover:text-primary transition-colors"
      >
        ← Back to blog
      </Link>
      <header className="mt-8 mb-12">
        <h1 className="text-2xl font-semibold tracking-tight leading-snug mb-3">
          {post.frontmatter.title}
        </h1>
        <div className="flex items-center gap-2 text-xs text-muted">
          <time dateTime={post.frontmatter.date}>
            {formatDate(post.frontmatter.date)}
          </time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted border border-border rounded-full px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {post.frontmatter.cover && (
          <div className="mt-8 aspect-[5/2] w-full overflow-hidden rounded-md border border-border bg-[var(--color-bg)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.frontmatter.cover}
              alt={post.frontmatter.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </header>
      <div className="prose-blog">
        <Mdx source={post.content} />
      </div>
    </article>
  );
}
