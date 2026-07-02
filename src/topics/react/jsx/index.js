// Auto-generated topic: JSX
// Course: react

export default {
  "id": "jsx",
  "title": "JSX",
  "definition": "JSX is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding jsx deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "const element = <h1>Hello, {name}</h1>;",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    JSX          │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "JSX is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Simple JSX",
      "code": "function JsxDemo() {\n  return <div>JSX Component</div>;\n}",
      "output": "JSX Component",
      "explanation": "A minimal component demonstrating jsx."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"JSX\" />",
      "output": "JSX",
      "explanation": "Passes data via props in a jsx context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to jsx."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['JSX', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "JSX React JS",
      "explanation": "Renders collections — common with jsx."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>JSX</p></Wrapper>",
      "output": "JSX",
      "explanation": "Component composition pattern for jsx."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain jsx to a beginner.",
      "answer": "JSX is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use jsx?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with jsx?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does jsx compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for jsx.",
      "answer": "Production apps use jsx for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing jsx\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with jsx."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand jsx before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a JSX Feature",
    "description": "Create a real-world component or module that demonstrates jsx in action.",
    "checklist": [
      "Implement core jsx functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of jsx?",
      "options": [
        "To style components",
        "To work with jsx concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with jsx concepts effectively",
      "explanation": "JSX is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for jsx?",
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
      "question": "When should you use jsx?",
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
      "question": "What is a common mistake with jsx?",
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
      "question": "How does jsx help in real projects?",
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
    "JSX: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what jsx is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic JSX",
      "description": "Write a simple example demonstrating jsx.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "JSX with Data",
      "description": "Use sample data to practice jsx.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "JSX Output",
      "description": "Log the expected output for a jsx exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine JSX",
      "description": "Combine jsx with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor JSX",
      "description": "Refactor given code to use jsx properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug JSX",
      "description": "Fix the bug related to jsx.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with JSX",
      "description": "Build a small feature using jsx.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "JSX Architecture",
      "description": "Design a scalable pattern with jsx.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>JSX example</div>;\n}",
    "solution": "function App() {\n  return <div>JSX example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the jsx example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "JSX Mini Challenge",
    "requirements": [
      "Demonstrate jsx in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
