import { Metadata } from "next";

import "./globals.css";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";
import Footer from "@/components/layout/footer";
import InterFont from "@/components/general/InterFont";
import { GoogleAnalytics } from "@next/third-parties/google";

const title = "Prince Kumar Prasad!";
const description = "A self-proclaimed developer.";
const url = "https://princekumar.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    "Backend Developer",
    "Backend Development",
    "Spring Boot",
    "Microservices",
    "Rest API",
    "Docker",
    "Kubernetes",
    "fullstack developer",
    "frontend developer",
    "rest api developer",
    "ui developer",
    "ux developer",
    "web developer",
    "web designer",
    "web development",
  ],
  creator: "Prince Kumar Prasad",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${InterFont.className} bg-gray text-gray-600 antialiased scroll-smooth`}
      >
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId={"G-FRKB4JVG1L"} />
    </html>
  );
}
