// Auto-generated topic: Error Boundaries
// Course: react

export default {
  "id": "error-boundaries",
  "title": "Error Boundaries",
  "definition": "Error Boundaries is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding error boundaries deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Error Boundaries syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Error Boundaries   │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Think of Error Boundaries as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Simple Error Boundaries",
      "code": "function ErrorBoundariesDemo() {\n  return <div>Error Boundaries Component</div>;\n}",
      "output": "Error Boundaries Component",
      "explanation": "A minimal component demonstrating error boundaries."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Error Boundaries\" />",
      "output": "Error Boundaries",
      "explanation": "Passes data via props in a error boundaries context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to error boundaries."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Error Boundaries', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Error Boundaries React JS",
      "explanation": "Renders collections — common with error boundaries."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Error Boundaries</p></Wrapper>",
      "output": "Error Boundaries",
      "explanation": "Component composition pattern for error boundaries."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain error boundaries to a beginner.",
      "answer": "Error Boundaries is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use error boundaries?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with error boundaries?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does error boundaries compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for error boundaries.",
      "answer": "Production apps use error boundaries for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing error boundaries\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with error boundaries."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand error boundaries before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Error Boundaries Feature",
    "description": "Create a real-world component or module that demonstrates error boundaries in action.",
    "checklist": [
      "Implement core error boundaries functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of error boundaries?",
      "options": [
        "To style components",
        "To work with error boundaries concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with error boundaries concepts effectively",
      "explanation": "Error Boundaries is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for error boundaries?",
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
      "question": "When should you use error boundaries?",
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
      "question": "What is a common mistake with error boundaries?",
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
      "question": "How does error boundaries help in real projects?",
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
    "Error Boundaries: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what error boundaries is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Error Boundaries",
      "description": "Write a simple example demonstrating error boundaries.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Error Boundaries with Data",
      "description": "Use sample data to practice error boundaries.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Error Boundaries Output",
      "description": "Log the expected output for a error boundaries exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Error Boundaries",
      "description": "Combine error boundaries with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Error Boundaries",
      "description": "Refactor given code to use error boundaries properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Error Boundaries",
      "description": "Fix the bug related to error boundaries.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Error Boundaries",
      "description": "Build a small feature using error boundaries.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Error Boundaries Architecture",
      "description": "Design a scalable pattern with error boundaries.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Error Boundaries example</div>;\n}",
    "solution": "function App() {\n  return <div>Error Boundaries example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the error boundaries example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Error Boundaries Mini Challenge",
    "requirements": [
      "Demonstrate error boundaries in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
