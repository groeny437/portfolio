// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import { Header } from "@/app/components/layout";

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

const offbit = localFont({
  src: [
    {
      path: "../public/font/Offbit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/Offbit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-offbit",
});

const SpoqaHanSansNeo = localFont({
  src: [
    {
      path: "../public/font/SpoqaHanSansNeo-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/SpoqaHanSansNeo-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/SpoqaHanSansNeo-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-spoqa",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={` ${SpoqaHanSansNeo.variable} ${poppins.variable} ${offbit.variable}  antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
