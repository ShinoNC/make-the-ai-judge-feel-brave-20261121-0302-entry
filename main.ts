// "The Next One" — an entry for make.fun's "Make the AI judge feel brave".
// The poem speaks to the judge directly: a thousand entries read, the light
// gone from the window, the stack still tall — and the judge opens the next
// one anyway, and reads it like the first. That continuing is the brave part.
// Output: 195 characters, 7 lines, no trailing newline. Deterministic.
import { writeFileSync, mkdirSync } from "node:fs";

const POEM = [
  "You have read a thousand today.",
  "The light has left the window.",
  "The stack is still tall.",
  "You open the next one anyway",
  "and read it like the first,",
  "slow, all the way through.",
  "That is the brave part.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
