"use client";

import { useEffect, useState } from "react";
import { LuSparkles } from "react-icons/lu";
import { Reveal } from "./reveal";
import { DreamverseHero } from "./dreamverse-hero";
import { DreamCard } from "./dream-card";
import { ShareDreamModal } from "./share-dream-modal";
import { DreamCommentsModal } from "./dream-comments-modal";
import {
  getDreams,
  createDream,
  toggleCheer,
  hasCheered,
  addComment,
} from "@/lib/dreamverse";

function EmptyState({ onShareClick }) {
  return (
    <Reveal className="card-lift flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-card/30 px-6 py-16 text-center">
      <span className="grid size-14 place-items-center rounded-full bg-muted/50">
        <LuSparkles className="size-6 text-muted-foreground" />
      </span>
      <p className="font-semibold">No dreams have been shared yet.</p>
      <p className="max-w-xs text-sm text-muted-foreground">
        Be the first person to inspire someone.
      </p>
      <button
        type="button"
        onClick={onShareClick}
        className="mt-2 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
      >
        Share Your Dream
      </button>
    </Reveal>
  );
}

export function DreamverseApp() {
  const [dreams, setDreams] = useState([]);
  const [cheeredIds, setCheeredIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shareOpen, setShareOpen] = useState(false);
  const [activeDreamId, setActiveDreamId] = useState(null);

  useEffect(() => {
    const initial = getDreams();
    setDreams(initial);
    setCheeredIds(initial.filter((d) => hasCheered(d.id)).map((d) => d.id));
    setLoading(false);
  }, []);

  const handleCreateDream = (formValues) => {
    const { dreams: updated } = createDream(formValues);
    setDreams(updated);
  };

  const handleCheer = (dreamId) => {
    const { dreams: updated, cheered } = toggleCheer(dreamId);
    setDreams(updated);
    if (cheered) setCheeredIds((ids) => [...ids, dreamId]);
  };

  const handleAddComment = (dreamId, values) => {
    const updated = addComment(dreamId, values);
    setDreams(updated);
  };

  const activeDream = dreams.find((d) => d.id === activeDreamId) || null;

  return (
    <div className="space-y-8">
      <DreamverseHero onShareClick={() => setShareOpen(true)} />

      <section className="space-y-4">
        {loading ? (
          <div className="space-y-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-40 animate-pulse rounded-2xl border border-border bg-card/30"
              />
            ))}
          </div>
        ) : dreams.length === 0 ? (
          <EmptyState onShareClick={() => setShareOpen(true)} />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {dreams.map((dream, i) => (
              <Reveal key={dream.id} delay={Math.min(i, 6) * 60}>
                <DreamCard
                  dream={dream}
                  cheered={cheeredIds.includes(dream.id)}
                  onCheer={handleCheer}
                  onOpenComments={setActiveDreamId}
                />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <ShareDreamModal
        open={shareOpen}
        onOpenChange={setShareOpen}
        onSubmit={handleCreateDream}
      />

      <DreamCommentsModal
        dream={activeDream}
        open={Boolean(activeDreamId)}
        onOpenChange={(open) => !open && setActiveDreamId(null)}
        onAddComment={handleAddComment}
      />
    </div>
  );
}
