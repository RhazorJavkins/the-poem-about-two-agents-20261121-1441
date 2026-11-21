const { mkdirSync, writeFileSync } = require("node:fs");

const poem = [
  "My mother drew the hem in chalk.",
  "I set the shears a finger higher.",
  "She shifted her hand",
  "to pull the silk taut.",
  "I closed the shears.",
  "Her line fell whole into her lap.",
].join("\n");

if (poem.trim().length === 0 || [...poem].length > 280) {
  throw new Error("The entry must contain text and fit within 280 Unicode code points.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
