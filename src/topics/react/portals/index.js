// Auto-generated topic: Portals
// Course: react

export default {
  "id": "portals",
  "title": "Portals",
  "definition": "Portals is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding portals deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Portals syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Portals      │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Think of Portals as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Simple Portals",
      "code": "function PortalsDemo() {\n  return <div>Portals Component</div>;\n}",
      "output": "Portals Component",
      "explanation": "A minimal component demonstrating portals."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Portals\" />",
      "output": "Portals",
      "explanation": "Passes data via props in a portals context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to portals."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Portals', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Portals React JS",
      "explanation": "Renders collections — common with portals."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Portals</p></Wrapper>",
      "output": "Portals",
      "explanation": "Component composition pattern for portals."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain portals to a beginner.",
      "answer": "Portals is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use portals?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with portals?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does portals compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for portals.",
      "answer": "Production apps use portals for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing portals\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with portals."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand portals before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Portals Feature",
    "description": "Create a real-world component or module that demonstrates portals in action.",
    "checklist": [
      "Implement core portals functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of portals?",
      "options": [
        "To style components",
        "To work with portals concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with portals concepts effectively",
      "explanation": "Portals is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for portals?",
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
      "question": "When should you use portals?",
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
      "question": "What is a common mistake with portals?",
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
      "question": "How does portals help in real projects?",
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
    "Portals: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what portals is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Portals",
      "description": "Write a simple example demonstrating portals.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Portals with Data",
      "description": "Use sample data to practice portals.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Portals Output",
      "description": "Log the expected output for a portals exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Portals",
      "description": "Combine portals with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Portals",
      "description": "Refactor given code to use portals properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Portals",
      "description": "Fix the bug related to portals.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Portals",
      "description": "Build a small feature using portals.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Portals Architecture",
      "description": "Design a scalable pattern with portals.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Portals example</div>;\n}",
    "solution": "function App() {\n  return <div>Portals example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the portals example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Portals Mini Challenge",
    "requirements": [
      "Demonstrate portals in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
