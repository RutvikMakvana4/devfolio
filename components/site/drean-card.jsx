import {
  LuHeart,
  LuMessageCircle,
  LuMapPin,
  LuSparkles,
  LuGlobe,
} from "react-icons/lu";
import { cn } from "@/lib/utils";
import { formatDreamDate } from "@/lib/dreamverse";

export function DreamCard({ dream, cheered, onCheer, onOpenComments }) {
  const name =
    dream.anonymous || !dream.displayName ? "Anonymous" : dream.displayName;
  const commentCount = dream.comments?.length || 0;

  return (
    <article className="card-lift group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-5 sm:p-6">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-muted/60 text-xs font-semibold text-foreground">
              {name.charAt(0).toUpperCase()}
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-foreground">{name}</p>
              {dream.country && (
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  <LuGlobe className="size-3" />
                  {dream.country}
                </p>
              )}
            </div>
          </div>
          <span className="text-xs text-muted-foreground">
            {formatDreamDate(dream.createdAt)}
          </span>
        </div>

        <p className="text-[15px] leading-relaxed text-foreground">
          &ldquo;{dream.dream}&rdquo;
        </p>

        {(dream.wantToBecome || dream.dreamDestination) && (
          <div className="flex flex-wrap gap-2">
            {dream.wantToBecome && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/30 px-3 py-1 text-xs font-medium text-foreground">
                <LuSparkles className="size-3" />
                {dream.wantToBecome}
              </span>
            )}
            {dream.dreamDestination && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/30 px-3 py-1 text-xs font-medium text-foreground">
                <LuMapPin className="size-3" />
                {dream.dreamDestination}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center gap-2 pt-1">
          <button
            type="button"
            onClick={() => onCheer(dream.id)}
            aria-pressed={cheered}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-200",
              cheered
                ? "border-transparent bg-foreground text-background"
                : "border-border/60 bg-background/70 text-muted-foreground hover:border-foreground/20 hover:text-foreground",
            )}
          >
            <LuHeart className={cn("size-3.5", cheered && "fill-current")} />
            {dream.cheers} {dream.cheers === 1 ? "Cheer" : "Cheers"}
          </button>

          <button
            type="button"
            onClick={() => onOpenComments(dream.id)}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:text-foreground"
          >
            <LuMessageCircle className="size-3.5" />
            {commentCount} {commentCount === 1 ? "Comment" : "Comments"}
          </button>
        </div>
      </div>
    </article>
  );
}
