import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import { FeeLabel } from "./FeeLabel";

export function FloatingBookCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const nearBottom =
        window.innerHeight + y >= doc.scrollHeight - 120;
      // Hide when at very top (hero) or when the appointment section is in view
      const apt = document.getElementById("appointment");
      let inAppointment = false;
      if (apt) {
        const r = apt.getBoundingClientRect();
        inAppointment = r.top < window.innerHeight * 0.85 && r.bottom > 0;
      }
      setVisible(y > 420 && !inAppointment && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="floating-cta"
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden fixed z-40 left-1/2 -translate-x-1/2 bottom-5 flex items-center gap-2"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <div className="flex flex-col items-center gap-0.5">
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[color:var(--brand)] px-4 py-3 text-[13px] font-semibold text-white shadow-[0_18px_50px_-12px_rgba(46,125,50,0.7)] active:scale-[0.98]"
            >
              <Calendar size={15} />
              Book Appointment
            </a>
            <FeeLabel compact />
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <a
              href="https://wa.me/923426078804"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Consultation"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white border border-[color:var(--line)] px-4 py-3 text-[13px] font-semibold text-[color:var(--ink)] shadow-[0_18px_50px_-12px_rgba(17,24,39,0.25)] active:scale-[0.98]"
            >
              <MessageCircle size={15} className="text-[color:var(--brand)]" />
              WhatsApp Consultation
            </a>
            <FeeLabel compact />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}