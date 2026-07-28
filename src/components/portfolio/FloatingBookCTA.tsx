import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar } from "lucide-react";

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
        <motion.a
          key="floating-book"
          href="#appointment"
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden fixed z-40 left-1/2 -translate-x-1/2 bottom-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_-12px_rgba(46,125,50,0.7)] active:scale-[0.98]"
          style={{ paddingBottom: "calc(0.875rem + env(safe-area-inset-bottom, 0px))" }}
        >
          <Calendar size={16} />
          Book Consultation
        </motion.a>
      )}
    </AnimatePresence>
  );
}