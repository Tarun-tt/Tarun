// Auto-generated topic: Infinite Scroll
// Course: react

export default {
  "id": "infinite-scroll",
  "title": "Infinite Scroll",
  "definition": "Infinite Scroll is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding infinite scroll deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Infinite Scroll syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Infinite Scroll   │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Infinite Scroll is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Simple Infinite Scroll",
      "code": "function InfiniteScrollDemo() {\n  return <div>Infinite Scroll Component</div>;\n}",
      "output": "Infinite Scroll Component",
      "explanation": "A minimal component demonstrating infinite scroll."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Infinite Scroll\" />",
      "output": "Infinite Scroll",
      "explanation": "Passes data via props in a infinite scroll context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to infinite scroll."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Infinite Scroll', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Infinite Scroll React JS",
      "explanation": "Renders collections — common with infinite scroll."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Infinite Scroll</p></Wrapper>",
      "output": "Infinite Scroll",
      "explanation": "Component composition pattern for infinite scroll."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain infinite scroll to a beginner.",
      "answer": "Infinite Scroll is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use infinite scroll?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with infinite scroll?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does infinite scroll compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for infinite scroll.",
      "answer": "Production apps use infinite scroll for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing infinite scroll\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with infinite scroll."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand infinite scroll before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Infinite Scroll Feature",
    "description": "Create a real-world component or module that demonstrates infinite scroll in action.",
    "checklist": [
      "Implement core infinite scroll functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of infinite scroll?",
      "options": [
        "To style components",
        "To work with infinite scroll concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with infinite scroll concepts effectively",
      "explanation": "Infinite Scroll is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for infinite scroll?",
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
      "question": "When should you use infinite scroll?",
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
      "question": "What is a common mistake with infinite scroll?",
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
      "question": "How does infinite scroll help in real projects?",
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
    "Infinite Scroll: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what infinite scroll is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Infinite Scroll",
      "description": "Write a simple example demonstrating infinite scroll.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Infinite Scroll with Data",
      "description": "Use sample data to practice infinite scroll.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Infinite Scroll Output",
      "description": "Log the expected output for a infinite scroll exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Infinite Scroll",
      "description": "Combine infinite scroll with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Infinite Scroll",
      "description": "Refactor given code to use infinite scroll properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Infinite Scroll",
      "description": "Fix the bug related to infinite scroll.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Infinite Scroll",
      "description": "Build a small feature using infinite scroll.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Infinite Scroll Architecture",
      "description": "Design a scalable pattern with infinite scroll.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Infinite Scroll example</div>;\n}",
    "solution": "function App() {\n  return <div>Infinite Scroll example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the infinite scroll example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Infinite Scroll Mini Challenge",
    "requirements": [
      "Demonstrate infinite scroll in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
