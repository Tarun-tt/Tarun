export { default as VariablesTopic } from "./variables/VariablesTopic.jsx";
export { default as DatatypesTopic } from "./datatypes/DatatypesTopic.jsx";
export { default as OperatorsTopic } from "./operators/OperatorsTopic.jsx";
export { default as FunctionsTopic } from "./functions/FunctionsTopic.jsx";
export { default as ArrowFunctionsTopic } from "./arrow-functions/ArrowFunctionsTopic.jsx";
export { default as ObjectsTopic } from "./objects/ObjectsTopic.jsx";
export { default as ArraysTopic } from "./arrays/ArraysTopic.jsx";
export { default as DestructuringTopic } from "./destructuring/DestructuringTopic.jsx";
export { default as SpreadTopic } from "./spread/SpreadTopic.jsx";
export { default as RestTopic } from "./rest/RestTopic.jsx";
export { default as ModulesTopic } from "./modules/ModulesTopic.jsx";
export { default as ClassesTopic } from "./classes/ClassesTopic.jsx";
export { default as ClosuresTopic } from "./closures/ClosuresTopic.jsx";
export { default as ScopeTopic } from "./scope/ScopeTopic.jsx";
export { default as HoistingTopic } from "./hoisting/HoistingTopic.jsx";
export { default as PrototypeTopic } from "./prototype/PrototypeTopic.jsx";
export { default as ExecutionContextTopic } from "./execution-context/ExecutionContextTopic.jsx";
export { default as MemoryTopic } from "./memory/MemoryTopic.jsx";
export { default as OopTopic } from "./oop/OopTopic.jsx";
export { default as PromisesTopic } from "./promises/PromisesTopic.jsx";
export { default as FetchTopic } from "./fetch/FetchTopic.jsx";
export { default as AsyncAwaitTopic } from "./async-await/AsyncAwaitTopic.jsx";
export { default as MapTopic } from "./map/MapTopic.jsx";
export { default as FilterTopic } from "./filter/FilterTopic.jsx";
export { default as ReduceTopic } from "./reduce/ReduceTopic.jsx";
export { default as FindTopic } from "./find/FindTopic.jsx";
export { default as SomeTopic } from "./some/SomeTopic.jsx";
export { default as EveryTopic } from "./every/EveryTopic.jsx";
export { default as DomTopic } from "./dom/DomTopic.jsx";
export { default as EventsTopic } from "./events/EventsTopic.jsx";
export { default as EventLoopTopic } from "./event-loop/EventLoopTopic.jsx";
export { default as GeneratorsTopic } from "./generators/GeneratorsTopic.jsx";
export { default as IteratorsTopic } from "./iterators/IteratorsTopic.jsx";
export { default as ErrorHandlingTopic } from "./error-handling/ErrorHandlingTopic.jsx";
export { default as AdvancedJsTopic } from "./advanced-js/AdvancedJsTopic.jsx";

export const topicRegistry = {
  "variables": () => import("./variables/VariablesTopic.jsx"),
  "datatypes": () => import("./datatypes/DatatypesTopic.jsx"),
  "operators": () => import("./operators/OperatorsTopic.jsx"),
  "functions": () => import("./functions/FunctionsTopic.jsx"),
  "arrow-functions": () => import("./arrow-functions/ArrowFunctionsTopic.jsx"),
  "objects": () => import("./objects/ObjectsTopic.jsx"),
  "arrays": () => import("./arrays/ArraysTopic.jsx"),
  "destructuring": () => import("./destructuring/DestructuringTopic.jsx"),
  "spread": () => import("./spread/SpreadTopic.jsx"),
  "rest": () => import("./rest/RestTopic.jsx"),
  "modules": () => import("./modules/ModulesTopic.jsx"),
  "classes": () => import("./classes/ClassesTopic.jsx"),
  "closures": () => import("./closures/ClosuresTopic.jsx"),
  "scope": () => import("./scope/ScopeTopic.jsx"),
  "hoisting": () => import("./hoisting/HoistingTopic.jsx"),
  "prototype": () => import("./prototype/PrototypeTopic.jsx"),
  "execution-context": () => import("./execution-context/ExecutionContextTopic.jsx"),
  "memory": () => import("./memory/MemoryTopic.jsx"),
  "oop": () => import("./oop/OopTopic.jsx"),
  "promises": () => import("./promises/PromisesTopic.jsx"),
  "fetch": () => import("./fetch/FetchTopic.jsx"),
  "async-await": () => import("./async-await/AsyncAwaitTopic.jsx"),
  "map": () => import("./map/MapTopic.jsx"),
  "filter": () => import("./filter/FilterTopic.jsx"),
  "reduce": () => import("./reduce/ReduceTopic.jsx"),
  "find": () => import("./find/FindTopic.jsx"),
  "some": () => import("./some/SomeTopic.jsx"),
  "every": () => import("./every/EveryTopic.jsx"),
  "dom": () => import("./dom/DomTopic.jsx"),
  "events": () => import("./events/EventsTopic.jsx"),
  "event-loop": () => import("./event-loop/EventLoopTopic.jsx"),
  "generators": () => import("./generators/GeneratorsTopic.jsx"),
  "iterators": () => import("./iterators/IteratorsTopic.jsx"),
  "error-handling": () => import("./error-handling/ErrorHandlingTopic.jsx"),
  "advanced-js": () => import("./advanced-js/AdvancedJsTopic.jsx"),
};
