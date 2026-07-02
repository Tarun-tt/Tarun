export const reactTopics = [
  {
    title: "React Introduction",
    description: "Understand what React is and why it powers modern UIs.",
    summary:
      "React is a JavaScript library for building user interfaces with reusable components and a declarative approach.",
    bullets: ["SPA", "Virtual DOM", "JSX", "Components", "Rendering"],
    examples: [
      {
        title: "Hello component",
        code: `function Welcome() {\n  return <h1>Hello React</h1>;\n}`,
        output: "Hello React",
        explanation: "A basic component returns JSX to render UI.",
      },
      {
        title: "Render inside app",
        code: `function App() {\n  return <Welcome />;\n}`,
        output: "Hello React",
        explanation: "Components can be nested and reused.",
      },
      {
        title: "Dynamic text",
        code: `const name = 'Ava';\nfunction Greeting() {\n  return <p>Hi {name}</p>;\n}`,
        output: "Hi Ava",
        explanation: "JSX can embed JavaScript expressions.",
      },
      {
        title: "List of cards",
        code: `const items = ['React', 'JS', 'CSS'];\nfunction ListDemo() {\n  return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>;\n}`,
        output: "React JS CSS",
        explanation: "React renders collections with map and keys.",
      },
      {
        title: "Simple layout",
        code: `function Layout() {\n  return (\n    <section>\n      <h2>Learn React</h2>\n      <p>Build interfaces faster.</p>\n    </section>\n  );\n}`,
        output: "Learn React Build interfaces faster.",
        explanation: "JSX can return multiple elements inside a fragment.",
      },
    ],
    practice:
      "Create a small component that welcomes a user and shows a short description.",
    reason:
      "React helps you structure UI as small reusable pieces that are easier to maintain.",
    level: "Beginner",
  },
  {
    title: "JSX",
    description: "Learn how JSX mixes markup and JavaScript.",
    summary:
      "JSX looks like HTML but compiles to React elements, making UI creation concise and readable.",
    bullets: [
      "Expressions",
      "Attributes",
      "Fragments",
      "Conditional Rendering",
      "Loops",
    ],
    examples: [
      {
        title: "Expression inside JSX",
        code: `const title = 'Learning';\nfunction Demo() {\n  return <h2>{title}</h2>;\n}`,
        output: "Learning",
        explanation: "Values from JavaScript appear in the rendered UI.",
      },
      {
        title: "ClassName attribute",
        code: `function Card() {\n  return <div className="card">Styled</div>;\n}`,
        output: "Styled",
        explanation: "Attributes use camelCase in React.",
      },
      {
        title: "Fragment example",
        code: `function FragmentDemo() {\n  return (\n    <>\n      <h3>One</h3>\n      <h3>Two</h3>\n    </>\n  );\n}`,
        output: "One Two",
        explanation:
          "Fragments let you group elements without adding extra DOM nodes.",
      },
      {
        title: "Conditional rendering",
        code: `function Status({ isReady }) {\n  return <p>{isReady ? 'Ready' : 'Wait'}</p>;\n}`,
        output: "Ready",
        explanation: "Conditionals can decide what appears on screen.",
      },
      {
        title: "Rendering a list",
        code: `const skills = ['HTML', 'CSS', 'React'];\nfunction Skills() {\n  return <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>;\n}`,
        output: "HTML CSS React",
        explanation: "Looping with map is common in JSX.",
      },
    ],
    practice: "Render a list of three hobbies using JSX and a map loop.",
    reason: "JSX makes UI code easier to read and maintain.",
    level: "Beginner",
  },
  {
    title: "State",
    description: "Manage values that change over time in your component.",
    summary:
      "useState lets components remember values and respond when they change.",
    bullets: [
      "useState",
      "Updating State",
      "Object State",
      "Array State",
      "Functional Updates",
    ],
    examples: [
      {
        title: "Counter",
        code: `import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;\n}`,
        output: "Count: 1",
        explanation: "State updates trigger re-rendering.",
      },
      {
        title: "Toggle button",
        code: `const [isOpen, setIsOpen] = useState(false);\n<button onClick={() => setIsOpen(!isOpen)}>Toggle</button>`,
        output: "Toggle",
        explanation: "Boolean state helps control UI visibility.",
      },
      {
        title: "Object state",
        code: `const [user, setUser] = useState({ name: 'Ava' });\nsetUser({ ...user, age: 21 });`,
        output: '{ name: "Ava", age: 21 }',
        explanation: "Use spread syntax to update object state safely.",
      },
      {
        title: "Array state",
        code: `const [items, setItems] = useState(['A']);\nsetItems([...items, 'B']);`,
        output: "A, B",
        explanation:
          "Arrays can be extended without mutating the original state.",
      },
      {
        title: "Functional update",
        code: `const [count, setCount] = useState(0);\nsetCount((prev) => prev + 1);`,
        output: "1",
        explanation:
          "Functional updates are useful when the next state depends on the previous one.",
      },
    ],
    practice: "Build a counter with increment and decrement buttons.",
    reason: "State is the foundation of interactivity in React.",
    level: "Beginner",
  },
  {
    title: "Hooks",
    description: "Use built-in hooks for state, effects, and side effects.",
    summary:
      "Hooks let functional components manage lifecycle behavior without class components.",
    bullets: ["useState", "useEffect", "useRef", "useMemo", "useCallback"],
    examples: [
      {
        title: "useEffect title update",
        code: `import { useEffect, useState } from 'react';\nfunction Example() {\n  const [count, setCount] = useState(0);\n  useEffect(() => { document.title = 'Count: ' + count; }, [count]);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}`,
        output: "Count: 1",
        explanation: "The effect runs after render when count changes.",
      },
      {
        title: "useRef focus input",
        code: `const inputRef = useRef(null);\nfunction FocusInput() {\n  return <input ref={inputRef} />;\n}`,
        output: "Input focused",
        explanation: "useRef keeps a reference to a DOM node.",
      },
      {
        title: "useMemo example",
        code: `const doubled = useMemo(() => value * 2, [value]);`,
        output: "Computed value",
        explanation: "useMemo can avoid recalculating expensive values.",
      },
      {
        title: "useCallback example",
        code: `const handleClick = useCallback(() => console.log('clicked'), []);`,
        output: "clicked",
        explanation: "useCallback memoizes functions for stable references.",
      },
      {
        title: "Custom hook",
        code: `function useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', handleResize);\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n  return width;\n}`,
        output: "Responsive width",
        explanation: "Custom hooks help reuse logic across components.",
      },
    ],
    practice: "Create a custom hook that tracks the browser window width.",
    reason: "Hooks make React components more powerful and reusable.",
    level: "Intermediate",
  },
  {
    title: "Forms",
    description: "Handle user input with controlled form fields.",
    summary:
      "Forms are built with state, events, and validation to create interactive experiences.",
    bullets: [
      "Controlled Components",
      "Validation",
      "Form Submission",
      "onChange",
    ],
    examples: [
      {
        title: "Text input",
        code: `const [name, setName] = useState('');\n<input value={name} onChange={(e) => setName(e.target.value)} />`,
        output: "Typed name",
        explanation: "The value is kept in component state.",
      },
      {
        title: "Submit handler",
        code: `function Form() {\n  const handleSubmit = (e) => { e.preventDefault(); alert('Submitted'); };\n  return <form onSubmit={handleSubmit}><button>Save</button></form>;\n}`,
        output: "Submitted",
        explanation: "A submit event can trigger validation or API calls.",
      },
      {
        title: "Validation",
        code: `const isValid = email.includes('@');`,
        output: "true/false",
        explanation: "Validation logic checks input before submission.",
      },
      {
        title: "Select field",
        code: `const [role, setRole] = useState('student');\n<select value={role} onChange={(e) => setRole(e.target.value)} />`,
        output: "selected value",
        explanation: "Controlled selects follow the same pattern as inputs.",
      },
      {
        title: "Checkbox state",
        code: `const [accepted, setAccepted] = useState(false);\n<input type="checkbox" checked={accepted} onChange={() => setAccepted(!accepted)} />`,
        output: "checked/unchecked",
        explanation: "Checkboxes are controlled with boolean state.",
      },
    ],
    practice:
      "Create a signup form that validates an email field before submit.",
    reason: "Forms connect input events to app state and user actions.",
    level: "Intermediate",
  },
  {
    title: "Routing",
    description: "Move between pages with React Router.",
    summary:
      "Routing connects URLs to components so apps can have multiple views.",
    bullets: ["Routes", "Route", "Link", "NavLink", "Nested Routes"],
    examples: [
      {
        title: "Link example",
        code: `import { Link } from 'react-router-dom';\n<Link to="/about">About</Link>`,
        output: "About link",
        explanation: "Links navigate between routes.",
      },
      {
        title: "Route setup",
        code: `<Routes><Route path="/" element={<Home />} /></Routes>`,
        output: "Home page",
        explanation: "Routes define which component renders for a URL.",
      },
      {
        title: "Dynamic route",
        code: `<Route path="/users/:id" element={<User />} />`,
        output: "User page",
        explanation: "Dynamic segments let you create parameterized pages.",
      },
      {
        title: "Nested route",
        code: `<Route path="/dashboard" element={<Dashboard />}><Route path="stats" element={<Stats />} /></Route>`,
        output: "Nested page",
        explanation: "Nested routes help organize complex screens.",
      },
      {
        title: "Protected route",
        code: `if (!isLoggedIn) return <Navigate to="/login" />;`,
        output: "Login redirect",
        explanation:
          "Protected routes block access when conditions are not met.",
      },
    ],
    practice: "Create a small app with Home, About, and Contact routes.",
    reason:
      "Routing makes single-page applications feel like real multi-page sites.",
    level: "Intermediate",
  },
];
