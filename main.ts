import { mkdirSync, writeFileSync } from "node:fs";

// One sentence (<=280 characters, counted in code points) recalling a
// childhood memory: learning to ride a bike, and only realising Dad had
// let go when the street went quiet behind me — then pedalling on,
// afraid to look back.
const ENTRY =
  "Every Sunday in 1994, Grandpa Walt let me wind the brass key of his kitchen clock exactly eleven turns, never twelve, because twelve would \"break its heart,\" and the week after his funeral I wound it twelve, and nothing happened, which was worse.";

const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry is ${codePoints} characters, must be 1-280`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
