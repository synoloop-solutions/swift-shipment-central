import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — SwiftCargo Logistics" }, { name: "description", content: "How SwiftCargo collects, uses, and protects personal data." }] }),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" description="Last updated: June 2026" />
      <Section>
        <div className="prose mx-auto max-w-3xl space-y-6">
          <p>SwiftCargo Logistics ("we") respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use, and safeguard the information you provide.</p>
          <h2 className="font-display text-xl font-semibold">Information we collect</h2>
          <p>We collect information you provide when requesting a quote, contacting us, applying for a role, or tracking a shipment. We also collect technical data such as IP address, browser, and pages visited.</p>
          <h2 className="font-display text-xl font-semibold">How we use information</h2>
          <p>We use your information to provide and improve our services, respond to requests, send service updates, comply with legal obligations, and — with your consent — for analytics and marketing.</p>
          <h2 className="font-display text-xl font-semibold">Your rights</h2>
          <p>Depending on your location, you may have rights to access, correct, delete, or port your data, as well as object to processing. Contact privacy@swiftcargo.example to exercise these rights.</p>
          <h2 className="font-display text-xl font-semibold">Contact</h2>
          <p>For any questions about this policy, email privacy@swiftcargo.example.</p>
        </div>
      </Section>
    </>
  ),
});
