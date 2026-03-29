"use client";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import {
  WhatsAppIcon,
  FacebookIcon,
  MailIcon,
} from "../components/SocialIcons";

type FormData = {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  pickupDate: string;
  pickupTime: string;
  deliveryDate: string;
  deliveryTime: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeForm, setActiveForm] = useState<"booking" | "message">(
    "booking",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          phone: data.phone,
          whatsapp: data.whatsapp || "Not provided",
          email: data.email,
          address: data.address || "Not provided",
          pickupDate: data.pickupDate || "Not provided",
          pickupTime: data.pickupTime || "Not provided",
          deliveryDate: data.deliveryDate || "Not provided",
          deliveryTime: data.deliveryTime || "Not provided",
          service: data.service || "Not provided",
          message: data.message || "Not provided",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      alert("Something went wrong. Please try WhatsApp or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Page Hero */}
      <section
        className="bg-gradient-to-br from-blue-700 to-blue-900 
      text-white py-20 px-6 text-center"
      >
        <AnimateOnScroll direction="down">
          <span
            className="text-blue-200 font-semibold text-sm uppercase 
          tracking-widest"
          >
            Get In Touch
          </span>
          <h1 className="text-5xl font-bold mt-3 mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Ready to book a pick-up or have a question? We're here to help.
            Reach us by phone, WhatsApp or our online form.
          </p>
          <div
            className="flex items-center justify-center gap-2 mt-6 
          text-blue-300 text-sm"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>→</span>
            <span className="text-white">Contact Us</span>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Contact Info Cards */}
      <section className="py-14 px-6 bg-white">
        <div
          className="max-w-6xl mx-auto grid grid-cols-1 
        sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: <MapPin size={28} />,
              title: "Our Location",
              lines: [
                "Your Street Address,",
                "Koforidua, Eastern Region",
                "Ghana",
              ],
              color: "bg-blue-700",
              action: null,
            },
            {
              icon: <Phone size={28} />,
              title: "Call Us",
              lines: ["+233 XX XXX XXXX", "+233 XX XXX XXXX"],
              color: "bg-indigo-700",
              action: "tel:+233XXXXXXXXX",
            },
            {
              icon: <WhatsAppIcon className="w-6 h-6" />,
              title: "WhatsApp",
              lines: ["+233 XX XXX XXXX", "Chat with us anytime"],
              color: "bg-green-600",
              action: "https://wa.me/233XXXXXXXXX",
            },
            {
              icon: <MailIcon className="w-6 h-6" />,
              title: "Email Us",
              lines: ["info@zeallaundry.com", "We reply within 24hrs"],
              color: "bg-blue-800",
              action: "mailto:info@zeallaundry.com",
            },
          ].map((card, index) => (
            <AnimateOnScroll
              key={card.title}
              direction="up"
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-50 rounded-2xl p-6 text-center 
                hover:shadow-lg transition-shadow h-full"
              >
                <div
                  className={`${card.color} text-white w-14 h-14 
                rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {card.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  {card.title}
                </h3>
                {card.lines.map((line, i) => (
                  <p key={i} className="text-gray-500 text-sm">
                    {line}
                  </p>
                ))}
                {card.action && (
                  <a
                    href={card.action}
                    target={
                      card.action.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-blue-700 text-white 
                    text-xs font-bold px-4 py-2 rounded-full 
                    hover:bg-blue-800 transition-colors"
                  >
                    {card.title === "WhatsApp"
                      ? "Chat Now"
                      : card.title === "Call Us"
                        ? "Call Now"
                        : "Send Email"}
                  </a>
                )}
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-6 px-6 bg-blue-50">
        <div
          className="max-w-4xl mx-auto flex flex-col sm:flex-row 
        items-center justify-center gap-6 text-center"
        >
          <div className="flex items-center gap-3">
            <div className="bg-blue-700 text-white p-2 rounded-full">
              <Clock size={20} />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-800">Mon – Sat</p>
              <p className="text-gray-500 text-sm">7:00 AM – 8:00 PM</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-blue-200"></div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-700 text-white p-2 rounded-full">
              <Clock size={20} />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-800">Sunday</p>
              <p className="text-gray-500 text-sm">9:00 AM – 5:00 PM</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-blue-200"></div>
          <div className="flex items-center gap-3">
            <div className="bg-green-500 text-white p-2 rounded-full">
              <MessageCircle size={20} />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-800">WhatsApp</p>
              <p className="text-gray-500 text-sm">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Map Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left — Forms */}
          <AnimateOnScroll direction="left" className="flex-1">
            {/* Tab Toggle */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => setActiveForm("booking")}
                className={`flex-1 py-3 rounded-full font-semibold 
                text-sm transition-all ${
                  activeForm === "booking"
                    ? "bg-blue-700 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                📋 Schedule a Pick-Up
              </button>
              <button
                onClick={() => setActiveForm("message")}
                className={`flex-1 py-3 rounded-full font-semibold 
                text-sm transition-all ${
                  activeForm === "message"
                    ? "bg-blue-700 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                ✉️ Send a Message
              </button>
            </div>

            {/* Success Message */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-50 border border-green-200 
                  rounded-2xl p-5 mb-6 text-center"
                >
                  <p className="text-green-700 font-bold text-lg">
                    ✅ Message sent successfully!
                  </p>
                  <p className="text-green-600 text-sm mt-1">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Booking Form */}
            <AnimatePresence mode="wait">
              {activeForm === "booking" ? (
                <motion.div
                  key="booking"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gray-50 rounded-3xl p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      Schedule a Pick-Up
                    </h2>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      {/* Name */}
                      <div>
                        <label
                          className="block text-sm font-semibold 
                        text-gray-700 mb-1"
                        >
                          Full Name *
                        </label>
                        <input
                          {...register("name", {
                            required: "Name is required",
                          })}
                          placeholder="Your full name"
                          className="w-full border border-gray-200 rounded-xl 
                          px-4 py-3 text-gray-700 focus:outline-none 
                          focus:border-blue-500 bg-white"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Phone & WhatsApp */}
                      <div className="grid grid-cols-2 gap-4">
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
                            focus:outline-none focus:border-blue-500 bg-white"
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
                            focus:outline-none focus:border-blue-500 bg-white"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          className="block text-sm font-semibold 
                        text-gray-700 mb-1"
                        >
                          Email *
                        </label>
                        <input
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Invalid email address",
                            },
                          })}
                          placeholder="your@email.com"
                          className="w-full border border-gray-200 rounded-xl 
                          px-4 py-3 text-gray-700 focus:outline-none 
                          focus:border-blue-500 bg-white"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* Address */}
                      <div>
                        <label
                          className="block text-sm font-semibold 
                        text-gray-700 mb-1"
                        >
                          Pick-Up Address *
                        </label>
                        <input
                          {...register("address", {
                            required: "Address is required",
                          })}
                          placeholder="Your address in Koforidua"
                          className="w-full border border-gray-200 rounded-xl 
                          px-4 py-3 text-gray-700 focus:outline-none 
                          focus:border-blue-500 bg-white"
                        />
                        {errors.address && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.address.message}
                          </p>
                        )}
                      </div>

                      {/* Pick-up Date & Time */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            className="block text-sm font-semibold 
                          text-gray-700 mb-1"
                          >
                            Pick-Up Date *
                          </label>
                          <input
                            type="date"
                            {...register("pickupDate", {
                              required: "Required",
                            })}
                            className="w-full border border-gray-200 
                            rounded-xl px-4 py-3 text-gray-700 
                            focus:outline-none focus:border-blue-500 bg-white"
                          />
                        </div>
                        <div>
                          <label
                            className="block text-sm font-semibold 
                          text-gray-700 mb-1"
                          >
                            Pick-Up Time *
                          </label>
                          <select
                            {...register("pickupTime", {
                              required: "Required",
                            })}
                            className="w-full border border-gray-200 
                            rounded-xl px-4 py-3 text-gray-700 
                            focus:outline-none focus:border-blue-500 bg-white"
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

                      {/* Delivery Date & Time */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            className="block text-sm font-semibold 
                          text-gray-700 mb-1"
                          >
                            Delivery Date *
                          </label>
                          <input
                            type="date"
                            {...register("deliveryDate", {
                              required: "Required",
                            })}
                            className="w-full border border-gray-200 
                            rounded-xl px-4 py-3 text-gray-700 
                            focus:outline-none focus:border-blue-500 bg-white"
                          />
                        </div>
                        <div>
                          <label
                            className="block text-sm font-semibold 
                          text-gray-700 mb-1"
                          >
                            Delivery Time *
                          </label>
                          <select
                            {...register("deliveryTime", {
                              required: "Required",
                            })}
                            className="w-full border border-gray-200 
                            rounded-xl px-4 py-3 text-gray-700 
                            focus:outline-none focus:border-blue-500 bg-white"
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
                          focus:border-blue-500 bg-white"
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

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-700 hover:bg-blue-800 
                        text-white font-bold py-4 rounded-full 
                        transition-colors disabled:opacity-60 text-lg mt-2"
                      >
                        {loading ? "⏳ Submitting..." : "📋 Schedule Pick-Up"}
                      </button>
                    </form>
                  </div>
                </motion.div>
              ) : (
                /* Message Form */
                <motion.div
                  key="message"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gray-50 rounded-3xl p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      Send Us a Message
                    </h2>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <div>
                        <label
                          className="block text-sm font-semibold 
                        text-gray-700 mb-1"
                        >
                          Full Name *
                        </label>
                        <input
                          {...register("name", {
                            required: "Name is required",
                          })}
                          placeholder="Your full name"
                          className="w-full border border-gray-200 rounded-xl 
                          px-4 py-3 text-gray-700 focus:outline-none 
                          focus:border-blue-500 bg-white"
                        />
                      </div>
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
                          className="w-full border border-gray-200 rounded-xl 
                          px-4 py-3 text-gray-700 focus:outline-none 
                          focus:border-blue-500 bg-white"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-semibold 
                        text-gray-700 mb-1"
                        >
                          Email *
                        </label>
                        <input
                          {...register("email", { required: "Required" })}
                          placeholder="your@email.com"
                          className="w-full border border-gray-200 rounded-xl 
                          px-4 py-3 text-gray-700 focus:outline-none 
                          focus:border-blue-500 bg-white"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-semibold 
                        text-gray-700 mb-1"
                        >
                          Message *
                        </label>
                        <textarea
                          {...register("message", {
                            required: "Message is required",
                          })}
                          rows={5}
                          placeholder="How can we help you?"
                          className="w-full border border-gray-200 rounded-xl 
                          px-4 py-3 text-gray-700 focus:outline-none 
                          focus:border-blue-500 bg-white resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-700 hover:bg-blue-800 
                        text-white font-bold py-4 rounded-full 
                        transition-colors disabled:opacity-60 text-lg"
                      >
                        {loading ? "⏳ Sending..." : "✉️ Send Message"}
                      </button>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* WhatsApp Quick Contact */}
            <div
              className="mt-6 bg-green-50 border border-green-200 
            rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="text-4xl">📱</div>
              <div className="flex-1">
                <p className="font-bold text-gray-800">Prefer WhatsApp?</p>
                <p className="text-gray-500 text-sm">
                  Message us directly for a faster response.
                </p>
              </div>
              <a
                href="https://wa.me/233XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-400 text-white 
                font-bold px-5 py-3 rounded-full text-sm transition-colors 
                shrink-0"
              >
                Chat Now
              </a>
            </div>
          </AnimateOnScroll>

          {/* Right — Map + Info */}
          <AnimateOnScroll direction="right" className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Find Us in Koforidua
            </h2>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden shadow-lg mb-6 h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15886.123456789!2d-0.2590000!3d6.0930000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb960fdc6e3b21%3A0x4e0e5b3b3b3b3b3b!2sKoforidua%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address Card */}
            <div className="bg-blue-700 rounded-2xl p-6 text-white mb-4">
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={22} className="shrink-0 mt-1 text-blue-300" />
                <div>
                  <p className="font-bold text-lg">Zeal Laundry Service</p>
                  <p className="text-blue-200 text-sm mt-1">
                    Your Street Address,
                    <br />
                    Koforidua, Eastern Region,
                    <br />
                    Ghana
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Phone size={18} className="text-blue-300 shrink-0" />
                <a
                  href="tel:+233XXXXXXXXX"
                  className="text-blue-200 hover:text-white text-sm"
                >
                  +233 XX XXX XXXX
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-300 shrink-0" />
                <a
                  href="mailto:info@zeallaundry.com"
                  className="text-blue-200 hover:text-white text-sm"
                >
                  info@zeallaundry.com
                </a>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/233XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-400 text-white 
    font-bold py-3 rounded-full text-center text-sm 
    transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href="tel:+233XXXXXXXXX"
                className="bg-blue-700 hover:bg-blue-800 text-white 
    font-bold py-3 rounded-full text-center text-sm 
    transition-colors flex items-center justify-center gap-2"
              >
                📞 Call Now
              </a>
              <a
                href="mailto:info@zeallaundry.com"
                className="bg-gray-700 hover:bg-gray-800 text-white 
    font-bold py-3 rounded-full text-center text-sm 
    transition-colors flex items-center justify-center gap-2"
              >
                <MailIcon className="w-4 h-4" /> Email Us
              </a>
              <a
                href="https://www.google.com/maps?q=Koforidua+Ghana"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white 
    font-bold py-3 rounded-full text-center text-sm 
    transition-colors flex items-center justify-center gap-2"
              >
                🗺️ Directions
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-700 text-center">
        <AnimateOnScroll direction="up">
          <h2 className="text-3xl font-bold text-white mb-3">
            We're Ready When You Are!
          </h2>
          <p className="text-blue-200 mb-6">
            Book a pick-up today and experience the best laundry service in
            Koforidua.
          </p>

          <a
            href="https://wa.me/233XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-400 text-white 
  font-bold px-8 py-4 rounded-full text-lg transition-colors
  inline-flex items-center justify-center gap-3"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Book via WhatsApp Now
          </a>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
