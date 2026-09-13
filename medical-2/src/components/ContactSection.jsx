import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaHeartPulse,
} from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7fbfb] px-4 py-20 md:px-8 lg:py-24"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          {/* LEFT */}
          <div>
            {/* HEADER */}
            <div className="mb-8">
              <div className="mb-4 h-1 w-12 rounded-full bg-[#20aaa8]" />

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#102A43]">
                Contact
              </p>

              <h2 className="text-4xl font-bold leading-tight text-[#102A43] sm:text-5xl lg:text-6xl">
                Get in <span className="text-[#1397b5]">Touch</span>
              </h2>

              <p className="mt-4 max-w-lg text-base leading-6 text-slate-500 md:text-lg">
                We are here to help you. Feel free to contact us for
                appointments, inquiries, or any questions.
              </p>
            </div>

            {/* CONTACT CARDS */}
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center gap-4 rounded-2xl border border-white bg-white/90 p-5 shadow-[0_10px_35px_rgba(15,72,100,0.05)]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#dff6f3] text-xl text-[#1397b5]">
                  <FaPhone />
                </div>

                <div>
                  <h3 className="font-bold text-[#102A43]">Phone</h3>

                  <a
                    href="tel:+9647501234567"
                    className="mt-1 block text-slate-500 transition hover:text-[#126775]"
                  >
                    +964 750 123 4567
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 rounded-2xl border border-white bg-white/90 p-5 shadow-[0_10px_35px_rgba(15,72,100,0.05)]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#dfefff] text-xl text-[#1397b5]">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-bold text-[#102A43]">Email</h3>

                  <a
                    href="mailto:info@medcare.com"
                    className="mt-1 block text-slate-500 transition hover:text-[#126775]"
                  >
                    info@medcare.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl border border-white bg-white/90 p-5 shadow-[0_10px_35px_rgba(15,72,100,0.05)]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#dff6f3] text-xl text-[#1397b5]">
                  <FaLocationDot />
                </div>

                <div>
                  <h3 className="font-bold text-[#102A43]">Location</h3>

                  <p className="mt-1 text-slate-500">
                    Erbil, Kurdistan Region, Iraq
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 rounded-2xl border border-white bg-white/90 p-5 shadow-[0_10px_35px_rgba(15,72,100,0.05)]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#dfefff] text-xl text-[#1397b5]">
                  <FaClock />
                </div>

                <div>
                  <h3 className="font-bold text-[#102A43]">Working Hours</h3>

                  <p className="mt-1 text-slate-500">
                    Sun – Thu: 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-[30px] border border-[#e7f0f5] bg-white/95 p-6 shadow-[0_20px_60px_rgba(21,100,135,0.08)] sm:p-8 lg:p-10">
            <div className="mb-7">
              <h3 className="text-2xl font-bold text-[#102A43] md:text-3xl">
                Send Us a Message
              </h3>

              <p className="mt-2 text-slate-500">
                We’ll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-4">
              {/* Name + Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-[#dce8ef] bg-[#fbfdfe] px-5 py-4 text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#1598ad] focus:ring-2 focus:ring-[#1598ad]/10"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-[#dce8ef] bg-[#fbfdfe] px-5 py-4 text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#1598ad] focus:ring-2 focus:ring-[#1598ad]/10"
                />
              </div>

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-[#dce8ef] bg-[#fbfdfe] px-5 py-4 text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#1598ad] focus:ring-2 focus:ring-[#1598ad]/10"
              />

              {/* Message */}
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full resize-none rounded-2xl border border-[#dce8ef] bg-[#fbfdfe] px-5 py-4 text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#1598ad] focus:ring-2 focus:ring-[#1598ad]/10"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-[#1497b0] to-[#126775] px-6 py-4 font-semibold text-white shadow-lg shadow-[#126775]/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Send Message
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
