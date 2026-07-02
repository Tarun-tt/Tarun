/**
 * Generates rich topic content with 5+ examples, quiz, practice, etc.
 */

const COURSE_CONTEXT = {
  javascript: {
    lang: "javascript",
    prefix: "js",
    playgroundTemplate: (topic) =>
      `// ${topic} in JavaScript\nconst result = "Hello from ${topic}";\nconsole.log(result);`,
  },
  react: {
    lang: "javascript",
    prefix: "react",
    playgroundTemplate: (topic) =>
      `function App() {\n  return <div>${topic} example</div>;\n}`,
  },
  redux: {
    lang: "javascript",
    prefix: "redux",
    playgroundTemplate: (topic) =>
      `import { createSlice } from '@reduxjs/toolkit';\n// ${topic} example\nconst slice = createSlice({\n  name: '${topic}',\n  initialState: {},\n  reducers: {},\n});`,
  },
  tanstack: {
    lang: "javascript",
    prefix: "tanstack",
    playgroundTemplate: (topic) =>
      `import { useQuery } from '@tanstack/react-query';\n// ${topic} example\nconst { data } = useQuery({ queryKey: ['${topic}'], queryFn: () => [] });`,
  },
  dsa: {
    lang: "javascript",
    prefix: "dsa",
    playgroundTemplate: (topic) =>
      `// ${topic} DSA problem\nfunction solve(input) {\n  // Tarun Tiwari's solution\n  return input;\n}`,
  },
  ai: {
    lang: "javascript",
    prefix: "ai",
    playgroundTemplate: (topic) =>
      `// ${topic} AI example\nasync function predict(input) {\n  const res = await fetch('/api/ai', { method: 'POST', body: JSON.stringify({ input }) });\n  return res.json();\n}`,
  },
};

function slugToTitle(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function buildExamples(courseId, topicId, title) {
  const ctx = COURSE_CONTEXT[courseId];
  const base = title;

  if (courseId === "javascript") {
    return [
      {
        title: `Basic ${base}`,
        code: `// Example 1: Basic usage\nconst value = "${topicId}";\nconsole.log(value);`,
        output: topicId,
        explanation: `Introduces the core idea behind ${base.toLowerCase()}.`,
      },
      {
        title: `Practical ${base}`,
        code: `// Example 2: Real-world pattern\nfunction demo() {\n  return "${base} works";\n}\nconsole.log(demo());`,
        output: `${base} works`,
        explanation: `Shows how ${base.toLowerCase()} appears in everyday code.`,
      },
      {
        title: `With Variables`,
        code: `// Example 3: Combined with variables\nconst name = "React Mastery";\nconst msg = \`Learning \${name} - ${base}\`;\nconsole.log(msg);`,
        output: `Learning React Mastery - ${base}`,
        explanation: `Combines ${base.toLowerCase()} with other JS fundamentals.`,
      },
      {
        title: `Data Transformation`,
        code: `// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);`,
        output: "[2, 4, 6]",
        explanation: `Demonstrates practical data handling related to ${base.toLowerCase()}.`,
      },
      {
        title: `Error-Safe Pattern`,
        code: `// Example 5: Safe usage\ntry {\n  const data = { topic: "${topicId}" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}`,
        output: topicId,
        explanation: `Shows defensive coding when working with ${base.toLowerCase()}.`,
      },
    ];
  }

  if (courseId === "react") {
    return [
      {
        title: `Simple ${base}`,
        code: `function ${toPascal(topicId)}Demo() {\n  return <div>${base} Component</div>;\n}`,
        output: `${base} Component`,
        explanation: `A minimal component demonstrating ${base.toLowerCase()}.`,
      },
      {
        title: `With Props`,
        code: `function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title="${base}" />`,
        output: base,
        explanation: `Passes data via props in a ${base.toLowerCase()} context.`,
      },
      {
        title: `With State`,
        code: `import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}`,
        output: "0 (clickable)",
        explanation: `Interactive example related to ${base.toLowerCase()}.`,
      },
      {
        title: `List Rendering`,
        code: `const items = ['${base}', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}`,
        output: `${base} React JS`,
        explanation: `Renders collections — common with ${base.toLowerCase()}.`,
      },
      {
        title: `Composition`,
        code: `function Wrapper({ children }) {\n  return <section className="card">{children}</section>;\n}\n// <Wrapper><p>${base}</p></Wrapper>`,
        output: base,
        explanation: `Component composition pattern for ${base.toLowerCase()}.`,
      },
    ];
  }

  return [
    {
      title: `Getting Started with ${base}`,
      code: `// ${base} - Example 1\nconst config = { feature: "${topicId}" };\nconsole.log(config);`,
      output: `{ feature: "${topicId}" }`,
      explanation: `Foundation setup for ${base.toLowerCase()}.`,
    },
    {
      title: `Common Pattern`,
      code: `// ${base} - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);`,
      output: "true",
      explanation: `Typical state shape when using ${base.toLowerCase()}.`,
    },
    {
      title: `Async Flow`,
      code: `// ${base} - Example 3\nasync function load() {\n  return { topic: "${topicId}" };\n}`,
      output: `{ topic: "${topicId}" }`,
      explanation: `Async patterns with ${base.toLowerCase()}.`,
    },
    {
      title: `Error Handling`,
      code: `// ${base} - Example 4\ntry {\n  throw new Error("Demo error");\n} catch (e) {\n  console.log(e.message);\n}`,
      output: "Demo error",
      explanation: `Handle failures gracefully in ${base.toLowerCase()}.`,
    },
    {
      title: `Best Practice`,
      code: `// ${base} - Example 5\nconst NAMESPACE = "${ctx.prefix}/${topicId}";\nconsole.log(NAMESPACE);`,
      output: `${ctx.prefix}/${topicId}`,
      explanation: `Organized naming for ${base.toLowerCase()}.`,
    },
  ];
}

function toPascal(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

function buildQuiz(title) {
  const t = title.toLowerCase();
  return [
    {
      question: `What is the primary purpose of ${t}?`,
      options: [
        "To style components",
        `To work with ${t} concepts effectively`,
        "To replace JavaScript",
        "To deploy apps",
      ],
      answer: `To work with ${t} concepts effectively`,
      explanation: `${title} is a core concept you must understand deeply.`,
    },
    {
      question: `Which is a best practice for ${t}?`,
      options: [
        "Ignore documentation",
        "Write clear, predictable code",
        "Avoid testing",
        "Use global variables everywhere",
      ],
      answer: "Write clear, predictable code",
      explanation: "Clean code makes debugging and scaling easier.",
    },
    {
      question: `When should you use ${t}?`,
      options: [
        "Never in production",
        "When the problem calls for it",
        "Only in class components",
        "Only on weekends",
      ],
      answer: "When the problem calls for it",
      explanation: "Use the right tool for the right job.",
    },
    {
      question: `What is a common mistake with ${t}?`,
      options: [
        "Reading documentation",
        "Overcomplicating simple cases",
        "Using TypeScript",
        "Writing tests",
      ],
      answer: "Overcomplicating simple cases",
      explanation: "Start simple, then add complexity when needed.",
    },
    {
      question: `How does ${t} help in real projects?`,
      options: [
        "It doesn't",
        "Improves maintainability and clarity",
        "Slows development",
        "Replaces the browser",
      ],
      answer: "Improves maintainability and clarity",
      explanation: "Good patterns scale with your application.",
    },
  ];
}

function buildPractice(title) {
  return [
    {
      difficulty: "Easy",
      title: `Basic ${title}`,
      description: `Write a simple example demonstrating ${title.toLowerCase()}.`,
      starterCode: `// Your code here`,
    },
    {
      difficulty: "Easy",
      title: `${title} with Data`,
      description: `Use sample data to practice ${title.toLowerCase()}.`,
      starterCode: `const data = [];\n// Implement solution`,
    },
    {
      difficulty: "Easy",
      title: `${title} Output`,
      description: `Log the expected output for a ${title.toLowerCase()} exercise.`,
      starterCode: `console.log("TODO");`,
    },
    {
      difficulty: "Medium",
      title: `Combine ${title}`,
      description: `Combine ${title.toLowerCase()} with another concept.`,
      starterCode: `// Medium challenge`,
    },
    {
      difficulty: "Medium",
      title: `Refactor ${title}`,
      description: `Refactor given code to use ${title.toLowerCase()} properly.`,
      starterCode: `// Refactor this`,
    },
    {
      difficulty: "Medium",
      title: `Debug ${title}`,
      description: `Fix the bug related to ${title.toLowerCase()}.`,
      starterCode: `// Buggy code`,
    },
    {
      difficulty: "Hard",
      title: `Build with ${title}`,
      description: `Build a small feature using ${title.toLowerCase()}.`,
      starterCode: `// Hard challenge`,
    },
    {
      difficulty: "Hard",
      title: `${title} Architecture`,
      description: `Design a scalable pattern with ${title.toLowerCase()}.`,
      starterCode: `// Architecture exercise`,
    },
  ];
}

export function createTopicContent(courseId, topicId, title) {
  const ctx = COURSE_CONTEXT[courseId];
  const displayTitle = title || slugToTitle(topicId);
  const t = displayTitle.toLowerCase();

  return {
    id: topicId,
    title: displayTitle,
    definition: `${displayTitle} is a fundamental concept in ${courseId === "javascript" ? "JavaScript" : courseId === "react" ? "React" : courseId === "redux" ? "Redux Toolkit" : "TanStack Query"} that every developer should master.`,
    deepExplanation: `Understanding ${t} deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.`,
    syntax: getSyntax(courseId, topicId, displayTitle),
    visualDiagram: getDiagram(courseId, displayTitle),
    analogy: getAnalogy(displayTitle),
    examples: buildExamples(courseId, topicId, displayTitle),
    interviewQuestions: [
      {
        question: `Explain ${t} to a beginner.`,
        answer: `${displayTitle} is a core building block. Start with what problem it solves, then show a minimal example.`,
      },
      {
        question: `When would you NOT use ${t}?`,
        answer: `When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem.`,
      },
      {
        question: `What are common pitfalls with ${t}?`,
        answer: `Overuse, misunderstanding scope/lifecycle, and not following established patterns.`,
      },
      {
        question: `How does ${t} compare to alternatives?`,
        answer: `Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs.`,
      },
      {
        question: `Give a real-world use case for ${t}.`,
        answer: `Production apps use ${t} for user-facing features, data flow, and keeping code organized at scale.`,
      },
    ],
    mistakes: [
      {
        wrong: `// Wrong: misusing ${t}\nvar x = undefined;\nconsole.log(x.property);`,
        correct: `// Correct: safe access\nconst x = { property: "value" };\nconsole.log(x?.property ?? "default");`,
        explanation: `Always validate data and use safe access patterns with ${t}.`,
      },
      {
        wrong: `// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }`,
        correct: `// Correct: simple and clear\nfunction focused() {\n  return "single responsibility";\n}`,
        explanation: "Keep implementations focused and readable.",
      },
    ],
    bestPractices: [
      `Understand ${t} before using it in production.`,
      "Start with minimal examples, then scale up.",
      "Write tests for critical paths.",
      "Follow official documentation and community patterns.",
      "Refactor when complexity grows.",
    ],
    assignment: {
      title: `Build a ${displayTitle} Feature`,
      description: `Create a real-world component or module that demonstrates ${t} in action.`,
      checklist: [
        `Implement core ${t} functionality`,
        "Handle edge cases",
        "Add clear comments",
        "Test with sample data",
        "Document your approach",
      ],
    },
    quiz: buildQuiz(displayTitle),
    cheatSheet: [
      `${displayTitle}: core concept`,
      "Syntax: see Syntax section",
      "Use when: problem requires this pattern",
      "Avoid: over-engineering simple cases",
      "Pro tip: read docs, practice daily",
    ],
    summary: `You learned what ${t} is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.`,
    practiceQuestions: buildPractice(displayTitle),
    playground: {
      starterCode: ctx.playgroundTemplate(displayTitle),
      solution: ctx.playgroundTemplate(displayTitle) + "\n// Solution: see examples above",
      hint: `Try modifying the ${t} example step by step. Check the 5-minute examples for guidance.`,
    },
    miniChallenge: {
      title: `${displayTitle} Mini Challenge`,
      requirements: [
        `Demonstrate ${t} in a small app`,
        "Use meaningful variable names",
        "Show expected output",
      ],
    },
  };
}

function getSyntax(courseId, topicId, title) {
  const syntaxMap = {
    javascript: {
      variables: "let name = 'Ava';\nconst age = 25;\nvar legacy = true; // avoid",
      functions:
        "function greet(name) {\n  return `Hello, ${name}`;\n}\n\nconst add = (a, b) => a + b;",
      closures:
        "function outer() {\n  const secret = 'hidden';\n  return () => secret;\n}",
      promises:
        "fetch('/api')\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));",
      "async-await":
        "async function load() {\n  const res = await fetch('/api');\n  return res.json();\n}",
    },
    react: {
      props:
        "function Card({ title, children }) {\n  return <div><h2>{title}</h2>{children}</div>;\n}",
      state:
        "const [count, setCount] = useState(0);\nsetCount(c => c + 1);",
      jsx: "const element = <h1>Hello, {name}</h1>;",
      "use-state":
        "const [value, setValue] = useState(initialValue);",
      "use-effect":
        "useEffect(() => {\n  // side effect\n  return () => cleanup();\n}, [deps]);",
    },
    redux: {
      "create-slice":
        "const slice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    increment: (state) => { state.value += 1; },\n  },\n});",
      "configure-store":
        "const store = configureStore({\n  reducer: { counter: counterReducer },\n});",
    },
    tanstack: {
      "use-query":
        "const { data, isLoading, error } = useQuery({\n  queryKey: ['todos'],\n  queryFn: fetchTodos,\n});",
      mutations:
        "const mutation = useMutation({\n  mutationFn: createTodo,\n  onSuccess: () => queryClient.invalidateQueries(['todos']),\n});",
    },
  };

  return (
    syntaxMap[courseId]?.[topicId] ||
    `// ${title} syntax\n// See examples below for detailed usage`
  );
}

function getDiagram(courseId, title) {
  const diagrams = {
    javascript: `┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Source    │ ──► │  ${title.padEnd(10)} │ ──► │   Output    │
│   Code      │     │  Processing  │     │   Result    │
└─────────────┘     └──────────────┘     └─────────────┘`,
    react: `┌──────────┐  props   ┌──────────────┐
│  Parent  │ ───────► │    ${title.padEnd(10)}   │
│ Component│ ◄─────── │   Component  │
└──────────┘ children └──────────────┘`,
    redux: `┌────────┐  dispatch  ┌─────────┐
│   UI   │ ──────────► │  Store  │
│        │ ◄────────── │ ${title.slice(0, 8).padEnd(8)} │
└────────┘  subscribe  └─────────┘`,
    tanstack: `┌──────────┐  query   ┌─────────────┐
│ Component│ ───────► │ Query Cache │
│          │ ◄─────── │  ${title.slice(0, 8).padEnd(8)}  │
└──────────┘  data    └─────────────┘`,
    dsa: `┌──────────┐  solve   ┌─────────────┐
│  Input   │ ───────► │  Algorithm  │
│  Array   │ ◄─────── │  ${title.slice(0, 8).padEnd(8)}  │
└──────────┘  output  └─────────────┘`,
    ai: `┌──────────┐  train   ┌─────────────┐
│   Data   │ ───────► │    Model    │
│          │ ◄─────── │  ${title.slice(0, 8).padEnd(8)}  │
└──────────┘ predict  └─────────────┘`,
  };
  return diagrams[courseId] || diagrams.javascript;
}

function getAnalogy(title) {
  const analogies = [
    `${title} is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.`,
    `Think of ${title} as a toolbox — you pick the right tool for each job instead of using one hammer for everything.`,
    `${title} works like a traffic controller — it directs data and actions so everything flows smoothly.`,
  ];
  return analogies[title.length % analogies.length];
}
