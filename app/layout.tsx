import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Studio Zid | Moler Novi Sad",
  description: "Studio Zid Novi Sad - vaš pouzdan izbor za molerske radove, dekorativne tehnike, gipsane i fasadne radove. Kulturan tim i precizna procena troskova. Mogucnost izvodjenja radova i u drugim delovima Srbije.",
};

const lanmiFont = localFont({
  src: "/fonts/Conthrax-SemiBold.otf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lanmiFont.className}`}>
        <SessionWrapper>
            {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
