import { getDevToArticles } from "@/lib/devto";
import { Reveal } from "@/components/site/reveal";

export const metadata = {
  title: "Blog",
  description: "Articles and thoughts on backend, systems, and AI.",
};

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function Blog() {
  const articles = await getDevToArticles("rutvikmakvana4");

  return (
    <div className="space-y-8">
      <Reveal className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wider text-foreground">
          Writing
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
        <p className="text-sm text-muted-foreground">
          {articles.length > 0
            ? `${articles.length} articles on backend, systems, and AI`
            : "Thoughts on backend, systems, and AI"}
        </p>
      </Reveal>

      {articles.length > 0 ? (
        <div className="space-y-3">
          {articles.map((article, i) => (
            <Reveal key={article.id} delay={i * 60}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift group block rounded-2xl border border-border bg-card/50 p-5"
              >
                <div className="space-y-2">
                  <h2 className="font-semibold transition-colors group-hover:text-foreground">
                    {article.title}
                  </h2>
                  {article.description && (
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {article.description}
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-muted-foreground">
                    <span>{formatDate(article.published_at)}</span>
                    {article.reading_time_minutes && (
                      <span>{article.reading_time_minutes} min read</span>
                    )}
                    {article.public_reactions_count > 0 && (
                      <span>❤️ {article.public_reactions_count}</span>
                    )}
                  </div>
                  {article.tag_list?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {article.tag_list.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          No articles found yet — check back soon.
        </p>
      )}
    </div>
  );
}
