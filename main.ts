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

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINES.join("\n") + "\n", "utf8");
