import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeUp, stagger, viewportOnce } from "./motion";

const items = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+92 342 6078804",
    href: "https://wa.me/923426078804",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "docfaizanpersonal@gmail.com",
    href: "mailto:docfaizanpersonal@gmail.com",
    external: false,
  },
  {
    icon: MapPin,
    label: "Clinic",
    value: "Gujranwala, Punjab, Pakistan",
    href: "#map",
    external: false,
  },
];

const socials = [
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/923426078804" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Contact"
          title={<>Get in <span className="text-gradient-brand">touch</span>.</>}
          description="Reach out for appointments, clinical enquiries or a second opinion."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          <motion.div
            variants={stagger(0.05, 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-5 space-y-4"
          >
            {items.map((it) => (
              <motion.a
                key={it.label}
                href={it.href}
                target={it.external ? "_blank" : undefined}
                rel={it.external ? "noreferrer" : undefined}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="flex items-center gap-4 rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-5 hover:border-[color:var(--brand)]/30 hover:bg-white transition-all"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-[color:var(--line)] text-[color:var(--brand)]">
                  <it.icon size={18} />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-[color:var(--ink-muted)]">{it.label}</div>
                  <div className="text-sm font-semibold text-[color:var(--ink)]">{it.value}</div>
                </div>
              </motion.a>
            ))}

            <motion.div variants={fadeUp} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
              <div className="text-[11px] uppercase tracking-widest text-[color:var(--ink-muted)]">Follow</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--line)] bg-white text-[color:var(--ink)] hover:bg-[color:var(--brand)] hover:text-white hover:border-transparent transition-colors"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            id="map"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-7 rounded-3xl overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface)] min-h-[380px] relative"
          >
            <iframe
              title="Clinic location"
              src="https://www.google.com/maps?q=Gujranwala,Pakistan&output=embed"
              className="absolute inset-0 h-full w-full grayscale-[0.15]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}