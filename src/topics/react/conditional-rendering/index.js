// Auto-generated topic: Conditional Rendering
// Course: react

export default {
  "id": "conditional-rendering",
  "title": "Conditional Rendering",
  "definition": "Conditional Rendering is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding conditional rendering deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Conditional Rendering syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Conditional Rendering   │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Conditional Rendering is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Simple Conditional Rendering",
      "code": "function ConditionalRenderingDemo() {\n  return <div>Conditional Rendering Component</div>;\n}",
      "output": "Conditional Rendering Component",
      "explanation": "A minimal component demonstrating conditional rendering."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Conditional Rendering\" />",
      "output": "Conditional Rendering",
      "explanation": "Passes data via props in a conditional rendering context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to conditional rendering."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Conditional Rendering', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Conditional Rendering React JS",
      "explanation": "Renders collections — common with conditional rendering."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Conditional Rendering</p></Wrapper>",
      "output": "Conditional Rendering",
      "explanation": "Component composition pattern for conditional rendering."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain conditional rendering to a beginner.",
      "answer": "Conditional Rendering is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use conditional rendering?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with conditional rendering?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does conditional rendering compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for conditional rendering.",
      "answer": "Production apps use conditional rendering for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing conditional rendering\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with conditional rendering."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand conditional rendering before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Conditional Rendering Feature",
    "description": "Create a real-world component or module that demonstrates conditional rendering in action.",
    "checklist": [
      "Implement core conditional rendering functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of conditional rendering?",
      "options": [
        "To style components",
        "To work with conditional rendering concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with conditional rendering concepts effectively",
      "explanation": "Conditional Rendering is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for conditional rendering?",
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
      "question": "When should you use conditional rendering?",
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
      "question": "What is a common mistake with conditional rendering?",
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
      "question": "How does conditional rendering help in real projects?",
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
    "Conditional Rendering: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what conditional rendering is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Conditional Rendering",
      "description": "Write a simple example demonstrating conditional rendering.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Conditional Rendering with Data",
      "description": "Use sample data to practice conditional rendering.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Conditional Rendering Output",
      "description": "Log the expected output for a conditional rendering exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Conditional Rendering",
      "description": "Combine conditional rendering with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Conditional Rendering",
      "description": "Refactor given code to use conditional rendering properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Conditional Rendering",
      "description": "Fix the bug related to conditional rendering.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Conditional Rendering",
      "description": "Build a small feature using conditional rendering.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Conditional Rendering Architecture",
      "description": "Design a scalable pattern with conditional rendering.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Conditional Rendering example</div>;\n}",
    "solution": "function App() {\n  return <div>Conditional Rendering example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the conditional rendering example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Conditional Rendering Mini Challenge",
    "requirements": [
      "Demonstrate conditional rendering in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
