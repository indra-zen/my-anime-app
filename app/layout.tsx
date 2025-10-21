import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Anime App - Powered by Jikan API",
  description: "Browse anime with data from MyAnimeList via Jikan API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
