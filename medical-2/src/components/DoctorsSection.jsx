import { FaArrowRightLong, FaCalendarCheck } from "react-icons/fa6";

import doctor1 from "../assets/doctor1.webp";
import doctor2 from "../assets/doctor2.webp";
import doctor3 from "../assets/doctor3.webp";
import doctor4 from "../assets/doctor4.png";
import doctor5 from "../assets/doctor5.png";

const doctors = [
  {
    name: "Dr. Layla Hassan",
    specialty: "Cardiologist",
    image: doctor1,
    experience: "12+ Years Experience",
  },
  {
    name: "Dr. Daniel Weber",
    specialty: "Neurologist",
    image: doctor2,
    experience: "10+ Years Experience",
  },
  {
    name: "Dr. Sofia Martin",
    specialty: "Pediatrician",
    image: doctor3,
    experience: "9+ Years Experience",
  },
  {
    name: "Dr. Alexander Müller",
    specialty: "Orthopedic Surgeon",
    image: doctor4,
    experience: "14+ Years Experience",
  },
  {
    name: "Dr. Emma Laurent",
    specialty: "Dermatologist",
    image: doctor5,
    experience: "11+ Years Experience",
  },
];

export default function DoctorsSection() {
  const featuredDoctor = doctors[0];

  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#126775]">
              Our Doctors
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#102A43] sm:text-4xl lg:text-5xl">
              Meet the Specialists Behind Your Care
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-6 text-slate-600">
              Our experienced doctors provide trusted, professional, and
              personalized medical care across a wide range of specialties.
            </p>

            <button className="mt-4 flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#126775] transition hover:gap-3 hover:underline hover:underline-offset-4">
              View All Doctors
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        {/* DOCTORS */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          {/* FEATURED DOCTOR */}
          <div className="group relative min-h-145 overflow-hidden rounded-4xl bg-[#e9f4f4]">
            <img
              src={featuredDoctor.image}
              alt={featuredDoctor.name}
              className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
            />

            {/* GRADIENT */}
            <div className="absolute inset-0 bg-linear-to-t from-[#102A43]/95 via-[#102A43]/20 to-transparent" />

            {/* CONTENT */}
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
              <span className="text-sm font-medium text-white/70">
                Featured Specialist
              </span>

              <h3 className="mt-2 text-3xl font-bold">{featuredDoctor.name}</h3>

              <p className="mt-2 text-base font-medium text-white/80">
                {featuredDoctor.specialty}
              </p>

              <div className="mt-3 flex items-center gap-2 text-sm text-white/65">
                <span>{featuredDoctor.experience}</span>
              </div>

              <button className="mt-6 flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#126775] transition hover:bg-white/90">
                <FaCalendarCheck />
                Book Appointment
              </button>
            </div>
          </div>

          {/* OTHER DOCTORS */}
          <div className="grid gap-5 sm:grid-cols-2">
            {doctors.slice(1).map((doctor, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="relative h-65 overflow-hidden bg-[#eaf4f4]">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* INFO */}
                <div className="p-5">
                  <p className="text-sm font-medium text-[#126775]">
                    {doctor.specialty}
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-[#102A43]">
                    {doctor.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {doctor.experience}
                  </p>

                  <div className="flex items-center justify-between border-slate-100 pt-4">
                    <button className="cursor-pointer text-sm font-semibold text-[#126775] hover:underline hover:underline-offset-4">
                      View Profile
                    </button>

                    <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#e7f4f4] text-[#126775] transition group-hover:bg-[#126775] group-hover:text-white">
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
