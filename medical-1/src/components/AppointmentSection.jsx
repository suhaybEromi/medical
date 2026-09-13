import { CalendarDays, Phone, Stethoscope } from "lucide-react";

export default function AppointmentSection() {
  return (
    <section className="px-5 py-20 lg:px-8 bg-white/60">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl bg-[#126775] px-6 py-12 text-white sm:px-10 lg:px-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Stethoscope size={28} />
              </div>

              <p className="font-semibold text-[#cae4e4]">
                Book an Appointment
              </p>

              <h2 className="mt-2 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
                Your Health Deserves the Right Care
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-white/75">
                Schedule an appointment with one of our experienced medical
                specialists and receive professional care tailored to your
                needs.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <button className="cursor-pointer flex h-13 items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-[#126775] transition hover:bg-[#eef7f7]">
                <CalendarDays size={20} />
                Book Appointment
              </button>

              <a
                href="tel:+9647500000000"
                className="flex h-13 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 font-semibold text-white transition hover:bg-white/20"
              >
                <Phone size={20} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
