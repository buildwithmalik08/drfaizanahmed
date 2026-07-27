import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Users, Microscope, Stethoscope, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeLeft, fadeRight, viewportOnce } from "./motion";

const pillars = [
  { icon: Stethoscope, title: "Evidence-based care" },
  { icon: HeartPulse, title: "Patient-centred approach" },
  { icon: Microscope, title: "Clinical decision making" },
  { icon: ShieldCheck, title: "Professional ethics" },
  { icon: Users, title: "Multidisciplinary teamwork" },
  { icon: Sparkles, title: "Emergency management" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="About Me"
          title={<>A modern doctor with a <span className="text-gradient-brand">timeless duty of care</span>.</>}
          description="MBBS graduate practising clinical medicine with discipline, empathy, and a commitment to evidence-based decision making at every step of the patient journey."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[color:var(--brand)]/10 to-transparent" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-white p-8 soft-shadow">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--brand)]/10 text-[color:var(--brand)]">
                    <Stethoscope size={20} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Clinical Practice</div>
                    <div className="text-xs text-[color:var(--ink-muted)]">General Medicine • Emergency • Surgery</div>
                  </div>
                </div>
                <div className="mt-6 h-px bg-[color:var(--line)]" />
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "MBBS – Gujranwala Medical College",
                    "Registered Medical Practitioner (R.M.P)",
                    "House Job across 4 major specialties",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--brand)]" />
                      <span className="text-[color:var(--ink)]/85">{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl bg-[color:var(--surface)] p-4 border border-[color:var(--line)]">
                  <div className="text-[11px] uppercase tracking-widest text-[color:var(--ink-muted)]">Philosophy</div>
                  <p className="mt-1.5 text-sm text-[color:var(--ink)]/85 leading-relaxed">
                    "Medicine is the meeting of science and humanity — precision in diagnosis, compassion in care."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[color:var(--ink)]">
              Clinical excellence meets human warmth.
            </h3>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[color:var(--ink)]/75">
              As a Medical Officer, I combine rigorous clinical reasoning with a genuinely
              patient-centred approach. From triaging emergencies to managing long-term care plans,
              every interaction is guided by empathy, sound judgement, and adherence to the latest
              evidence-based guidelines.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[color:var(--ink)]/75">
              My training across Orthopaedics, General Surgery, Internal Medicine and Paediatrics
              has shaped a well-rounded, multidisciplinary perspective — allowing me to work
              collaboratively with specialists, nurses and families to deliver safe, thoughtful care.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {pillars.map((p) => (
                <motion.div
                  key={p.title}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-3 rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3.5 hover:border-[color:var(--brand)]/30 hover:shadow-[0_8px_24px_-16px_rgba(46,125,50,0.4)] transition-all"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--brand)]/8 text-[color:var(--brand)]">
                    <p.icon size={16} />
                  </span>
                  <span className="text-sm font-medium text-[color:var(--ink)]">{p.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}