import { MapPin, Phone, Mail, Clock3, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white/60 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-semibold text-[#126775]">Contact Us</p>

          <h2 className="mt-2 text-3xl font-bold text-[#102A43] sm:text-4xl">
            We’re Here to Help You
          </h2>

          <p className="mt-4 leading-7 text-[#64748B]">
            Have a question or need assistance? Contact our medical team and
            we’ll be happy to help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Side - Contact Info */}
          <div className="rounded-3xl bg-[#126775] p-7 text-white sm:p-9">
            <h3 className="text-2xl font-bold">Contact Information</h3>

            <p className="mt-3 max-w-md leading-7 text-white/70">
              Reach out to our team for appointments, medical inquiries, or
              general support.
            </p>

            <div className="mt-8 space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="font-semibold">Our Location</p>
                  <p className="mt-1 text-sm leading-6 text-white/70">
                    Medical Center, Main Street
                    <br />
                    Berlin, Germany
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Phone size={21} />
                </div>

                <div>
                  <p className="font-semibold">Phone Number</p>
                  <a
                    href="tel:+9647500000000"
                    className="mt-1 block text-sm text-white/70 transition hover:text-white"
                  >
                    +964 750 000 0000
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Mail size={21} />
                </div>

                <div>
                  <p className="font-semibold">Email Address</p>
                  <a
                    href="mailto:info@medical.com"
                    className="mt-1 block text-sm text-white/70 transition hover:text-white"
                  >
                    info@medical.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Clock3 size={21} />
                </div>

                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p className="mt-1 text-sm leading-6 text-white/70">
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="rounded-3xl border border-white/70 bg-white/80 p-7 shadow-sm backdrop-blur sm:p-9">
            <h3 className="text-2xl font-bold text-[#102A43]">
              Send Us a Message
            </h3>

            <p className="mt-2 text-[#64748B]">
              Fill out the form and our team will get back to you.
            </p>

            <form className="mt-7 space-y-5">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#102A43]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#126775]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#102A43]">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Your email"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#126775]"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#102A43]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#126775]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#102A43]">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#126775]"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="cursor-pointer flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#126775] font-semibold text-white transition hover:bg-[#0f5864]"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
