import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Social by Noa | ניהול סושיאל",
  description: "Social by Noa — ניהול סושיאל, ימי צילום, רילסים, פוסטים ותכנון תוכן לעסקים במרכז הארץ.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
