// Auto-generated topic: Filtering
// Course: react

export default {
  "id": "filtering",
  "title": "Filtering",
  "definition": "Filtering is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding filtering deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Filtering syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Filtering    │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Filtering is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Simple Filtering",
      "code": "function FilteringDemo() {\n  return <div>Filtering Component</div>;\n}",
      "output": "Filtering Component",
      "explanation": "A minimal component demonstrating filtering."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Filtering\" />",
      "output": "Filtering",
      "explanation": "Passes data via props in a filtering context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to filtering."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Filtering', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Filtering React JS",
      "explanation": "Renders collections — common with filtering."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Filtering</p></Wrapper>",
      "output": "Filtering",
      "explanation": "Component composition pattern for filtering."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain filtering to a beginner.",
      "answer": "Filtering is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use filtering?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with filtering?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does filtering compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for filtering.",
      "answer": "Production apps use filtering for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing filtering\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with filtering."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand filtering before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Filtering Feature",
    "description": "Create a real-world component or module that demonstrates filtering in action.",
    "checklist": [
      "Implement core filtering functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of filtering?",
      "options": [
        "To style components",
        "To work with filtering concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with filtering concepts effectively",
      "explanation": "Filtering is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for filtering?",
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
      "question": "When should you use filtering?",
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
      "question": "What is a common mistake with filtering?",
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
      "question": "How does filtering help in real projects?",
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
    "Filtering: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what filtering is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Filtering",
      "description": "Write a simple example demonstrating filtering.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Filtering with Data",
      "description": "Use sample data to practice filtering.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Filtering Output",
      "description": "Log the expected output for a filtering exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Filtering",
      "description": "Combine filtering with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Filtering",
      "description": "Refactor given code to use filtering properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Filtering",
      "description": "Fix the bug related to filtering.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Filtering",
      "description": "Build a small feature using filtering.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Filtering Architecture",
      "description": "Design a scalable pattern with filtering.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Filtering example</div>;\n}",
    "solution": "function App() {\n  return <div>Filtering example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the filtering example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Filtering Mini Challenge",
    "requirements": [
      "Demonstrate filtering in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
