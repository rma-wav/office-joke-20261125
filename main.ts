// One-Line Office Joke: 24-Hour Sprint — make.fun entry program.
// Writes one authored one-line joke about office life to /output/entry.txt.
// Node 22, stdlib only, no network, fully deterministic: every run
// writes the exact same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke, drafted and revised in-session. Single sentence, one line:
// a raise request answered not with money but with corporate wellness
// theatre — the surprise lands on the mug at the very end.
const JOKE =
  "I asked HR for a raise and got a wellness webinar and a mug that says 'breathe'.";

// The gate allows 1–200 characters; enforce it here so a future edit
// can never silently produce an invalid entry.
if ([...JOKE].length < 1 || [...JOKE].length > 200 || JOKE.includes("\n")) {
  throw new Error("joke must be a single line of 1-200 characters");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
