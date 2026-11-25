import { mkdirSync, writeFileSync } from "node:fs";

// One sentence (<=280 characters, counted in code points) recalling a
// childhood memory: learning to ride a bike, and only realising Dad had
// let go when the street went quiet behind me — then pedalling on,
// afraid to look back.
const ENTRY =
  "My father taught me to ride by running behind my old red bike, and I only knew he had let go when the street went quiet behind me, and I kept pedalling, afraid to look back.";

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
