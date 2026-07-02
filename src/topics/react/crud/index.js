// Auto-generated topic: CRUD
// Course: react

export default {
  "id": "crud",
  "title": "CRUD",
  "definition": "CRUD is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding crud deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// CRUD syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    CRUD         │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Think of CRUD as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Simple CRUD",
      "code": "function CrudDemo() {\n  return <div>CRUD Component</div>;\n}",
      "output": "CRUD Component",
      "explanation": "A minimal component demonstrating crud."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"CRUD\" />",
      "output": "CRUD",
      "explanation": "Passes data via props in a crud context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to crud."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['CRUD', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "CRUD React JS",
      "explanation": "Renders collections — common with crud."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>CRUD</p></Wrapper>",
      "output": "CRUD",
      "explanation": "Component composition pattern for crud."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain crud to a beginner.",
      "answer": "CRUD is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use crud?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with crud?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does crud compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for crud.",
      "answer": "Production apps use crud for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing crud\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with crud."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand crud before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a CRUD Feature",
    "description": "Create a real-world component or module that demonstrates crud in action.",
    "checklist": [
      "Implement core crud functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of crud?",
      "options": [
        "To style components",
        "To work with crud concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with crud concepts effectively",
      "explanation": "CRUD is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for crud?",
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
      "question": "When should you use crud?",
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
      "question": "What is a common mistake with crud?",
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
      "question": "How does crud help in real projects?",
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
    "CRUD: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what crud is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic CRUD",
      "description": "Write a simple example demonstrating crud.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "CRUD with Data",
      "description": "Use sample data to practice crud.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "CRUD Output",
      "description": "Log the expected output for a crud exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine CRUD",
      "description": "Combine crud with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor CRUD",
      "description": "Refactor given code to use crud properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug CRUD",
      "description": "Fix the bug related to crud.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with CRUD",
      "description": "Build a small feature using crud.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "CRUD Architecture",
      "description": "Design a scalable pattern with crud.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>CRUD example</div>;\n}",
    "solution": "function App() {\n  return <div>CRUD example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the crud example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "CRUD Mini Challenge",
    "requirements": [
      "Demonstrate crud in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
