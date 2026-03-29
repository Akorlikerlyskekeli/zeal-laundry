"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import { BookingProvider, useBooking } from "./context/BookingContext";

const inter = Inter({ subsets: ["latin"] });

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isOpen, closeModal } = useBooking();
  return (
    <body className={inter.className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BookingModal isOpen={isOpen} onClose={closeModal} />
    </body>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <BookingProvider>
        <LayoutContent>{children}</LayoutContent>
      </BookingProvider>
    </html>
  );
}
