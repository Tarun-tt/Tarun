import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { courseDefinitions } from "./topicDefinitions.js";
import { createTopicContent } from "./topicFactory.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const topicsRoot = path.join(__dirname, "..", "src", "topics");

function generateTopicFile(courseId, topic) {
  const content = createTopicContent(courseId, topic.id, topic.title);
  const dir = path.join(topicsRoot, courseId, topic.id);
  fs.mkdirSync(dir, { recursive: true });

  const fileContent = `// Auto-generated topic: ${topic.title}
// Course: ${courseId}

export default ${JSON.stringify(content, null, 2)};
`;

  fs.writeFileSync(path.join(dir, "index.js"), fileContent, "utf8");
}

function generateIndexFiles() {
  for (const course of courseDefinitions) {
    const courseDir = path.join(topicsRoot, course.id);
    const topicIds = course.categories.flatMap((cat) =>
      cat.topics.map((t) => t.id),
    );

    const imports = topicIds
      .map((id) => `import ${toVarName(id)} from "./${id}/index.js";`)
      .join("\n");

    const exports = topicIds.map((id) => `  "${id}": ${toVarName(id)},`).join("\n");

    const indexContent = `${imports}

const topics = {
${exports}
};

export default topics;
export { topics };
`;

    fs.mkdirSync(courseDir, { recursive: true });
    fs.writeFileSync(path.join(courseDir, "index.js"), indexContent, "utf8");
  }

  const masterImports = courseDefinitions
    .map((c) => `import ${c.id}Topics from "./${c.id}/index.js";`)
    .join("\n");

  const masterExports = courseDefinitions
    .map((c) => `  ${c.id}: ${c.id}Topics,`)
    .join("\n");

  const masterContent = `${masterImports}

export const allTopics = {
${masterExports}
};

export function getTopic(courseId, topicId) {
  return allTopics[courseId]?.[topicId] ?? null;
}

export function getCourseTopicIds(courseId) {
  return Object.keys(allTopics[courseId] ?? {});
}
`;

  fs.writeFileSync(path.join(topicsRoot, "index.js"), masterContent, "utf8");
}

function toVarName(slug) {
  return slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, "_$1");
}

console.log("Generating topic folders...");
let count = 0;

for (const course of courseDefinitions) {
  for (const category of course.categories) {
    for (const topic of category.topics) {
      generateTopicFile(course.id, topic);
      count++;
    }
  }
}

generateIndexFiles();
console.log(`Generated ${count} topic folders in src/topics/`);
