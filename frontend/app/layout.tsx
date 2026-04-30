import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rozgaar Setu | Get Hired in 24-48 Hours",
  description: "Rozgaar Setu connects you to real jobs instantly. No degree? No problem. Find fast-hiring jobs in India within 48 hours.",
  keywords: "jobs in India, fast hiring, no degree jobs, blue collar jobs, startup jobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}