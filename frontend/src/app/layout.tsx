import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LastSeat — Last-Minute Event Tickets",
  description: "Grab unsold tickets to sports, music, and live events near you — days before they happen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
