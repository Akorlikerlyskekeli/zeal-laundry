"use client";
import { Award, Users, Clock, ThumbsUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimateOnScroll from "../components/AnimateOnScroll";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const team = [
  { name: "Your Name", role: "Founder & CEO", initial: "Z" },
  { name: "Team Member", role: "Head of Operations", initial: "T" },
  { name: "Delivery Manager", role: "Delivery Manager", initial: "T" },
];

const values = [
  {
    icon: "💎",
    title: "Quality",
    desc: "We treat every garment with the utmost care and attention to detail.",
  },
  {
    icon: "⚡",
    title: "Speed",
    desc: "Fast turnaround without compromising on quality. Your time matters.",
  },
  {
    icon: "🤝",
    title: "Trust",
    desc: "We handle your clothes as if they were our own. Always reliable.",
  },
  {
    icon: "💰",
    title: "Affordability",
    desc: "Premium laundry service at prices every Koforidua resident can afford.",
  },
];

export default function AboutPage() {
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
            Who We Are
          </span>
          <h1 className="text-5xl font-bold mt-3 mb-4">About Zeal Laundry</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Koforidua's most trusted and affordable laundry service — built on
            quality, speed and care.
          </p>
          <div
            className="flex items-center justify-center gap-2 mt-6 
          text-blue-300 text-sm"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>→</span>
            <span className="text-white">About Us</span>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-white">
        <div
          className="max-w-6xl mx-auto flex flex-col lg:flex-row 
        gap-14 items-center"
        >
          {/* Image */}
          <AnimateOnScroll direction="left" className="flex-1 w-full">
            <div
              className="relative h-[420px] w-full rounded-3xl 
            overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&auto=format&fit=crop"
                alt="Zeal Laundry Story"
                sizes="(max-width: 768px) 100vw, 50vw"
                fill
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>

          {/* Content */}
          <AnimateOnScroll direction="right" className="flex-1">
            <span
              className="text-blue-600 font-semibold text-sm uppercase 
            tracking-widest"
            >
              Our Story
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-6">
              Born from a Need for <br />
              <span className="text-blue-700">Reliable Laundry</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Zeal Laundry Service was founded right here in Koforidua with one
              simple mission — to make clean clothes accessible and stress-free
              for every household and business in the Eastern Region.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We saw a gap in the market for an affordable, reliable and
              professional laundry service that people could truly count on. So
              we built one. From our very first customer, we've been committed
              to delivering exceptional results every single time.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Today, we proudly serve hundreds of satisfied customers across
              Koforidua — from busy families and working professionals to hotels
              and businesses.
            </p>
            <a
              href="https://wa.me/233XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-8 py-4 rounded-full 
              font-bold hover:bg-blue-800 transition-colors inline-block"
            >
              Get in Touch With Us
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-700 px-6">
        <div
          className="max-w-6xl mx-auto grid grid-cols-2 
        md:grid-cols-4 gap-8"
        >
          {[
            { number: 500, suffix: "+", label: "Happy Customers" },
            { number: 24, suffix: "hr", label: "Turnaround Time" },
            { number: 5, suffix: "+", label: "Services Offered" },
            { number: 100, suffix: "%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <AnimateOnScroll
              key={stat.label}
              direction="up"
              delay={index * 0.15}
            >
              <div className="text-center text-white">
                <p className="text-4xl font-bold">
                  <CountUp target={stat.number} suffix={stat.suffix} />
                </p>
                <p className="text-blue-200 mt-1 text-sm">{stat.label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll direction="up" className="text-center mb-14">
            <span
              className="text-blue-600 font-semibold text-sm uppercase 
            tracking-widest"
            >
              What Drives Us
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Our Core Values
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimateOnScroll
                key={value.title}
                direction="up"
                delay={index * 0.1}
              >
                <div
                  className="bg-white rounded-2xl p-7 shadow-sm 
                hover:shadow-md transition-shadow text-center h-full"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="font-bold text-gray-800 text-xl mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll direction="up" className="text-center mb-14">
            <span
              className="text-blue-600 font-semibold text-sm uppercase 
            tracking-widest"
            >
              The People
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Meet Our Team
            </h2>
            <p className="text-gray-500 mt-3">
              The dedicated people behind Zeal Laundry Service.
            </p>
          </AnimateOnScroll>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 
          max-w-3xl mx-auto"
          >
            {team.map((member, index) => (
              <AnimateOnScroll
                key={member.name}
                direction="up"
                delay={index * 0.15}
              >
                <div className="text-center bg-blue-50 rounded-2xl p-8">
                  <div
                    className="w-20 h-20 bg-blue-700 rounded-full 
                  flex items-center justify-center text-white text-3xl 
                  font-bold mx-auto mb-4"
                  >
                    {member.initial}
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-sm mt-1">{member.role}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-700 text-center">
        <AnimateOnScroll direction="up">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Try Zeal Laundry?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Join hundreds of happy customers in Koforidua. Book your first
            pick-up today!
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
              href="/services"
              className="bg-white text-blue-700 hover:bg-blue-50 
              font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              View Our Services →
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
