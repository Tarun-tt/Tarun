import { configureStore } from "@reduxjs/toolkit";
import progressReducer from "./features/learning/progressSlice";
import toastReducer from "./features/ui/toastSlice";

export const store = configureStore({
  reducer: {
    progress: progressReducer,
    toast: toastReducer,
  },
});
