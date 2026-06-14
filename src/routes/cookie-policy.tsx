import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { openCookiePreferences } from "@/hooks/use-cookie-consent";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({ meta: [{ title: "Cookie Policy — SwiftCargo Logistics" }, { name: "description", content: "How SwiftCargo uses cookies and similar technologies." }] }),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Cookie Policy" description="Last updated: June 2026" />
      <Section>
        <div className="prose mx-auto max-w-3xl space-y-6">
          <p>We use cookies and similar technologies to make our site work, understand how visitors use it, and — with your consent — personalize content and ads.</p>
          <h2 className="font-display text-xl font-semibold">Types of cookies</h2>
          <ul className="list-disc pl-5">
            <li><strong>Strictly necessary</strong> — required for the site to function.</li>
            <li><strong>Analytics</strong> — help us understand how visitors interact.</li>
            <li><strong>Marketing</strong> — used to deliver relevant messages and measure campaigns.</li>
            <li><strong>Preferences</strong> — remember your language and region.</li>
          </ul>
          <h2 className="font-display text-xl font-semibold">Manage your preferences</h2>
          <p>You can update your cookie preferences at any time.</p>
          <Button onClick={() => openCookiePreferences()}>Open cookie preferences</Button>
        </div>
      </Section>
    </>
  ),
});
