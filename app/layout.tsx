import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "./Provider";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stack Mail",
  description: "The future of newsletter",
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
        <Provider>
          <NextTopLoader showSpinner={false} color="#000000" shadow={false} />
          {children}
        </Provider>
        <Toaster theme="light" />
      </body>
    </html>
  );
}
