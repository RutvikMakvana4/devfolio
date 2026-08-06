// DreamVerse data layer.
//
// This project has no backend/database, so DreamVerse persists everything
// in the visitor's own browser via localStorage. That means:
//  - A dream someone shares is only visible on the device/browser they used.
//  - The few SEED_DREAMS below exist so the page isn't a blank empty state
//    for first-time visitors — remove them any time from SEED_DREAMS.
//  - Cheers are deduped per-browser using a separate "already cheered" list,
//    exactly as the PRD asks for.
//
// Everything here is plain JS with no React — components call these
// functions and keep the returned array in their own state.

const STORAGE_KEY = "dreamverse:dreams";
const CHEERED_KEY = "dreamverse:cheered";

export const MAX_DREAM_LENGTH = 500;

const isBrowser = typeof window !== "undefined";

// A few example dreams so the feed has life on a fresh browser.
// Safe to trim to [] if you'd rather always show the true empty state.
const SEED_DREAMS = [
  {
    id: "seed-1",
    displayName: "",
    anonymous: true,
    country: "India",
    dream: "I want to start my own company that helps small businesses grow online.",
    wantToBecome: "Entrepreneur",
    dreamDestination: "Japan",
    cheers: 12,
    createdAt: "2026-07-28T09:12:00.000Z",
    comments: [
      {
        id: "seed-1-c1",
        displayName: "Meera",
        comment: "This is amazing — go for it! The world needs more people like you.",
        createdAt: "2026-07-28T11:40:00.000Z",
      },
    ],
  },
  {
    id: "seed-2",
    displayName: "Daniel",
    anonymous: false,
    country: "Canada",
    dream: "I want to learn to paint and have my own small gallery show one day.",
    wantToBecome: "Artist",
    dreamDestination: "Italy",
    cheers: 7,
    createdAt: "2026-07-30T15:05:00.000Z",
    comments: [],
  },
  {
    id: "seed-3",
    displayName: "",
    anonymous: true,
    country: "",
    dream: "I want to become a doctor and open a free clinic in my hometown.",
    wantToBecome: "Doctor",
    dreamDestination: "",
    cheers: 21,
    createdAt: "2026-08-01T18:30:00.000Z",
    comments: [
      {
        id: "seed-3-c1",
        displayName: "Anonymous",
        comment: "Your hometown is lucky to have someone like you dreaming this big.",
        createdAt: "2026-08-02T08:15:00.000Z",
      },
      {
        id: "seed-3-c2",
        displayName: "Priya",
        comment: "Sending you all the strength for this journey!",
        createdAt: "2026-08-02T20:02:00.000Z",
      },
    ],
  },
];

function generateId() {
  if (isBrowser && window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `id-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function safeParse(json, fallback) {
  try {
    const parsed = JSON.parse(json);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

function sortByNewest(dreams) {
  return [...dreams].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

function writeDreams(dreams) {
  if (!isBrowser) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(dreams));
}

// Reads dreams from localStorage, seeding it the very first time so the
// feed isn't empty. Always returns newest-first.
export function getDreams() {
  if (!isBrowser) return sortByNewest(SEED_DREAMS);

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === null) {
    writeDreams(SEED_DREAMS);
    return sortByNewest(SEED_DREAMS);
  }

  const dreams = safeParse(raw, SEED_DREAMS);
  return sortByNewest(dreams);
}

function getCheeredIds() {
  if (!isBrowser) return [];
  const raw = window.localStorage.getItem(CHEERED_KEY);
  return safeParse(raw, []);
}

function writeCheeredIds(ids) {
  if (!isBrowser) return;
  window.localStorage.setItem(CHEERED_KEY, JSON.stringify(ids));
}

export function hasCheered(dreamId) {
  return getCheeredIds().includes(dreamId);
}

// Validates + creates a new dream, prepends it, persists, and returns the
// full updated (newest-first) list. Throws with a friendly message on
// invalid input so the modal can show it inline.
export function createDream({
  displayName,
  anonymous,
  country,
  dream,
  wantToBecome,
  dreamDestination,
}) {
  const trimmedDream = (dream || "").trim();

  if (!trimmedDream) {
    throw new Error("Your dream can't be empty.");
  }
  if (trimmedDream.length > MAX_DREAM_LENGTH) {
    throw new Error(`Keep your dream under ${MAX_DREAM_LENGTH} characters.`);
  }

  const newDream = {
    id: generateId(),
    displayName: anonymous ? "" : (displayName || "").trim(),
    anonymous: Boolean(anonymous),
    country: (country || "").trim(),
    dream: trimmedDream,
    wantToBecome: (wantToBecome || "").trim(),
    dreamDestination: (dreamDestination || "").trim(),
    cheers: 0,
    createdAt: new Date().toISOString(),
    comments: [],
  };

  const updated = [newDream, ...getDreams()];
  writeDreams(updated);
  return { dreams: sortByNewest(updated), dream: newDream };
}

// Cheers a dream unless this browser already cheered it. Returns the
// updated dreams array plus whether the cheer actually happened.
export function toggleCheer(dreamId) {
  const cheeredIds = getCheeredIds();
  if (cheeredIds.includes(dreamId)) {
    return { dreams: getDreams(), cheered: false, alreadyCheered: true };
  }

  const dreams = getDreams().map((d) =>
    d.id === dreamId ? { ...d, cheers: d.cheers + 1 } : d,
  );

  writeDreams(dreams);
  writeCheeredIds([...cheeredIds, dreamId]);

  return { dreams: sortByNewest(dreams), cheered: true, alreadyCheered: false };
}

// Adds a comment to a dream and returns the updated dreams array.
export function addComment(dreamId, { displayName, comment }) {
  const trimmedComment = (comment || "").trim();
  if (!trimmedComment) {
    throw new Error("Comment can't be empty.");
  }

  const newComment = {
    id: generateId(),
    displayName: (displayName || "").trim() || "Anonymous",
    comment: trimmedComment,
    createdAt: new Date().toISOString(),
  };

  const dreams = getDreams().map((d) =>
    d.id === dreamId
      ? { ...d, comments: [...(d.comments || []), newComment] }
      : d,
  );

  writeDreams(dreams);
  return sortByNewest(dreams);
}

export function formatDreamDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
