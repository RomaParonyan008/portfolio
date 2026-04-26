import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Roma Paronyan | Front-End Developer",
  description:
    "Frontend focused web developer building modern and responsive web interfaces with passion.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "Web Development",
    "Portfolio",
  ],
  author: "Roma Paronyan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
