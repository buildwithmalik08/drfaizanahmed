import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeUp, stagger, viewportOnce } from "./motion";

const reviews = [
  { name: "Ayesha K.", role: "Patient", text: "Dr. Faizan listened carefully, explained everything in simple language and made me feel genuinely cared for. Highly recommend." },
  { name: "Bilal R.", role: "Patient's Family", text: "Compassionate, calm and professional. He handled our father's emergency admission with clarity and kindness." },
  { name: "Dr. Nadia M.", role: "Colleague", text: "A meticulous doctor with strong clinical reasoning. Reliable in every rotation we worked together." },
  { name: "Hamza S.", role: "Patient", text: "Thorough examination, patient answers to every question, and a treatment plan I actually understood. Rare experience." },
  { name: "Sana T.", role: "Patient's Mother", text: "He treated my son with such gentleness. You can tell he genuinely cares about paediatric patients." },
  { name: "Umair A.", role: "Patient", text: "Prompt, evidence-based advice. Follow-up was smooth and reassuring — exactly what patients need." },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Patient Reviews"
          title={<>Trusted by <span className="text-gradient-brand">people, not just charts</span>.</>}
          description="A few kind words from patients, families and colleagues."
        />

        <motion.div
          variants={stagger(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {reviews.map((r) => (
            <motion.figure
              key={r.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="relative rounded-3xl border border-[color:var(--line)] bg-[color:var(--surface)] p-7 hover:bg-white hover:border-[color:var(--brand)]/30 hover:shadow-[0_20px_60px_-32px_rgba(46,125,50,0.4)] transition-all"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-[color:var(--brand)]/15" />
              <div className="flex items-center gap-0.5 text-[color:var(--brand)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-[color:var(--ink)]/85">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--brand)] to-[color:var(--brand-2)] text-white text-sm font-semibold">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-semibold text-[color:var(--ink)]">{r.name}</div>
                  <div className="text-xs text-[color:var(--ink-muted)]">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}