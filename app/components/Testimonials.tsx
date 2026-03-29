const testimonials = [
  {
    name: "Ama Owusu",
    location: "Koforidua",
    review:
      "Zeal Laundry is the best! My clothes always come back clean, fresh and neatly folded. The delivery is always on time.",
    rating: 5,
  },
  {
    name: "Kweku Mensah",
    location: "Koforidua",
    review:
      "Very affordable and professional. I use their pick-up and delivery service every week. Highly recommended!",
    rating: 5,
  },
  {
    name: "Abena Asante",
    location: "Koforidua",
    review:
      "They handled my expensive suits with great care. The dry cleaning service is excellent. I am a loyal customer now.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/32938975/pexels-photo-32938975.jpeg')",
        }}
      />

      {/* Dark blue overlay on top of image */}
      <div className="absolute inset-0 bg-blue-900 opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-blue-200 font-semibold text-sm uppercase 
          tracking-widest"
          >
            Reviews
          </span>
          <h2 className="text-4xl font-bold text-white mt-2">
            What Our Customers Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-7 shadow-lg">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{t.review}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 bg-blue-700 rounded-full flex 
                items-center justify-center text-white font-bold"
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
