import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CapitUp | Insurance, made simple.",
  description: "Choose the insurance service you need and connect with CapitUp.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
