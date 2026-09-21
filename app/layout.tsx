import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://levicrowemedia.com"),
  title: "Levi Crowe Media",
  description: "Stories, books, music, and strange worlds from Levi Crowe Media.",
  openGraph: {
    title: "Levi Crowe Media",
    description: "Original stories, books, music, and strange worlds from Levi Crowe Media.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Levi Crowe Media" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Levi Crowe Media",
    description: "Original stories, books, music, and strange worlds from Levi Crowe Media.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
