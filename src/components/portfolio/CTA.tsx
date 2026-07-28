import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { fadeUp, viewportOnce } from "./motion";
import { FeeLabel } from "./FeeLabel";

export function CTA() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-16 text-white"
          style={{
            background:
              "radial-gradient(1200px 500px at 10% 20%, rgba(129,199,132,0.35), transparent 60%), radial-gradient(900px 500px at 90% 80%, rgba(76,175,80,0.4), transparent 60%), linear-gradient(135deg, #1B5E20 0%, #2E7D32 55%, #388E3C 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Ready when you are
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Your health deserves professional care.
            </h2>
            <p className="mt-4 text-white/85 text-[15.5px] md:text-base leading-relaxed max-w-2xl">
              Book a private consultation with Dr. Faizan Ahmed for
              evidence-based advice, an honest opinion and a plan that fits you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#appointment"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--brand)] shadow-[0_16px_40px_-16px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition"
              >
                Book Appointment
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://wa.me/923426078804"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                <MessageCircle size={16} />
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}