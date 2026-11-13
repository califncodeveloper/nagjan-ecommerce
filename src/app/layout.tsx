import { Suspense } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { FloatingActionButtons } from "@/components/chat/FloatingActionButtons";
import { PageTransition } from "@/components/motion/PageTransition";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://nagjan.com"),
  title: {
    default: "NAGJAN | Industrial Corrugation Machinery & Spare Parts",
    template: "%s | NAGJAN - Mount Kailash Printpack Machines",
  },
  description:
    "Mount Kailash Printpack Machines manufactures, imports, and customizes high-speed NAGJAN corrugated box machinery, 2PLY plants, single facers, and 400+ industrial spare parts in Chennai, India.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <CartProvider>
          <SmoothScrollProvider>
            <Header />
            <main className="flex-1 flex flex-col">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <Suspense fallback={null}>
              <CartDrawer />
            </Suspense>
            <FloatingActionButtons />
          </SmoothScrollProvider>
        </CartProvider>
      </body>
    </html>
  );
}
