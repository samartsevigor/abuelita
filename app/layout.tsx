import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Pacifico } from "next/font/google";
import { DemoBanner } from "@/components/DemoBanner";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display-family",
});

const script = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script-family",
});

export const metadata: Metadata = {
  title: "Abuelita's | Latin Fusion & Cocktails — Saint John, NB",
  description:
    "Latin fusion restaurant in Uptown Saint John. 2026 Uptown Burger Week winner, tequila-forward cocktails, and Chef José Adair’s kitchen.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Abuelita's — Latin Fusion & Cocktails",
    description: "A seat at the table. Reserve your night in Uptown Saint John.",
    images: ["/images/burger-award.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg font-sans text-text">
        <DemoBanner />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
