import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import ScrollRestoration from "../components/ui/ScrollRestoration";

// Self-hosted at build time — no external font requests at runtime
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.volenti.co.za"),
  title: {
    default: "Volenti",
    template: "%s | Volenti",
  },
  description:
    "Volenti offers science-backed personal training, sports conditioning, and workplace wellness workshops in South Africa. Start your journey to sustainable health today.",
  openGraph: {
    siteName: "Volenti",
    locale: "en_ZA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
