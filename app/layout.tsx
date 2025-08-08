import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import GoogleAnalytics from "@/components/Analytics/GoogleAnalytics";
import PartnerPopover from "@/components/ui/PartnerPopover";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Technologies Ltd",
  description:
    "We provide enterprises with innovative software solutions and digital marketing transformation strategies that drive exponential growth.",
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
        <GoogleAnalytics /> {/* GA Script Here */}
        {children}
        <PartnerPopover />
      </body>
    </html>
  );
}
