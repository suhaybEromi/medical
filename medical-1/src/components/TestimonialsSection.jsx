import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Cardiology Patient",
    rating: 5,
    text: "The doctors were very professional and caring. Everything was explained clearly, and I felt comfortable throughout my visit.",
  },
  {
    name: "Omar Khalid",
    role: "General Consultation",
    rating: 5,
    text: "Booking was easy and the staff were very helpful. The service was fast, organized, and professional from start to finish.",
  },
  {
    name: "Emma Wilson",
    role: "Pediatrics Patient",
    rating: 5,
    text: "A very welcoming medical center with excellent doctors. The team treated my family with kindness and attention.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="px-5 py-20 backdrop-blur lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-semibold text-[#126775]">Patient Reviews</p>

          <h2 className="mt-2 text-3xl font-bold text-[#102A43] sm:text-4xl">
            What Our Patients Say
          </h2>

          <p className="mt-4 leading-7 text-[#64748B]">
            Read what our patients say about their experience with our doctors
            and healthcare services.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.name}
              className="relative rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Quote icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#126775]/10 text-[#126775]">
                <Quote size={24} />
              </div>

              {/* Stars */}
              <div className="mt-6 flex gap-1 text-amber-400">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 leading-7 text-[#64748B]">
                “{testimonial.text}”
              </p>

              {/* User */}
              <div className="mt-7 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-[#102A43]">{testimonial.name}</h3>

                <p className="mt-1 text-sm text-[#126775]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
