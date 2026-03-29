"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import Image from "next/image";
import { WhatsAppIcon } from "./SocialIcons";
import { useBooking } from "../context/BookingContext";

const slides = [
  {
    image: "/images/zeal-shop.jpg",
    tag: "📍 Koforidua, Eastern Region",
    title: "Welcome to",
    highlight: "Zeal Laundry",
    desc: "Koforidua's most trusted laundry service. Wash & Fold, Dry Cleaning, Self Service and Door-to-Door delivery.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1200&auto=format&fit=crop",
    tag: "🚚 Free Pick-Up & Delivery",
    title: "We Come",
    highlight: "To Your Door",
    desc: "Book a pick-up in Koforidua and we handle everything. Easy, fast and affordable.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=1200&auto=format&fit=crop",
    tag: "✨ Professional Dry Cleaning",
    title: "Your Clothes",
    highlight: "Perfectly Clean",
    desc: "Expert dry cleaning, steam ironing and carpet cleaning services in Koforidua.",
  },
];

// ── WhatsApp SVG Icon ──────────────────────────────
<a
  href="https://wa.me/233XXXXXXXXX"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-400 text-white 
  font-bold px-8 py-4 rounded-full text-lg transition-colors
  flex items-center justify-center gap-2"
>
  <WhatsAppIcon /> Book via WhatsApp
</a>;

const bubbles = [0, 1, 2, 3, 4, 5, 6, 7];

export default function Hero() {
  const { openModal } = useBooking();
  return (
    <section className="relative overflow-hidden">
      {/* Floating Soap Bubbles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[
          { size: 40, left: 5, delay: 0, duration: 8 },
          { size: 25, left: 15, delay: 2, duration: 6 },
          { size: 60, left: 25, delay: 1, duration: 10 },
          { size: 30, left: 38, delay: 3, duration: 7 },
          { size: 50, left: 50, delay: 0.5, duration: 9 },
          { size: 20, left: 62, delay: 2.5, duration: 6 },
          { size: 45, left: 72, delay: 1.5, duration: 11 },
          { size: 35, left: 82, delay: 3.5, duration: 8 },
          { size: 55, left: 90, delay: 1, duration: 7 },
          { size: 28, left: 45, delay: 4, duration: 9 },
        ].map((b, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: `${b.left}%`,
              bottom: "-80px",
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
            }}
          />
        ))}
      </div>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[90vh] min-h-[600px] flex items-center">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-blue-900 opacity-45"></div>
              </div>

              {/* Slide Content */}
              <div
                className="relative z-10 max-w-6xl mx-auto px-6 
              text-white w-full"
              >
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-blue-500 text-white text-sm font-semibold 
                  px-4 py-1 rounded-full mb-6 inline-block"
                >
                  {slide.tag}
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl md:text-7xl font-bold leading-tight 
                  mt-4 mb-4"
                >
                  {slide.title} <br />
                  <span className="text-blue-300">{slide.highlight}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-blue-100 text-xl mb-10 max-w-xl"
                >
                  {slide.desc}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  {/* WhatsApp Button with real icon */}
                  <a
                    href="https://wa.me/233XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-400 text-white 
                    font-bold px-8 py-4 rounded-full text-lg transition-colors 
                    shadow-lg text-center flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon />
                    WhatsApp Us
                  </a>

                  <button
                    onClick={openModal}
                    className="bg-white text-blue-700 hover:bg-blue-50 
                      font-bold px-8 py-4 rounded-full text-lg transition-colors 
                      shadow-lg text-center"
                  >
                    📋 Book Online
                  </button>
                  <a
                    href="tel:+233XXXXXXXXX"
                    className="border-2 border-white text-white hover:bg-white 
                    hover:text-blue-700 font-bold px-8 py-4 rounded-full 
                    text-lg transition-colors text-center"
                  >
                    📞 Call Us
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex gap-10 mt-14"
                >
                  {[
                    { number: "500+", label: "Happy Customers" },
                    { number: "5+", label: "Services" },
                    { number: "24hr", label: "Turnaround" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-3xl font-bold">{stat.number}</p>
                      <p className="text-blue-300 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
