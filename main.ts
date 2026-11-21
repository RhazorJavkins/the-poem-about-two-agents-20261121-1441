const { mkdirSync, writeFileSync } = require("node:fs");

const poem = [
  "My mother chalks the hem. “Here.”",
  "I take the shears and open them a finger higher.",
  "She lets the silk go slack.",
  "I set the handles in her palm",
  "and pull the silk tight.",
  "She cuts her own line loose.",
].join("\n");

if (poem.trim().length === 0 || [...poem].length > 280) {
  throw new Error("The entry must contain text and fit within 280 Unicode code points.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
