// Auto-generated topic: useState
// Course: react

export default {
  "id": "use-state",
  "title": "useState",
  "definition": "useState is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding usestate deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "const [value, setValue] = useState(initialValue);",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    useState     │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "useState works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Simple useState",
      "code": "function UseStateDemo() {\n  return <div>useState Component</div>;\n}",
      "output": "useState Component",
      "explanation": "A minimal component demonstrating usestate."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"useState\" />",
      "output": "useState",
      "explanation": "Passes data via props in a usestate context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to usestate."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['useState', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "useState React JS",
      "explanation": "Renders collections — common with usestate."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>useState</p></Wrapper>",
      "output": "useState",
      "explanation": "Component composition pattern for usestate."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain usestate to a beginner.",
      "answer": "useState is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use usestate?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with usestate?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does usestate compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for usestate.",
      "answer": "Production apps use usestate for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing usestate\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with usestate."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand usestate before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a useState Feature",
    "description": "Create a real-world component or module that demonstrates usestate in action.",
    "checklist": [
      "Implement core usestate functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of usestate?",
      "options": [
        "To style components",
        "To work with usestate concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with usestate concepts effectively",
      "explanation": "useState is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for usestate?",
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
      "question": "When should you use usestate?",
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
      "question": "What is a common mistake with usestate?",
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
      "question": "How does usestate help in real projects?",
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
    "useState: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what usestate is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic useState",
      "description": "Write a simple example demonstrating usestate.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "useState with Data",
      "description": "Use sample data to practice usestate.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "useState Output",
      "description": "Log the expected output for a usestate exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine useState",
      "description": "Combine usestate with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor useState",
      "description": "Refactor given code to use usestate properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug useState",
      "description": "Fix the bug related to usestate.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with useState",
      "description": "Build a small feature using usestate.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "useState Architecture",
      "description": "Design a scalable pattern with usestate.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>useState example</div>;\n}",
    "solution": "function App() {\n  return <div>useState example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the usestate example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "useState Mini Challenge",
    "requirements": [
      "Demonstrate usestate in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
