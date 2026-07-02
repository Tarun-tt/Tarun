// Auto-generated topic: useReducer
// Course: react

export default {
  "id": "use-reducer",
  "title": "useReducer",
  "definition": "useReducer is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding usereducer deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// useReducer syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    useReducer   │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Think of useReducer as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Simple useReducer",
      "code": "function UseReducerDemo() {\n  return <div>useReducer Component</div>;\n}",
      "output": "useReducer Component",
      "explanation": "A minimal component demonstrating usereducer."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"useReducer\" />",
      "output": "useReducer",
      "explanation": "Passes data via props in a usereducer context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to usereducer."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['useReducer', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "useReducer React JS",
      "explanation": "Renders collections — common with usereducer."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>useReducer</p></Wrapper>",
      "output": "useReducer",
      "explanation": "Component composition pattern for usereducer."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain usereducer to a beginner.",
      "answer": "useReducer is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use usereducer?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with usereducer?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does usereducer compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for usereducer.",
      "answer": "Production apps use usereducer for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing usereducer\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with usereducer."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand usereducer before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a useReducer Feature",
    "description": "Create a real-world component or module that demonstrates usereducer in action.",
    "checklist": [
      "Implement core usereducer functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of usereducer?",
      "options": [
        "To style components",
        "To work with usereducer concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with usereducer concepts effectively",
      "explanation": "useReducer is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for usereducer?",
      "options": [
        "Ignore documentation",
        "Write clear, predictable code",
        "Avoid testing",
        "Use global variables everywhere"
      ],
      "answer": "Write clear, predictable code",
      "explanation": "Clean code makes debugging and scaling easier."
    },
    {
      "question": "When should you use usereducer?",
      "options": [
        "Never in production",
        "When the problem calls for it",
        "Only in class components",
        "Only on weekends"
      ],
      "answer": "When the problem calls for it",
      "explanation": "Use the right tool for the right job."
    },
    {
      "question": "What is a common mistake with usereducer?",
      "options": [
        "Reading documentation",
        "Overcomplicating simple cases",
        "Using TypeScript",
        "Writing tests"
      ],
      "answer": "Overcomplicating simple cases",
      "explanation": "Start simple, then add complexity when needed."
    },
    {
      "question": "How does usereducer help in real projects?",
      "options": [
        "It doesn't",
        "Improves maintainability and clarity",
        "Slows development",
        "Replaces the browser"
      ],
      "answer": "Improves maintainability and clarity",
      "explanation": "Good patterns scale with your application."
    }
  ],
  "cheatSheet": [
    "useReducer: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what usereducer is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic useReducer",
      "description": "Write a simple example demonstrating usereducer.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "useReducer with Data",
      "description": "Use sample data to practice usereducer.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "useReducer Output",
      "description": "Log the expected output for a usereducer exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine useReducer",
      "description": "Combine usereducer with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor useReducer",
      "description": "Refactor given code to use usereducer properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug useReducer",
      "description": "Fix the bug related to usereducer.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with useReducer",
      "description": "Build a small feature using usereducer.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "useReducer Architecture",
      "description": "Design a scalable pattern with usereducer.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>useReducer example</div>;\n}",
    "solution": "function App() {\n  return <div>useReducer example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the usereducer example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "useReducer Mini Challenge",
    "requirements": [
      "Demonstrate usereducer in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
