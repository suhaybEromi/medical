import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeartPulse } from "react-icons/fa6";
import { FiCalendar, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#123f5d]">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#126775] shadow-sm">
              <FaHeartPulse className="text-2xl" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">MedCare</h2>
              <p className="text-xs text-white/60">Medical Center</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              to="#"
              className="font-medium text-gray-200 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              to="/#"
              className="font-medium text-gray-200 transition hover:text-white"
            >
              Doctors
            </Link>

            <Link
              to="/#"
              className="font-medium text-gray-200 transition hover:text-white"
            >
              Services
            </Link>

            <Link
              to="/#"
              className="font-medium text-gray-200 transition hover:text-white"
            >
              About
            </Link>

            <Link
              to="/#"
              className="font-medium text-gray-200 transition hover:text-white"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Appointment */}
          <Link
            to="/#"
            className="hidden items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0d4569] shadow-sm transition-all duration-300 hover:bg-[#e8f5f3] lg:flex"
          >
            <FiCalendar className="text-lg" />
            Book Appointment
          </Link>

          {/* Mobile / Tablet Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition hover:bg-white/15 lg:hidden"
          >
            {isOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile / Tablet Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${isOpen ? "max-h-125 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="rounded-2xl border border-white/10 bg-white/8 p-3 shadow-xl backdrop-blur-xl">
            <nav className="flex flex-col">
              <Link
                to="/"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Home
              </Link>

              <Link
                to="/#"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 hover:text-white"
              >
                Doctors
              </Link>

              <Link
                to="/#"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/#"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 hover:text-white"
              >
                About
              </Link>

              <Link
                to="/#"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 hover:text-white"
              >
                Contact
              </Link>
            </nav>

            <div className="mt-3 border-t border-white/10 pt-3">
              <Link
                to="/#"
                onClick={closeMenu}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[#0d4569] transition hover:bg-[#e8f5f3]"
              >
                <FiCalendar className="text-lg" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
