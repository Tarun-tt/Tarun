// Auto-generated topic: Keys
// Course: react

export default {
  "id": "keys",
  "title": "Keys",
  "definition": "Keys is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding keys deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Keys syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Keys         │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Think of Keys as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Simple Keys",
      "code": "function KeysDemo() {\n  return <div>Keys Component</div>;\n}",
      "output": "Keys Component",
      "explanation": "A minimal component demonstrating keys."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Keys\" />",
      "output": "Keys",
      "explanation": "Passes data via props in a keys context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to keys."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Keys', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Keys React JS",
      "explanation": "Renders collections — common with keys."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Keys</p></Wrapper>",
      "output": "Keys",
      "explanation": "Component composition pattern for keys."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain keys to a beginner.",
      "answer": "Keys is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use keys?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with keys?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does keys compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for keys.",
      "answer": "Production apps use keys for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing keys\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with keys."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand keys before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Keys Feature",
    "description": "Create a real-world component or module that demonstrates keys in action.",
    "checklist": [
      "Implement core keys functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of keys?",
      "options": [
        "To style components",
        "To work with keys concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with keys concepts effectively",
      "explanation": "Keys is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for keys?",
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
      "question": "When should you use keys?",
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
      "question": "What is a common mistake with keys?",
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
      "question": "How does keys help in real projects?",
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
    "Keys: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what keys is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Keys",
      "description": "Write a simple example demonstrating keys.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Keys with Data",
      "description": "Use sample data to practice keys.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Keys Output",
      "description": "Log the expected output for a keys exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Keys",
      "description": "Combine keys with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Keys",
      "description": "Refactor given code to use keys properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Keys",
      "description": "Fix the bug related to keys.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Keys",
      "description": "Build a small feature using keys.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Keys Architecture",
      "description": "Design a scalable pattern with keys.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Keys example</div>;\n}",
    "solution": "function App() {\n  return <div>Keys example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the keys example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Keys Mini Challenge",
    "requirements": [
      "Demonstrate keys in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
