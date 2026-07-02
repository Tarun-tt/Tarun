export const courseCatalog = [
  {
    id: "javascript",
    title: "JavaScript",
    description: "Master the language that powers modern web apps.",
    accent: "#f59e0b",
    hours: 22,
    topics: 87,
    difficulty: "Beginner to Advanced",
    progress: 0,
    lessons: [
      { id: "variables", title: "Variables", category: "Fundamentals" },
      { id: "functions", title: "Functions", category: "Fundamentals" },
      { id: "arrays", title: "Arrays", category: "Fundamentals" },
      { id: "objects", title: "Objects", category: "Fundamentals" },
      { id: "closures", title: "Closures", category: "Intermediate" },
      { id: "promises", title: "Promises", category: "Intermediate" },
      { id: "async-await", title: "Async / Await", category: "Intermediate" },
      { id: "dom", title: "DOM", category: "Intermediate" },
      { id: "event-loop", title: "Event Loop", category: "Advanced" },
      { id: "modules", title: "Modules", category: "Advanced" },
    ],
  },
  {
    id: "react",
    title: "React",
    description: "Build interactive UIs with modern React patterns.",
    accent: "#2563eb",
    hours: 28,
    topics: 87,
    difficulty: "Beginner to Advanced",
    progress: 0,
    lessons: [
      { id: "intro", title: "Introduction", category: "Fundamentals" },
      { id: "jsx", title: "JSX", category: "Fundamentals" },
      { id: "components", title: "Components", category: "Fundamentals" },
      { id: "props", title: "Props", category: "Fundamentals" },
      { id: "state", title: "State", category: "Fundamentals" },
      { id: "hooks", title: "Hooks", category: "Intermediate" },
      { id: "forms", title: "Forms", category: "Intermediate" },
      { id: "routing", title: "Routing", category: "Intermediate" },
      { id: "performance", title: "Performance", category: "Advanced" },
      { id: "testing", title: "Testing", category: "Advanced" },
    ],
  },
  {
    id: "redux",
    title: "Redux Toolkit",
    description: "Manage shared state predictably with Redux Toolkit.",
    accent: "#7c3aed",
    hours: 18,
    topics: 87,
    difficulty: "Intermediate",
    progress: 0,
    lessons: [
      { id: "redux-basics", title: "Redux Basics", category: "Fundamentals" },
      {
        id: "configure-store",
        title: "configureStore",
        category: "Fundamentals",
      },
      { id: "create-slice", title: "createSlice", category: "Intermediate" },
      {
        id: "create-async-thunk",
        title: "createAsyncThunk",
        category: "Intermediate",
      },
      { id: "selectors", title: "Selectors", category: "Advanced" },
      { id: "middleware", title: "Middleware", category: "Advanced" },
    ],
  },
  {
    id: "tanstack",
    title: "TanStack Query",
    description: "Handle server state elegantly with TanStack Query.",
    accent: "#0f766e",
    hours: 14,
    topics: 87,
    difficulty: "Intermediate",
    progress: 0,
    lessons: [
      { id: "query-client", title: "QueryClient", category: "Fundamentals" },
      { id: "use-query", title: "useQuery", category: "Fundamentals" },
      { id: "query-keys", title: "Query Keys", category: "Intermediate" },
      { id: "mutations", title: "Mutations", category: "Intermediate" },
      { id: "caching", title: "Caching", category: "Advanced" },
      { id: "devtools", title: "DevTools", category: "Advanced" },
    ],
  },
];

export const topicContent = {
  react: {
    props: {
      title: "Props",
      definition:
        "Props let parent components pass data and behavior to child components.",
      deepExplanation:
        "Props are read-only inputs that make components reusable. They help you configure a component without changing its internal logic.",
      syntax: `function Greeting(props) {\n  return <h1>Hello {props.name}</h1>;\n}\n\nfunction App() {\n  return <Greeting name="Ava" />;\n}`,
      visualDiagram: "Parent -> Props -> Child Component",
      analogy: "Props are like arguments passed into a function.",
      examples: [
        {
          title: "Simple Props",
          code: `function Card({ name }) { return <div>{name}</div>; }`,
          output: "Ava",
          explanation: "A child receives data from its parent.",
        },
        {
          title: "Passing Object",
          code: `const user = { name: 'Ava', role: 'Developer' };\nfunction Profile({ user }) { return <p>{user.name}</p>; }`,
          output: "Ava",
          explanation: "Objects can be passed as props.",
        },
        {
          title: "Passing Function",
          code: `function Button({ onClick }) { return <button onClick={onClick}>Click</button>; }`,
          output: "Button rendered",
          explanation: "Functions can also flow through props.",
        },
        {
          title: "Children Props",
          code: `function Wrapper({ children }) { return <div>{children}</div>; }`,
          output: "Wrapped content",
          explanation: "Children are a special prop for nested content.",
        },
      ],
      interviewQuestions: [
        "What is the difference between props and state?",
        "Can props be changed inside a child component?",
        "What are default props?",
      ],
      mistakes: [
        {
          wrong: `function Profile(props) { props.name = 'John'; }`,
          correct: `function Profile({ name }) { return <div>{name}</div>; }`,
          explanation: "Props should be treated as read-only.",
        },
      ],
      bestPractices: [
        "Use descriptive prop names.",
        "Keep props simple and predictable.",
        "Prefer destructuring.",
      ],
      assignment:
        "Build a profile card component that accepts name, age, company, and skills.",
      quiz: [
        {
          question: "Props are...",
          options: [
            "Mutable",
            "Read-only inputs",
            "Only for classes",
            "Only for hooks",
          ],
          answer: "Read-only inputs",
        },
        {
          question: "What is the common way to receive props?",
          options: ["this.props", "props()", "destructuring", "useProps()"],
          answer: "destructuring",
        },
      ],
      cheatSheet: [
        "Props flow from parent to child.",
        "Props are read-only.",
        "Use them for configuration.",
      ],
      summary:
        "Props allow components to receive and display data from parents.",
    },
  },
  javascript: {
    variables: {
      title: "Variables",
      definition:
        "Variables store values that your program can use and change.",
      deepExplanation:
        "JavaScript gives you let, const, and var. let and const are block-scoped, while var is function-scoped and can behave differently.",
      syntax: `let name = 'Ava';\nconst age = 21;\nvar score = 100;`,
      visualDiagram: "Memory -> Variable Name -> Value",
      analogy: "Variables are like labeled boxes for data.",
      examples: [
        {
          title: "Let example",
          code: `let count = 1; count = 2;`,
          output: "2",
          explanation: "let allows reassignment.",
        },
        {
          title: "Const example",
          code: `const pi = 3.14;`,
          output: "3.14",
          explanation: "const prevents reassignment.",
        },
      ],
      interviewQuestions: [
        "What is the difference between let and const?",
        "What is hoisting?",
        "What is block scope?",
      ],
      mistakes: [
        {
          wrong: `if (true) { var x = 1; } console.log(x);`,
          correct: `if (true) { let x = 1; }`,
          explanation: "var leaks outside the block.",
        },
      ],
      bestPractices: [
        "Prefer const by default.",
        "Use let only when reassignment is needed.",
        "Avoid var.",
      ],
      assignment:
        "Create a small script that stores and logs user profile data.",
      quiz: [
        {
          question: "Which keyword is block scoped?",
          options: ["var", "let", "function", "none"],
          answer: "let",
        },
      ],
      cheatSheet: [
        "let can change.",
        "const cannot change.",
        "var has function scope.",
      ],
      summary: "Variables help you store and manage data in scripts.",
    },
  },
};
