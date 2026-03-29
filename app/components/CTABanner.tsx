"use client";
import { useBooking } from "../context/BookingContext";
import { WhatsAppIcon } from "../components/SocialIcons";

export default function CTABanner() {
  const { openModal } = useBooking();

  return (
    <section id="booking" className="py-20 bg-gray-50 px-6">
      <div
        className="max-w-4xl mx-auto bg-blue-700 rounded-3xl p-12 
      text-center shadow-xl"
      >
        <div className="text-6xl mb-4">🧺</div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready for Fresh Clean Clothes?
        </h2>
        <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
          Book a pick-up today and experience Koforidua's most trusted laundry
          service. It's quick, easy and affordable!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/233XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-400 text-white font-bold 
            px-8 py-4 rounded-full text-lg transition-all
            inline-flex items-center justify-center gap-3"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Book via WhatsApp
          </a>
          {/* ✅ Book Online opens modal */}
          <button
            onClick={openModal}
            className="bg-white text-blue-700 hover:bg-blue-50 font-bold 
            px-8 py-4 rounded-full text-lg transition-all"
          >
            📋 Book Online
          </button>
        </div>
      </div>
    </section>
  );
}
