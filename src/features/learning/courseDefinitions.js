/** Complete learning path definitions for React Mastery */

export const courseDefinitions = [
  {
    id: "javascript",
    title: "JavaScript",
    description: "Master the language that powers modern web apps.",
    accent: "#f59e0b",
    hours: 22,
    difficulty: "Beginner to Advanced",
    categories: [
      {
        name: "Fundamentals",
        topics: [
          { id: "variables", title: "Variables" },
          { id: "datatypes", title: "Data Types" },
          { id: "operators", title: "Operators" },
          { id: "functions", title: "Functions" },
          { id: "arrow-functions", title: "Arrow Functions" },
          { id: "objects", title: "Objects" },
          { id: "arrays", title: "Arrays" },
        ],
      },
      {
        name: "ES6+ Features",
        topics: [
          { id: "destructuring", title: "Destructuring" },
          { id: "spread", title: "Spread" },
          { id: "rest", title: "Rest" },
          { id: "modules", title: "Modules" },
          { id: "classes", title: "Classes" },
        ],
      },
      {
        name: "Core Concepts",
        topics: [
          { id: "closures", title: "Closures" },
          { id: "scope", title: "Scope" },
          { id: "hoisting", title: "Hoisting" },
          { id: "prototype", title: "Prototype" },
          { id: "execution-context", title: "Execution Context" },
          { id: "memory", title: "Memory" },
          { id: "oop", title: "OOP" },
        ],
      },
      {
        name: "Async & APIs",
        topics: [
          { id: "promises", title: "Promises" },
          { id: "fetch", title: "Fetch" },
          { id: "async-await", title: "Async / Await" },
        ],
      },
      {
        name: "Array Methods",
        topics: [
          { id: "map", title: "Map" },
          { id: "filter", title: "Filter" },
          { id: "reduce", title: "Reduce" },
          { id: "find", title: "Find" },
          { id: "some", title: "Some" },
          { id: "every", title: "Every" },
        ],
      },
      {
        name: "Browser & Runtime",
        topics: [
          { id: "dom", title: "DOM" },
          { id: "events", title: "Events" },
          { id: "event-loop", title: "Event Loop" },
        ],
      },
      {
        name: "Advanced",
        topics: [
          { id: "generators", title: "Generators" },
          { id: "iterators", title: "Iterators" },
          { id: "error-handling", title: "Error Handling" },
          { id: "advanced-js", title: "Advanced JS" },
        ],
      },
    ],
  },
  {
    id: "react",
    title: "React",
    description: "Build interactive UIs with modern React patterns.",
    accent: "#2563eb",
    hours: 28,
    difficulty: "Beginner to Advanced",
    categories: [
      {
        name: "Fundamentals",
        topics: [
          { id: "introduction", title: "Introduction" },
          { id: "installation", title: "Installation" },
          { id: "jsx", title: "JSX" },
          { id: "rendering", title: "Rendering" },
          { id: "components", title: "Components" },
          { id: "props", title: "Props" },
          { id: "state", title: "State" },
          { id: "conditional-rendering", title: "Conditional Rendering" },
          { id: "lists", title: "Lists" },
          { id: "keys", title: "Keys" },
          { id: "forms", title: "Forms" },
          { id: "events", title: "Events" },
        ],
      },
      {
        name: "Hooks",
        topics: [
          { id: "hooks", title: "Hooks Overview" },
          { id: "use-state", title: "useState" },
          { id: "use-effect", title: "useEffect" },
          { id: "use-ref", title: "useRef" },
          { id: "use-memo", title: "useMemo" },
          { id: "use-callback", title: "useCallback" },
          { id: "use-reducer", title: "useReducer" },
          { id: "use-context", title: "useContext" },
          { id: "custom-hooks", title: "Custom Hooks" },
        ],
      },
      {
        name: "Advanced Patterns",
        topics: [
          { id: "context-api", title: "Context API" },
          { id: "portals", title: "Portals" },
          { id: "error-boundaries", title: "Error Boundaries" },
          { id: "lazy", title: "Lazy Loading" },
          { id: "suspense", title: "Suspense" },
        ],
      },
      {
        name: "Performance",
        topics: [
          { id: "performance", title: "Performance" },
          { id: "memoization", title: "Memoization" },
          { id: "optimization", title: "Optimization" },
        ],
      },
      {
        name: "Routing & Data",
        topics: [
          { id: "routing", title: "Routing" },
          { id: "authentication", title: "Authentication" },
          { id: "crud", title: "CRUD" },
          { id: "file-upload", title: "File Upload" },
          { id: "pagination", title: "Pagination" },
          { id: "infinite-scroll", title: "Infinite Scroll" },
          { id: "search", title: "Search" },
          { id: "filtering", title: "Filtering" },
          { id: "sorting", title: "Sorting" },
        ],
      },
      {
        name: "Production",
        topics: [
          { id: "accessibility", title: "Accessibility" },
          { id: "animations", title: "Animations" },
          { id: "testing", title: "Testing" },
          { id: "deployment", title: "Deployment" },
        ],
      },
      {
        name: "Internals",
        topics: [
          { id: "react-internals", title: "React Internals" },
          { id: "fiber", title: "Fiber" },
          { id: "reconciliation", title: "Reconciliation" },
          { id: "virtual-dom", title: "Virtual DOM" },
          { id: "server-components", title: "Server Components" },
        ],
      },
    ],
  },
  {
    id: "redux",
    title: "Redux Toolkit",
    description: "Manage shared state predictably with Redux Toolkit.",
    accent: "#7c3aed",
    hours: 18,
    difficulty: "Intermediate",
    categories: [
      {
        name: "Fundamentals",
        topics: [
          { id: "redux-basics", title: "Redux Basics" },
          { id: "store", title: "Store" },
          { id: "actions", title: "Actions" },
          { id: "reducers", title: "Reducers" },
          { id: "dispatch", title: "Dispatch" },
        ],
      },
      {
        name: "Toolkit",
        topics: [
          { id: "configure-store", title: "configureStore" },
          { id: "create-slice", title: "createSlice" },
          { id: "selectors", title: "Selectors" },
          { id: "middleware", title: "Middleware" },
          { id: "thunk", title: "Thunk" },
          { id: "create-async-thunk", title: "createAsyncThunk" },
          { id: "extra-reducers", title: "Extra Reducers" },
        ],
      },
      {
        name: "Advanced",
        topics: [
          { id: "rtk-query", title: "RTK Query Overview" },
          { id: "redux-devtools", title: "Redux DevTools" },
          { id: "redux-persist", title: "Redux Persist" },
          { id: "normalization", title: "Normalization" },
          { id: "best-practices", title: "Best Practices" },
          { id: "folder-structure", title: "Folder Structure" },
        ],
      },
    ],
  },
  {
    id: "tanstack",
    title: "TanStack Query",
    description: "Handle server state elegantly with TanStack Query.",
    accent: "#0f766e",
    hours: 14,
    difficulty: "Intermediate",
    categories: [
      {
        name: "Fundamentals",
        topics: [
          { id: "introduction", title: "Introduction" },
          { id: "server-state", title: "Server State" },
          { id: "client-state", title: "Client State" },
          { id: "query-client", title: "QueryClient" },
          { id: "provider", title: "Provider" },
          { id: "use-query", title: "useQuery" },
        ],
      },
      {
        name: "Caching & Keys",
        topics: [
          { id: "query-keys", title: "Query Keys" },
          { id: "caching", title: "Caching" },
          { id: "stale-time", title: "staleTime" },
          { id: "gc-time", title: "gcTime" },
          { id: "refetch", title: "Refetch" },
          { id: "window-focus", title: "Window Focus" },
          { id: "retry", title: "Retry" },
        ],
      },
      {
        name: "Patterns",
        topics: [
          { id: "dependent-queries", title: "Dependent Queries" },
          { id: "parallel-queries", title: "Parallel Queries" },
          { id: "infinite-query", title: "Infinite Query" },
          { id: "pagination", title: "Pagination" },
          { id: "mutations", title: "Mutations" },
          { id: "optimistic-updates", title: "Optimistic Updates" },
          { id: "prefetch", title: "Prefetch" },
        ],
      },
      {
        name: "Production",
        topics: [
          { id: "devtools", title: "DevTools" },
          { id: "error-handling", title: "Error Handling" },
          { id: "authentication", title: "Authentication" },
          { id: "offline-support", title: "Offline Support" },
          { id: "best-practices", title: "Best Practices" },
          { id: "folder-structure", title: "Folder Structure" },
        ],
      },
    ],
  },
  {
    id: "dsa",
    title: "DSA for Frontend",
    description: "100+ JavaScript DSA problems from beginner to expert for frontend interviews.",
    accent: "#dc2626",
    hours: 40,
    difficulty: "Beginner to Expert",
    categories: [
      {
        name: "Fundamentals",
        topics: [
          { id: "complexity", title: "Time & Space Complexity" },
          { id: "arrays-basics", title: "Arrays Basics" },
          { id: "strings-basics", title: "Strings Basics" },
          { id: "hash-maps", title: "Hash Maps" },
        ],
      },
      {
        name: "Core Patterns",
        topics: [
          { id: "two-pointers", title: "Two Pointers" },
          { id: "sliding-window", title: "Sliding Window" },
          { id: "stack-queue", title: "Stack & Queue" },
          { id: "recursion", title: "Recursion" },
        ],
      },
      {
        name: "Data Structures",
        topics: [
          { id: "linked-lists", title: "Linked Lists" },
          { id: "trees", title: "Trees & BST" },
          { id: "graphs", title: "Graphs BFS/DFS" },
          { id: "heaps", title: "Heaps & Priority Queue" },
        ],
      },
      {
        name: "Algorithms",
        topics: [
          { id: "sorting", title: "Sorting Algorithms" },
          { id: "searching", title: "Binary Search" },
          { id: "dynamic-programming", title: "Dynamic Programming" },
          { id: "greedy", title: "Greedy Algorithms" },
          { id: "backtracking", title: "Backtracking" },
        ],
      },
      {
        name: "Frontend DSA",
        topics: [
          { id: "debounce-throttle", title: "Debounce & Throttle" },
          { id: "dom-traversal", title: "DOM Traversal" },
          { id: "memoization", title: "Memoization" },
          { id: "lru-cache", title: "LRU Cache" },
          { id: "trie-autocomplete", title: "Trie Autocomplete" },
          { id: "virtual-list", title: "Virtual List" },
        ],
      },
      {
        name: "Problem Bank",
        topics: [
          { id: "problem-bank", title: "105+ Problems with Solutions" },
        ],
      },
    ],
  },
  {
    id: "ai",
    title: "AI Projects",
    description: "Learn AI from beginner to expert with examples, projects, and frontend integration.",
    accent: "#8b5cf6",
    hours: 35,
    difficulty: "Beginner to Expert",
    categories: [
      {
        name: "AI Fundamentals",
        topics: [
          { id: "intro-to-ai", title: "Introduction to AI" },
          { id: "ml-basics", title: "Machine Learning Basics" },
          { id: "data-preprocessing", title: "Data Preprocessing" },
          { id: "model-evaluation", title: "Model Evaluation" },
        ],
      },
      {
        name: "Deep Learning",
        topics: [
          { id: "neural-networks", title: "Neural Networks" },
          { id: "deep-learning", title: "Deep Learning" },
          { id: "cnn", title: "CNN — Computer Vision" },
          { id: "rnn-lstm", title: "RNN & LSTM" },
        ],
      },
      {
        name: "Modern AI",
        topics: [
          { id: "nlp-basics", title: "NLP Basics" },
          { id: "transformers", title: "Transformers" },
          { id: "llms", title: "Large Language Models" },
          { id: "prompt-engineering", title: "Prompt Engineering" },
          { id: "generative-ai", title: "Generative AI" },
        ],
      },
      {
        name: "AI in Frontend",
        topics: [
          { id: "tensorflow-js", title: "TensorFlow.js" },
          { id: "openai-api", title: "OpenAI API Integration" },
          { id: "ai-react", title: "AI in React Apps" },
          { id: "vector-embeddings", title: "Vector Embeddings" },
        ],
      },
      {
        name: "Projects",
        topics: [
          { id: "project-chatbot", title: "AI Chatbot Project" },
          { id: "project-sentiment", title: "Sentiment Analysis Project" },
          { id: "project-image-classifier", title: "Image Classifier Project" },
          { id: "project-recommendation", title: "Recommendation System" },
          { id: "project-code-assistant", title: "AI Code Assistant" },
          { id: "project-rag", title: "RAG Document Q&A" },
        ],
      },
    ],
  },
];
