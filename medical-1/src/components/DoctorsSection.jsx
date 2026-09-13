import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import cardiologist from "../assets/cardiologist.webp";
import neurologist from "../assets/neurologist.webp";
import pediatrician from "../assets/pediatrician.webp";
import orthopedicSurgeon from "../assets/orthopedicSurgeon.webp";
import dermatologist from "../assets/dermatologist.webp";
import ophthalmologist from "../assets/ophthalmologist.webp";
import endocrinologist from "../assets/endocrinologist.webp";
import gastroenterologist from "../assets/gastroenterologist.webp";
import psychiatrist from "../assets/psychiatrist.webp";
import urologist from "../assets/urologist.webp";

const doctors = [
  {
    name: "Dr. Layla Hassan",
    specialty: "Cardiologist",
    image: cardiologist,
    rating: 4.9,
    patients: "2,400+ Patients",
    location: "Medical Center",
    badge: "Heart Specialist",
  },
  {
    name: "Dr. Daniel Weber",
    specialty: "Neurologist",
    image: neurologist,
    rating: 4.8,
    patients: "1,850+ Patients",
    location: "City Hospital",
    badge: "Neurologist",
  },
  {
    name: "Dr. Sofia Martin",
    specialty: "Pediatrician",
    image: pediatrician,
    rating: 4.9,
    patients: "2,100+ Patients",
    location: "Children's Clinic",
    badge: "Pediatrician",
  },
  {
    name: "Dr. Alexander Müller",
    specialty: "Orthopedic Surgeon",
    image: orthopedicSurgeon,
    rating: 4.7,
    patients: "1,600+ Patients",
    location: "Orthopedic Center",
    badge: "Surgeon",
  },
  {
    name: "Dr. Emma Laurent",
    specialty: "Dermatologist",
    image: dermatologist,
    rating: 4.9,
    patients: "2,250+ Patients",
    location: "Skin Care Clinic",
    badge: "Dermatologist",
  },
  {
    name: "Dr. Thomas Bennett",
    specialty: "Ophthalmologist",
    image: ophthalmologist,
    rating: 4.8,
    patients: "1,900+ Patients",
    location: "Eye Center",
    badge: "Eye Specialist",
  },
  {
    name: "Dr. Isabella Rossi",
    specialty: "Endocrinologist",
    image: endocrinologist,
    rating: 4.8,
    patients: "1,750+ Patients",
    location: "Metropolitan Clinic",
    badge: "Hormone Specialist",
  },
  {
    name: "Dr. Lucas Moreau",
    specialty: "Gastroenterologist",
    image: gastroenterologist,
    rating: 4.9,
    patients: "2,050+ Patients",
    location: "Digestive Health Center",
    badge: "Digestive Specialist",
  },
  {
    name: "Dr. Amelia Clarke",
    specialty: "Psychiatrist",
    image: psychiatrist,
    rating: 4.7,
    patients: "1,420+ Patients",
    location: "Wellness Medical Center",
    badge: "Mental Health",
  },
  {
    name: "Dr. Henrik Larsen",
    specialty: "Urologist",
    image: urologist,
    rating: 4.8,
    patients: "1,680+ Patients",
    location: "Specialist Medical Center",
    badge: "Urology Specialist",
  },
];

export default function DoctorsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 4;
  const maxIndex = doctors.length - visibleCount;

  const handleNext = () => {
    if (startIndex < maxIndex) {
      setStartIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  return (
    <section className="bg-white/60 px-5 py-20 backdrop-blur lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-semibold text-[#126775]">Our Doctors</p>

            <h2 className="mt-2 text-3xl font-bold text-[#102A43] sm:text-4xl">
              Meet Our Medical Specialists
            </h2>

            <p className="mt-4 leading-5 text-[#64748B]">
              Our experienced doctors are committed to providing professional,
              compassionate, and personalized care.
            </p>
          </div>

          {/* Arrows */}
          <div className="hidden gap-3 sm:flex">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#126775]/20 bg-white text-[#126775] transition hover:bg-[#126775] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={handleNext}
              disabled={startIndex === maxIndex}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#126775]/20 bg-white text-[#126775] transition hover:bg-[#126775] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${startIndex * 25}%)` }}
          >
            {doctors.map(doctor => (
              <div
                key={doctor.name}
                className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3 xl:w-1/4 my-6"
              >
                <div className="h-full overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Image */}
                  <div className="h-60 overflow-hidden bg-[#dcecec]">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="mt-3 h-full w-full scale-105 object-contain object-bottom mix-blend-multiply transition duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-1 text-sm font-semibold text-amber-500">
                      <span>★</span>
                      <span>{doctor.rating}</span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-[#102A43]">
                      {doctor.name}
                    </h3>

                    <p className="mt-1 text-sm text-[#64748B]">
                      {doctor.specialty}
                    </p>

                    <p className="mt-4 text-lg font-bold text-[#102A43]">
                      {doctor.patients}
                    </p>

                    <p className="mt-1 text-sm text-[#94A3B8]">
                      {doctor.location}
                    </p>

                    <div className="mt-5">
                      <span className="inline-flex rounded-full bg-[#126775]/10 px-4 py-2 text-sm font-semibold text-[#126775]">
                        {doctor.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="mt-8 flex justify-center gap-3 sm:hidden">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#126775]/20 bg-white text-[#126775] disabled:opacity-30"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={handleNext}
            disabled={startIndex === maxIndex}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#126775]/20 bg-white text-[#126775] disabled:opacity-30"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
