// Auto-generated topic: useContext
// Course: react

export default {
  "id": "use-context",
  "title": "useContext",
  "definition": "useContext is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding usecontext deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// useContext syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    useContext   │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Think of useContext as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Simple useContext",
      "code": "function UseContextDemo() {\n  return <div>useContext Component</div>;\n}",
      "output": "useContext Component",
      "explanation": "A minimal component demonstrating usecontext."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"useContext\" />",
      "output": "useContext",
      "explanation": "Passes data via props in a usecontext context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to usecontext."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['useContext', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "useContext React JS",
      "explanation": "Renders collections — common with usecontext."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>useContext</p></Wrapper>",
      "output": "useContext",
      "explanation": "Component composition pattern for usecontext."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain usecontext to a beginner.",
      "answer": "useContext is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use usecontext?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with usecontext?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does usecontext compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for usecontext.",
      "answer": "Production apps use usecontext for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing usecontext\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with usecontext."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand usecontext before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a useContext Feature",
    "description": "Create a real-world component or module that demonstrates usecontext in action.",
    "checklist": [
      "Implement core usecontext functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of usecontext?",
      "options": [
        "To style components",
        "To work with usecontext concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with usecontext concepts effectively",
      "explanation": "useContext is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for usecontext?",
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
      "question": "When should you use usecontext?",
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
      "question": "What is a common mistake with usecontext?",
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
      "question": "How does usecontext help in real projects?",
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
    "useContext: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what usecontext is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic useContext",
      "description": "Write a simple example demonstrating usecontext.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "useContext with Data",
      "description": "Use sample data to practice usecontext.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "useContext Output",
      "description": "Log the expected output for a usecontext exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine useContext",
      "description": "Combine usecontext with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor useContext",
      "description": "Refactor given code to use usecontext properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug useContext",
      "description": "Fix the bug related to usecontext.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with useContext",
      "description": "Build a small feature using usecontext.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "useContext Architecture",
      "description": "Design a scalable pattern with usecontext.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>useContext example</div>;\n}",
    "solution": "function App() {\n  return <div>useContext example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the usecontext example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "useContext Mini Challenge",
    "requirements": [
      "Demonstrate usecontext in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
