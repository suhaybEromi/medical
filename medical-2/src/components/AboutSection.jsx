export default function AboutSection() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#126775]">
              About Us
            </span>

            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-[#102A43] sm:text-4xl lg:text-5xl">
              Healthcare With Experience, Trust, and Care
            </h2>

            <p className="mt-6 max-w-xl text-base leading-6 text-slate-600">
              We provide professional medical care with experienced doctors,
              modern facilities, and a strong focus on every patient.
            </p>

            <p className="mt-4 max-w-xl text-base leading-6 text-slate-600">
              From routine checkups to specialist treatment, our team is here to
              make healthcare simple, comfortable, and reliable for you and your
              family.
            </p>

            <button className="mt-8 cursor-pointer rounded-full bg-[#126775] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#0f5662]">
              Learn More
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* CARD 1 */}
            <div className="rounded-3xl bg-[#edf7f7] p-7">
              <h3 className="text-4xl font-bold text-[#126775]">20+</h3>

              <p className="mt-3 text-lg font-semibold text-[#102A43]">
                Experienced Doctors
              </p>

              <p className="mt-2 text-sm leading-5 text-slate-600">
                Qualified specialists across different medical fields.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
              <h3 className="text-4xl font-bold text-[#126775]">10K+</h3>

              <p className="mt-3 text-lg font-semibold text-[#102A43]">
                Happy Patients
              </p>

              <p className="mt-2 text-sm leading-5 text-slate-600">
                Trusted by thousands of patients and families.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="rounded-3xl bg-[#102A43] p-7 text-white sm:col-span-2">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <h3 className="text-4xl font-bold">15+</h3>

                  <p className="mt-3 text-lg font-semibold">
                    Medical Departments
                  </p>
                </div>

                <p className="max-w-xs text-sm leading-5 text-white/70">
                  Complete healthcare services and specialist care in one
                  convenient place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
