// Auto-generated topic: Lazy Loading
// Course: react

export default {
  "id": "lazy",
  "title": "Lazy Loading",
  "definition": "Lazy Loading is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding lazy loading deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Lazy Loading syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Lazy Loading   │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Lazy Loading is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Simple Lazy Loading",
      "code": "function LazyDemo() {\n  return <div>Lazy Loading Component</div>;\n}",
      "output": "Lazy Loading Component",
      "explanation": "A minimal component demonstrating lazy loading."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Lazy Loading\" />",
      "output": "Lazy Loading",
      "explanation": "Passes data via props in a lazy loading context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to lazy loading."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Lazy Loading', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Lazy Loading React JS",
      "explanation": "Renders collections — common with lazy loading."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Lazy Loading</p></Wrapper>",
      "output": "Lazy Loading",
      "explanation": "Component composition pattern for lazy loading."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain lazy loading to a beginner.",
      "answer": "Lazy Loading is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use lazy loading?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with lazy loading?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does lazy loading compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for lazy loading.",
      "answer": "Production apps use lazy loading for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing lazy loading\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with lazy loading."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand lazy loading before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Lazy Loading Feature",
    "description": "Create a real-world component or module that demonstrates lazy loading in action.",
    "checklist": [
      "Implement core lazy loading functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of lazy loading?",
      "options": [
        "To style components",
        "To work with lazy loading concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with lazy loading concepts effectively",
      "explanation": "Lazy Loading is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for lazy loading?",
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
      "question": "When should you use lazy loading?",
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
      "question": "What is a common mistake with lazy loading?",
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
      "question": "How does lazy loading help in real projects?",
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
    "Lazy Loading: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what lazy loading is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Lazy Loading",
      "description": "Write a simple example demonstrating lazy loading.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Lazy Loading with Data",
      "description": "Use sample data to practice lazy loading.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Lazy Loading Output",
      "description": "Log the expected output for a lazy loading exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Lazy Loading",
      "description": "Combine lazy loading with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Lazy Loading",
      "description": "Refactor given code to use lazy loading properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Lazy Loading",
      "description": "Fix the bug related to lazy loading.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Lazy Loading",
      "description": "Build a small feature using lazy loading.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Lazy Loading Architecture",
      "description": "Design a scalable pattern with lazy loading.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Lazy Loading example</div>;\n}",
    "solution": "function App() {\n  return <div>Lazy Loading example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the lazy loading example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Lazy Loading Mini Challenge",
    "requirements": [
      "Demonstrate lazy loading in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
