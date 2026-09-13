import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Mail, MapPin, Phone } from "lucide-react";

import logo from "../assets/logo.webp";

export default function Footer() {
  return (
    <footer className="bg-[#102A43] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + About */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src={logo}
                alt="Medical website"
                className="h-16 w-auto object-contain mix-blend-lighten"
              />
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-white/65">
              Professional healthcare services with experienced doctors, modern
              treatment, and compassionate care for every patient.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#126775]"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#126775]"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#126775]"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/"
                className="text-white/65 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/"
                className="text-white/65 transition hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/"
                className="text-white/65 transition hover:text-white"
              >
                Doctors
              </Link>

              <Link
                to="/"
                className="text-white/65 transition hover:text-white"
              >
                Departments
              </Link>

              <Link
                to="/"
                className="text-white/65 transition hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/"
                className="text-white/65 transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold">Our Services</h3>

            <div className="mt-5 flex flex-col gap-3 text-white/65">
              <p>Emergency Care</p>
              <p>Cardiology</p>
              <p>Neurology</p>
              <p>Pediatrics</p>
              <p>Orthopedics</p>
              <p>Medical Consultation</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>

            <div className="mt-5 space-y-5">
              <div className="flex gap-3">
                <MapPin size={20} className="mt-1 shrink-0 text-[#cae4e4]" />

                <p className="leading-6 text-white/65">
                  Medical Center, Main Street
                  <br />
                  Berlin, Germany
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="shrink-0 text-[#cae4e4]" />

                <a
                  href="tel:+9647500000000"
                  className="text-white/65 transition hover:text-white"
                >
                  +964 750 000 0000
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} className="shrink-0 text-[#cae4e4]" />

                <a
                  href="mailto:info@medical.com"
                  className="text-white/65 transition hover:text-white"
                >
                  info@medical.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Medical Center. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link to="/" className="transition hover:text-white">
              Privacy Policy
            </Link>

            <Link to="/" className="transition hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
