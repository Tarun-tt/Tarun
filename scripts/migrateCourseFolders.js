import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { courseDefinitions } from "../src/features/learning/courseDefinitions.js";
import { buildTopicPathMap, slugifyCategory, toPascal, COURSE_FOLDER } from "../src/courses/manifest.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coursesRoot = path.join(__dirname, "..", "src", "courses");

const LEGACY_FOLDER = {
  javascript: "js",
  react: "react",
  redux: "redux",
  tanstack: "tanstackquery",
  dsa: "dsa",
  ai: "ai",
};

const pathMap = buildTopicPathMap(courseDefinitions);
let migrated = 0;

for (const course of courseDefinitions) {
  const legacyFolder = LEGACY_FOLDER[course.id];
  if (!legacyFolder) continue;

  for (const category of course.categories) {
    const level = slugifyCategory(category.name);
    for (const topic of category.topics) {
      const component = `${toPascal(topic.id)}Topic.jsx`;
      const legacyPath = path.join(coursesRoot, legacyFolder, topic.id, component);

      if (!fs.existsSync(legacyPath)) continue;

      const targetDir = path.join(
        coursesRoot,
        COURSE_FOLDER[course.id] || course.id,
        level,
        topic.id,
      );
      const targetPath = path.join(targetDir, component);
      const indexPath = path.join(targetDir, "index.js");

      if (fs.existsSync(targetPath)) continue;

      fs.mkdirSync(targetDir, { recursive: true });

      let content = fs.readFileSync(legacyPath, "utf8");
      // Fix relative import depth for TopicLesson
      const depth = `../`.repeat(level.split("/").length + 2);
      content = content.replace(
        /from "\.\.\/\.\.\/shared\/TopicLesson\.jsx"/g,
        `from "${depth}shared/TopicLesson.jsx"`,
      );
      content = content.replace(
        /from '\.\.\/\.\.\/shared\/TopicLesson\.jsx'/g,
        `from '${depth}shared/TopicLesson.jsx'`,
      );

      fs.writeFileSync(targetPath, content, "utf8");
      fs.writeFileSync(
        indexPath,
        `export { default } from "./${component.replace(".jsx", "")}.jsx";\n`,
        "utf8",
      );
      migrated++;
    }
  }
}

console.log(`Migrated ${migrated} topics to professional folder structure.`);
