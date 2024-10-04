import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "../../providers";
import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/ui/sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "vichar.dev dashboard",
  description: "Social media for devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="parentLayout">
            <header className="header"><Navbar /></header>
            <div className="left-side"><Sidebar /></div>
            <main className="main">{children}</main>
            <footer className="footer text-center">
              Made with ❤ in India and in harmony with 🕊🌳✨ (Nature)
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
