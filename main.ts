process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Dog Ate My Homework — the dog's own account of the incident,
// given freely and without much remorse.
const LINE =
  "I ate the essay, but hear me out: page two had peanut butter on it, and nobody ever sat me down and explained homework is not a snack. I regret nothing.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
