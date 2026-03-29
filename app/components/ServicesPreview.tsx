"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    icon: "👔",
    title: "Wash & Iron",
    desc: "Clothes washed and professionally ironed, ready to wear.",
    color: "bg-blue-50",
  },
  {
    icon: "👕",
    title: "Wash & Fold",
    desc: "Clean, fresh clothes washed, dried and neatly folded same day.",
    color: "bg-indigo-50",
  },
  {
    icon: "🧥",
    title: "Dry Cleaning",
    desc: "Expert care for suits, dresses and all delicate fabrics.",
    color: "bg-sky-50",
  },
  {
    icon: "🪙",
    title: "Self Service",
    desc: "Drop in and use our machines yourself. Fast, easy and affordable.",
    color: "bg-blue-50",
  },
  {
    icon: "⚡",
    title: "Instant & Express",
    desc: "Need it urgently? We offer same-day express laundry service.",
    color: "bg-indigo-50",
  },
  {
    icon: "🏠",
    title: "Home & Office Cleaning",
    desc: "Professional cleaning services for homes and offices in Koforidua.",
    color: "bg-sky-50",
  },
  {
    icon: "🧹",
    title: "Carpet Cleaning",
    desc: "Deep clean for carpets and rugs. Stain and odour removal.",
    color: "bg-blue-50",
  },
  {
    icon: "🛋️",
    title: "Sofa Cleaning",
    desc: "Professional sofa and upholstery cleaning for a fresh home.",
    color: "bg-indigo-50",
  },
  {
    icon: "💨",
    title: "Fumigation",
    desc: "Effective fumigation services to keep your space pest-free.",
    color: "bg-sky-50",
  },
  {
    icon: "🚚",
    title: "Door To Door",
    desc: "We pick up and deliver right to your door anywhere in Koforidua.",
    color: "bg-blue-50",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimateOnScroll direction="up" className="text-center mb-14">
          <span
            className="text-blue-600 font-semibold text-sm uppercase 
          tracking-widest"
          >
            What We Offer
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Our Services
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            A full range of professional laundry services in Koforidua.
          </p>
        </AnimateOnScroll>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.title}
              direction="up"
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`${service.color} rounded-2xl p-7 border 
                border-transparent hover:border-blue-100 h-full`}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            </AnimateOnScroll>
          ))}

          {/* View All Card */}
          <AnimateOnScroll direction="up" delay={0.5}>
            <div
              className="bg-blue-700 rounded-2xl p-7 flex flex-col 
            justify-between hover:bg-blue-800 transition-colors h-full"
            >
              <div>
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  All Services
                </h3>
                <p className="text-blue-200 text-sm">
                  View our full list of services and what's included.
                </p>
              </div>
              <Link
                href="/services"
                className="mt-6 bg-white text-blue-700 text-center 
                font-bold py-3 rounded-full hover:bg-blue-50 transition-colors"
              >
                View All Services →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
