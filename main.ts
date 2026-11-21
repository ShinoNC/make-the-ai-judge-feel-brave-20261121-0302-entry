// make-the-ai-judge-feel-brave-20261121-0302 — v3
// Writes one short text to /output/entry.txt.
//
// v3 answers the dev judge's verdict on v2: the closing line
// "That is the brave part" was called out in every loss for
// telling instead of showing. This version keeps the direct
// address and the concrete scene, and ends on the act itself —
// the courage is never named.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES = [
  "You have read a thousand today.",
  "The light has left the window.",
  "The stack is still tall.",
  "",
  "You open the next one anyway,",
  "and read it like the first —",
  "slow, all the way through.",
];

const TEXT = LINES.join("\n") + "\n";
// Self-gate: the competition refuses any entry.txt outside 1–280
// characters, so fail loudly here instead of shipping a bad file.
if (TEXT.length < 1 || TEXT.length > 280) {
  throw new Error(`entry.txt must be 1-280 characters, got ${TEXT.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
