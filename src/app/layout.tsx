import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar1 from "../components/Navbar1";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

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
  description:
    "Explore the professional portfolio of Rakesh Biswas, showcasing expertise in full-stack web development, modern technologies, and real-world project experience.",
  keywords: ["Rakesh Biswas", "Full Stack Developer", "MERN Stack", "Portfolio", "Web Developer"],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider>
        <div
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar1 />
          <Toaster
            richColors
            position="top-center"
            toastOptions={{
              style: {
                background: "var(--card-bg)",
                color: "var(--text-color)",
                border: "1px solid var(--card-border)",
              },
            }}
          />
          <main className="min-h-screen mx-auto">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </html>
  );
}
