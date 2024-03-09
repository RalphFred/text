import type { Metadata } from "next";
import "./globals.css";
import { Footer, NavBar } from "@/components";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen relative">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
