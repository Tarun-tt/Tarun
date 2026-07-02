import { courseDefinitions } from "./courseDefinitions.js";

export const courseCatalog = courseDefinitions.map((course) => {
  const lessons = course.categories.flatMap((cat) =>
    cat.topics.map((topic) => ({
      id: topic.id,
      title: topic.title,
      category: cat.name,
    })),
  );

  return {
    id: course.id,
    title: course.title,
    description: course.description,
    accent: course.accent,
    hours: course.hours,
    topics: lessons.length,
    difficulty: course.difficulty,
    progress: 0,
    categories: course.categories,
    lessons,
  };
});

export function getCourseById(courseId) {
  return courseCatalog.find((c) => c.id === courseId);
}

export function getLessonIndex(courseId, topicId) {
  const course = getCourseById(courseId);
  if (!course) return -1;
  return course.lessons.findIndex((l) => l.id === topicId);
}

export function getAdjacentTopics(courseId, topicId) {
  const course = getCourseById(courseId);
  if (!course) return { prev: null, next: null };
  const index = getLessonIndex(courseId, topicId);
  return {
    prev: index > 0 ? course.lessons[index - 1] : null,
    next:
      index >= 0 && index < course.lessons.length - 1
        ? course.lessons[index + 1]
        : null,
  };
}
