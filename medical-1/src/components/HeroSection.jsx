import hero from "../assets/hero.webp";

import { FaHeartPulse, FaUserDoctor, FaShieldHeart } from "react-icons/fa6";
import { HiOutlineCalendarDays } from "react-icons/hi2";

export default function HeroSection() {
  return (
    <section className="bg-linear-to-r from-[#c7dadabe] to-[#cae4e4]">
      <div className="mx-auto grid min-h-150 max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
        {/* Left Side */}
        <div>
          <span className="rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-[#126775]">
            Trusted Healthcare for You
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-[#102A43] sm:text-5xl lg:text-6xl">
            Your Health, <span className="text-[#126775]">Our Priority</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#64748B]">
            Get professional medical care from experienced doctors in a modern
            and comfortable environment.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="cursor-pointer rounded-xl bg-[#126775] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#0f5864]">
              Book Appointment
            </button>

            <button className="cursor-pointer rounded-xl border border-[#126775]/30 bg-white/70 px-6 py-3 font-semibold text-[#126775] transition duration-300 hover:bg-white">
              Find a Doctor
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex min-h-125 items-center justify-center lg:justify-end">
          {/* Background glow */}
          <div className="absolute h-95 w-95 rounded-full bg-[#126775]/10 blur-3xl" />

          {/* Large soft circle */}
          <div className="absolute h-105 w-105 rounded-full border border-white/50 bg-white/20 backdrop-blur-sm" />

          {/* Decorative dotted circles */}
          <div className="absolute right-5 top-10 h-24 w-24 rounded-full border border-[#126775]/15" />
          <div className="absolute right-12 top-17 h-10 w-10 rounded-full bg-[#126775]/10" />

          {/* Doctor Image */}
          <img
            src={hero}
            alt="Professional doctor"
            className="relative z-10 w-full max-w-125 object-contain mix-blend-multiply"
          />

          {/* Top Left Card */}
          <div className="absolute left-0 top-20 z-20 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-xl shadow-[#126775]/10 backdrop-blur-md sm:left-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#126775]/10 text-[#126775]">
              <FaUserDoctor className="text-xl" />
            </div>

            <div>
              <p className="text-xs font-medium text-[#64748B]">
                Expert Doctors
              </p>
              <p className="font-bold text-[#102A43]">50+ Specialists</p>
            </div>
          </div>

          {/* Right Center Icon */}
          <div className="absolute right-0 top-1/3 z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/60 bg-white/85 shadow-xl backdrop-blur-md">
            <FaHeartPulse className="text-2xl text-[#126775]" />
          </div>

          {/* Bottom Left Card */}
          <div className="absolute bottom-18 left-0 z-20 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 shadow-xl shadow-[#126775]/10 backdrop-blur-md sm:left-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#126775]/10 text-[#126775]">
              <FaShieldHeart className="text-xl" />
            </div>

            <div>
              <p className="text-xs font-medium text-[#64748B]">Trusted Care</p>
              <p className="font-bold text-[#102A43]">Safe & Reliable</p>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="absolute bottom-8 right-4 z-20 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 shadow-xl shadow-[#126775]/10 backdrop-blur-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#126775] text-white">
              <HiOutlineCalendarDays className="text-xl" />
            </div>

            <div>
              <p className="text-xs text-[#64748B]">Appointments</p>
              <p className="text-sm font-bold text-[#102A43]">
                Available Today
              </p>
            </div>
          </div>

          {/* Small floating dots */}
          <div className="absolute left-16 top-12 h-3 w-3 rounded-full bg-[#126775]/25" />
          <div className="absolute bottom-36 right-14 h-2 w-2 rounded-full bg-[#334a6b]/30" />
          <div className="absolute right-24 top-24 h-2 w-2 rounded-full bg-[#126775]/30" />
        </div>
      </div>
    </section>
  );
}
