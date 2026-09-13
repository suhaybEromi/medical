import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaHeartPulse,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#123f5d] text-[#102A43]">
      {/* MAIN */}
      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-24 md:px-8 lg:pt-28">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* BRAND */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#20b7be] to-[#126775] text-2xl text-white">
                <FaHeartPulse />
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#102A43]">
                  Med<span className="text-[#1497b5]">Care</span>
                </h2>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                  Your Health Our Priority
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-5 text-slate-400">
              Providing compassionate, high-quality healthcare for a healthier
              and brighter tomorrow.
            </p>

            {/* SOCIAL */}
            <div className="mt-6 flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf5fb] text-[#102A43] transition duration-300 hover:-translate-y-1 hover:bg-[#126775] hover:text-white"
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold text-white">Quick Links</h3>

            <div className="mt-3 h-1 w-12 rounded-full bg-[#18a7b5]" />

            <ul className="mt-6 space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href="#home"
                  className="transition text-gray-300 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="transition text-gray-300 hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition text-gray-300 hover:text-white"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  className="transition text-gray-300 hover:text-white"
                >
                  Our Doctors
                </a>
              </li>
              <li>
                <a
                  href="#appointments"
                  className="transition text-gray-300 hover:text-white"
                >
                  Appointments
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition text-gray-300 hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-bold text-white">Our Services</h3>

            <div className="mt-3 h-1 w-12 rounded-full bg-[#18a7b5]" />

            <ul className="mt-6 space-y-3 text-sm text-gray-300 hover:text-white">
              <li>General Medicine</li>
              <li>Cardiology</li>
              <li>Pediatrics</li>
              <li>Laboratory</li>
              <li>Radiology</li>
              <li>Specialist Consultation</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-xl font-bold text-white">Support</h3>

            <div className="mt-3 h-1 w-12 rounded-full bg-[#18a7b5]" />

            <ul className="mt-6 space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href="#faq"
                  className="transition text-gray-300 hover:text-white"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition text-gray-300 hover:text-white"
                >
                  Insurance
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition text-gray-300 hover:text-white"
                >
                  Patient Resources
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-bold text-white">Get in Touch</h3>

            <div className="mt-3 h-1 w-12 rounded-full bg-[#18a7b5]" />

            <div className="mt-6 space-y-5 text-sm text-slate-500">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6f4fb] text-[#138ead]">
                  <FaLocationDot />
                </div>

                <p className="pt-2 text-gray-300 hover:text-white">
                  Erbil, Kurdistan Region, Iraq
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6f4fb] text-[#138ead]">
                  <FaPhone />
                </div>

                <a
                  href="tel:+9647501234567"
                  className="transition text-gray-300 hover:text-white"
                >
                  +964 750 123 4567
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6f4fb] text-[#138ead]">
                  <FaEnvelope />
                </div>

                <a
                  href="mailto:info@medcare.com"
                  className="transition text-gray-300 hover:text-white"
                >
                  info@medcare.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6f4fb] text-[#138ead]">
                  <FaClock />
                </div>

                <div className="text-gray-300 hover:text-white">
                  <p>Sun – Thu: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mx-auto w-315 text-gray-500" />

      {/* BOTTOM BAR */}
      <div className="relative">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-white/80 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} MedCare. All rights reserved.</p>

          <div className="flex space-x-20">
            <Link className="hover:underline hover:underline-offset-4">
              Privacy Policy
            </Link>

            <Link className="hover:underline hover:underline-offset-4">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
