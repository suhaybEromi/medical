import { useEffect, useState } from "react";

import why1 from "../assets/why1.png";
import why2 from "../assets/why2.png";
import why3 from "../assets/why3.png";

const mainImages = [why1, why2, why3];

export default function WhyChooseUs() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % mainImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const leftImage = mainImages[(currentImage + 1) % mainImages.length];

  const rightImage = mainImages[(currentImage + 2) % mainImages.length];

  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE - IMAGE DESIGN */}
          <div className="relative mx-auto min-h-140 w-full max-w-xl">
            {/* SOFT BACKGROUND SHAPE */}
            <div className="absolute left-1/2 top-1/2 h-107.5 w-107.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eaf6f6]" />

            {/* DECORATIVE DOT */}
            <div className="absolute right-5 top-8 h-16 w-16 rounded-full bg-[#126775]/10" />

            <div className="absolute bottom-4 left-5 h-16 w-16 rounded-full bg-[#126775]/10" />

            {/* MAIN IMAGE */}
            {/* MAIN IMAGE */}
            <div className="absolute left-1/2 top-10 z-20 h-115 w-[68%] -translate-x-1/2 overflow-hidden rounded-[36px] border-8 border-white shadow-2xl">
              {mainImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Medical care"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${currentImage === index ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>

            {/* SMALL IMAGE LEFT */}
            <div className="absolute left-0 top-32 z-30 h-48 w-36 overflow-hidden rounded-[28px] border-8 border-white shadow-xl sm:h-56 sm:w-40">
              <img
                key={leftImage}
                src={leftImage}
                alt="Doctor consultation"
                className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>

            {/* SMALL IMAGE RIGHT */}
            <div className="absolute bottom-24 right-0 z-30 h-44 w-36 overflow-hidden rounded-[28px] border-8 border-white shadow-xl sm:h-52 sm:w-40">
              <img
                key={rightImage}
                src={rightImage}
                alt="Medical treatment"
                className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>

            {/* TRUST BADGE */}
            <div className="absolute bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-2xl bg-white px-6 py-4 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#126775]">
                Trusted Care
              </p>

              <p className="mt-1 text-sm font-semibold text-[#102A43]">
                10,000+ Happy Patients
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - TEXT */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#126775]">
              Why Choose Us
            </span>

            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-[#102A43] sm:text-4xl lg:text-5xl">
              Professional Care, Made Simple
            </h2>

            <p className="mt-6 max-w-xl text-base leading-6 text-slate-600">
              Our experienced medical team provides trusted care with modern
              treatment, clear guidance, and personal attention at every step.
            </p>

            <p className="mt-4 max-w-xl text-base leading-6 text-slate-600">
              From routine checkups to specialist consultations, we make
              healthcare simple, comfortable, and easy to access.
            </p>

            {/* FEATURES */}
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e7f4f4] text-[#126775]">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-[#102A43]">
                    Experienced Specialists
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    Professional doctors across multiple medical specialties.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e7f4f4] text-[#126775]">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-[#102A43]">
                    Modern Medical Care
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    Modern facilities and reliable healthcare services.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e7f4f4] text-[#126775]">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-[#102A43]">
                    Patient-Focused Approach
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    Personal attention and clear guidance for every patient.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <button className="cursor-pointer rounded-full bg-[#126775] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#0f5662]">
                Book Appointment
              </button>

              <span className="text-sm font-semibold text-slate-500">
                Trusted by 10,000+ Patients
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
