export const javascriptTopics = [
  {
    title: "Before React",
    description:
      "Build strong JavaScript fundamentals before moving into React.",
    summary:
      "JavaScript basics provide the foundation for everything you build in React and modern web apps.",
    bullets: [
      "Variables",
      "Data Types",
      "Operators",
      "Functions",
      "Arrow Functions",
      "Scope",
      "Closures",
      "Objects",
      "Arrays",
      "Array Methods",
    ],
    examples: [
      {
        title: "Variables",
        code: `let name = 'Ada';\nconst age = 25;`,
        output: "Ada 25",
        explanation:
          "let and const declare variables with different mutability rules.",
      },
      {
        title: "Functions",
        code: `function add(a, b) {\n  return a + b;\n}\nconsole.log(add(2, 3));`,
        output: "5",
        explanation: "Functions group reusable logic and return values.",
      },
      {
        title: "Arrow function",
        code: `const square = (n) => n * n;\nconsole.log(square(4));`,
        output: "16",
        explanation:
          "Arrow functions provide a shorter syntax for simple operations.",
      },
      {
        title: "Array methods",
        code: `const nums = [1, 2, 3];\nconsole.log(nums.map((n) => n * 2));`,
        output: "[2, 4, 6]",
        explanation: "Array methods simplify data transformation.",
      },
      {
        title: "Object example",
        code: `const user = { name: 'Ava', role: 'Student' };\nconsole.log(user.name);`,
        output: "Ava",
        explanation: "Objects store related properties together.",
      },
    ],
    practice:
      "Write a short script that declares a user object and logs its properties.",
    reason:
      "Strong JavaScript fundamentals make React concepts much easier to understand.",
    level: "Beginner",
  },
  {
    title: "Closures",
    description: "Understand how functions retain access to outer scope.",
    summary:
      "A closure occurs when an inner function remembers variables from its parent scope.",
    bullets: ["Scope", "Lexical Environment", "Encapsulation"],
    examples: [
      {
        title: "Counter closure",
        code: `function makeCounter() {\n  let count = 0;\n  return function () {\n    count += 1;\n    return count;\n  };\n}\nconst counter = makeCounter();\nconsole.log(counter());`,
        output: "1",
        explanation: "The returned function keeps access to count.",
      },
      {
        title: "Private helper",
        code: `function createGreeter(name) {\n  return () => 'Hello ' + name;\n}\nconsole.log(createGreeter('Mina')());`,
        output: "Hello Mina",
        explanation: "Closures can create private state-like behavior.",
      },
      {
        title: "Multiple counters",
        code: `const a = makeCounter();\nconst b = makeCounter();\nconsole.log(a(), b());`,
        output: "1 1",
        explanation: "Each closure keeps its own independent environment.",
      },
      {
        title: "Memoized value",
        code: `function memoize(fn) {\n  let cache = {};\n  return (x) => cache[x] || (cache[x] = fn(x));\n}`,
        output: "cached result",
        explanation: "Closures can preserve cached state between calls.",
      },
      {
        title: "Event handler",
        code: `for (var i = 0; i < 2; i++) {\n  setTimeout(() => console.log(i), 0);\n}`,
        output: "2 2",
        explanation: "Closures interact with scope, especially with var.",
      },
    ],
    practice:
      "Create a closure that returns a counter and test it several times.",
    reason:
      "Closures are important in callbacks, factories, and module patterns.",
    level: "Intermediate",
  },
  {
    title: "Promises & Async/Await",
    description: "Handle asynchronous tasks with modern JavaScript.",
    summary:
      "Promises and async/await let you manage async work without deeply nested callbacks.",
    bullets: ["Promises", "async/await", "Fetch API", "Error Handling"],
    examples: [
      {
        title: "Promise example",
        code: `const promise = new Promise((resolve) => resolve('done'));\npromise.then((value) => console.log(value));`,
        output: "done",
        explanation: "Promises resolve or reject asynchronously.",
      },
      {
        title: "Async/await",
        code: `async function load() {\n  return 'loaded';\n}\nload().then(console.log);`,
        output: "loaded",
        explanation: "async/await makes asynchronous code easier to read.",
      },
      {
        title: "Fetch data",
        code: `async function getData() {\n  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');\n  const data = await res.json();\n  console.log(data.title);\n}`,
        output: "Post title",
        explanation: "Fetch lets you request remote data.",
      },
      {
        title: "Try/catch handling",
        code: `async function safeFetch() {\n  try { await fetch('/bad-url'); } catch (error) { console.log(error.message); }\n}`,
        output: "Error message",
        explanation: "Errors can be handled gracefully with try/catch.",
      },
      {
        title: "Parallel promises",
        code: `Promise.all([Promise.resolve(1), Promise.resolve(2)]).then(console.log);`,
        output: "[1, 2]",
        explanation: "Promise.all runs several promises together.",
      },
    ],
    practice: "Fetch a public API and display its response title.",
    reason: "Async patterns are central to modern web applications.",
    level: "Intermediate",
  },
  {
    title: "Hoisting",
    description: "Learn how declarations are processed before execution.",
    summary:
      "Hoisting affects how variables and functions behave before the code runs.",
    bullets: ["var hoisting", "Function hoisting", "Temporal dead zone"],
    examples: [
      {
        title: "Function hoisting",
        code: `sayHi();\nfunction sayHi() { console.log('hi'); }`,
        output: "hi",
        explanation: "Function declarations are hoisted.",
      },
      {
        title: "var hoisting",
        code: `console.log(x);\nvar x = 5;`,
        output: "undefined",
        explanation: "var is hoisted and initialized as undefined.",
      },
      {
        title: "let hoisting",
        code: `console.log(y);\nlet y = 2;`,
        output: "ReferenceError",
        explanation:
          "let and const are in the temporal dead zone until initialization.",
      },
      {
        title: "Function expression",
        code: `const greet = function () { console.log('hello'); };\ngreet();`,
        output: "hello",
        explanation: "Expressions are not hoisted in the same way.",
      },
      {
        title: "Class hoisting",
        code: `new Example();\nclass Example {}`,
        output: "ReferenceError",
        explanation:
          "Class declarations are not hoisted like function declarations.",
      },
    ],
    practice:
      "Explain the difference between var, let, and function declarations in a short note.",
    reason: "Understanding hoisting helps avoid confusing runtime bugs.",
    level: "Intermediate",
  },
  {
    title: "this Keyword",
    description: "Understand how this behaves in different contexts.",
    summary:
      "The value of this depends on how a function is called, not where it is written.",
    bullets: ["Global Context", "Object Methods", "Arrow Functions"],
    examples: [
      {
        title: "Method call",
        code: `const obj = { name: 'Lina', greet() { console.log(this.name); } };\nobj.greet();`,
        output: "Lina",
        explanation: "this refers to the object that owns the method.",
      },
      {
        title: "Standalone function",
        code: `function show() { console.log(this); }\nshow();`,
        output: "global/window",
        explanation:
          "In strict mode, this becomes undefined in a plain function call.",
      },
      {
        title: "Arrow function",
        code: `const obj2 = { name: 'Ari', greet: () => console.log(this.name) };\nobj2.greet();`,
        output: "undefined",
        explanation: "Arrow functions do not bind their own this.",
      },
      {
        title: "Call method",
        code: `show.call({ name: 'Nora' });`,
        output: '{ name: "Nora" }',
        explanation: "call can explicitly set the context of this.",
      },
      {
        title: "Event handler",
        code: `button.addEventListener('click', function () { console.log(this); });`,
        output: "button element",
        explanation:
          "In event handlers, this often refers to the element that triggered the event.",
      },
    ],
    practice:
      "Compare the behavior of a normal function and an arrow function with this.",
    reason:
      "this is a common source of confusion in JavaScript methods and callbacks.",
    level: "Intermediate",
  },
  {
    title: "Array Methods",
    description: "Use built-in array helpers to process data efficiently.",
    summary:
      "Methods like map, filter, reduce, find, some, and every help transform and inspect arrays.",
    bullets: ["map", "filter", "reduce", "find", "some", "every"],
    examples: [
      {
        title: "map",
        code: `const nums = [1, 2, 3];\nconsole.log(nums.map((n) => n * 2));`,
        output: "[2, 4, 6]",
        explanation: "map transforms every item into a new value.",
      },
      {
        title: "filter",
        code: `console.log(nums.filter((n) => n > 1));`,
        output: "[2, 3]",
        explanation: "filter keeps items that match a condition.",
      },
      {
        title: "reduce",
        code: `console.log(nums.reduce((sum, n) => sum + n, 0));`,
        output: "6",
        explanation: "reduce combines values into one result.",
      },
      {
        title: "find",
        code: `const users = [{ id: 1, name: 'Ria' }, { id: 2, name: 'Noah' }];\nconsole.log(users.find((u) => u.id === 2).name);`,
        output: "Noah",
        explanation: "find returns the first matching element.",
      },
      {
        title: "some and every",
        code: `console.log(nums.some((n) => n > 2));\nconsole.log(nums.every((n) => n > 0));`,
        output: "true true",
        explanation:
          "some checks if any item matches while every checks if all do.",
      },
    ],
    practice:
      "Use filter and map to get only the names that start with the letter A.",
    reason: "Array methods are used in most real-world data handling.",
    level: "Beginner",
  },
  {
    title: "Modules",
    description: "Organize code into reusable modules with import and export.",
    summary:
      "ES modules let you split a codebase into smaller files with clearly defined responsibilities.",
    bullets: ["import", "export", "default export", "named export"],
    examples: [
      {
        title: "Named export",
        code: `export const greet = () => 'Hello';`,
        output: "Hello",
        explanation: "Named exports can be imported by name.",
      },
      {
        title: "Default export",
        code: `export default function App() { return <div />; }`,
        output: "Component",
        explanation: "Default exports are commonly used for main components.",
      },
      {
        title: "Import module",
        code: `import { greet } from './greet.js';\nconsole.log(greet());`,
        output: "Hello",
        explanation: "Imports connect your modules together.",
      },
      {
        title: "Import default",
        code: `import App from './App.js';`,
        output: "App component",
        explanation: "Default imports work for a single main export.",
      },
      {
        title: "Barrel export",
        code: `export { greet } from './greet.js';`,
        output: "Re-exported value",
        explanation: "Barrel files make imports cleaner in larger apps.",
      },
    ],
    practice:
      "Create one module that exports a helper and another that imports it.",
    reason: "Modules keep applications maintainable as they grow.",
    level: "Intermediate",
  },
];
