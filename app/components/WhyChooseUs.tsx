const reasons = [
  {
    icon: "💰",
    title: "Affordable Prices",
    desc: "Quality laundry service at prices that suit every budget in Koforidua.",
  },
  {
    icon: "⚡",
    title: "24hr Turnaround",
    desc: "Most orders are completed and delivered within 24 hours.",
  },
  {
    icon: "🚪",
    title: "Door-to-Door Service",
    desc: "We pick up and deliver right to your home or office.",
  },
  {
    icon: "💎",
    title: "Quality Guaranteed",
    desc: "We treat every garment with care. Not satisfied? We redo it free.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white px-6">
      <div
        className="max-w-6xl mx-auto flex flex-col lg:flex-row 
      gap-14 items-center"
      >
        {/* Left */}
        <div className="flex-1">
          <span
            className="text-blue-600 font-semibold text-sm uppercase 
          tracking-widest"
          >
            Why Us
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            Why Choose <br />
            <span className="text-blue-700">Zeal Laundry?</span>
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            We're not just a laundry service — we're your reliable partner in
            keeping your clothes clean, fresh, and ready to wear. Trusted by
            hundreds of customers across Koforidua.
          </p>
          <a
            href="https://wa.me/233XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white px-8 py-4 rounded-full 
            font-bold hover:bg-blue-800 transition-colors inline-block"
          >
            Get Started Today
          </a>
        </div>

        {/* Right - Reasons Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-blue-50 rounded-2xl p-6 hover:shadow-md 
              transition-shadow"
            >
              <div className="text-4xl mb-3">{reason.icon}</div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
