import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Layout/Header";
import { Red_Hat_Display } from "@next/font/google";
import { Footer } from "@/components/Layout/Footer";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"], // Specify the weights you need
});

export const metadata: Metadata = {
  title: "Lyte",
  description: "Build by LekanDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={redHatDisplay.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
