"use client";
import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    step: "01",
    icon: "📦",
    title: "Bag Your Clothes",
    desc: "Pack your dirty clothes in any bag and get ready for pickup.",
  },
  {
    step: "02",
    icon: "🚚",
    title: "We Pick Up",
    desc: "We come to your location in Koforidua at your chosen time.",
  },
  {
    step: "03",
    icon: "🧺",
    title: "We Clean",
    desc: "Your clothes are professionally washed, dried and ironed.",
  },
  {
    step: "04",
    icon: "✅",
    title: "We Deliver",
    desc: "Fresh, clean clothes delivered back to your door. Done!",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll direction="up" className="text-center mb-14">
          <span
            className="text-blue-600 font-semibold text-sm uppercase 
          tracking-widest"
          >
            Simple Process
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            How It Works
          </h2>
          <p className="text-gray-500 mt-3">
            Getting your laundry done has never been easier.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <AnimateOnScroll
              key={item.step}
              direction="up"
              delay={index * 0.15}
            >
              <div className="relative text-center">
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-[60%] 
                  w-full h-0.5 bg-blue-200 z-0"
                  ></div>
                )}
                <div
                  className="relative z-10 w-20 h-20 bg-blue-700 rounded-full 
                flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg"
                >
                  {item.icon}
                </div>
                <span className="text-blue-600 font-bold text-sm">
                  STEP {item.step}
                </span>
                <h3 className="text-lg font-bold text-gray-800 mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
