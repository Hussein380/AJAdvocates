import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import "./globals.css";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OJ Advocates LLP | Integrity | Precision | Results",
  description: "OJ Advocates LLP is a leading legal advisory firm based in Nairobi, Kenya. We provide responsive, comprehensive, and exceptional legal solutions tailored for your success.",
  metadataBase: new URL("https://ojadvocatesllp.com"),
  openGraph: {
    title: "OJ Advocates LLP | Integrity | Precision | Results",
    description: "Exceptional legal solutions tailored for your success. Committed to providing responsive and comprehensive legal services.",
    url: "https://ojadvocatesllp.com",
    siteName: "OJ Advocates LLP",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
