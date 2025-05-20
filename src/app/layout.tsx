import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar1 from "../components/Navbar1";

import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rakesh Biswas | Portfolio",
  description: "Explore the professional portfolio of Rakesh Biswas, showcasing expertise in full-stack web development, modern technologies, and real-world project experience.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar1 />
        <Toaster richColors position="top-center" />
        <div className="min-h-screen mx-auto">{children}</div>
      </body>
    </html>
  );
}
