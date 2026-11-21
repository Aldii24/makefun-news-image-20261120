// make.fun news-image-20261120 entry (Node 22 / stdlib only).
// Copies entry.png — a 1024×1024 editorial summary of Friday 20 November 2026 world news —
// to /output/entry.png. No network; deterministic across the grader's two runs.
import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(
  join(here, "entry.png"),
  join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.png"),
);
