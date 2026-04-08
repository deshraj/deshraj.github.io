import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import type { ComponentPropsWithoutRef } from "react";

type ImgProps = ComponentPropsWithoutRef<"img"> & {
  width?: number | string;
  height?: number | string;
};

const components: MDXRemoteProps["components"] = {
  // Allow `<Image src=... width={..} height={..} />` in MDX without next/image quirks
  Image: ({ src, alt, width, height, ...props }: ImgProps) => {
    const url = typeof src === "string" ? src : "";
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
        aria-label={`Open image: ${alt ?? ""}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={url}
          alt={alt ?? ""}
          width={width}
          height={height}
          loading="lazy"
          {...props}
        />
      </a>
    );
  },
  a: ({ href = "", children, ...props }: ComponentPropsWithoutRef<"a">) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} {...(props as object)}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
};

export function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: "github-light",
                keepBackground: false,
              },
            ],
          ],
        },
      }}
    />
  );
}
