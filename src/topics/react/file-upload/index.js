// Auto-generated topic: File Upload
// Course: react

export default {
  "id": "file-upload",
  "title": "File Upload",
  "definition": "File Upload is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding file upload deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// File Upload syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    File Upload   │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "File Upload works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Simple File Upload",
      "code": "function FileUploadDemo() {\n  return <div>File Upload Component</div>;\n}",
      "output": "File Upload Component",
      "explanation": "A minimal component demonstrating file upload."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"File Upload\" />",
      "output": "File Upload",
      "explanation": "Passes data via props in a file upload context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to file upload."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['File Upload', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "File Upload React JS",
      "explanation": "Renders collections — common with file upload."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>File Upload</p></Wrapper>",
      "output": "File Upload",
      "explanation": "Component composition pattern for file upload."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain file upload to a beginner.",
      "answer": "File Upload is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use file upload?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with file upload?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does file upload compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for file upload.",
      "answer": "Production apps use file upload for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing file upload\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with file upload."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand file upload before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a File Upload Feature",
    "description": "Create a real-world component or module that demonstrates file upload in action.",
    "checklist": [
      "Implement core file upload functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of file upload?",
      "options": [
        "To style components",
        "To work with file upload concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with file upload concepts effectively",
      "explanation": "File Upload is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for file upload?",
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
      "question": "When should you use file upload?",
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
      "question": "What is a common mistake with file upload?",
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
      "question": "How does file upload help in real projects?",
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
    "File Upload: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what file upload is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic File Upload",
      "description": "Write a simple example demonstrating file upload.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "File Upload with Data",
      "description": "Use sample data to practice file upload.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "File Upload Output",
      "description": "Log the expected output for a file upload exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine File Upload",
      "description": "Combine file upload with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor File Upload",
      "description": "Refactor given code to use file upload properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug File Upload",
      "description": "Fix the bug related to file upload.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with File Upload",
      "description": "Build a small feature using file upload.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "File Upload Architecture",
      "description": "Design a scalable pattern with file upload.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>File Upload example</div>;\n}",
    "solution": "function App() {\n  return <div>File Upload example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the file upload example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "File Upload Mini Challenge",
    "requirements": [
      "Demonstrate file upload in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
