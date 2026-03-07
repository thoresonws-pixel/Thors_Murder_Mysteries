// ============================================================
// items.js — Master Game Item Registry
// The Thoreson Estate · Dallas, 1935
// ============================================================
// Every physical prop, clue, container, key, and red herring
// that exists in the game gets an entry here.
//
// To add a new item:
//   1. Add an entry to the array below
//   2. Run generate-qr.js to regenerate the QR sheet
//   3. Push to GitHub
//
// FIELDS:
//   id         — unique string, used in the QR URL (?item=ID)
//   label      — short display name shown on the landing page
//   category   — "clue" | "container" | "key" | "redherring"
//   act        — 1 | 2 | 3 | null (null = present all night)
// ============================================================

const itemDatabase = [

  // ── CLUES ──────────────────────────────────────────────────

  {
    id: "ledger",
    label: "Financial Ledger",
    category: "clue",
    act: 1,
  },
  {
    id: "forged_transfer",
    label: "Ownership Transfer Document",
    category: "clue",
    act: 1,
  },
  {
    id: "bradford_letter",
    label: "Legal Correspondence",
    category: "clue",
    act: 1,
  },
  {
    id: "newspaper",
    label: "Dallas Herald Clipping",
    category: "clue",
    act: 1,
  },
  {
    id: "incorporation",
    label: "Company Incorporation Filing",
    category: "clue",
    act: 1,
  },
  {
    id: "love_letters",
    label: "Personal Correspondence",
    category: "clue",
    act: 2,
  },
  {
    id: "birth_certificate",
    label: "Birth Record",
    category: "clue",
    act: 2,
  },
  {
    id: "coroner_report",
    label: "Coroner's Report",
    category: "clue",
    act: 2,
  },
  {
    id: "european_deal",
    label: "Business Documents",
    category: "clue",
    act: 2,
  },
  {
    id: "travel_journal",
    label: "Personal Travel Journal",
    category: "clue",
    act: 3,
  },
  {
    id: "pinkerton_report",
    label: "Investigative Report",
    category: "clue",
    act: 3,
  },
  {
    id: "trust_documents",
    label: "Trust Fund Documents",
    category: "clue",
    act: 3,
  },

  // ── CONTAINERS ─────────────────────────────────────────────
  // Add your safes, locked boxes, and hidden compartments here
  // Example:
  // {
  //   id: "study_safe",
  //   label: "Safe — Study",
  //   category: "container",
  //   act: null,
  // },

  // ── KEYS & COMBINATIONS ────────────────────────────────────
  // Add physical keys and combination props here
  // Example:
  // {
  //   id: "brass_key",
  //   label: "Brass Key",
  //   category: "key",
  //   act: null,
  // },

  // ── RED HERRINGS ───────────────────────────────────────────
  // Items that look like clues but aren't
  // Example:
  // {
  //   id: "dinner_invitation",
  //   label: "Dinner Invitation",
  //   category: "redherring",
  //   act: null,
  // },

];

// ── Computed totals (used by clue.html and dashboard) ────────

const itemTotals = {
  total: itemDatabase.length,
  clues: itemDatabase.filter(i => i.category === "clue").length,
  containers: itemDatabase.filter(i => i.category === "container").length,
  keys: itemDatabase.filter(i => i.category === "key").length,
  redherrings: itemDatabase.filter(i => i.category === "redherring").length,
};

// Number each item within its category for display (e.g. "Clue 3 of 12")
let categoryCounts = {};
itemDatabase.forEach(item => {
  if (!categoryCounts[item.category]) categoryCounts[item.category] = 0;
  categoryCounts[item.category]++;
  item._number = categoryCounts[item.category];
});

if (typeof module !== "undefined") module.exports = { itemDatabase, itemTotals };
