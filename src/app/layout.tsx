import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Analytics } from "@/components/analytics";
import { PersonJsonLd } from "@/components/json-ld";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deshraj.xyz"),
  title: {
    default: "Deshraj Yadav — Co-founder & CTO at Mem0",
    template: "%s | Deshraj Yadav",
  },
  description:
    "Deshraj Yadav is Co-founder and CTO of Mem0. Previously Senior Autopilot Engineer at Tesla. Creator of EvalAI. Georgia Tech MS CS.",
  keywords: [
    "Deshraj Yadav",
    "Mem0",
    "Embedchain",
    "Tesla Autopilot",
    "EvalAI",
    "AI",
    "Machine Learning",
    "Georgia Tech",
    "CTO",
    "RAG",
  ],
  authors: [{ name: "Deshraj Yadav" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deshraj.xyz",
    title: "Deshraj Yadav — Co-founder & CTO at Mem0",
    description:
      "Co-founder and CTO of Mem0. Previously Senior Autopilot Engineer at Tesla. Creator of EvalAI.",
    siteName: "Deshraj Yadav",
    images: [
      {
        url: "/static/img/deshraj.png",
        width: 400,
        height: 400,
        alt: "Deshraj Yadav",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Deshraj Yadav — Co-founder & CTO at Mem0",
    description:
      "Co-founder and CTO of Mem0. Previously Senior Autopilot Engineer at Tesla. Creator of EvalAI.",
    creator: "@deshrajdry",
    images: ["/static/img/deshraj.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-primary min-h-screen">
        <PersonJsonLd />
        <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
