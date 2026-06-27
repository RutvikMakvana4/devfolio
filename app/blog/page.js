import { getDevToArticles } from "@/lib/devto";

export const metadata = {
  title: "Blog | Rutvik Makvana",
  description: "Articles and thoughts on backend, systems, and AI",
};

export default async function Blog() {
  const articles = await getDevToArticles("rutvikmakvana4");

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Writing</h1>
        <p className="text-sm text-muted-foreground">
          {articles.length} articles on backend, systems, and AI
        </p>
      </div>

      {articles.length > 0 ? (
        <div className="space-y-6">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-b border-border pb-6 last:border-0 hover:opacity-70 transition-opacity group"
            >
              <div className="space-y-2">
                <h2 className="font-semibold text-base group-hover:underline">
                  {article.title}
                </h2>

                <p className="text-sm text-muted-foreground">
                  {article.description}
                </p>

                <div className="flex gap-4 text-xs text-muted-foreground pt-2">
                  <span>{formatDate(article.published_at)}</span>

                  {article.reading_time_minutes && (
                    <span>{article.reading_time_minutes} min read</span>
                  )}

                  {article.public_reactions_count > 0 && (
                    <span>❤️ {article.public_reactions_count}</span>
                  )}
                </div>

                {article.tag_list?.length > 0 && (
                  <div className="flex gap-2 flex-wrap pt-2">
                    {article.tag_list.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          No articles found. Check your Dev.to profile!
        </p>
      )}
    </div>
  );
}
