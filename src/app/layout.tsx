import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/Sidebar"; // Import Sidebar component
import { RightSide } from "@/components/RightSide"; // Import RightSide component
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
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
  title: "TechConnect",
  description: "A platform connecting tech enthusiasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetBrainsMono.className} antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen">
            <main className="flex-grow">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
