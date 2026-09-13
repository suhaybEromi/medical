import {
  FaUserDoctor,
  FaCalendarCheck,
  FaHospital,
  FaHeartPulse,
} from "react-icons/fa6";

const steps = [
  {
    id: "01",
    title: "Choose a Doctor",
    description:
      "Browse our experienced doctors and choose the right specialist for your needs.",
    icon: FaUserDoctor,
  },
  {
    id: "02",
    title: "Book Appointment",
    description:
      "Select a convenient date and time and book your appointment easily.",
    icon: FaCalendarCheck,
  },
  {
    id: "03",
    title: "Visit Our Clinic",
    description:
      "Visit our medical center and receive professional care from our healthcare team.",
    icon: FaHospital,
  },
  {
    id: "04",
    title: "Get Better Care",
    description:
      "Receive your treatment plan and continue with follow-up care when needed.",
    icon: FaHeartPulse,
  },
];

export default function HowItWorks() {
  return (
    <section className="px-4 py-20 md:px-8 bg-[#123f5d]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-200">
            Simple Process
          </p>

          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            How It Works
          </h2>

          <p className="leading-7 text-gray-400">
            Getting the healthcare you need is simple. Follow these easy steps
            to book your appointment and receive professional medical care.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(step => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="group relative rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Number */}
                <span className="absolute right-6 top-5 text-5xl font-bold text-gray-200 transition group-hover:text-[#126775]/10">
                  {step.id}
                </span>

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#126775]/10 text-xl text-[#126775] transition duration-300 group-hover:bg-[#126775] group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="mb-3 text-lg font-bold text-[#102A43]">
                  {step.title}
                </h3>

                <p className="text-sm leading-7 text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
