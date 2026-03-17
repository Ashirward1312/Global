import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! Backend/API se connect kar lena.");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Section */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-sky-50 via-white to-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.08),transparent_35%)]" />
        <div className="absolute left-1/2 top-0 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute right-[8%] top-[18%] h-[220px] w-[220px] rounded-full bg-amber-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 shadow-sm">
              <MessageSquare className="h-4 w-4" />
              Let’s Connect
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Let’s Talk About
              <span className="block bg-gradient-to-r from-sky-600 via-cyan-500 to-amber-500 bg-clip-text text-transparent">
                Your Business Growth
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Have a project in mind or want to grow your business online?
              Reach out to Ventoria Global and let’s discuss the right strategy
              for your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Info */}
          <div className="space-y-6">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Get in Touch
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We’d love to hear about your business, goals and digital growth
                plans. Contact us through the details below or send a message
                using the form.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-100">
                    <Mail className="h-5 w-5 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Email
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      hello@ventoriaglobal.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100">
                    <Phone className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Phone
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      +61 000 000 000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100">
                    <MapPin className="h-5 w-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Location
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-100">
                    <Clock3 className="h-5 w-5 text-violet-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Working Hours
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Monday - Friday, 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Extra box */}
            <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 p-7 text-white shadow-xl">
              <h3 className="text-xl font-semibold">Why Connect With Us?</h3>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Whether you need SEO, web design, lead generation or social
                media advertising, we focus on practical strategies that help
                your business grow with clarity and confidence.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.16em] text-sky-100">
                  SEO
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.16em] text-sky-100">
                  Websites
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.16em] text-sky-100">
                  Leads
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.16em] text-sky-100">
                  Growth
                </span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Send Us a Message
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Fill out the form below and we’ll get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="+61 ..."
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  rows="6"
                  placeholder="Tell us about your project or business goals..."
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Send Message
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;