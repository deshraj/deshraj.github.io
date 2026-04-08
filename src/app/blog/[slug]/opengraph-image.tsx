import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPosts, formatDate } from "@/lib/blog";

export const runtime = "nodejs";
export const alt = "Blog post cover";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  const title = post?.frontmatter.title ?? "Deshraj Yadav";
  const description = post?.frontmatter.description ?? "";
  const date = post ? formatDate(post.frontmatter.date) : "";
  const readingTime = post?.readingTime ?? "";
  const tags = post?.frontmatter.tags?.slice(0, 4) ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          fontFamily: "Inter, sans-serif",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: "#111",
          }}
        />

        {/* Header: brand + label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#666",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ fontWeight: 600, color: "#111" }}>Deshraj Yadav</span>
          <span>Blog</span>
        </div>

        {/* Title block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            paddingRight: 40,
          }}
        >
          <div
            style={{
              fontSize: title.length > 60 ? 60 : 72,
              fontWeight: 700,
              color: "#111",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              display: "flex",
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                fontSize: 28,
                color: "#666",
                marginTop: 24,
                lineHeight: 1.4,
                display: "flex",
              }}
            >
              {description.length > 120
                ? description.slice(0, 117) + "…"
                : description}
            </div>
          )}
        </div>

        {/* Footer: date / reading time / tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#666",
            borderTop: "1px solid #e5e5e5",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {date && <span>{date}</span>}
            {date && readingTime && (
              <span style={{ color: "#bbb" }}>·</span>
            )}
            {readingTime && <span>{readingTime}</span>}
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 18,
                  color: "#666",
                  border: "1px solid #e5e5e5",
                  borderRadius: 999,
                  padding: "4px 14px",
                  display: "flex",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
