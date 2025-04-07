import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";
import Footer from "@/components/layout/footer";
import { Karla } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const title = "Welcome to Prince Kumar Prasad's Portfolio";
const description =
  "Prince is a Developer with a passion for creating innovative solutions. He specializes in various technologies, including Java, Spring Boot, Flutter, and more. With a strong foundation in backend development and a keen interest in mobile app development, Prince is dedicated to delivering high-quality software that meets the needs of users and businesses alike.";
const url = "https://princekumar.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    "Prince Kumar Prasad",
    "Portfolio",
    "Developer",
    "Java",
    "Spring Boot",
    "Flutter",
    "Next.js",
    "React.js",
    "Tailwind CSS",
    "TypeScript",
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

export const karla = Karla({
  weight: ["300", "400", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${karla.className} bg-gray text-gray-600 antialiased scroll-smooth`}
      >
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
      <Analytics />
    </html>
  );
}
