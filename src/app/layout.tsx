import { Suspense } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";

export const metadata: Metadata = {
  metadataBase: new URL("https://nagjan.com"),
  title: {
    default: "NAGJAN | Industrial Corrugation Machinery & Spare Parts",
    template: "%s | NAGJAN - Mount Kailash Printpack Machines",
  },
  description:
    "Mount Kailash Printpack Machines manufactures, imports, and customizes high-speed NAGJAN corrugated box machinery, 2PLY plants, single facers, and 400+ industrial spare parts in Chennai, India.",
  icons: {
    icon: "/logo/nagjan-logo.png",
    apple: "/logo/nagjan-logo.png",
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
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <Suspense fallback={null}>
            <CartDrawer />
          </Suspense>
        </CartProvider>
      </body>
    </html>
  );
}
