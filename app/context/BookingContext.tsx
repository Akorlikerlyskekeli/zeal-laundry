"use client";
import { createContext, useContext, useState } from "react";

interface BookingContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BookingContext = createContext<BookingContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);
