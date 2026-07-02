export { default as ReduxBasicsTopic } from "./redux-basics/ReduxBasicsTopic.jsx";
export { default as StoreTopic } from "./store/StoreTopic.jsx";
export { default as ActionsTopic } from "./actions/ActionsTopic.jsx";
export { default as ReducersTopic } from "./reducers/ReducersTopic.jsx";
export { default as DispatchTopic } from "./dispatch/DispatchTopic.jsx";
export { default as ConfigureStoreTopic } from "./configure-store/ConfigureStoreTopic.jsx";
export { default as CreateSliceTopic } from "./create-slice/CreateSliceTopic.jsx";
export { default as SelectorsTopic } from "./selectors/SelectorsTopic.jsx";
export { default as MiddlewareTopic } from "./middleware/MiddlewareTopic.jsx";
export { default as ThunkTopic } from "./thunk/ThunkTopic.jsx";
export { default as CreateAsyncThunkTopic } from "./create-async-thunk/CreateAsyncThunkTopic.jsx";
export { default as ExtraReducersTopic } from "./extra-reducers/ExtraReducersTopic.jsx";
export { default as RtkQueryTopic } from "./rtk-query/RtkQueryTopic.jsx";
export { default as ReduxDevtoolsTopic } from "./redux-devtools/ReduxDevtoolsTopic.jsx";
export { default as ReduxPersistTopic } from "./redux-persist/ReduxPersistTopic.jsx";
export { default as NormalizationTopic } from "./normalization/NormalizationTopic.jsx";
export { default as BestPracticesTopic } from "./best-practices/BestPracticesTopic.jsx";
export { default as FolderStructureTopic } from "./folder-structure/FolderStructureTopic.jsx";

export const topicRegistry = {
  "redux-basics": () => import("./redux-basics/ReduxBasicsTopic.jsx"),
  "store": () => import("./store/StoreTopic.jsx"),
  "actions": () => import("./actions/ActionsTopic.jsx"),
  "reducers": () => import("./reducers/ReducersTopic.jsx"),
  "dispatch": () => import("./dispatch/DispatchTopic.jsx"),
  "configure-store": () => import("./configure-store/ConfigureStoreTopic.jsx"),
  "create-slice": () => import("./create-slice/CreateSliceTopic.jsx"),
  "selectors": () => import("./selectors/SelectorsTopic.jsx"),
  "middleware": () => import("./middleware/MiddlewareTopic.jsx"),
  "thunk": () => import("./thunk/ThunkTopic.jsx"),
  "create-async-thunk": () => import("./create-async-thunk/CreateAsyncThunkTopic.jsx"),
  "extra-reducers": () => import("./extra-reducers/ExtraReducersTopic.jsx"),
  "rtk-query": () => import("./rtk-query/RtkQueryTopic.jsx"),
  "redux-devtools": () => import("./redux-devtools/ReduxDevtoolsTopic.jsx"),
  "redux-persist": () => import("./redux-persist/ReduxPersistTopic.jsx"),
  "normalization": () => import("./normalization/NormalizationTopic.jsx"),
  "best-practices": () => import("./best-practices/BestPracticesTopic.jsx"),
  "folder-structure": () => import("./folder-structure/FolderStructureTopic.jsx"),
};
