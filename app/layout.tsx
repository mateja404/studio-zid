import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio Zid | Početna",
  description: "Studio Zid Novi Sad - vaš pouzdan izbor za molerske radove, dekorativne tehnike, gipsane i fasadne radove. Kulturan tim i precizna procena troskova. Mogucnost izvodjenja radova i u drugim delovima Srbije.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionWrapper>
            {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
