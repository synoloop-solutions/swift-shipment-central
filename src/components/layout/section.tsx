import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Section({
  children, className, id, muted,
}: { children: ReactNode; className?: string; id?: string; muted?: boolean }) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", muted && "bg-muted/40", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow, title, description, center,
}: { eyebrow?: string; title: string; description?: string; center?: boolean }) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
    </div>
  );
}

export function PageHeader({
  eyebrow, title, description, children,
}: { eyebrow?: string; title: string; description?: string; children?: ReactNode }) {
  return (
    <div className="bg-primary text-primary-foreground">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>}
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
          {description && <p className="mt-4 max-w-3xl text-base text-primary-foreground/80 sm:text-lg">{description}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </div>
  );
}
