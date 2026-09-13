import {
  FaHeartPulse,
  FaChildReaching,
  FaStethoscope,
  FaFlaskVial,
  FaXRay,
  FaUserDoctor,
} from "react-icons/fa6";

const services = [
  {
    icon: FaStethoscope,
    title: "General Medicine",
    description:
      "Comprehensive medical care for routine checkups, common illnesses, and ongoing health needs.",
  },
  {
    icon: FaHeartPulse,
    title: "Cardiology",
    description:
      "Specialized heart care, diagnosis, prevention, and treatment from experienced cardiology specialists.",
  },
  {
    icon: FaChildReaching,
    title: "Pediatrics",
    description:
      "Professional healthcare for infants, children, and teenagers in a comfortable and caring environment.",
  },
  {
    icon: FaFlaskVial,
    title: "Laboratory",
    description:
      "Reliable laboratory testing and diagnostic services with accurate and timely results.",
  },
  {
    icon: FaXRay,
    title: "Radiology",
    description:
      "Modern imaging and diagnostic services to help doctors make accurate treatment decisions.",
  },
  {
    icon: FaUserDoctor,
    title: "Specialist Consultation",
    description:
      "Access experienced medical specialists for personalized diagnosis, treatment, and follow-up care.",
  },
];

export default function ServicesSection() {
  return (
    <section className="px-5 py-24 lg:px-8 bg-[#f7fbfb]">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#126775]">
            Our Services
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#102A43] sm:text-4xl lg:text-5xl">
            Complete Care for You and Your Family
          </h2>

          <p className="mt-5 text-base leading-6 text-slate-600">
            Explore our medical services designed to provide trusted,
            professional, and personalized healthcare at every stage of life.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-[28px] border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* ICON */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7f4f4] text-2xl text-[#126775] transition duration-300 group-hover:bg-[#126775] group-hover:text-white">
                  <Icon />
                </div>

                {/* TITLE */}
                <h3 className="mt-6 text-xl font-bold text-[#102A43]">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                {/* BUTTON */}
                <button className="cursor-pointer mt-6 text-sm font-semibold text-[#126775] transition hover:text-cyan-900">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
