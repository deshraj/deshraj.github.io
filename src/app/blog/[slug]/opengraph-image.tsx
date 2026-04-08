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
  const date = post ? formatDate(post.frontmatter.date) : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#ffffff",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: "#666",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Deshraj Yadav
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: "#111",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#666",
          }}
        >
          <span>{date}</span>
          <span>deshraj.xyz/blog</span>
        </div>
      </div>
    ),
    size
  );
}
