// Auto-generated topic: Suspense
// Course: react

export default {
  "id": "suspense",
  "title": "Suspense",
  "definition": "Suspense is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding suspense deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Suspense syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Suspense     │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Suspense works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Simple Suspense",
      "code": "function SuspenseDemo() {\n  return <div>Suspense Component</div>;\n}",
      "output": "Suspense Component",
      "explanation": "A minimal component demonstrating suspense."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Suspense\" />",
      "output": "Suspense",
      "explanation": "Passes data via props in a suspense context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to suspense."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Suspense', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Suspense React JS",
      "explanation": "Renders collections — common with suspense."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Suspense</p></Wrapper>",
      "output": "Suspense",
      "explanation": "Component composition pattern for suspense."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain suspense to a beginner.",
      "answer": "Suspense is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use suspense?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with suspense?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does suspense compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for suspense.",
      "answer": "Production apps use suspense for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing suspense\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with suspense."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand suspense before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Suspense Feature",
    "description": "Create a real-world component or module that demonstrates suspense in action.",
    "checklist": [
      "Implement core suspense functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of suspense?",
      "options": [
        "To style components",
        "To work with suspense concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with suspense concepts effectively",
      "explanation": "Suspense is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for suspense?",
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
      "question": "When should you use suspense?",
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
      "question": "What is a common mistake with suspense?",
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
      "question": "How does suspense help in real projects?",
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
    "Suspense: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what suspense is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Suspense",
      "description": "Write a simple example demonstrating suspense.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Suspense with Data",
      "description": "Use sample data to practice suspense.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Suspense Output",
      "description": "Log the expected output for a suspense exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Suspense",
      "description": "Combine suspense with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Suspense",
      "description": "Refactor given code to use suspense properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Suspense",
      "description": "Fix the bug related to suspense.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Suspense",
      "description": "Build a small feature using suspense.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Suspense Architecture",
      "description": "Design a scalable pattern with suspense.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Suspense example</div>;\n}",
    "solution": "function App() {\n  return <div>Suspense example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the suspense example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Suspense Mini Challenge",
    "requirements": [
      "Demonstrate suspense in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
