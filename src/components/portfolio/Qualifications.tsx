import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck, BookOpenCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeUp, stagger, viewportOnce } from "./motion";

const items = [
  {
    icon: GraduationCap,
    title: "MBBS",
    institution: "Gujranwala Medical College",
    period: "Nov 2019 — March 2025",
    detail: "Five-year rigorous medical program covering foundational sciences, clinical rotations, and community medicine.",
  },
  {
    icon: BadgeCheck,
    title: "R.M.P",
    institution: "Registered Medical Practitioner",
    period: "Licensed",
    detail: "Recognised license to practice medicine, upholding the professional and ethical standards of clinical care.",
  },
  {
    icon: BookOpenCheck,
    title: "FCPS-I",
    institution: "College of Physicians & Surgeons",
    period: "Qualified",
    detail: "Foundational postgraduate assessment for the Fellowship of the College of Physicians and Surgeons.",
  },
];

export function Qualifications() {
  return (
    <section id="qualifications" className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Qualifications"
          title={<>Academic <span className="text-gradient-brand">foundation</span>.</>}
          description="Formal medical education and postgraduate progress that underpin daily clinical practice."
        />

        <motion.div
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid md:grid-cols-3 gap-5"
        >
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative rounded-3xl border border-[color:var(--line)] bg-[color:var(--surface)] p-7 overflow-hidden hover:border-[color:var(--brand)]/30 hover:shadow-[0_24px_60px_-30px_rgba(46,125,50,0.35)] transition-all"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[color:var(--brand-2)]/10 blur-2xl group-hover:bg-[color:var(--brand-2)]/20 transition" />
              <div className="relative flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-[color:var(--line)] text-[color:var(--brand)] shadow-sm">
                  <it.icon size={20} />
                </span>
                <span className="text-[11px] font-mono text-[color:var(--ink-muted)]">0{i + 1}</span>
              </div>
              <h3 className="relative mt-6 text-2xl font-semibold tracking-tight text-[color:var(--ink)]">{it.title}</h3>
              <div className="relative mt-1 text-sm font-medium text-[color:var(--brand)]">{it.institution}</div>
              <div className="relative mt-1 text-xs uppercase tracking-widest text-[color:var(--ink-muted)]">{it.period}</div>
              <p className="relative mt-5 text-sm leading-relaxed text-[color:var(--ink)]/75">{it.detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}