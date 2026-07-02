import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { courseDefinitions } from "./topicDefinitions.js";
import {
  createTopicComponentData,
  COURSE_FOLDERS,
  slugToPascal,
} from "./topicComponentFactory.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coursesRoot = path.join(__dirname, "..", "src", "courses");

function escapeForTemplate(str) {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function generateComponentFile(data) {
  const dir = path.join(coursesRoot, data.folder, data.topicId);
  fs.mkdirSync(dir, { recursive: true });

  const examplesStr = JSON.stringify(data.examples, null, 2);
  const content = `import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * ${data.title} — ${data.course}
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = ${JSON.stringify(data.explanation)};
const syntax = ${JSON.stringify(data.syntax)};
const examples = ${examplesStr};

export default function ${data.componentName}() {
  return (
    <TopicLesson
      title=${JSON.stringify(data.title)}
      course=${JSON.stringify(data.course)}
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent=${JSON.stringify(data.accent)}
    />
  );
}
`;

  fs.writeFileSync(path.join(dir, `${data.componentName}.jsx`), content, "utf8");
}

function generateIndexFiles() {
  for (const course of courseDefinitions) {
    const folder = COURSE_FOLDERS[course.id];
    const courseDir = path.join(coursesRoot, folder);
    const allTopics = course.categories.flatMap((c) => c.topics);

    const exports = allTopics
      .map((t) => {
        const name = `${slugToPascal(t.id)}Topic`;
        return `export { default as ${name} } from "./${t.id}/${name}.jsx";`;
      })
      .join("\n");

    const registry = allTopics
      .map((t) => `  "${t.id}": () => import("./${t.id}/${slugToPascal(t.id)}Topic.jsx"),`)
      .join("\n");

    const indexContent = `${exports}

export const topicRegistry = {
${registry}
};
`;

    fs.writeFileSync(path.join(courseDir, "index.js"), indexContent, "utf8");
  }

  const loaderContent = `const COURSE_FOLDER = {
  javascript: "js",
  react: "react",
  redux: "redux",
  tanstack: "tanstackquery",
};

const componentCache = new Map();

export async function loadTopicComponent(courseId, topicId) {
  const key = \`\${courseId}:\${topicId}\`;
  if (componentCache.has(key)) return componentCache.get(key);

  const folder = COURSE_FOLDER[courseId];
  if (!folder) return null;

  try {
    const mod = await import(\`./\${folder}/\${topicId}/\${toPascal(topicId)}Topic.jsx\`);
    const Component = mod.default;
    componentCache.set(key, Component);
    return Component;
  } catch {
    return null;
  }
}

function toPascal(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

export function preloadTopicComponent(courseId, topicId) {
  return loadTopicComponent(courseId, topicId);
}
`;

  fs.writeFileSync(path.join(coursesRoot, "componentLoader.js"), loaderContent, "utf8");
}

console.log("Generating topic components...");
let count = 0;

for (const course of courseDefinitions) {
  for (const category of course.categories) {
    for (const topic of category.topics) {
      const data = createTopicComponentData(course.id, topic.id, topic.title);
      generateComponentFile(data);
      count++;
    }
  }
}

generateIndexFiles();
console.log(`Generated ${count} topic components in src/courses/`);
