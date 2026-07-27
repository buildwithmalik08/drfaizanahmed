import { Stethoscope } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#qualifications", label: "Qualifications" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#reviews", label: "Reviews" },
  { href: "#appointment", label: "Appointment" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--brand)] to-[color:var(--brand-2)] text-white">
              <Stethoscope size={18} />
            </span>
            <span className="font-display font-semibold tracking-tight">Dr. Faizan Ahmed</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink-muted)] max-w-sm">
            Medical Officer — MBBS (Punjab), R.M.P. Compassionate,
            evidence-based, patient-centred care.
          </p>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-widest text-[color:var(--ink-muted)]">Quick Links</div>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[color:var(--ink)]/80 hover:text-[color:var(--brand)] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-widest text-[color:var(--ink-muted)]">Contact</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="text-[color:var(--ink)]/80">+92 300 0000000</li>
            <li className="text-[color:var(--ink)]/80">contact@drfaizanahmed.com</li>
            <li className="text-[color:var(--ink)]/80">Gujranwala, Punjab, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color:var(--line)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[color:var(--ink-muted)]">
          <div>© {new Date().getFullYear()} Dr. Faizan Ahmed. All rights reserved.</div>
          <div>Designed with excellence.</div>
        </div>
      </div>
    </footer>
  );
}