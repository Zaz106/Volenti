import type { Metadata, Viewport } from "next";
import "./globals.css";
import ScrollRestoration from "../components/ui/ScrollRestoration";

export const viewport: Viewport = {
  themeColor: "#000000",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Volenti",
  description: "Wellness. Fitness. Lifestyle. Health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
