export function FeeLabel({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <span
      className={`text-center whitespace-nowrap ${
        compact ? "text-[10px]" : "text-[11px]"
      } ${dark ? "text-white/80" : "text-[color:var(--ink-muted)]"}`}
    >
      Consultation Fee:{" "}
      <span className={`font-semibold ${dark ? "text-white" : "text-[color:var(--ink)]"}`}>
        PKR 500
      </span>
    </span>
  );
}
