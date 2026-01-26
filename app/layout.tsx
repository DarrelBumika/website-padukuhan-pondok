import "./globals.css";
import type { Metadata } from "next";
import React from "react";

import { Plus_Jakarta_Sans } from "next/font/google";
import { NAVIGATION_MENUS } from "@/constants/initialValue";
import NavigationBar from "@/components/shared/NavigationBar";
import Footer from "@/components/shared/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Padukuhan Pondok",
  description: "Website Resmi Padukuhan Pondok",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        <NavigationBar
          menuItems={NAVIGATION_MENUS}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
