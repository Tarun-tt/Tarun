// Auto-generated topic: Sorting
// Course: react

export default {
  "id": "sorting",
  "title": "Sorting",
  "definition": "Sorting is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding sorting deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Sorting syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Sorting      │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Think of Sorting as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Simple Sorting",
      "code": "function SortingDemo() {\n  return <div>Sorting Component</div>;\n}",
      "output": "Sorting Component",
      "explanation": "A minimal component demonstrating sorting."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Sorting\" />",
      "output": "Sorting",
      "explanation": "Passes data via props in a sorting context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to sorting."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Sorting', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Sorting React JS",
      "explanation": "Renders collections — common with sorting."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Sorting</p></Wrapper>",
      "output": "Sorting",
      "explanation": "Component composition pattern for sorting."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain sorting to a beginner.",
      "answer": "Sorting is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use sorting?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with sorting?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does sorting compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for sorting.",
      "answer": "Production apps use sorting for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing sorting\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with sorting."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand sorting before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Sorting Feature",
    "description": "Create a real-world component or module that demonstrates sorting in action.",
    "checklist": [
      "Implement core sorting functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of sorting?",
      "options": [
        "To style components",
        "To work with sorting concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with sorting concepts effectively",
      "explanation": "Sorting is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for sorting?",
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
      "question": "When should you use sorting?",
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
      "question": "What is a common mistake with sorting?",
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
      "question": "How does sorting help in real projects?",
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
    "Sorting: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what sorting is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Sorting",
      "description": "Write a simple example demonstrating sorting.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Sorting with Data",
      "description": "Use sample data to practice sorting.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Sorting Output",
      "description": "Log the expected output for a sorting exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Sorting",
      "description": "Combine sorting with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Sorting",
      "description": "Refactor given code to use sorting properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Sorting",
      "description": "Fix the bug related to sorting.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Sorting",
      "description": "Build a small feature using sorting.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Sorting Architecture",
      "description": "Design a scalable pattern with sorting.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Sorting example</div>;\n}",
    "solution": "function App() {\n  return <div>Sorting example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the sorting example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Sorting Mini Challenge",
    "requirements": [
      "Demonstrate sorting in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
