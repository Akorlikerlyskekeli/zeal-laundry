import Link from "next/link";
// ✅ FIXED - removed Facebook & Instagram
import { Phone, Mail, MapPin } from "lucide-react";
import {
  WhatsAppIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
} from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div
        className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 
      md:grid-cols-4 gap-10"
      >
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-white text-blue-700 font-bold text-xl px-3 py-1 rounded-lg">
              ZL
            </div>
            <div>
              <p className="font-bold text-lg leading-tight">Zeal Laundry</p>
              <p className="text-xs text-blue-300">Service</p>
            </div>
          </div>
          <p className="text-blue-200 text-sm leading-relaxed">
            Koforidua's most trusted and affordable laundry service. We handle
            your clothes with care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-blue-200 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Prices", href: "/prices" },
              { name: "Blog", href: "/blog" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  → {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        {[
          "Wash & Iron",
          "Wash & Fold",
          "Dry Cleaning",
          "Self Service",
          "Instant & Express",
          "Home & Office Cleaning",
          "Carpet Cleaning",
          "Sofa Cleaning",
          "Fumigation",
          "Door To Door",
        ].map((service) => (
          <li key={service}>→ {service}</li>
        ))}

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
          <ul className="space-y-3 text-blue-200 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 shrink-0 text-blue-400" />
              <span>
                Your Street Address,
                <br />
                Koforidua, Eastern Region
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-blue-400" />
              <a href="tel:+233XXXXXXXXX" className="hover:text-white">
                +233 XX XXX XXXX
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-blue-400" />
              <a
                href="mailto:info@zeallaundry.com"
                className="hover:text-white"
              >
                info@zeallaundry.com
              </a>
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex gap-3 mt-5">
            <a
              href="https://facebook.com/zeallaundry"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 w-9 h-9 rounded-full 
    flex items-center justify-center transition-colors"
              title="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/zeallaundry"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-500 w-9 h-9 rounded-full 
    flex items-center justify-center transition-colors"
              title="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/233XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 w-9 h-9 rounded-full 
    flex items-center justify-center transition-colors"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:info@zeallaundry.com"
              className="bg-blue-800 hover:bg-blue-700 w-9 h-9 rounded-full 
    flex items-center justify-center transition-colors"
              title="Email"
            >
              <MailIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t border-blue-800 py-4 px-6 text-center 
      text-blue-300 text-sm"
      >
        <p>
          © {new Date().getFullYear()} Zeal Laundry Service. All rights
          reserved. | Koforidua, Ghana
        </p>
      </div>
    </footer>
  );
}
