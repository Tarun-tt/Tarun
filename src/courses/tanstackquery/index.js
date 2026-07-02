export { default as IntroductionTopic } from "./introduction/IntroductionTopic.jsx";
export { default as ServerStateTopic } from "./server-state/ServerStateTopic.jsx";
export { default as ClientStateTopic } from "./client-state/ClientStateTopic.jsx";
export { default as QueryClientTopic } from "./query-client/QueryClientTopic.jsx";
export { default as ProviderTopic } from "./provider/ProviderTopic.jsx";
export { default as UseQueryTopic } from "./use-query/UseQueryTopic.jsx";
export { default as QueryKeysTopic } from "./query-keys/QueryKeysTopic.jsx";
export { default as CachingTopic } from "./caching/CachingTopic.jsx";
export { default as StaleTimeTopic } from "./stale-time/StaleTimeTopic.jsx";
export { default as GcTimeTopic } from "./gc-time/GcTimeTopic.jsx";
export { default as RefetchTopic } from "./refetch/RefetchTopic.jsx";
export { default as WindowFocusTopic } from "./window-focus/WindowFocusTopic.jsx";
export { default as RetryTopic } from "./retry/RetryTopic.jsx";
export { default as DependentQueriesTopic } from "./dependent-queries/DependentQueriesTopic.jsx";
export { default as ParallelQueriesTopic } from "./parallel-queries/ParallelQueriesTopic.jsx";
export { default as InfiniteQueryTopic } from "./infinite-query/InfiniteQueryTopic.jsx";
export { default as PaginationTopic } from "./pagination/PaginationTopic.jsx";
export { default as MutationsTopic } from "./mutations/MutationsTopic.jsx";
export { default as OptimisticUpdatesTopic } from "./optimistic-updates/OptimisticUpdatesTopic.jsx";
export { default as PrefetchTopic } from "./prefetch/PrefetchTopic.jsx";
export { default as DevtoolsTopic } from "./devtools/DevtoolsTopic.jsx";
export { default as ErrorHandlingTopic } from "./error-handling/ErrorHandlingTopic.jsx";
export { default as AuthenticationTopic } from "./authentication/AuthenticationTopic.jsx";
export { default as OfflineSupportTopic } from "./offline-support/OfflineSupportTopic.jsx";
export { default as BestPracticesTopic } from "./best-practices/BestPracticesTopic.jsx";
export { default as FolderStructureTopic } from "./folder-structure/FolderStructureTopic.jsx";

export const topicRegistry = {
  "introduction": () => import("./introduction/IntroductionTopic.jsx"),
  "server-state": () => import("./server-state/ServerStateTopic.jsx"),
  "client-state": () => import("./client-state/ClientStateTopic.jsx"),
  "query-client": () => import("./query-client/QueryClientTopic.jsx"),
  "provider": () => import("./provider/ProviderTopic.jsx"),
  "use-query": () => import("./use-query/UseQueryTopic.jsx"),
  "query-keys": () => import("./query-keys/QueryKeysTopic.jsx"),
  "caching": () => import("./caching/CachingTopic.jsx"),
  "stale-time": () => import("./stale-time/StaleTimeTopic.jsx"),
  "gc-time": () => import("./gc-time/GcTimeTopic.jsx"),
  "refetch": () => import("./refetch/RefetchTopic.jsx"),
  "window-focus": () => import("./window-focus/WindowFocusTopic.jsx"),
  "retry": () => import("./retry/RetryTopic.jsx"),
  "dependent-queries": () => import("./dependent-queries/DependentQueriesTopic.jsx"),
  "parallel-queries": () => import("./parallel-queries/ParallelQueriesTopic.jsx"),
  "infinite-query": () => import("./infinite-query/InfiniteQueryTopic.jsx"),
  "pagination": () => import("./pagination/PaginationTopic.jsx"),
  "mutations": () => import("./mutations/MutationsTopic.jsx"),
  "optimistic-updates": () => import("./optimistic-updates/OptimisticUpdatesTopic.jsx"),
  "prefetch": () => import("./prefetch/PrefetchTopic.jsx"),
  "devtools": () => import("./devtools/DevtoolsTopic.jsx"),
  "error-handling": () => import("./error-handling/ErrorHandlingTopic.jsx"),
  "authentication": () => import("./authentication/AuthenticationTopic.jsx"),
  "offline-support": () => import("./offline-support/OfflineSupportTopic.jsx"),
  "best-practices": () => import("./best-practices/BestPracticesTopic.jsx"),
  "folder-structure": () => import("./folder-structure/FolderStructureTopic.jsx"),
};
