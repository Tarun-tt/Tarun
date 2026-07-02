import introduction from "./introduction/index.js";
import serverState from "./server-state/index.js";
import clientState from "./client-state/index.js";
import queryClient from "./query-client/index.js";
import provider from "./provider/index.js";
import useQuery from "./use-query/index.js";
import queryKeys from "./query-keys/index.js";
import caching from "./caching/index.js";
import staleTime from "./stale-time/index.js";
import gcTime from "./gc-time/index.js";
import refetch from "./refetch/index.js";
import windowFocus from "./window-focus/index.js";
import retry from "./retry/index.js";
import dependentQueries from "./dependent-queries/index.js";
import parallelQueries from "./parallel-queries/index.js";
import infiniteQuery from "./infinite-query/index.js";
import pagination from "./pagination/index.js";
import mutations from "./mutations/index.js";
import optimisticUpdates from "./optimistic-updates/index.js";
import prefetch from "./prefetch/index.js";
import devtools from "./devtools/index.js";
import errorHandling from "./error-handling/index.js";
import authentication from "./authentication/index.js";
import offlineSupport from "./offline-support/index.js";
import bestPractices from "./best-practices/index.js";
import folderStructure from "./folder-structure/index.js";

const topics = {
  "introduction": introduction,
  "server-state": serverState,
  "client-state": clientState,
  "query-client": queryClient,
  "provider": provider,
  "use-query": useQuery,
  "query-keys": queryKeys,
  "caching": caching,
  "stale-time": staleTime,
  "gc-time": gcTime,
  "refetch": refetch,
  "window-focus": windowFocus,
  "retry": retry,
  "dependent-queries": dependentQueries,
  "parallel-queries": parallelQueries,
  "infinite-query": infiniteQuery,
  "pagination": pagination,
  "mutations": mutations,
  "optimistic-updates": optimisticUpdates,
  "prefetch": prefetch,
  "devtools": devtools,
  "error-handling": errorHandling,
  "authentication": authentication,
  "offline-support": offlineSupport,
  "best-practices": bestPractices,
  "folder-structure": folderStructure,
};

export default topics;
export { topics };
