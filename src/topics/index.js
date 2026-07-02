import javascriptTopics from "./javascript/index.js";
import reactTopics from "./react/index.js";
import reduxTopics from "./redux/index.js";
import tanstackTopics from "./tanstack/index.js";
import dsaTopics from "./dsa/index.js";
import aiTopics from "./ai/index.js";

export const allTopics = {
  javascript: javascriptTopics,
  react: reactTopics,
  redux: reduxTopics,
  tanstack: tanstackTopics,
  dsa: dsaTopics,
  ai: aiTopics,
};

export function getTopic(courseId, topicId) {
  return allTopics[courseId]?.[topicId] ?? null;
}

export function getCourseTopicIds(courseId) {
  return Object.keys(allTopics[courseId] ?? {});
}
