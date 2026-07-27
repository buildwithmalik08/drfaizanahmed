import { motion } from "framer-motion";
import { Trophy, Users, Crown, Medal, Presentation, Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeUp, stagger, viewportOnce } from "./motion";

const list = [
  { icon: Users, title: "House Job Class Representative", detail: "Coordinated with faculty and peers across the House Job cohort." },
  { icon: Crown, title: "Final Year Class Representative", detail: "Elected voice of the final-year MBBS class." },
  { icon: Trophy, title: "President — Inclusive Health Society", detail: "Led awareness initiatives for accessible and equitable healthcare." },
  { icon: Medal, title: "Athletics Representative", detail: "Represented the college in inter-institutional athletics." },
  { icon: Award, title: "Head of GEMCON Management Team", detail: "Directed operations for the college's flagship medical conference." },
  { icon: Presentation, title: "Academic Presentation", detail: "Delivered peer-reviewed academic presentations on clinical topics." },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Achievements"
          title={<>Leadership <span className="text-gradient-brand">beyond the ward</span>.</>}
          description="Roles and contributions that shaped both academic community and personal character."
        />

        <motion.div
          variants={stagger(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {list.map((a) => (
            <motion.article
              key={a.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl border border-[color:var(--line)] bg-white p-6 hover:border-[color:var(--brand)]/30 hover:shadow-[0_20px_60px_-32px_rgba(46,125,50,0.4)] transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--brand)]/10 to-[color:var(--brand-2)]/10 text-[color:var(--brand)]">
                  <a.icon size={20} />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-[color:var(--ink)] leading-snug">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--ink-muted)]">{a.detail}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}