import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useCookieConsent, registerCookieOpen } from "@/hooks/use-cookie-consent";

export function CookieConsent() {
  const { consent, acceptAll, rejectAll, save } = useCookieConsent();
  const [bannerVisible, setBannerVisible] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [preferences, setPreferences] = useState(true);

  useEffect(() => {
    setBannerVisible(consent === null);
    if (consent) {
      setAnalytics(consent.analytics);
      setMarketing(consent.marketing);
      setPreferences(consent.preferences);
    }
  }, [consent]);

  useEffect(() => {
    registerCookieOpen(() => setPrefsOpen(true));
  }, []);

  if (!bannerVisible && !prefsOpen) return null;

  return (
    <>
      {bannerVisible && (
        <div role="region" aria-label="Cookie consent" className="fixed inset-x-3 bottom-3 z-50 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md">
          <div className="rounded-lg border border-border bg-card p-5 shadow-2xl">
            <h2 className="font-display text-base font-semibold">We use cookies</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We use necessary cookies to make our site work. With your permission, we'll also use analytics
              and marketing cookies to improve your experience.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button onClick={() => { acceptAll(); setBannerVisible(false); }}>Accept all</Button>
              <Button variant="outline" onClick={() => { rejectAll(); setBannerVisible(false); }}>Reject all</Button>
              <Button variant="ghost" onClick={() => setPrefsOpen(true)}>Customize</Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={prefsOpen} onOpenChange={setPrefsOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Cookie preferences</DialogTitle>
            <DialogDescription>Choose which cookies to allow. You can change this at any time.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <PrefRow label="Strictly necessary" description="Required for the site to work. Always on." checked disabled onChange={() => {}} />
            <PrefRow label="Analytics" description="Helps us understand how visitors use the site." checked={analytics} onChange={setAnalytics} />
            <PrefRow label="Marketing" description="Lets us tailor messages and measure campaigns." checked={marketing} onChange={setMarketing} />
            <PrefRow label="Preferences" description="Remembers your language and region choices." checked={preferences} onChange={setPreferences} />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => { rejectAll(); setPrefsOpen(false); setBannerVisible(false); }}>Reject all</Button>
            <Button onClick={() => { save({ analytics, marketing, preferences }); setPrefsOpen(false); setBannerVisible(false); }}>Save preferences</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

function PrefRow({ label, description, checked, disabled, onChange }: { label: string; description: string; checked: boolean; disabled?: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-md border border-border p-3">
      <div>
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
      </div>
      <Switch checked={checked} disabled={disabled} onCheckedChange={onChange} aria-label={label} />
    </div>
  );
}
