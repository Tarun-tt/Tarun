/**
 * Professional course folder manifest
 * Pattern: {course}/{level}/{topicId}/{ComponentName}.jsx
 *
 * Levels: beginner | intermediate | advanced | projects | problem-bank
 */

function slugifyCategory(name) {
  const map = {
    Fundamentals: "beginner",
    "ES6+ Features": "intermediate",
    "Core Concepts": "intermediate",
    "Core Patterns": "intermediate",
    "Async & APIs": "intermediate",
    "Array Methods": "intermediate",
    Hooks: "intermediate",
    "Caching & Keys": "intermediate",
    Patterns: "intermediate",
    Toolkit: "intermediate",
    "Advanced Patterns": "advanced",
    Performance: "advanced",
    "Routing & Data": "intermediate",
    Production: "advanced",
    Internals: "advanced",
    Advanced: "advanced",
    "Frontend DSA": "advanced",
    "Problem Bank": "problem-bank",
    "AI Fundamentals": "beginner",
    "Deep Learning": "intermediate",
    "Modern AI": "advanced",
    "AI in Frontend": "advanced",
    Projects: "projects",
    "Data Structures": "intermediate",
    Algorithms: "advanced",
  };
  return map[name] || name.toLowerCase().replace(/\s+/g, "-");
}

function toPascal(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

const COURSE_FOLDER = {
  javascript: "javascript",
  react: "react",
  redux: "redux",
  tanstack: "tanstack-query",
  dsa: "dsa",
  ai: "ai",
};

/** Build path map from course definitions */
export function buildTopicPathMap(courseDefinitions) {
  const paths = {};

  for (const course of courseDefinitions) {
    paths[course.id] = {};
    for (const category of course.categories) {
      const level = slugifyCategory(category.name);
      for (const topic of category.topics) {
        const component = `${toPascal(topic.id)}Topic`;
        const folder = COURSE_FOLDER[course.id] || course.id;
        paths[course.id][topic.id] = `./${folder}/${level}/${topic.id}/${component}.jsx`;
      }
    }
  }

  return paths;
}

export { COURSE_FOLDER, slugifyCategory, toPascal };
