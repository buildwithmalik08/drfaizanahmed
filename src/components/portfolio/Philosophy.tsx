import { motion } from "framer-motion";
import { Heart, Scale, FlaskConical, Handshake, MessageSquare, Lock, ShieldPlus, Sparkles } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "./motion";

const values = [
  { icon: Heart, title: "Compassion", copy: "Treating every patient with dignity and empathy." },
  { icon: Scale, title: "Ethics", copy: "Upholding integrity in every clinical decision." },
  { icon: FlaskConical, title: "Evidence-Based", copy: "Guided by current research and guidelines." },
  { icon: Handshake, title: "Respect", copy: "Honouring each patient's story and choices." },
  { icon: MessageSquare, title: "Communication", copy: "Clear, honest conversations at every step." },
  { icon: Lock, title: "Trust", copy: "Building relationships that patients rely on." },
  { icon: ShieldPlus, title: "Safety", copy: "Prioritising harm-free, protocol-driven care." },
  { icon: Sparkles, title: "Modern Healthcare", copy: "Embracing today's tools and best practice." },
];

export function Philosophy() {
  return (
    <section className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand)]/20 bg-[color:var(--brand)]/[0.06] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
              Patient Care Philosophy
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--ink)]">
              The principles behind <span className="text-gradient-brand">every consultation</span>.
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[color:var(--ink-muted)]">
              A steady framework of values that shapes how I listen, diagnose,
              treat, and follow up with every patient I meet.
            </p>
          </motion.div>

          <motion.div
            variants={stagger(0.05, 0.06)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-8 grid sm:grid-cols-2 gap-4"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-5 hover:border-[color:var(--brand)]/30 hover:bg-white transition-all"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[color:var(--line)] text-[color:var(--brand)]">
                  <v.icon size={18} />
                </span>
                <h3 className="mt-4 text-[15px] font-semibold text-[color:var(--ink)]">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--ink-muted)]">{v.copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}