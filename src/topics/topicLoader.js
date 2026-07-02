/** Lazy-load topic content on demand to keep initial bundle small */

const topicCache = new Map();

export async function loadTopic(courseId, topicId) {
  const key = `${courseId}:${topicId}`;
  if (topicCache.has(key)) return topicCache.get(key);

  try {
    const mod = await import(`./${courseId}/${topicId}/index.js`);
    const content = mod.default;
    topicCache.set(key, content);
    return content;
  } catch {
    return null;
  }
}

export function getTopicSync(courseId, topicId) {
  const key = `${courseId}:${topicId}`;
  return topicCache.get(key) ?? null;
}

export function preloadTopic(courseId, topicId) {
  return loadTopic(courseId, topicId);
}

// Eager-load index for search (lightweight metadata only)
export { courseDefinitions } from "../features/learning/courseDefinitions.js";
