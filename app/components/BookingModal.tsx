"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { WhatsAppIcon } from "./SocialIcons";

type BookingData = {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  serviceType: "home-service" | "pickup";
  service: string;
  pickupDate: string;
  pickupTime: string;
  notes: string;
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serviceType, setServiceType] = useState<"home-service" | "pickup">(
    "pickup",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingData>();

  const onSubmit = async (data: BookingData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    reset();
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  const handleWhatsApp = (data: BookingData) => {
    const msg = `Hello Zeal Laundry! I would like to book a service.

👤 Name: ${data.name}
📞 Phone: ${data.phone}
📍 Address: ${data.address}
🧺 Service: ${data.service}
🚚 Type: ${data.serviceType === "pickup" ? "Pick-Up & Delivery" : "Home Service"}
📅 Date: ${data.pickupDate}
⏰ Time: ${data.pickupTime}
📝 Notes: ${data.notes || "None"}`;

    window.open(
      `https://wa.me/233XXXXXXXXX?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-60 z-50 
            backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center 
            justify-center p-4 pointer-events-none"
          >
            <div
              className="bg-white rounded-3xl shadow-2xl w-full 
            max-w-lg max-h-[90vh] overflow-y-auto pointer-events-auto"
            >
              {/* Header */}
              <div
                className="bg-blue-700 rounded-t-3xl px-6 py-5 
              flex items-center justify-between sticky top-0"
              >
                <div>
                  <h2 className="text-white font-bold text-xl">
                    Book a Service
                  </h2>
                  <p className="text-blue-200 text-sm mt-0.5">
                    Zeal Laundry — Koforidua
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:bg-blue-600 p-2 
                  rounded-full transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Success State */}
              {submitted ? (
                <div className="p-10 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Booking Received!
                  </h3>
                  <p className="text-gray-500">
                    We will contact you shortly to confirm your booking.
                  </p>
                </div>
              ) : (
                <div className="p-6">
                  {/* Service Type Toggle */}
                  <div className="mb-6">
                    <p className="text-sm font-bold text-gray-700 mb-3">
                      How would you like your service? *
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setServiceType("pickup")}
                        className={`p-4 rounded-2xl border-2 text-left 
                        transition-all ${
                          serviceType === "pickup"
                            ? "border-blue-700 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <div className="text-3xl mb-2">🚚</div>
                        <p
                          className={`font-bold text-sm ${
                            serviceType === "pickup"
                              ? "text-blue-700"
                              : "text-gray-700"
                          }`}
                        >
                          Pick-Up & Delivery
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          We collect from your location
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setServiceType("home-service")}
                        className={`p-4 rounded-2xl border-2 text-left 
                        transition-all ${
                          serviceType === "home-service"
                            ? "border-blue-700 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <div className="text-3xl mb-2">🏠</div>
                        <p
                          className={`font-bold text-sm ${
                            serviceType === "home-service"
                              ? "text-blue-700"
                              : "text-gray-700"
                          }`}
                        >
                          Home Service
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          We come to your home
                        </p>
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label
                        className="block text-sm font-semibold 
                      text-gray-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-xl 
                        px-4 py-3 text-gray-700 focus:outline-none 
                        focus:border-blue-500 text-sm"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Phone & WhatsApp */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          className="block text-sm font-semibold 
                        text-gray-700 mb-1"
                        >
                          Phone *
                        </label>
                        <input
                          {...register("phone", { required: "Required" })}
                          placeholder="0XX XXX XXXX"
                          className="w-full border border-gray-200 
                          rounded-xl px-4 py-3 text-gray-700 
                          focus:outline-none focus:border-blue-500 text-sm"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          className="block text-sm font-semibold 
                        text-gray-700 mb-1"
                        >
                          WhatsApp
                        </label>
                        <input
                          {...register("whatsapp")}
                          placeholder="If different"
                          className="w-full border border-gray-200 
                          rounded-xl px-4 py-3 text-gray-700 
                          focus:outline-none focus:border-blue-500 text-sm"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <label
                        className="block text-sm font-semibold 
                      text-gray-700 mb-1"
                      >
                        {serviceType === "pickup"
                          ? "📍 Pick-Up Address *"
                          : "🏠 Home Address *"}
                      </label>
                      <input
                        {...register("address", {
                          required: "Address is required",
                        })}
                        placeholder={
                          serviceType === "pickup"
                            ? "Your address in Koforidua"
                            : "Your home address in Koforidua"
                        }
                        className="w-full border border-gray-200 rounded-xl 
                        px-4 py-3 text-gray-700 focus:outline-none 
                        focus:border-blue-500 text-sm"
                      />
                      {errors.address && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.address.message}
                        </p>
                      )}
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        className="block text-sm font-semibold 
                      text-gray-700 mb-1"
                      >
                        Service Required *
                      </label>
                      <select
                        {...register("service", {
                          required: "Please select a service",
                        })}
                        className="w-full border border-gray-200 rounded-xl 
                        px-4 py-3 text-gray-700 focus:outline-none 
                        focus:border-blue-500 text-sm bg-white"
                      >
                        <option value="">— Select a service —</option>
                        <option>Wash & Iron</option>
                        <option>Wash & Fold</option>
                        <option>Dry Cleaning</option>
                        <option>Self Service</option>
                        <option>Instant & Express</option>
                        <option>Home & Office Cleaning</option>
                        <option>Carpet Cleaning</option>
                        <option>Sofa Cleaning</option>
                        <option>Fumigation</option>
                        <option>Door To Door</option>
                      </select>
                      {errors.service && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.service.message}
                        </p>
                      )}
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          className="block text-sm font-semibold 
                        text-gray-700 mb-1"
                        >
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          {...register("pickupDate", {
                            required: "Required",
                          })}
                          className="w-full border border-gray-200 
                          rounded-xl px-4 py-3 text-gray-700 
                          focus:outline-none focus:border-blue-500 text-sm"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-semibold 
                        text-gray-700 mb-1"
                        >
                          Preferred Time *
                        </label>
                        <select
                          {...register("pickupTime", {
                            required: "Required",
                          })}
                          className="w-full border border-gray-200 
                          rounded-xl px-4 py-3 text-gray-700 
                          focus:outline-none focus:border-blue-500 
                          text-sm bg-white"
                        >
                          <option value="">Select time</option>
                          <option>7:00 AM – 9:00 AM</option>
                          <option>9:00 AM – 11:00 AM</option>
                          <option>11:00 AM – 1:00 PM</option>
                          <option>1:00 PM – 3:00 PM</option>
                          <option>3:00 PM – 5:00 PM</option>
                          <option>5:00 PM – 7:00 PM</option>
                        </select>
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label
                        className="block text-sm font-semibold 
                      text-gray-700 mb-1"
                      >
                        Additional Notes
                      </label>
                      <textarea
                        {...register("notes")}
                        rows={3}
                        placeholder="Any special instructions or requests..."
                        className="w-full border border-gray-200 rounded-xl 
                        px-4 py-3 text-gray-700 focus:outline-none 
                        focus:border-blue-500 text-sm resize-none"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {/* Submit Form */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-700 hover:bg-blue-800 text-white 
                        font-bold py-4 rounded-full transition-colors 
                        disabled:opacity-60 text-sm"
                      >
                        {loading ? "⏳ Submitting..." : "📋 Submit Booking"}
                      </button>

                      {/* WhatsApp Button */}
                      <button
                        type="button"
                        onClick={handleSubmit(handleWhatsApp)}
                        className="bg-green-500 hover:bg-green-400 text-white 
                        font-bold py-4 rounded-full transition-colors text-sm
                        flex items-center justify-center gap-2"
                      >
                        <WhatsAppIcon className="w-5 h-5" />
                        WhatsApp
                      </button>
                    </div>

                    <p className="text-center text-gray-400 text-xs">
                      We will confirm your booking within 30 minutes during
                      working hours.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
