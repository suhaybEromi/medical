import { HeartPulse, Brain, Baby, Bone, Smile, Eye } from "lucide-react";

const departments = [
  {
    icon: HeartPulse,
    title: "Cardiology",
    description:
      "Specialized care for heart health, diagnosis, and cardiovascular treatment.",
  },
  {
    icon: Brain,
    title: "Neurology",
    description:
      "Expert care for conditions affecting the brain and nervous system.",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description:
      "Compassionate healthcare for infants, children, and adolescents.",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description:
      "Treatment for bones, joints, muscles, injuries, and mobility problems.",
  },
  {
    icon: Smile,
    title: "Dental Care",
    description:
      "Professional dental services for healthier teeth and confident smiles.",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description:
      "Complete eye care, vision checks, and treatment for eye conditions.",
  },
];

export default function DepartmentsSection() {
  return (
    <section className="px-5 py-20 lg:px-8 bg-linear-to-r from-[#c7dadabe] to-[#cae4e4]">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-semibold text-[#126775]">Our Departments</p>

          <h2 className="mt-2 text-3xl font-bold text-[#102A43] sm:text-4xl">
            Specialized Care for Every Need
          </h2>

          <p className="mt-4 leading-7 text-[#64748B]">
            Explore our medical departments and find the right care for you and
            your family.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#126775]/10 text-[#126775] transition group-hover:bg-[#126775] group-hover:text-white">
                <Icon size={26} />
              </div>

              <h3 className="mt-4 text-xl font-bold text-[#102A43]">{title}</h3>

              <p className="mt-2 leading-6 text-[#64748B]">{description}</p>

              <button className="cursor-pointer mt-5 font-semibold text-[#126775] transition-all hover:text-[#0d4569] hover:underline hover:underline-offset-4 duration-300">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
