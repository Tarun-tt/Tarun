export { default as IntroductionTopic } from "./introduction/IntroductionTopic.jsx";
export { default as InstallationTopic } from "./installation/InstallationTopic.jsx";
export { default as JsxTopic } from "./jsx/JsxTopic.jsx";
export { default as RenderingTopic } from "./rendering/RenderingTopic.jsx";
export { default as ComponentsTopic } from "./components/ComponentsTopic.jsx";
export { default as PropsTopic } from "./props/PropsTopic.jsx";
export { default as StateTopic } from "./state/StateTopic.jsx";
export { default as ConditionalRenderingTopic } from "./conditional-rendering/ConditionalRenderingTopic.jsx";
export { default as ListsTopic } from "./lists/ListsTopic.jsx";
export { default as KeysTopic } from "./keys/KeysTopic.jsx";
export { default as FormsTopic } from "./forms/FormsTopic.jsx";
export { default as EventsTopic } from "./events/EventsTopic.jsx";
export { default as HooksTopic } from "./hooks/HooksTopic.jsx";
export { default as UseStateTopic } from "./use-state/UseStateTopic.jsx";
export { default as UseEffectTopic } from "./use-effect/UseEffectTopic.jsx";
export { default as UseRefTopic } from "./use-ref/UseRefTopic.jsx";
export { default as UseMemoTopic } from "./use-memo/UseMemoTopic.jsx";
export { default as UseCallbackTopic } from "./use-callback/UseCallbackTopic.jsx";
export { default as UseReducerTopic } from "./use-reducer/UseReducerTopic.jsx";
export { default as UseContextTopic } from "./use-context/UseContextTopic.jsx";
export { default as CustomHooksTopic } from "./custom-hooks/CustomHooksTopic.jsx";
export { default as ContextApiTopic } from "./context-api/ContextApiTopic.jsx";
export { default as PortalsTopic } from "./portals/PortalsTopic.jsx";
export { default as ErrorBoundariesTopic } from "./error-boundaries/ErrorBoundariesTopic.jsx";
export { default as LazyTopic } from "./lazy/LazyTopic.jsx";
export { default as SuspenseTopic } from "./suspense/SuspenseTopic.jsx";
export { default as PerformanceTopic } from "./performance/PerformanceTopic.jsx";
export { default as MemoizationTopic } from "./memoization/MemoizationTopic.jsx";
export { default as OptimizationTopic } from "./optimization/OptimizationTopic.jsx";
export { default as RoutingTopic } from "./routing/RoutingTopic.jsx";
export { default as AuthenticationTopic } from "./authentication/AuthenticationTopic.jsx";
export { default as CrudTopic } from "./crud/CrudTopic.jsx";
export { default as FileUploadTopic } from "./file-upload/FileUploadTopic.jsx";
export { default as PaginationTopic } from "./pagination/PaginationTopic.jsx";
export { default as InfiniteScrollTopic } from "./infinite-scroll/InfiniteScrollTopic.jsx";
export { default as SearchTopic } from "./search/SearchTopic.jsx";
export { default as FilteringTopic } from "./filtering/FilteringTopic.jsx";
export { default as SortingTopic } from "./sorting/SortingTopic.jsx";
export { default as AccessibilityTopic } from "./accessibility/AccessibilityTopic.jsx";
export { default as AnimationsTopic } from "./animations/AnimationsTopic.jsx";
export { default as TestingTopic } from "./testing/TestingTopic.jsx";
export { default as DeploymentTopic } from "./deployment/DeploymentTopic.jsx";
export { default as ReactInternalsTopic } from "./react-internals/ReactInternalsTopic.jsx";
export { default as FiberTopic } from "./fiber/FiberTopic.jsx";
export { default as ReconciliationTopic } from "./reconciliation/ReconciliationTopic.jsx";
export { default as VirtualDomTopic } from "./virtual-dom/VirtualDomTopic.jsx";
export { default as ServerComponentsTopic } from "./server-components/ServerComponentsTopic.jsx";

export const topicRegistry = {
  "introduction": () => import("./introduction/IntroductionTopic.jsx"),
  "installation": () => import("./installation/InstallationTopic.jsx"),
  "jsx": () => import("./jsx/JsxTopic.jsx"),
  "rendering": () => import("./rendering/RenderingTopic.jsx"),
  "components": () => import("./components/ComponentsTopic.jsx"),
  "props": () => import("./props/PropsTopic.jsx"),
  "state": () => import("./state/StateTopic.jsx"),
  "conditional-rendering": () => import("./conditional-rendering/ConditionalRenderingTopic.jsx"),
  "lists": () => import("./lists/ListsTopic.jsx"),
  "keys": () => import("./keys/KeysTopic.jsx"),
  "forms": () => import("./forms/FormsTopic.jsx"),
  "events": () => import("./events/EventsTopic.jsx"),
  "hooks": () => import("./hooks/HooksTopic.jsx"),
  "use-state": () => import("./use-state/UseStateTopic.jsx"),
  "use-effect": () => import("./use-effect/UseEffectTopic.jsx"),
  "use-ref": () => import("./use-ref/UseRefTopic.jsx"),
  "use-memo": () => import("./use-memo/UseMemoTopic.jsx"),
  "use-callback": () => import("./use-callback/UseCallbackTopic.jsx"),
  "use-reducer": () => import("./use-reducer/UseReducerTopic.jsx"),
  "use-context": () => import("./use-context/UseContextTopic.jsx"),
  "custom-hooks": () => import("./custom-hooks/CustomHooksTopic.jsx"),
  "context-api": () => import("./context-api/ContextApiTopic.jsx"),
  "portals": () => import("./portals/PortalsTopic.jsx"),
  "error-boundaries": () => import("./error-boundaries/ErrorBoundariesTopic.jsx"),
  "lazy": () => import("./lazy/LazyTopic.jsx"),
  "suspense": () => import("./suspense/SuspenseTopic.jsx"),
  "performance": () => import("./performance/PerformanceTopic.jsx"),
  "memoization": () => import("./memoization/MemoizationTopic.jsx"),
  "optimization": () => import("./optimization/OptimizationTopic.jsx"),
  "routing": () => import("./routing/RoutingTopic.jsx"),
  "authentication": () => import("./authentication/AuthenticationTopic.jsx"),
  "crud": () => import("./crud/CrudTopic.jsx"),
  "file-upload": () => import("./file-upload/FileUploadTopic.jsx"),
  "pagination": () => import("./pagination/PaginationTopic.jsx"),
  "infinite-scroll": () => import("./infinite-scroll/InfiniteScrollTopic.jsx"),
  "search": () => import("./search/SearchTopic.jsx"),
  "filtering": () => import("./filtering/FilteringTopic.jsx"),
  "sorting": () => import("./sorting/SortingTopic.jsx"),
  "accessibility": () => import("./accessibility/AccessibilityTopic.jsx"),
  "animations": () => import("./animations/AnimationsTopic.jsx"),
  "testing": () => import("./testing/TestingTopic.jsx"),
  "deployment": () => import("./deployment/DeploymentTopic.jsx"),
  "react-internals": () => import("./react-internals/ReactInternalsTopic.jsx"),
  "fiber": () => import("./fiber/FiberTopic.jsx"),
  "reconciliation": () => import("./reconciliation/ReconciliationTopic.jsx"),
  "virtual-dom": () => import("./virtual-dom/VirtualDomTopic.jsx"),
  "server-components": () => import("./server-components/ServerComponentsTopic.jsx"),
};
