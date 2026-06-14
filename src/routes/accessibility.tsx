import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";

export const Route = createFileRoute("/accessibility")({
  head: () => ({ meta: [{ title: "Accessibility — SwiftCargo Logistics" }, { name: "description", content: "Our commitment to digital accessibility (WCAG 2.1 AA)." }] }),
  component: () => (
    <>
      <PageHeader eyebrow="Accessibility" title="Our commitment to accessibility" description="We aim to meet WCAG 2.1 AA across our digital experience." />
      <Section>
        <div className="prose mx-auto max-w-3xl space-y-6">
          <p>SwiftCargo is committed to making our website and digital experiences accessible to everyone, including people with disabilities. We aim to conform to WCAG 2.1 Level AA.</p>
          <h2 className="font-display text-xl font-semibold">What we do</h2>
          <ul className="list-disc pl-5">
            <li>Semantic HTML and ARIA where appropriate</li>
            <li>Color contrast meeting AA</li>
            <li>Keyboard navigation and visible focus states</li>
            <li>Support for prefers-reduced-motion</li>
            <li>Skip-to-content link on every page</li>
          </ul>
          <h2 className="font-display text-xl font-semibold">Feedback</h2>
          <p>If you encounter an accessibility issue, please email accessibility@swiftcargo.example. We aim to respond within five business days.</p>
        </div>
      </Section>
    </>
  ),
});
