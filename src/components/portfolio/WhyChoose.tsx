import { motion } from "framer-motion";
import { HeartHandshake, Award, ScrollText, UserRound } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeUp, stagger, viewportOnce } from "./motion";

const cards = [
  { icon: HeartHandshake, title: "Compassionate Care", copy: "Kind, unhurried consultations that put you at ease." },
  { icon: Award, title: "Clinical Excellence", copy: "Diagnosis and treatment grounded in current evidence." },
  { icon: ScrollText, title: "Professional Ethics", copy: "Confidentiality, honesty and integrity — always." },
  { icon: UserRound, title: "Patient-First Approach", copy: "Your goals, comfort and wellbeing lead every plan." },
];

export function WhyChoose() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Why Choose Dr. Faizan"
          title={<>Care you can <span className="text-gradient-brand">actually feel</span>.</>}
          description="Four commitments that shape every appointment, follow-up and phone call."
        />
        <motion.div
          variants={stagger(0.08, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-[color:var(--line)] bg-white p-7 soft-shadow"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[color:var(--brand-2)]/12 blur-2xl opacity-0 group-hover:opacity-100 transition" />
              <div className="text-[11px] font-mono text-[color:var(--ink-muted)]">0{i + 1}</div>
              <span className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--brand)] to-[color:var(--brand-2)] text-white shadow-[0_10px_24px_-10px_rgba(46,125,50,0.6)]">
                <c.icon size={20} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[color:var(--ink)]">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-muted)]">{c.copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}