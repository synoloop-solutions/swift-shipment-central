import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getArticle, news } from "@/data/news";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const a = getArticle(params.slug);
    if (!a) throw notFound();
    return { article: a };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.article.title ?? "Article"} — SwiftCargo News` },
      { name: "description", content: loaderData?.article.excerpt ?? "" },
      { property: "og:image", content: loaderData?.article.image },
    ],
    scripts: loaderData ? [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "NewsArticle", headline: loaderData.article.title,
      datePublished: loaderData.article.date, author: { "@type": "Organization", name: loaderData.article.author }, image: loaderData.article.image,
    }) }] : [],
  }),
  notFoundComponent: () => (<Section><h1 className="text-2xl font-bold">Article not found</h1><Link to="/news" className="text-accent">Back</Link></Section>),
  errorComponent: ({ error }) => <Section><p>{error.message}</p></Section>,
  component: ArticleDetail,
});

function ArticleDetail() {
  const { article: a } = Route.useLoaderData();
  const related = news.filter((n) => n.slug !== a.slug && n.category === a.category).slice(0, 3);
  return (
    <>
      <PageHeader eyebrow={a.category} title={a.title} description={`${a.date} · ${a.readingTime}`}>
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "News", to: "/news" }, { label: a.title }]} />
      </PageHeader>
      <Section>
        <div className="mx-auto max-w-3xl">
          <img src={a.image} alt={a.title} className="aspect-[16/9] w-full rounded-xl object-cover" loading="lazy" />
          <article className="prose mt-8 max-w-none">
            {a.body.split("\n\n").map((p, i) => <p key={i} className="mt-4 text-base leading-relaxed">{p}</p>)}
          </article>
        </div>
      </Section>
      {related.length > 0 && (
        <Section muted>
          <h2 className="font-display text-2xl font-semibold">Related</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/news/$slug" params={{ slug: r.slug }} className="rounded-lg border border-border p-4 hover:border-accent">
                <p className="font-display font-semibold">{r.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
