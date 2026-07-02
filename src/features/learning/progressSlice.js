import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "react-mastery-progress";

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveProgress(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.completed));
  } catch {
    /* ignore */
  }
}

const initialState = {
  completed: loadProgress(),
  quizScores: {},
  timeSpent: {},
  bookmarks: [],
  notes: {},
  xp: 0,
  darkMode: false,
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    markTopicComplete: (state, action) => {
      const { courseId, topicId } = action.payload;
      const key = `${courseId}:${topicId}`;
      state.completed[key] = true;
      state.xp += 10;
      saveProgress(state);
    },
    setQuizScore: (state, action) => {
      const { courseId, topicId, score } = action.payload;
      state.quizScores[`${courseId}:${topicId}`] = score;
    },
    addBookmark: (state, action) => {
      const { courseId, topicId, title } = action.payload;
      const exists = state.bookmarks.some(
        (b) => b.courseId === courseId && b.topicId === topicId,
      );
      if (!exists) state.bookmarks.push({ courseId, topicId, title });
    },
    removeBookmark: (state, action) => {
      const { courseId, topicId } = action.payload;
      state.bookmarks = state.bookmarks.filter(
        (b) => !(b.courseId === courseId && b.topicId === topicId),
      );
    },
    setNote: (state, action) => {
      const { courseId, topicId, note } = action.payload;
      state.notes[`${courseId}:${topicId}`] = note;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("react-mastery-dark", String(state.darkMode));
    },
    initDarkMode: (state) => {
      const saved = localStorage.getItem("react-mastery-dark");
      if (saved !== null) state.darkMode = saved === "true";
    },
  },
});

export const {
  markTopicComplete,
  setQuizScore,
  addBookmark,
  removeBookmark,
  setNote,
  toggleDarkMode,
  initDarkMode,
} = progressSlice.actions;

export function selectCourseProgress(state, courseId) {
  const course = state.progress.completed;
  const keys = Object.keys(course).filter(
    (k) => k.startsWith(`${courseId}:`) && course[k],
  );
  return keys.length;
}

export function isTopicComplete(state, courseId, topicId) {
  return !!state.progress.completed[`${courseId}:${topicId}`];
}

export function isTopicLocked(state, courseId, topicId, lessonIndex) {
  if (lessonIndex === 0) return false;
  const course = state.progress.completed;
  const prevKey = Object.keys(course).find((k) => {
    const [, tid] = k.split(":");
    return k.startsWith(`${courseId}:`) && tid;
  });
  void prevKey;
  return false;
}

export default progressSlice.reducer;
