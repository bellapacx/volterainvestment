// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Voltera Investments - Djibouti EV Ecosystem",
  description:
    "Integrated Electric Vehicle & Digital Mobility Ecosystem in Djibouti",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--color-background)] text-[var(--color-foreground)] font-[var(--font-sans)] transition-colors duration-300">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-[calc(100vh-128px)]">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
