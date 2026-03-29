"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Image from "next/image";

const services = [
  {
    icon: "👔",
    title: "Wash & Iron",
    desc: "We wash your clothes and professionally iron them so they are ready to wear immediately after delivery.",
    features: [
      "Sorted by color and fabric",
      "Washed at correct temperatures",
      "Professionally steam ironed",
      "Hung or folded as preferred",
      "Ready within 24 hours",
    ],
    price: "From GHS 7 per item",
    color: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    icon: "👕",
    title: "Wash & Fold",
    desc: "Our wash and fold service is perfect for everyday laundry. We wash, dry and neatly fold all your clothes fresh and clean.",
    features: [
      "Sorted by color and fabric type",
      "Washed at correct temperatures",
      "Tumble dried and neatly folded",
      "Ready within 24 hours",
      "Pick-up & delivery available",
    ],
    price: "From GHS 5 per item",
    color: "bg-indigo-50",
    border: "border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: "🧥",
    title: "Dry Cleaning",
    desc: "Professional dry cleaning using the latest techniques to clean your delicate and specialist garments safely and effectively.",
    features: [
      "Suits, blazers & formal wear",
      "Delicate fabrics & silk",
      "Wedding dresses & gowns",
      "Stain removal treatment",
      "Professionally pressed & hung",
    ],
    price: "From GHS 15 per item",
    color: "bg-sky-50",
    border: "border-sky-200",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    icon: "🪙",
    title: "Self Service",
    desc: "Drop in with your dirty clothes and use our machines yourself. Fast, affordable and done within the hour.",
    features: [
      "Coin operated machines",
      "Available during opening hours",
      "Done within 1 hour",
      "Staff on hand to assist",
      "Affordable flat rate",
    ],
    price: "From GHS 20 per load",
    color: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    icon: "⚡",
    title: "Instant & Express",
    desc: "Got an urgent need? Our express laundry service gets your clothes cleaned and ready on the same day.",
    features: [
      "Same day turnaround",
      "Priority handling",
      "All laundry types accepted",
      "WhatsApp updates on progress",
      "Available 6 days a week",
    ],
    price: "From GHS 10 per item",
    color: "bg-indigo-50",
    border: "border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: "🏠",
    title: "Home & Office Cleaning",
    desc: "We provide professional cleaning services for homes and offices across Koforidua. Thorough, reliable and affordable.",
    features: [
      "Full home deep cleaning",
      "Office cleaning available",
      "Flexible scheduling",
      "Trained cleaning staff",
      "Eco-friendly products used",
    ],
    price: "From GHS 100 per session",
    color: "bg-sky-50",
    border: "border-sky-200",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    icon: "🧹",
    title: "Carpet Cleaning",
    desc: "Our deep carpet cleaning removes dirt, stains and odours from your carpets and rugs, leaving them fresh and like new.",
    features: [
      "Deep extraction cleaning",
      "Stain & odour removal",
      "All carpet sizes accepted",
      "Rugs & mats included",
      "Quick drying process",
    ],
    price: "From GHS 50 per carpet",
    color: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    icon: "🛋️",
    title: "Sofa Cleaning",
    desc: "Professional sofa and upholstery cleaning to remove stains, odours and bacteria. Restore your sofa to its original look.",
    features: [
      "All sofa types accepted",
      "Stain & odour removal",
      "Fabric & leather sofas",
      "Quick drying technique",
      "Available at your location",
    ],
    price: "From GHS 80 per sofa",
    color: "bg-indigo-50",
    border: "border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: "💨",
    title: "Fumigation",
    desc: "Effective fumigation services to eliminate pests and insects from your home, office or business in Koforidua.",
    features: [
      "Homes & offices treated",
      "Safe approved chemicals",
      "Pest & insect elimination",
      "Before & after inspection",
      "Flexible scheduling",
    ],
    price: "From GHS 150 per session",
    color: "bg-sky-50",
    border: "border-sky-200",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    icon: "🚚",
    title: "Door To Door",
    desc: "Our convenient door-to-door service means you never have to leave your home. We collect and deliver across all of Koforidua.",
    features: [
      "Available across Koforidua",
      "Flexible time slots",
      "WhatsApp order updates",
      "Safe & secure handling",
      "Free on orders above GHS 100",
    ],
    price: "Free on orders above GHS 100",
    color: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
];
export default function ServicesPage() {
  return (
    <div>
      {/* Page Hero with Real Shop Image */}
      <section className="relative h-80 md:h-96 w-full overflow-hidden">
        {/* Real Shop Image */}
        <Image
          src="/images/services-banner.jpg"
          alt="Zeal Laundry Service Shop"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-35"></div>

        {/* Content on top of image */}
        <div
          className="absolute inset-0 flex flex-col items-center 
  justify-center text-white text-center px-6"
        >
          <AnimateOnScroll direction="down">
            <span
              className="text-blue-200 font-semibold text-sm uppercase 
      tracking-widest"
            >
              What We Offer
            </span>
            <h1 className="text-5xl font-bold mt-3 mb-4">Our Services</h1>
            <p className="text-blue-200 text-lg max-w-xl mx-auto">
              Professional, affordable laundry services in Koforidua. We handle
              your clothes with the utmost care — every time.
            </p>
            <div
              className="flex items-center justify-center gap-2 mt-6 
      text-blue-300 text-sm"
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>→</span>
              <span className="text-white">Services</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      {/* Services List */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={0.1}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`${service.color} border ${service.border} 
                rounded-3xl p-8 md:p-10 flex flex-col md:flex-row 
                gap-8 items-start`}
              >
                {/* Left */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-6xl">{service.icon}</div>
                    <div>
                      <span
                        className={`text-xs font-bold px-3 py-1 
                      rounded-full ${service.badge}`}
                      >
                        {service.price}
                      </span>
                      <h2 className="text-3xl font-bold text-gray-800 mt-1">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://wa.me/233XXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-400 text-white 
                      font-bold px-6 py-3 rounded-full transition-colors 
                      text-center text-sm"
                    >
                      📱 Book via WhatsApp
                    </a>
                    <a
                      href="tel:+233XXXXXXXXX"
                      className="bg-blue-700 hover:bg-blue-800 text-white 
                      font-bold px-6 py-3 rounded-full transition-colors 
                      text-center text-sm"
                    >
                      📞 Call to Book
                    </a>
                  </div>
                </div>

                {/* Right — Features */}
                <div className="md:w-72 bg-white rounded-2xl p-6 shadow-sm">
                  <h3
                    className="font-bold text-gray-800 mb-4 text-sm 
                  uppercase tracking-wide"
                  >
                    What's Included:
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-gray-600 
                        text-sm"
                      >
                        <span
                          className="text-green-500 font-bold 
                        mt-0.5 shrink-0"
                        >
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Commercial Laundry Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div
          className="max-w-6xl mx-auto flex flex-col lg:flex-row 
        gap-12 items-center"
        >
          <AnimateOnScroll direction="left" className="flex-1">
            <span
              className="text-blue-600 font-semibold text-sm uppercase 
            tracking-widest"
            >
              For Businesses
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
              Commercial Laundry <br />
              <span className="text-blue-700">Services</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Zeal Laundry provides expert commercial laundry services to
              businesses across Koforidua. Outsource your laundry and focus on
              what you do best.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We handle linen, uniforms, towels, bed sheets and more — cleaned,
              pressed and delivered on schedule.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                "Hotels & Guest Houses",
                "Restaurants & Cafes",
                "Salons & Spas",
                "Schools & Offices",
                "Event Centers",
                "Sports Teams",
              ].map((client) => (
                <div
                  key={client}
                  className="flex items-center gap-2 text-gray-600 text-sm"
                >
                  <span className="text-blue-600 font-bold">✓</span>
                  {client}
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/233XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-8 py-4 rounded-full 
              font-bold hover:bg-blue-800 transition-colors inline-block"
            >
              Get a Commercial Quote
            </a>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" className="flex-1">
            <div className="bg-blue-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Why Businesses Choose Us
              </h3>
              {[
                {
                  icon: "📅",
                  title: "Scheduled Pick-ups",
                  desc: "Regular weekly or daily collection tailored to your business.",
                },
                {
                  icon: "💰",
                  title: "Bulk Discounts",
                  desc: "Special rates for high-volume commercial orders.",
                },
                {
                  icon: "⚡",
                  title: "Fast Turnaround",
                  desc: "Quick service so your operations never slow down.",
                },
                {
                  icon: "📋",
                  title: "Itemised Invoicing",
                  desc: "Clear, detailed invoices for easy business accounting.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 mb-5 last:mb-0">
                  <div className="text-3xl shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-blue-200 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-700 text-center">
        <AnimateOnScroll direction="up">
          <div className="text-6xl mb-4">🧺</div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Book any of our services today. We serve all areas of Koforidua with
            free pick-up and delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/233XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white 
              font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              📱 Book via WhatsApp
            </a>
            <Link
              href="/prices"
              className="bg-white text-blue-700 hover:bg-blue-50 
              font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              View Our Prices →
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
