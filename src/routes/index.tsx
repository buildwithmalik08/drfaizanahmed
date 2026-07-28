import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Qualifications } from "@/components/portfolio/Qualifications";
import { Experience } from "@/components/portfolio/Experience";
import { Expertise } from "@/components/portfolio/Expertise";
import { Achievements } from "@/components/portfolio/Achievements";
import { Philosophy } from "@/components/portfolio/Philosophy";
import { WhyChoose } from "@/components/portfolio/WhyChoose";
import { Reviews } from "@/components/portfolio/Reviews";
import { CTA } from "@/components/portfolio/CTA";
import { Appointment } from "@/components/portfolio/Appointment";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { FloatingBookCTA } from "@/components/portfolio/FloatingBookCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Faizan Ahmed",
  medicalSpecialty: "General Medicine",
  jobTitle: "Medical Officer",
  qualifications: "MBBS (Punjab), R.M.P",
  alumniOf: { "@type": "CollegeOrUniversity", name: "Gujranwala Medical College" },
  areaServed: "Gujranwala, Pakistan",
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dr. Faizan Ahmed — Medical Officer | MBBS, R.M.P" },
      {
        name: "description",
        content:
          "Dr. Faizan Ahmed — Medical Officer (MBBS, R.M.P). Compassionate, evidence-based, patient-centred healthcare. Book a consultation online.",
      },
      { property: "og:title", content: "Dr. Faizan Ahmed — Medical Officer" },
      {
        property: "og:description",
        content:
          "Compassionate, evidence-based, patient-centred healthcare by Dr. Faizan Ahmed, MBBS.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dr. Faizan Ahmed — Medical Officer" },
      {
        name: "twitter:description",
        content:
          "Compassionate, evidence-based, patient-centred healthcare by Dr. Faizan Ahmed, MBBS.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-[color:var(--surface)] text-[color:var(--ink)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Qualifications />
        <Experience />
        <Expertise />
        <Achievements />
        <Philosophy />
        <WhyChoose />
        <Reviews />
        <CTA />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <FloatingBookCTA />
    </div>
  );
}
