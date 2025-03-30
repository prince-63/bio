import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";
import Footer from "@/components/layout/footer";
import InterFont from "@/components/general/inter-font";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Karla } from "next/font/google";

const title = "Prince Kumar Prasad!";
const description = "Prince Kumar Prasad is a Backend Developer, Mobile Developer, and Web Developer. He is proficient in Java, Spring Boot, Microservices, Docker, Kubernetes, Flutter, React, Next.js, and Node.js. He is also a UI/UX designer with experience in Figma and Adobe XD.";
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
    "Android Developer",
    "Mobile Developer",
    "Mobile Development",
    "Flutter Developer",
    "Jetpack Compose Developer",
    "React Developer",
    "Next Developer",
    "Node Developer",
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
      <GoogleAnalytics gaId={"G-FRKB4JVG1L"} />
    </html>
  );
}
