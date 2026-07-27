import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Mail, MessageSquare, Phone, User, Stethoscope, Send, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeUp, viewportOnce } from "./motion";

const inputBase =
  "peer w-full rounded-xl border border-[color:var(--line)] bg-white/70 px-4 pt-5 pb-2 text-sm text-[color:var(--ink)] placeholder-transparent focus:outline-none focus:border-[color:var(--brand)] focus:ring-4 focus:ring-[color:var(--brand)]/10 transition";
const labelBase =
  "absolute left-4 top-1.5 text-[11px] font-medium uppercase tracking-wider text-[color:var(--ink-muted)]";

function Field({
  id, label, type = "text", icon: Icon, required, textarea,
}: {
  id: string; label: string; type?: string; icon: React.ComponentType<{ size?: number; className?: string }>;
  required?: boolean; textarea?: boolean;
}) {
  return (
    <div className="relative">
      <div className="absolute right-4 top-4 text-[color:var(--ink-muted)] pointer-events-none">
        <Icon size={16} />
      </div>
      {textarea ? (
        <textarea id={id} name={id} rows={4} required={required} placeholder={label}
          className={`${inputBase} pt-6 pr-10`} />
      ) : (
        <input id={id} name={id} type={type} required={required} placeholder={label}
          className={`${inputBase} pr-10`} />
      )}
      <label htmlFor={id} className={labelBase}>
        {label}{required && <span className="text-[color:var(--brand)]">*</span>}
      </label>
    </div>
  );
}

export function Appointment() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Appointment Request — ${fd.get("name") ?? ""}`);
    const body = encodeURIComponent(
      [
        `Name: ${fd.get("name")}`,
        `Phone: ${fd.get("phone")}`,
        `Email: ${fd.get("email")}`,
        `Preferred Date: ${fd.get("date")}`,
        `Preferred Time: ${fd.get("time")}`,
        `Reason: ${fd.get("reason")}`,
        "",
        `Message:`,
        `${fd.get("message") ?? ""}`,
      ].join("\n"),
    );
    window.location.href = `mailto:appointments@drfaizanahmed.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="appointment" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[color:var(--brand-2)]/15 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-[color:var(--brand-soft)]/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Appointment"
          title={<>Book a <span className="text-gradient-brand">private consultation</span>.</>}
          description="Share a few details and we'll get back to you to confirm a time that works for you."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="glass mt-14 rounded-[2rem] p-6 md:p-10"
        >
          {sent ? (
            <div className="text-center py-14">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--brand)]/10 text-[color:var(--brand)]">
                <CheckCircle2 size={28} />
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-[color:var(--ink)]">Request prepared</h3>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)] max-w-md mx-auto">
                Your email client should have opened with your request. Once sent, we'll confirm your appointment shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
              <Field id="name" label="Full Name" icon={User} required />
              <Field id="phone" label="Phone Number" type="tel" icon={Phone} required />
              <Field id="email" label="Email Address" type="email" icon={Mail} required />
              <Field id="reason" label="Reason for Visit" icon={Stethoscope} required />
              <Field id="date" label="Preferred Date" type="date" icon={Calendar} required />
              <Field id="time" label="Preferred Time" type="time" icon={Clock} required />
              <div className="md:col-span-2">
                <Field id="message" label="Additional Message" icon={MessageSquare} textarea />
              </div>
              <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs text-[color:var(--ink-muted)] max-w-md">
                  Submitting prepares an email request — appointments are confirmed once reviewed. For urgent matters, please contact via WhatsApp.
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_40px_-14px_rgba(46,125,50,0.7)] hover:-translate-y-0.5 transition-all"
                >
                  Request Appointment
                  <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}