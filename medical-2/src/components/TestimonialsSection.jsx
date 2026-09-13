import { FaQuoteLeft } from "react-icons/fa6";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Patient",
    review:
      "The doctors were professional, kind, and very attentive. The whole experience was smooth from booking to consultation.",
    image: image1,
  },
  {
    name: "Omar Hassan",
    role: "Patient",
    review:
      "I was very happy with the service and care I received. The staff made me feel comfortable and well looked after.",
    image: image2,
  },
  {
    name: "Lina Kareem",
    role: "Patient",
    review:
      "Booking was simple and the doctor explained everything clearly. I highly recommend this medical center.",
    image: image3,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f7fbfb] px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#126775]">
            Patient Stories
          </p>

          <h2 className="mb-4 text-3xl font-bold text-[#102A43] md:text-4xl">
            What Our Patients Say
          </h2>

          <p className="leading-7 text-gray-500">
            Real experiences from patients who trusted our doctors and
            healthcare services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <FaQuoteLeft className="text-3xl text-[#126775]/15" />
              </div>

              <p className="mb-7 text-sm leading-7 text-gray-500">
                “{item.review}”
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-[#102A43]">{item.name}</h3>

                  <p className="mt-1 text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
