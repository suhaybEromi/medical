import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, CalendarDays } from "lucide-react";

import logo from "../assets/logo.webp";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#126775]/10 bg-[#cae4e4]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Medical website"
            className="h-14 w-auto object-contain mix-blend-multiply"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            to="/"
            className="text-sm font-medium text-[#102A43] transition hover:text-[#0F6CBD]"
          >
            Home
          </Link>

          <Link
            to="/doctors"
            className="text-sm font-medium text-[#102A43] transition hover:text-[#0F6CBD]"
          >
            Doctors
          </Link>

          <Link
            to="/departments"
            className="text-sm font-medium text-[#102A43] transition hover:text-[#0F6CBD]"
          >
            Departments
          </Link>

          <Link
            to="/services"
            className="text-sm font-medium text-[#102A43] transition hover:text-[#0F6CBD]"
          >
            Services
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-[#102A43] transition hover:text-[#0F6CBD]"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-sm font-medium text-[#102A43] transition hover:text-[#0F6CBD]"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+9647500000000"
            className="flex h-11 items-center gap-2 rounded-xl border border-[#DC2626]/20 bg-red-50 px-4 text-sm font-semibold text-[#DC2626] transition hover:bg-red-100"
          >
            <Phone size={18} />
            Emergency
          </a>

          <Link
            to="/"
            className="flex h-11 items-center gap-2 rounded-xl bg-[#0d4569] px-5 text-sm font-semibold text-white transition-all duration-500 hover:bg-slate-800"
          >
            <CalendarDays size={18} />
            Book Appointment
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7FAFC] text-[#102A43] lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col">
            {[
              ["Home", "/"],
              ["Doctors", "/doctors"],
              ["Departments", "/departments"],
              ["Services", "/services"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-[#102A43] transition hover:bg-[#F7FAFC] hover:text-[#0F6CBD]"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 grid gap-3">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0d4569] font-semibold text-white"
            >
              <CalendarDays size={18} />
              Book Appointment
            </Link>

            <a
              href="tel:+9647500000000"
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-red-50 font-semibold text-[#DC2626]"
            >
              <Phone size={18} />
              Emergency
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
