// Auto-generated topic: useCallback
// Course: react

export default {
  "id": "use-callback",
  "title": "useCallback",
  "definition": "useCallback is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding usecallback deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// useCallback syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    useCallback   │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "useCallback works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Simple useCallback",
      "code": "function UseCallbackDemo() {\n  return <div>useCallback Component</div>;\n}",
      "output": "useCallback Component",
      "explanation": "A minimal component demonstrating usecallback."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"useCallback\" />",
      "output": "useCallback",
      "explanation": "Passes data via props in a usecallback context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to usecallback."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['useCallback', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "useCallback React JS",
      "explanation": "Renders collections — common with usecallback."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>useCallback</p></Wrapper>",
      "output": "useCallback",
      "explanation": "Component composition pattern for usecallback."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain usecallback to a beginner.",
      "answer": "useCallback is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use usecallback?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with usecallback?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does usecallback compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for usecallback.",
      "answer": "Production apps use usecallback for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing usecallback\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with usecallback."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand usecallback before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a useCallback Feature",
    "description": "Create a real-world component or module that demonstrates usecallback in action.",
    "checklist": [
      "Implement core usecallback functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of usecallback?",
      "options": [
        "To style components",
        "To work with usecallback concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with usecallback concepts effectively",
      "explanation": "useCallback is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for usecallback?",
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
      "question": "When should you use usecallback?",
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
      "question": "What is a common mistake with usecallback?",
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
      "question": "How does usecallback help in real projects?",
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
    "useCallback: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what usecallback is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic useCallback",
      "description": "Write a simple example demonstrating usecallback.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "useCallback with Data",
      "description": "Use sample data to practice usecallback.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "useCallback Output",
      "description": "Log the expected output for a usecallback exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine useCallback",
      "description": "Combine usecallback with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor useCallback",
      "description": "Refactor given code to use usecallback properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug useCallback",
      "description": "Fix the bug related to usecallback.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with useCallback",
      "description": "Build a small feature using usecallback.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "useCallback Architecture",
      "description": "Design a scalable pattern with usecallback.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>useCallback example</div>;\n}",
    "solution": "function App() {\n  return <div>useCallback example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the usecallback example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "useCallback Mini Challenge",
    "requirements": [
      "Demonstrate usecallback in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
