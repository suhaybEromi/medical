import { useEffect, useState } from "react";

import slider1 from "../assets/slider1.webp";
import slider2 from "../assets/slider2.webp";

const slides = [
  {
    image: slider1,
    eyebrow: "Trusted Healthcare",
    title: "Modern Care, Centered Around You",
    description:
      "Experienced doctors, advanced medical services, and compassionate care for you and your family.",
  },
  {
    image: slider2,
    eyebrow: "Professional Medical Team",
    title: "Your Health Is Our Priority",
    description:
      "From everyday care to specialist treatment, our team is here to support your health at every step.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      <div className="w-full">
        <div className="relative">
          {/* IMAGE SLIDER */}
          <div className="relative h-125 overflow-hidden sm:h-145 lg:h-170">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                alt={slide.title}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-2500 ease-in-out ${currentSlide === index ? "scale-105 opacity-100" : "scale-100 opacity-0"}`}
              />
            ))}

            {/* OVERLAYS */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/35 via-black/10 to-transparent" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/25 to-transparent" />

            {/* DESKTOP CONTENT */}
            <div className="absolute bottom-10 left-10 hidden w-full max-w-xl lg:block">
              <div className="rounded-[28px] bg-white/95 p-9 shadow-2xl backdrop-blur-xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#126775]">
                  {slides[currentSlide].eyebrow}
                </p>

                <h1 className="max-w-lg text-4xl font-bold leading-[1.1] tracking-tight text-[#102A43] xl:text-5xl">
                  {slides[currentSlide].title}
                </h1>

                <p className="mt-5 max-w-lg text-base leading-6 text-slate-600">
                  {slides[currentSlide].description}
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <button className="cursor-pointer rounded-full bg-[#126775] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f5662]">
                    Book Appointment
                  </button>

                  <button className="cursor-pointer rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:text-black hover:bg-[#08697a52]">
                    Our Services
                  </button>
                </div>

                {/* DOTS */}
                <div className="mt-7 flex items-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-500
                      ${currentSlide === index ? "w-8 bg-[#126775]" : "w-2 bg-slate-300 hover:bg-slate-400"}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE / TABLET CONTENT */}
          <div className="relative z-20 mx-4 -mt-20 rounded-[26px] bg-white p-6 shadow-xl sm:mx-8 sm:p-8 lg:hidden">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#126775]">
              {slides[currentSlide].eyebrow}
            </p>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#102A43] sm:text-4xl">
              {slides[currentSlide].title}
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              {slides[currentSlide].description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#126775] px-5 py-3 text-sm font-semibold text-white">
                Book Appointment
              </button>

              <button className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">
                Our Services
              </button>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-500
                  ${currentSlide === index ? "w-8 bg-[#126775]" : "w-2 bg-slate-300"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
