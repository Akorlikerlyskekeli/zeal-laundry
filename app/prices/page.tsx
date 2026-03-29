"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "../components/SocialIcons";

// ── Tab Data ──────────────────────────────────────────────
const tabs = ["Laundry", "Dry Cleaning", "Other Items"];

const priceData: Record<
  string,
  { category: string; items: { name: string; price: string }[] }[]
> = {
  Laundry: [
    {
      category: "👕 Shirts & Tops",
      items: [
        { name: "T-Shirt (Folded)", price: "GHS 5" },
        { name: "T-Shirt (Hung)", price: "GHS 6" },
        { name: "Shirt (Folded)", price: "GHS 6" },
        { name: "Shirt (Hung)", price: "GHS 7" },
        { name: "Polo Shirt", price: "GHS 6" },
        { name: "5 Shirts (Bundle)", price: "GHS 28" },
        { name: "10 Shirts (Bundle)", price: "GHS 50" },
      ],
    },
    {
      category: "👖 Trousers & Bottoms",
      items: [
        { name: "Trousers", price: "GHS 7" },
        { name: "Jeans", price: "GHS 8" },
        { name: "Shorts", price: "GHS 5" },
        { name: "Skirt", price: "GHS 7" },
        { name: "Leggings", price: "GHS 5" },
      ],
    },
    {
      category: "🛏️ Bedding",
      items: [
        { name: "Single Bed Sheet", price: "GHS 15" },
        { name: "Double Bed Sheet", price: "GHS 20" },
        { name: "Pillow Case (each)", price: "GHS 5" },
        { name: "Duvet Cover (Single)", price: "GHS 25" },
        { name: "Duvet Cover (Double)", price: "GHS 35" },
      ],
    },
    {
      category: "🧦 Underwear & Socks",
      items: [
        { name: "Underwear (each)", price: "GHS 3" },
        { name: "Socks (per pair)", price: "GHS 3" },
        { name: "Bra", price: "GHS 5" },
        { name: "Bundle (7 pieces)", price: "GHS 18" },
      ],
    },
    {
      category: "🏋️ Sportswear",
      items: [
        { name: "Sports Shirt", price: "GHS 6" },
        { name: "Sports Shorts", price: "GHS 5" },
        { name: "Sports Kit (Full)", price: "GHS 18" },
        { name: "Gym Wear Bundle", price: "GHS 25" },
      ],
    },
  ],
  "Dry Cleaning": [
    {
      category: "🧥 Suits & Formal",
      items: [
        { name: "Suit Jacket", price: "GHS 25" },
        { name: "Suit Trousers", price: "GHS 15" },
        { name: "Full Suit (2-piece)", price: "GHS 35" },
        { name: "Full Suit (3-piece)", price: "GHS 45" },
        { name: "Blazer", price: "GHS 22" },
        { name: "Waistcoat", price: "GHS 12" },
      ],
    },
    {
      category: "👗 Dresses & Gowns",
      items: [
        { name: "Casual Dress", price: "GHS 18" },
        { name: "Evening Dress", price: "GHS 30" },
        { name: "Wedding Dress", price: "GHS 80" },
        { name: "Prom Dress", price: "GHS 50" },
        { name: "Kente Dress", price: "GHS 35" },
      ],
    },
    {
      category: "🧣 Knitwear & Delicates",
      items: [
        { name: "Jumper / Sweater", price: "GHS 15" },
        { name: "Cardigan", price: "GHS 15" },
        { name: "Silk Blouse", price: "GHS 20" },
        { name: "Cashmere Item", price: "GHS 25" },
      ],
    },
    {
      category: "🧤 Outerwear",
      items: [
        { name: "Light Jacket", price: "GHS 20" },
        { name: "Heavy Coat", price: "GHS 35" },
        { name: "Raincoat", price: "GHS 25" },
        { name: "Leather Jacket", price: "GHS 50" },
      ],
    },
  ],
  "Other Items": [
    {
      category: "🏠 Carpets & Rugs",
      items: [
        { name: "Small Rug (up to 4ft)", price: "GHS 35" },
        { name: "Medium Carpet (4–8ft)", price: "GHS 60" },
        { name: "Large Carpet (8ft+)", price: "GHS 100" },
        { name: "Door Mat", price: "GHS 15" },
        { name: "Car Mat (per set)", price: "GHS 40" },
      ],
    },
    {
      category: "🛋️ Household Items",
      items: [
        { name: "Curtain (per panel)", price: "GHS 20" },
        { name: "Cushion Cover", price: "GHS 10" },
        { name: "Table Cloth", price: "GHS 12" },
        { name: "Bath Towel", price: "GHS 10" },
        { name: "Hand Towel", price: "GHS 6" },
      ],
    },
    {
      category: "👜 Accessories",
      items: [
        { name: "Handbag (clean)", price: "GHS 30" },
        { name: "Cap / Hat", price: "GHS 8" },
        { name: "Scarf", price: "GHS 8" },
        { name: "Tie", price: "GHS 8" },
        { name: "Belt", price: "GHS 10" },
      ],
    },
  ],
};

// ── Accordion Item ────────────────────────────────────────
function AccordionItem({
  category,
  items,
  index,
}: {
  category: string;
  items: { name: string; price: string }[];
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 
        bg-white hover:bg-blue-50 transition-colors text-left"
      >
        <span className="font-bold text-gray-800 text-lg">{category}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-blue-600" size={22} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <table className="w-full">
              <tbody>
                {items.map((item, i) => (
                  <tr
                    key={item.name}
                    className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-3 text-gray-700 text-sm">
                      {item.name}
                    </td>
                    <td
                      className="px-6 py-3 text-right font-bold 
                    text-blue-700 text-sm"
                    >
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────
export default function PricesPage() {
  const [activeTab, setActiveTab] = useState("Laundry");

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
            Transparent Pricing
          </span>
          <h1 className="text-5xl font-bold mt-3 mb-4">Our Prices</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Simple, affordable and transparent pricing. No hidden fees — just
            clean clothes at great prices in Koforidua.
          </p>
          <div
            className="flex items-center justify-center gap-2 mt-6 
          text-blue-300 text-sm"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>→</span>
            <span className="text-white">Prices</span>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Price Highlights */}
      <section className="py-14 px-6 bg-white">
        <div
          className="max-w-5xl mx-auto grid grid-cols-1 
        sm:grid-cols-3 gap-6"
        >
          {[
            {
              icon: "👕",
              title: "From GHS 5",
              subtitle: "Shirt Service",
              desc: "Per shirt washed, dried & folded",
              color: "bg-blue-700",
            },
            {
              icon: "🧺",
              title: "From GHS 20",
              subtitle: "Wash & Fold",
              desc: "Per load up to 5kg",
              color: "bg-indigo-700",
            },
            {
              icon: "🧥",
              title: "From GHS 15",
              subtitle: "Dry Cleaning",
              desc: "Per item professionally cleaned",
              color: "bg-blue-800",
            },
          ].map((card, index) => (
            <AnimateOnScroll
              key={card.subtitle}
              direction="up"
              delay={index * 0.15}
            >
              <div
                className={`${card.color} text-white rounded-3xl 
              p-8 text-center shadow-lg`}
              >
                <div className="text-5xl mb-3">{card.icon}</div>
                <h3 className="text-3xl font-bold">{card.title}</h3>
                <p className="text-lg font-semibold mt-1 opacity-90">
                  {card.subtitle}
                </p>
                <p className="text-sm opacity-70 mt-2">{card.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Full Price List with Tabs */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll direction="up" className="text-center mb-10">
            <span
              className="text-blue-600 font-semibold text-sm uppercase 
            tracking-widest"
            >
              Full Price List
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Detailed Pricing
            </h2>
            <p className="text-gray-500 mt-3">
              Click any category to expand and see individual item prices.
            </p>
          </AnimateOnScroll>

          {/* Tabs */}
          <div className="flex gap-3 mb-8 justify-center flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold text-sm 
                transition-all ${
                  activeTab === tab
                    ? "bg-blue-700 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Accordion Price Tables */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {priceData[activeTab].map((section, index) => (
                <AccordionItem
                  key={section.category}
                  category={section.category}
                  items={section.items}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Note */}
          <div
            className="mt-8 bg-blue-50 border border-blue-200 
          rounded-2xl p-5 text-center"
          >
            <p className="text-blue-700 text-sm font-medium">
              💡 Prices are in Ghana Cedis (GHS). Bulk discounts available for
              orders above GHS 200.
              <a
                href="https://wa.me/233XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-400 text-white 
              font-bold px-8 py-4 rounded-full text-lg transition-colors
              inline-flex items-center justify-center gap-3"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Contact us for a custom quote.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Why Our Prices */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll direction="up" className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Why Our Prices are the Best
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              We believe everyone in Koforidua deserves quality laundry at a
              price they can afford.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💰",
                title: "No Hidden Fees",
                desc: "What you see is what you pay. Simple.",
              },
              {
                icon: "📦",
                title: "Bundle Savings",
                desc: "Save more when you send more items.",
              },
              {
                icon: "🚚",
                title: "Free Delivery",
                desc: "Free pick-up & delivery on orders above GHS 100.",
              },
              {
                icon: "⭐",
                title: "Quality Guaranteed",
                desc: "Not happy? We redo it free of charge.",
              },
            ].map((item, index) => (
              <AnimateOnScroll
                key={item.title}
                direction="up"
                delay={index * 0.1}
              >
                <div
                  className="bg-blue-50 rounded-2xl p-6 text-center 
                hover:shadow-md transition-shadow h-full"
                >
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-700 text-center">
        <AnimateOnScroll direction="up">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Book?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Contact us now to place your order. We serve all areas of Koforidua
            with fast turnaround.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Link
              href="/contact"
              className="bg-white text-blue-700 hover:bg-blue-50 
              font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              📋 Book Online →
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
