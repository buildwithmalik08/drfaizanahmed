import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "./motion";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand)]/20 bg-[color:var(--brand)]/[0.06] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand)]" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[color:var(--ink)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15.5px] md:text-base leading-relaxed text-[color:var(--ink-muted)]">
          {description}
        </p>
      )}
    </motion.div>
  );
}