// Auto-generated topic: Server Components
// Course: react

export default {
  "id": "server-components",
  "title": "Server Components",
  "definition": "Server Components is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding server components deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Server Components syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Server Components   │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Server Components works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Simple Server Components",
      "code": "function ServerComponentsDemo() {\n  return <div>Server Components Component</div>;\n}",
      "output": "Server Components Component",
      "explanation": "A minimal component demonstrating server components."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Server Components\" />",
      "output": "Server Components",
      "explanation": "Passes data via props in a server components context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to server components."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Server Components', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Server Components React JS",
      "explanation": "Renders collections — common with server components."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Server Components</p></Wrapper>",
      "output": "Server Components",
      "explanation": "Component composition pattern for server components."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain server components to a beginner.",
      "answer": "Server Components is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use server components?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with server components?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does server components compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for server components.",
      "answer": "Production apps use server components for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing server components\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with server components."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand server components before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Server Components Feature",
    "description": "Create a real-world component or module that demonstrates server components in action.",
    "checklist": [
      "Implement core server components functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of server components?",
      "options": [
        "To style components",
        "To work with server components concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with server components concepts effectively",
      "explanation": "Server Components is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for server components?",
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
      "question": "When should you use server components?",
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
      "question": "What is a common mistake with server components?",
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
      "question": "How does server components help in real projects?",
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
    "Server Components: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what server components is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Server Components",
      "description": "Write a simple example demonstrating server components.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Server Components with Data",
      "description": "Use sample data to practice server components.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Server Components Output",
      "description": "Log the expected output for a server components exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Server Components",
      "description": "Combine server components with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Server Components",
      "description": "Refactor given code to use server components properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Server Components",
      "description": "Fix the bug related to server components.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Server Components",
      "description": "Build a small feature using server components.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Server Components Architecture",
      "description": "Design a scalable pattern with server components.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Server Components example</div>;\n}",
    "solution": "function App() {\n  return <div>Server Components example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the server components example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Server Components Mini Challenge",
    "requirements": [
      "Demonstrate server components in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
