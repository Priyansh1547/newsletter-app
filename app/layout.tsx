import type { Metadata } from "next";
import { Provider } from "./Provider";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

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
      <body className={`${GeistSans.className} antialiased`}>
        <Provider>
          <NextTopLoader showSpinner={false} color="#000000" shadow={false} />
          {children}
        </Provider>
        <Toaster theme="light" />
      </body>
    </html>
  );
}
