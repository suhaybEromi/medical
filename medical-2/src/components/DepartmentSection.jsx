import {
  FaHeartPulse,
  FaBrain,
  FaChildReaching,
  FaBone,
  FaEye,
  FaLungs,
  FaStethoscope,
} from "react-icons/fa6";
import departmentImage from "../assets/department.png";

const departments = [
  {
    icon: FaHeartPulse,
    title: "Cardiology",
    description:
      "Advanced care for heart health, diagnosis, prevention, and treatment.",
    image: departmentImage,
  },
  {
    icon: FaBrain,
    title: "Neurology",
    description:
      "Specialized care for neurological conditions and nervous system health.",
  },
  {
    icon: FaChildReaching,
    title: "Pediatrics",
    description: "Complete medical care for infants, children, and teenagers.",
  },
  {
    icon: FaBone,
    title: "Orthopedics",
    description:
      "Treatment for bones, joints, injuries, and mobility-related conditions.",
  },
  {
    icon: FaEye,
    title: "Ophthalmology",
    description: "Professional eye examinations, diagnosis, and vision care.",
  },
  {
    icon: FaLungs,
    title: "Pulmonology",
    description: "Diagnosis and treatment for lung and respiratory conditions.",
  },
];

export default function DepartmentSection() {
  const featured = departments[0];

  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#126775]">
              Our Departments
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#102A43] sm:text-4xl lg:text-5xl">
              Specialized Care Across Every Department
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600">
            Explore our medical departments and connect with experienced
            specialists dedicated to your health and wellbeing.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* FEATURED DEPARTMENT */}
          <div className="relative min-h-130 overflow-hidden rounded-4xl bg-[#126775] p-8 text-white sm:p-10">
            {/* BIG IMAGE */}
            <img
              src={departmentImage}
              alt={featured.title}
              className="absolute bottom-24 right-10 h-[63%] w-[58%] rounded-xl object-cover object-center opacity-90"
            />

            {/* IMAGE GRADIENT */}
            <div className="absolute inset-9 bg-linear-to-r from-[#126775] via-[#126775]/95 to-[#126775]/10" />

            {/* DECORATIVE CIRCLES */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10" />
            <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-white/10" />

            {/* CONTENT */}
            <div className="relative z-10 max-w-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur-sm">
                <featured.icon />
              </div>

              <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                Featured Department
              </p>

              <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
                {featured.title}
              </h3>

              <p className="mt-5 max-w-md leading-5 text-white/75">
                {featured.description}
              </p>

              <button className="mt-8 cursor-pointer rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#126775] transition hover:bg-white/90">
                Explore Department
              </button>
            </div>
          </div>

          {/* OTHER DEPARTMENTS */}
          <div className="grid gap-3">
            {departments.slice(1).map((department, index) => {
              const Icon = department.icon;

              return (
                <div
                  key={index}
                  className="group flex items-center gap-5 rounded-[22px] border border-slate-100 bg-white p-5 transition-all duration-300 hover:border-[#126775]/20 hover:bg-[#f4fafa]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e7f4f4] text-xl text-[#126775]">
                    <Icon />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#102A43]">
                      {department.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {department.description}
                    </p>
                  </div>

                  <span className="cursor-pointer text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#126775]">
                    →
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
