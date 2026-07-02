export const reactTopics = [
  {
    title: "React Introduction",
    description:
      "Understand the core idea behind React and why it changed frontend development.",
    summary:
      "React is a JavaScript library for building interactive user interfaces. It uses components, a virtual DOM, and a declarative approach to make UI updates predictable and efficient.",
    bullets: [
      "What is React?",
      "SPA (Single Page Applications)",
      "Virtual DOM",
      "JSX",
      "Babel",
      "Components",
      "Functional Components",
      "Rendering",
    ],
    code: `function Welcome() {\n  return <h1>Hello, React!</h1>;\n}\n\nexport default Welcome;`,
    practice:
      "Create a small component that renders your name and a greeting message.",
    reason:
      "Understanding the fundamentals helps you reason about how React apps are structured and rendered.",
    level: "Beginner",
  },
  {
    title: "JSX",
    description:
      "Learn how JSX blends JavaScript and markup in a familiar syntax.",
    summary:
      "JSX is a syntax extension that looks like HTML but compiles to JavaScript. It lets you describe the UI declaratively inside your components.",
    bullets: [
      "Expressions",
      "Attributes",
      "Fragments",
      "Conditional Rendering",
      "Loops",
      "Keys",
    ],
    code: `const title = 'Learning JSX';\n\nfunction Demo() {\n  return <h2>{title}</h2>;\n}`,
    practice: "Render a list of three skills using JSX and map().",
    reason:
      "JSX is the building block for almost every React component you will write.",
    level: "Beginner",
  },
  {
    title: "Components",
    description: "Break your UI into reusable building blocks.",
    summary:
      "Components are independent units of UI. They make your code easier to reason about and reuse across your app.",
    bullets: [
      "Functional Components",
      "Component Composition",
      "Reusable Components",
      "Props",
    ],
    code: `function Card({ title }) {\n  return <div>{title}</div>;\n}\n\nfunction App() {\n  return <Card title="React" />;\n}`,
    practice: "Create a reusable Button component and use it in two places.",
    reason:
      "Good component design keeps applications maintainable and scalable.",
    level: "Beginner",
  },
  {
    title: "Props",
    description: "Pass data and behavior into components.",
    summary:
      "Props allow parent components to provide data to child components. They are read-only and help make components flexible.",
    bullets: [
      "Passing Props",
      "Children Props",
      "Default Props",
      "Prop Validation",
    ],
    code: `function Greeting({ name }) {\n  return <p>Hello {name}</p>;\n}`,
    practice:
      "Build a profile card that receives name, role, and avatar props.",
    reason: "Props are the main way components communicate and stay reusable.",
    level: "Beginner",
  },
  {
    title: "State",
    description: "Manage changing data inside components.",
    summary:
      "State lets React components remember values over time and react when they change.",
    bullets: [
      "useState",
      "Updating State",
      "Object State",
      "Array State",
      "Functional Updates",
    ],
    code: `import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;\n}`,
    practice: "Create a counter that increments and decrements.",
    reason: "State is what makes interfaces feel interactive.",
    level: "Beginner",
  },
  {
    title: "Events",
    description: "Respond to user actions in React.",
    summary:
      "React events are similar to browser events, but they are normalized and work consistently across browsers.",
    bullets: ["Click Events", "Form Events", "Keyboard Events", "Mouse Events"],
    code: `function SearchBox() {\n  return <input placeholder="Search" onChange={(e) => console.log(e.target.value)} />;\n}`,
    practice: "Create a button that shows an alert when clicked.",
    reason: "Events connect user actions to your app logic.",
    level: "Beginner",
  },
  {
    title: "Conditional Rendering",
    description: "Show or hide UI based on conditions.",
    summary:
      "React can render different output depending on state or props using if, &&, ternary, or switch-like patterns.",
    bullets: ["if", "&&", "ternary", "switch"],
    code: `function LoginStatus({ isLoggedIn }) {\n  return isLoggedIn ? <p>Welcome back</p> : <p>Please login</p>;\n}`,
    practice:
      "Display a login button or logout button based on a boolean flag.",
    reason: "Conditional rendering is key for dynamic UI.",
    level: "Beginner",
  },
  {
    title: "Lists",
    description: "Render collections of items in React.",
    summary:
      "Lists are commonly rendered with map(), while keys help React preserve correct identity between renders.",
    bullets: ["map()", "Keys", "Nested Lists"],
    code: `const items = ['React', 'JS', 'HTML'];\n\nfunction ListDemo() {\n  return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>;\n}`,
    practice:
      "Render a list of todos and add a completed checkbox next to each item.",
    reason: "Lists are everywhere in real applications.",
    level: "Beginner",
  },
  {
    title: "Hooks",
    description: "Use built-in hooks to add logic to functional components.",
    summary:
      "Hooks let functional components manage state and side effects without writing class components.",
    bullets: [
      "useState",
      "useEffect",
      "useContext",
      "useRef",
      "useMemo",
      "useCallback",
      "Custom Hooks",
      "useReducer",
    ],
    code: `import { useEffect, useState } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = 'Count: ' + count;\n  }, [count]);\n\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}`,
    practice: "Track a timer and update the page title using useEffect.",
    reason: "Hooks are the foundation of modern React development.",
    level: "Intermediate",
  },
  {
    title: "Forms",
    description: "Capture and validate user input effectively.",
    summary:
      "Forms in React can be controlled or uncontrolled and are often validated before submission.",
    bullets: [
      "Controlled Components",
      "Uncontrolled Components",
      "Validation",
      "Form Submission",
    ],
    code: `function Form() {\n  const [name, setName] = useState('');\n  return <input value={name} onChange={(e) => setName(e.target.value)} />;\n}`,
    practice: "Build a form that validates email input before submission.",
    reason:
      "Forms are one of the most common interactive patterns in applications.",
    level: "Intermediate",
  },
  {
    title: "Routing",
    description: "Create navigation between pages in a React app.",
    summary:
      "React Router allows apps to switch views based on URL and build multi-page experiences.",
    bullets: [
      "BrowserRouter",
      "Routes",
      "Route",
      "Link",
      "NavLink",
      "Nested Routes",
      "Dynamic Routes",
      "Protected Routes",
    ],
    code: `import { Link } from 'react-router-dom';\n\n<Link to="/about">About</Link>`,
    practice: "Set up two routes and link between them.",
    reason: "Routing enables navigation and keeps the app organized.",
    level: "Intermediate",
  },
  {
    title: "Styling",
    description: "Style your React app with modern tools.",
    summary:
      "React supports plain CSS, CSS modules, Sass, Emotion, styled components, and Tailwind.",
    bullets: [
      "CSS",
      "CSS Modules",
      "Sass",
      "Styled Components",
      "Emotion",
      "Tailwind CSS",
    ],
    code: `const styles = { color: 'royalblue' };\n\n<div style={styles}>Styled</div>`,
    practice: "Apply a custom theme using Emotion or inline styles.",
    reason: "Styling choices affect maintainability and visual quality.",
    level: "Intermediate",
  },
  {
    title: "API Integration",
    description: "Connect React to remote data sources.",
    summary:
      "Fetch, Axios, and async operations let your app load, submit, and update remote data safely.",
    bullets: [
      "Fetch",
      "Axios",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "Headers",
      "Authentication",
      "Error Handling",
    ],
    code: `fetch('https://api.example.com/data').then((res) => res.json());`,
    practice: "Fetch a list of users and show them in a component.",
    reason: "Most modern apps depend on API-driven data.",
    level: "Intermediate",
  },
  {
    title: "Redux Basics",
    description: "Manage shared app state predictably.",
    summary:
      "Redux gives you a centralized store and predictable state change flow with actions, reducers, and dispatch.",
    bullets: ["Store", "State", "Actions", "Reducers", "Dispatch", "Subscribe"],
    code: `const store = createStore(reducer);\nstore.dispatch({ type: 'INCREMENT' });`,
    practice: "Create a counter slice and connect it to a component.",
    reason:
      "Redux is useful when state needs to be shared across many components.",
    level: "Advanced",
  },
  {
    title: "TanStack Query",
    description: "Handle server state and caching in React apps.",
    summary:
      "TanStack Query makes async server state easier to fetch, cache, update, and invalidate.",
    bullets: [
      "QueryClient",
      "useQuery",
      "Caching",
      "Refetching",
      "useMutation",
      "Infinite Query",
    ],
    code: `const { data, isLoading } = useQuery({ queryKey: ['todos'], queryFn: fetchTodos });`,
    practice: "Fetch and display a list of posts using useQuery.",
    reason: "It helps keep server state in sync with your UI.",
    level: "Advanced",
  },
];

export const javascriptTopics = [
  {
    title: "Variables",
    description: "Understand how let, const, and var work in JavaScript.",
    summary:
      "Variables store data and come with different scoping rules depending on the keyword used.",
    bullets: ["let", "const", "var", "Block Scope", "Hoisting"],
    code: `let name = 'Ada';\nconst age = 25;`,
    practice:
      "Create variables for a user profile and log them to the console.",
    reason: "Variables are the first building block of any JavaScript program.",
    level: "Beginner",
  },
  {
    title: "Functions",
    description: "Write reusable logic with functions and arrow functions.",
    summary: "Functions let you group logic and reuse it across your codebase.",
    bullets: ["Functions", "Arrow Functions", "Parameters", "Return Values"],
    code: `const add = (a, b) => a + b;`,
    practice: "Write a function that returns the square of a number.",
    reason: "Functions are essential for organizing and reusing code.",
    level: "Beginner",
  },
  {
    title: "Objects & Arrays",
    description: "Store and manipulate structured data.",
    summary:
      "Objects and arrays are used for grouping related values and representing collections.",
    bullets: ["Objects", "Arrays", "Array Methods", "Destructuring"],
    code: `const user = { name: 'Ava', age: 21 };\nconst names = ['A', 'B', 'C'];`,
    practice:
      "Create an array of products and print one property from each object.",
    reason: "These structures appear in nearly every JavaScript application.",
    level: "Beginner",
  },
  {
    title: "Closures",
    description: "Understand how functions retain access to their outer scope.",
    summary:
      "Closures occur when a function remembers the environment it was created in.",
    bullets: ["Scope", "Lexical Environment", "Encapsulation"],
    code: `function outer() {\n  const secret = 'hidden';\n  return () => secret;\n}`,
    practice: "Create a closure that returns a counter value.",
    reason:
      "Closures are powerful patterns in callbacks and functional programming.",
    level: "Intermediate",
  },
  {
    title: "Promises & Async/Await",
    description: "Handle asynchronous operations cleanly.",
    summary:
      "Promises and async/await let you manage asynchronous work in a readable way.",
    bullets: ["Promises", "async/await", "Fetch API", "Error Handling"],
    code: `async function getData() {\n  const res = await fetch('/api');\n  return res.json();\n}`,
    practice: "Fetch data asynchronously and log the result.",
    reason: "Asynchronous programming is required for real-world web apps.",
    level: "Intermediate",
  },
  {
    title: "Hoisting",
    description: "Learn how declarations are handled before execution.",
    summary:
      "Hoisting means some declarations are moved to the top of their scope during execution, which can affect how code behaves.",
    bullets: ["var hoisting", "function hoisting", "temporal dead zone"],
    code: `console.log(x);\nvar x = 5;`,
    practice:
      "Explain what happens with the sample code and rewrite it safely.",
    reason: "Hoisting is a common source of confusion for beginners.",
    level: "Intermediate",
  },
  {
    title: "this Keyword",
    description: "Master how this behaves in different contexts.",
    summary:
      "The value of this depends on how a function is called, making it one of the trickiest parts of JavaScript.",
    bullets: ["Global Context", "Object Methods", "Arrow Functions"],
    code: `const obj = {\n  name: 'Ava',\n  greet() { console.log(this.name); }\n};`,
    practice: "Compare the behavior of regular and arrow functions with this.",
    reason:
      "Understanding this prevents subtle bugs in object-oriented and event-driven code.",
    level: "Intermediate",
  },
  {
    title: "Array Methods",
    description: "Use modern array helpers with confidence.",
    summary:
      "Array methods such as map, filter, reduce, find, some, and every are fundamental for data transformation.",
    bullets: ["map", "filter", "reduce", "find", "some", "every"],
    code: `const numbers = [1, 2, 3];\nconst doubled = numbers.map((n) => n * 2);`,
    practice: "Use filter() to return only even numbers from an array.",
    reason: "These tools make code shorter and more expressive.",
    level: "Beginner",
  },
  {
    title: "Modules",
    description: "Organize code using import and export.",
    summary:
      "ES modules let you split your code into reusable files with clear boundaries.",
    bullets: ["import", "export", "default export", "named export"],
    code: `export const greet = () => 'Hello';`,
    practice:
      "Create one module that exports a helper and another that imports it.",
    reason: "Modules keep codebases maintainable and scalable.",
    level: "Intermediate",
  },
  {
    title: "Event Loop",
    description: "Understand how JavaScript handles async tasks.",
    summary:
      "The event loop manages the execution of synchronous and asynchronous code in the runtime.",
    bullets: ["Call Stack", "Callback Queue", "Microtasks", "Macrotasks"],
    code: `console.log('A');\nsetTimeout(() => console.log('B'), 0);\nconsole.log('C');`,
    practice:
      "Predict the output order of the sample code and test it in the console.",
    reason: "The event loop is central to asynchronous behavior.",
    level: "Advanced",
  },
];
