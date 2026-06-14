import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Service — SwiftCargo Logistics" }, { name: "description", content: "Terms governing use of SwiftCargo services and website." }] }),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" description="Last updated: June 2026" />
      <Section>
        <div className="prose mx-auto max-w-3xl space-y-6">
          <p>These terms govern your use of the SwiftCargo website and services. By using our website or engaging our services, you agree to these terms.</p>
          <h2 className="font-display text-xl font-semibold">Use of the website</h2>
          <p>You may use the website for lawful purposes only. You may not attempt to gain unauthorized access to any part of the website or interfere with its operation.</p>
          <h2 className="font-display text-xl font-semibold">Service terms</h2>
          <p>Logistics services are governed by the master services agreement signed with each customer. Standard trading conditions apply where no agreement is in place.</p>
          <h2 className="font-display text-xl font-semibold">Liability</h2>
          <p>To the extent permitted by law, SwiftCargo's liability is limited as set out in the master services agreement or standard trading conditions.</p>
          <h2 className="font-display text-xl font-semibold">Contact</h2>
          <p>Questions: legal@swiftcargo.example.</p>
        </div>
      </Section>
    </>
  ),
});
