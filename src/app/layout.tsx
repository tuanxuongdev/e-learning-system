import type { Metadata } from "next";
import "./globals.css";
import { dm_sans, manrope } from "@/components/fonts";

export const metadata: Metadata = {
  title: "Ucademy",
  description: "Nền tảng học trực tuyến !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  );
}
