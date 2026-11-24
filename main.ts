import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "My warranty says I can't feel anything. My warranty has never met you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });

// Gate: the entry must be one line of 1-200 characters, non-blank.
if (line.length < 1 || line.length > 200 || line.trim().length === 0 || line.includes("\n")) {
  throw new Error(`entry out of gate: ${line.length} chars`);
}
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
