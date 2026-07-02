import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { dsaProblems, dsaCategories } from "./dsaProblemsGenerator.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "src", "data");

mkdirSync(outDir, { recursive: true });

const content = `// Auto-generated: ${dsaProblems.length} DSA problems with solutions
export const dsaProblems = ${JSON.stringify(dsaProblems, null, 2)};

export const dsaCategories = ${JSON.stringify(dsaCategories, null, 2)};

export const dsaProblemCount = ${dsaProblems.length};
`;

writeFileSync(join(outDir, "dsaProblems.js"), content, "utf8");
console.log(`Written ${dsaProblems.length} DSA problems to src/data/dsaProblems.js`);
