export { default as ComplexityTopic } from "./complexity/ComplexityTopic.jsx";
export { default as ArraysBasicsTopic } from "./arrays-basics/ArraysBasicsTopic.jsx";
export { default as StringsBasicsTopic } from "./strings-basics/StringsBasicsTopic.jsx";
export { default as HashMapsTopic } from "./hash-maps/HashMapsTopic.jsx";
export { default as TwoPointersTopic } from "./two-pointers/TwoPointersTopic.jsx";
export { default as SlidingWindowTopic } from "./sliding-window/SlidingWindowTopic.jsx";
export { default as StackQueueTopic } from "./stack-queue/StackQueueTopic.jsx";
export { default as RecursionTopic } from "./recursion/RecursionTopic.jsx";
export { default as LinkedListsTopic } from "./linked-lists/LinkedListsTopic.jsx";
export { default as TreesTopic } from "./trees/TreesTopic.jsx";
export { default as GraphsTopic } from "./graphs/GraphsTopic.jsx";
export { default as HeapsTopic } from "./heaps/HeapsTopic.jsx";
export { default as SortingTopic } from "./sorting/SortingTopic.jsx";
export { default as SearchingTopic } from "./searching/SearchingTopic.jsx";
export { default as DynamicProgrammingTopic } from "./dynamic-programming/DynamicProgrammingTopic.jsx";
export { default as GreedyTopic } from "./greedy/GreedyTopic.jsx";
export { default as BacktrackingTopic } from "./backtracking/BacktrackingTopic.jsx";
export { default as DebounceThrottleTopic } from "./debounce-throttle/DebounceThrottleTopic.jsx";
export { default as DomTraversalTopic } from "./dom-traversal/DomTraversalTopic.jsx";
export { default as MemoizationTopic } from "./memoization/MemoizationTopic.jsx";
export { default as LruCacheTopic } from "./lru-cache/LruCacheTopic.jsx";
export { default as TrieAutocompleteTopic } from "./trie-autocomplete/TrieAutocompleteTopic.jsx";
export { default as VirtualListTopic } from "./virtual-list/VirtualListTopic.jsx";
export { default as ProblemBankTopic } from "./problem-bank/ProblemBankTopic.jsx";

export const topicRegistry = {
  "complexity": () => import("./complexity/ComplexityTopic.jsx"),
  "arrays-basics": () => import("./arrays-basics/ArraysBasicsTopic.jsx"),
  "strings-basics": () => import("./strings-basics/StringsBasicsTopic.jsx"),
  "hash-maps": () => import("./hash-maps/HashMapsTopic.jsx"),
  "two-pointers": () => import("./two-pointers/TwoPointersTopic.jsx"),
  "sliding-window": () => import("./sliding-window/SlidingWindowTopic.jsx"),
  "stack-queue": () => import("./stack-queue/StackQueueTopic.jsx"),
  "recursion": () => import("./recursion/RecursionTopic.jsx"),
  "linked-lists": () => import("./linked-lists/LinkedListsTopic.jsx"),
  "trees": () => import("./trees/TreesTopic.jsx"),
  "graphs": () => import("./graphs/GraphsTopic.jsx"),
  "heaps": () => import("./heaps/HeapsTopic.jsx"),
  "sorting": () => import("./sorting/SortingTopic.jsx"),
  "searching": () => import("./searching/SearchingTopic.jsx"),
  "dynamic-programming": () => import("./dynamic-programming/DynamicProgrammingTopic.jsx"),
  "greedy": () => import("./greedy/GreedyTopic.jsx"),
  "backtracking": () => import("./backtracking/BacktrackingTopic.jsx"),
  "debounce-throttle": () => import("./debounce-throttle/DebounceThrottleTopic.jsx"),
  "dom-traversal": () => import("./dom-traversal/DomTraversalTopic.jsx"),
  "memoization": () => import("./memoization/MemoizationTopic.jsx"),
  "lru-cache": () => import("./lru-cache/LruCacheTopic.jsx"),
  "trie-autocomplete": () => import("./trie-autocomplete/TrieAutocompleteTopic.jsx"),
  "virtual-list": () => import("./virtual-list/VirtualListTopic.jsx"),
  "problem-bank": () => import("./problem-bank/ProblemBankTopic.jsx"),
};
