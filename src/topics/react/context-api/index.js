// Auto-generated topic: Context API
// Course: react

export default {
  "id": "context-api",
  "title": "Context API",
  "definition": "Context API is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding context api deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Context API syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Context API   │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Context API works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Simple Context API",
      "code": "function ContextApiDemo() {\n  return <div>Context API Component</div>;\n}",
      "output": "Context API Component",
      "explanation": "A minimal component demonstrating context api."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Context API\" />",
      "output": "Context API",
      "explanation": "Passes data via props in a context api context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to context api."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Context API', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Context API React JS",
      "explanation": "Renders collections — common with context api."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Context API</p></Wrapper>",
      "output": "Context API",
      "explanation": "Component composition pattern for context api."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain context api to a beginner.",
      "answer": "Context API is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use context api?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with context api?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does context api compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for context api.",
      "answer": "Production apps use context api for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing context api\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with context api."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand context api before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Context API Feature",
    "description": "Create a real-world component or module that demonstrates context api in action.",
    "checklist": [
      "Implement core context api functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of context api?",
      "options": [
        "To style components",
        "To work with context api concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with context api concepts effectively",
      "explanation": "Context API is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for context api?",
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
      "question": "When should you use context api?",
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
      "question": "What is a common mistake with context api?",
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
      "question": "How does context api help in real projects?",
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
    "Context API: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what context api is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Context API",
      "description": "Write a simple example demonstrating context api.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Context API with Data",
      "description": "Use sample data to practice context api.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Context API Output",
      "description": "Log the expected output for a context api exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Context API",
      "description": "Combine context api with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Context API",
      "description": "Refactor given code to use context api properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Context API",
      "description": "Fix the bug related to context api.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Context API",
      "description": "Build a small feature using context api.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Context API Architecture",
      "description": "Design a scalable pattern with context api.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Context API example</div>;\n}",
    "solution": "function App() {\n  return <div>Context API example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the context api example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Context API Mini Challenge",
    "requirements": [
      "Demonstrate context api in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
