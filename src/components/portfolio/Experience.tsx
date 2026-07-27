import { motion } from "framer-motion";
import { Bone, Scissors, Stethoscope, Baby, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeUp, stagger, viewportOnce } from "./motion";

const rotations = [
  {
    icon: Bone,
    dept: "Orthopaedics & Trauma",
    hospital: "Gujranwala Teaching Hospital",
    period: "House Officer",
    detail: "Managed fracture care, trauma assessments, plaster application, and pre/post-operative orthopaedic patients.",
  },
  {
    icon: Scissors,
    dept: "General Surgery",
    hospital: "Gujranwala Teaching Hospital",
    period: "House Officer",
    detail: "Assisted in elective and emergency surgeries, wound management, suturing, and surgical ward rounds.",
  },
  {
    icon: Stethoscope,
    dept: "General Medicine",
    hospital: "Gujranwala Teaching Hospital",
    period: "House Officer",
    detail: "Diagnosed and managed acute and chronic medical conditions across cardiology, pulmonology, and endocrine cases.",
  },
  {
    icon: Baby,
    dept: "Paediatric Medicine",
    hospital: "Children Complex Gujranwala",
    period: "House Officer",
    detail: "Provided compassionate care to paediatric patients, neonatal monitoring, and communication with anxious families.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Experience"
          title={<>House Job across <span className="text-gradient-brand">four core specialties</span>.</>}
          description="A structured rotation-based clinical foundation spanning surgical, medical, paediatric, and trauma care."
        />

        <motion.div
          variants={stagger(0.05, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-16 max-w-4xl mx-auto"
        >
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-[color:var(--brand)]/40 via-[color:var(--line)] to-transparent md:-translate-x-1/2" />

          <ul className="space-y-8 md:space-y-14">
            {rotations.map((r, i) => {
              const left = i % 2 === 0;
              return (
                <motion.li
                  key={r.dept}
                  variants={fadeUp}
                  className="relative md:grid md:grid-cols-2 md:gap-10 items-center"
                >
                  <span className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-[color:var(--brand)] ring-4 ring-white shadow-[0_0_0_4px_rgba(46,125,50,0.15)]" />

                  <div className={`pl-12 md:pl-0 ${left ? "md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"}`}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="relative inline-block w-full rounded-2xl border border-[color:var(--line)] bg-white p-6 hover:border-[color:var(--brand)]/30 hover:shadow-[0_20px_60px_-30px_rgba(46,125,50,0.35)] transition-all"
                    >
                      <div className={`flex items-center gap-3 ${left ? "md:justify-end md:flex-row-reverse" : ""}`}>
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--brand)]/8 text-[color:var(--brand)]">
                          <r.icon size={18} />
                        </span>
                        <div>
                          <div className="text-[11px] uppercase tracking-widest text-[color:var(--brand)] font-semibold">{r.period}</div>
                          <h3 className="text-lg font-semibold tracking-tight text-[color:var(--ink)]">{r.dept}</h3>
                        </div>
                      </div>
                      <p className={`mt-4 text-sm leading-relaxed text-[color:var(--ink)]/75 ${left ? "md:text-right" : ""}`}>
                        {r.detail}
                      </p>
                      <div className={`mt-4 flex items-center gap-1.5 text-xs text-[color:var(--ink-muted)] ${left ? "md:justify-end" : ""}`}>
                        <MapPin size={12} />
                        {r.hospital}
                      </div>
                    </motion.div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}