import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noa Site",
  description: "Social by Noa",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
