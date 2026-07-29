import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/shared/section-heading";
import { CertificationCard } from "@/components/shared/certification-card";
import { Reveal } from "@/components/shared/reveal";

export function CertificationsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <Reveal>
        <SectionHeading title="Certifications" />
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {certifications.map((certification, i) => (
          <Reveal key={certification.title} delay={i * 0.08}>
            <CertificationCard certification={certification} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
