import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Stethoscope } from "lucide-react";
import { FeeLabel } from "./FeeLabel";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#qualifications", label: "Qualifications" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#achievements", label: "Achievements" },
  { href: "#reviews", label: "Reviews" },
  { href: "#appointment", label: "Appointment" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-[color:var(--line)] shadow-[0_4px_20px_-10px_rgba(17,24,39,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group" aria-label="Dr. Faizan Ahmed home">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--brand)] to-[color:var(--brand-2)] text-white shadow-[0_8px_24px_-8px_rgba(46,125,50,0.55)] transition-transform group-hover:scale-105">
            <Stethoscope className="h-4.5 w-4.5" strokeWidth={2.4} size={18} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display font-semibold text-[15px] tracking-tight text-[color:var(--ink)]">Dr. Faizan Ahmed</span>
            <span className="text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)] mt-0.5">Medical Officer</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-3 py-2 text-[13.5px] font-medium transition-colors ${
                    isActive ? "text-[color:var(--brand)]" : "text-[color:var(--ink)]/70 hover:text-[color:var(--ink)]"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-[color:var(--brand)] to-[color:var(--brand-2)]"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#appointment"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(46,125,50,0.6)] hover:bg-[color:var(--brand)]/92 hover:shadow-[0_14px_36px_-10px_rgba(46,125,50,0.7)] transition-all whitespace-nowrap"
          >
            Book Appointment
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              scrolled
                ? "border border-[color:var(--line)] bg-white/60 text-[color:var(--ink)]"
                : "border border-transparent bg-transparent text-[color:var(--ink)]"
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-[color:var(--line)]"
          >
            <ul className="px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[color:var(--ink)] hover:bg-[color:var(--brand)]/5 hover:text-[color:var(--brand)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#appointment"
                  onClick={() => setOpen(false)}
                  className="block text-center rounded-full bg-[color:var(--brand)] px-5 py-3 text-sm font-semibold text-white"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}