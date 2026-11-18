import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `${site.name} — Portfolio`,
  description: site.intro,
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} — Portfolio`,
    description: site.intro,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#090909",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%23090909'/><text x='50%' y='58%' text-anchor='middle' font-family='monospace' font-size='22' fill='%23c8ff3d'>VKB</text></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
