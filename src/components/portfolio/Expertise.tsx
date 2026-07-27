import { motion } from "framer-motion";
import {
  ClipboardList, FileText, Search, Brain, Siren, HeartPulse,
  Syringe, Droplet, Scissors, Bandage, Activity, FilePlus2, ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeUp, stagger, viewportOnce } from "./motion";

const skills = [
  { icon: ClipboardList, title: "Clinical Assessment", detail: "Structured, systems-based patient evaluation." },
  { icon: FileText, title: "Patient History", detail: "Thorough, empathetic history-taking." },
  { icon: Search, title: "Physical Examination", detail: "Complete, focused clinical examinations." },
  { icon: Brain, title: "Diagnostic Reasoning", detail: "Differential-driven, evidence-based thinking." },
  { icon: Siren, title: "Emergency Care", detail: "Rapid triage and stabilisation of acute cases." },
  { icon: HeartPulse, title: "Patient Management", detail: "Individualised, holistic care plans." },
  { icon: Syringe, title: "IV Cannulation", detail: "Safe peripheral IV access & fluid therapy." },
  { icon: Droplet, title: "Blood Sampling", detail: "Venepuncture and lab sample handling." },
  { icon: Scissors, title: "Suturing", detail: "Wound closure with aseptic technique." },
  { icon: Bandage, title: "Wound Dressing", detail: "Sterile dressings and wound follow-up." },
  { icon: Activity, title: "Catheterization", detail: "Male & female urinary catheterization." },
  { icon: FilePlus2, title: "Clinical Documentation", detail: "Accurate, ethical medical records." },
  { icon: ShieldCheck, title: "Infection Prevention", detail: "Strict adherence to IPC protocols." },
];

export function Expertise() {
  return (
    <section id="expertise" className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Medical Expertise"
          title={<>Skills refined through <span className="text-gradient-brand">real clinical practice</span>.</>}
          description="A working toolkit developed across surgical, medical, paediatric and emergency departments."
        />

        <motion.div
          variants={stagger(0.05, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-5 hover:bg-white hover:border-[color:var(--brand)]/30 hover:shadow-[0_16px_40px_-24px_rgba(46,125,50,0.4)] transition-all"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-[color:var(--line)] text-[color:var(--brand)] group-hover:bg-[color:var(--brand)] group-hover:text-white transition-colors">
                <s.icon size={18} />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-[color:var(--ink)]">{s.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[color:var(--ink-muted)]">{s.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}