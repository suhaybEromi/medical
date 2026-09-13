import { CheckCircle2, ShieldCheck, Clock3, HeartPulse } from "lucide-react";
import about from "../assets/about.webp";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Trusted Medical Care",
    description:
      "Professional healthcare services delivered with safety, quality, and patient trust.",
  },
  {
    icon: Clock3,
    title: "Fast Appointments",
    description:
      "Quick and convenient appointment scheduling with experienced specialists.",
  },
  {
    icon: HeartPulse,
    title: "Patient First",
    description:
      "We focus on personalized treatment and comfortable care for every patient.",
  },
  {
    icon: CheckCircle2,
    title: "Experienced Doctors",
    description:
      "Our medical team combines professional experience with modern healthcare practices.",
  },
];

export default function AboutSection() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left Side */}
        <div>
          <p className="font-semibold text-[#126775]">Why Choose Us</p>

          <h2 className="mt-2 max-w-xl text-3xl font-bold leading-tight text-[#102A43] sm:text-4xl">
            Modern Healthcare With Care You Can Trust
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-[#64748B]">
            We provide professional medical services in a modern and comfortable
            environment, with experienced doctors focused on your health and
            well-being.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#126775]/10 text-[#126775]">
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-[#102A43]">{title}</h3>

                  <p className="mt-1 text-sm leading-6 text-[#64748B]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="cursor-pointer mt-8 rounded-xl bg-[#126775] px-6 py-3 font-semibold text-white transition hover:bg-[#0f5864]">
            Learn More
          </button>
        </div>

        {/* Right Side */}
        <div className="rounded-3xl bg-[#dcecec] p-6">
          {/* Add medical / hospital / doctor image here */}
          <div className="flex min-h-100 items-center justify-center text-[#126775]">
            <img src={about} alt="about" />
          </div>
        </div>
      </div>
    </section>
  );
}
