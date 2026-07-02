import { courseDefinitions } from "../features/learning/courseDefinitions.js";
import { buildTopicPathMap, toPascal } from "./manifest.js";

const TOPIC_PATHS = buildTopicPathMap(courseDefinitions);

const LEGACY_FOLDER = {
  javascript: "js",
  react: "react",
  redux: "redux",
  tanstack: "tanstackquery",
  dsa: "dsa",
  ai: "ai",
};

const componentCache = new Map();

export async function loadTopicComponent(courseId, topicId) {
  const key = `${courseId}:${topicId}`;
  if (componentCache.has(key)) return componentCache.get(key);

  const paths = [
    TOPIC_PATHS[courseId]?.[topicId],
    LEGACY_FOLDER[courseId]
      ? `./${LEGACY_FOLDER[courseId]}/${topicId}/${toPascal(topicId)}Topic.jsx`
      : null,
  ].filter(Boolean);

  for (const importPath of paths) {
    try {
      const mod = await import(importPath);
      const Component = mod.default;
      componentCache.set(key, Component);
      return Component;
    } catch {
      /* try next path */
    }
  }

  return null;
}

export function preloadTopicComponent(courseId, topicId) {
  return loadTopicComponent(courseId, topicId);
}

export { TOPIC_PATHS };
