// Auto-generated topic: Fiber
// Course: react

export default {
  "id": "fiber",
  "title": "Fiber",
  "definition": "Fiber is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding fiber deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Fiber syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Fiber        │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Fiber works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Simple Fiber",
      "code": "function FiberDemo() {\n  return <div>Fiber Component</div>;\n}",
      "output": "Fiber Component",
      "explanation": "A minimal component demonstrating fiber."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Fiber\" />",
      "output": "Fiber",
      "explanation": "Passes data via props in a fiber context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to fiber."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Fiber', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Fiber React JS",
      "explanation": "Renders collections — common with fiber."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Fiber</p></Wrapper>",
      "output": "Fiber",
      "explanation": "Component composition pattern for fiber."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain fiber to a beginner.",
      "answer": "Fiber is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use fiber?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with fiber?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does fiber compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for fiber.",
      "answer": "Production apps use fiber for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing fiber\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with fiber."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand fiber before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Fiber Feature",
    "description": "Create a real-world component or module that demonstrates fiber in action.",
    "checklist": [
      "Implement core fiber functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of fiber?",
      "options": [
        "To style components",
        "To work with fiber concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with fiber concepts effectively",
      "explanation": "Fiber is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for fiber?",
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
      "question": "When should you use fiber?",
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
      "question": "What is a common mistake with fiber?",
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
      "question": "How does fiber help in real projects?",
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
    "Fiber: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what fiber is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Fiber",
      "description": "Write a simple example demonstrating fiber.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Fiber with Data",
      "description": "Use sample data to practice fiber.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Fiber Output",
      "description": "Log the expected output for a fiber exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Fiber",
      "description": "Combine fiber with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Fiber",
      "description": "Refactor given code to use fiber properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Fiber",
      "description": "Fix the bug related to fiber.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Fiber",
      "description": "Build a small feature using fiber.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Fiber Architecture",
      "description": "Design a scalable pattern with fiber.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Fiber example</div>;\n}",
    "solution": "function App() {\n  return <div>Fiber example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the fiber example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Fiber Mini Challenge",
    "requirements": [
      "Demonstrate fiber in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
