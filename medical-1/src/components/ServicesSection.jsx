import { HeartPulse, Stethoscope, Ambulance, Clock3 } from "lucide-react";

const services = [
  {
    icon: Ambulance,
    title: "Emergency Care",
    description:
      "Fast and reliable emergency medical support when you need it most.",
  },
  {
    icon: Stethoscope,
    title: "Qualified Doctors",
    description:
      "Experienced medical professionals dedicated to your health and care.",
  },
  {
    icon: HeartPulse,
    title: "Medical Consultation",
    description:
      "Professional consultations and personalized medical guidance.",
  },
  {
    icon: Clock3,
    title: "24/7 Support",
    description:
      "Healthcare assistance and support available whenever you need it.",
  },
];

export default function ServicesSection() {
  return (
    <section className="px-5 py-20 lg:px-8 bg-linear-to-r from-[#c7dadabe] to-[#cae4e4]">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-semibold text-[#126775]">Our Services</p>

          <h2 className="mt-2 text-3xl font-bold text-[#102A43] sm:text-4xl">
            Healthcare Services You Can Trust
          </h2>

          <p className="mt-4 text-[#64748B]">
            We provide professional healthcare services designed to support your
            health and well-being.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#126775]/10 text-[#126775] transition-all duration-500">
                <Icon size={24} />
              </div>

              <h3 className="mt-4 text-xl font-bold text-[#102A43]">{title}</h3>

              <p className="mt-3 leading-6 text-[#64748B]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
