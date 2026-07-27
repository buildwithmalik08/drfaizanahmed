import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Award, Sparkles } from "lucide-react";
import doctorAsset from "@/assets/dr_faizan.png.asset.json";
import { fadeUp, fadeRight, stagger } from "./motion";

const stats = [
  { value: "1+", label: "Years", sub: "Clinical Experience" },
  { value: "4", label: "Rotations", sub: "Major Departments" },
  { value: "MBBS", label: "Qualified", sub: "Registered Doctor" },
  { value: "Patient", label: "First", sub: "Compassionate Care" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(76,175,80,0.10),transparent_60%),radial-gradient(900px_500px_at_90%_20%,rgba(129,199,132,0.10),transparent_60%)]" />
        <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-[color:var(--brand-2)]/20 blur-3xl" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-[color:var(--brand-soft)]/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-8 items-end">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-1 lg:col-span-5 relative"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute inset-x-6 bottom-0 top-16 rounded-[2.5rem] bg-gradient-to-br from-[color:var(--brand)]/12 via-[color:var(--brand-2)]/10 to-transparent" />
            <div className="absolute inset-x-10 bottom-0 h-2/3 rounded-[2rem] border border-[color:var(--brand)]/10" />

            <img
              src={doctorAsset.url}
              alt="Portrait of Dr. Faizan Ahmed, MBBS"
              className="relative z-10 w-full h-auto object-contain drop-shadow-[0_40px_50px_rgba(17,24,39,0.18)]"
              loading="eager"
            />

            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="glass absolute z-20 left-2 md:-left-4 top-24 md:top-32 rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--brand)]/10 text-[color:var(--brand)]">
                <Award size={18} />
              </span>
              <div className="text-left">
                <div className="text-[11px] uppercase tracking-widest text-[color:var(--ink-muted)]">Certified</div>
                <div className="text-sm font-semibold">MBBS • R.M.P</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="glass absolute z-20 right-2 md:-right-4 bottom-24 rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--brand-2)]/12 text-[color:var(--brand)]">
                <span className="absolute inset-0 rounded-xl bg-[color:var(--brand-2)]/20 animate-ping" />
                <Sparkles size={18} />
              </span>
              <div className="text-left">
                <div className="text-[11px] uppercase tracking-widest text-[color:var(--ink-muted)]">Available</div>
                <div className="text-sm font-semibold">Booking open today</div>
              </div>
            </motion.div>

            <div className="absolute inset-x-16 -bottom-4 h-6 rounded-full bg-[color:var(--ink)]/15 blur-2xl" />
          </div>
        </motion.div>

        <motion.div
          variants={stagger(0.1, 0.09)}
          initial="hidden"
          animate="show"
          className="order-2 lg:order-2 lg:col-span-7 lg:pl-6"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand)]/20 bg-white/70 backdrop-blur px-3.5 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand)] animate-pulse" />
            Medical Officer
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-5 text-[40px] sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.02] font-semibold tracking-tight text-[color:var(--ink)]"
          >
            Dr. Faizan <span className="text-gradient-brand">Ahmed</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-4 text-sm md:text-base font-medium tracking-wide text-[color:var(--ink-muted)]">
            MBBS (Punjab) &nbsp;•&nbsp; R.M.P &nbsp;•&nbsp; FCPS-I
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-[15.5px] md:text-[17px] leading-[1.7] text-[color:var(--ink)]/75"
          >
            Dedicated Medical Officer committed to delivering compassionate,
            evidence-based, and patient-centred healthcare through clinical
            excellence, professionalism, and continuous learning.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#appointment"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_40px_-14px_rgba(46,125,50,0.7)] hover:shadow-[0_18px_50px_-14px_rgba(46,125,50,0.8)] hover:-translate-y-0.5 transition-all"
            >
              Book Appointment
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://wa.me/000000000"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/70 backdrop-blur px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-white hover:border-[color:var(--brand)]/30 hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle size={16} className="text-[color:var(--brand)]" />
              WhatsApp Consultation
            </a>
          </motion.div>

          <motion.div
            variants={fadeRight}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-[color:var(--line)] bg-white/70 backdrop-blur px-4 py-4 text-left"
              >
                <div className="text-xl md:text-2xl font-semibold tracking-tight text-[color:var(--ink)]">
                  {s.value} <span className="text-[color:var(--brand)]">{s.label}</span>
                </div>
                <div className="mt-1 text-[11.5px] uppercase tracking-wider text-[color:var(--ink-muted)]">{s.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}