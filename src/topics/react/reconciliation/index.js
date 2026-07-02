// Auto-generated topic: Reconciliation
// Course: react

export default {
  "id": "reconciliation",
  "title": "Reconciliation",
  "definition": "Reconciliation is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding reconciliation deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Reconciliation syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Reconciliation   │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Reconciliation works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Simple Reconciliation",
      "code": "function ReconciliationDemo() {\n  return <div>Reconciliation Component</div>;\n}",
      "output": "Reconciliation Component",
      "explanation": "A minimal component demonstrating reconciliation."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Reconciliation\" />",
      "output": "Reconciliation",
      "explanation": "Passes data via props in a reconciliation context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to reconciliation."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Reconciliation', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Reconciliation React JS",
      "explanation": "Renders collections — common with reconciliation."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Reconciliation</p></Wrapper>",
      "output": "Reconciliation",
      "explanation": "Component composition pattern for reconciliation."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain reconciliation to a beginner.",
      "answer": "Reconciliation is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use reconciliation?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with reconciliation?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does reconciliation compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for reconciliation.",
      "answer": "Production apps use reconciliation for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing reconciliation\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with reconciliation."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand reconciliation before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Reconciliation Feature",
    "description": "Create a real-world component or module that demonstrates reconciliation in action.",
    "checklist": [
      "Implement core reconciliation functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of reconciliation?",
      "options": [
        "To style components",
        "To work with reconciliation concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with reconciliation concepts effectively",
      "explanation": "Reconciliation is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for reconciliation?",
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
      "question": "When should you use reconciliation?",
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
      "question": "What is a common mistake with reconciliation?",
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
      "question": "How does reconciliation help in real projects?",
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
    "Reconciliation: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what reconciliation is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Reconciliation",
      "description": "Write a simple example demonstrating reconciliation.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Reconciliation with Data",
      "description": "Use sample data to practice reconciliation.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Reconciliation Output",
      "description": "Log the expected output for a reconciliation exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Reconciliation",
      "description": "Combine reconciliation with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Reconciliation",
      "description": "Refactor given code to use reconciliation properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Reconciliation",
      "description": "Fix the bug related to reconciliation.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Reconciliation",
      "description": "Build a small feature using reconciliation.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Reconciliation Architecture",
      "description": "Design a scalable pattern with reconciliation.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Reconciliation example</div>;\n}",
    "solution": "function App() {\n  return <div>Reconciliation example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the reconciliation example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Reconciliation Mini Challenge",
    "requirements": [
      "Demonstrate reconciliation in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
