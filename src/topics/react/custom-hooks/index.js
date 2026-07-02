// Auto-generated topic: Custom Hooks
// Course: react

export default {
  "id": "custom-hooks",
  "title": "Custom Hooks",
  "definition": "Custom Hooks is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding custom hooks deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Custom Hooks syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Custom Hooks   │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Custom Hooks is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Simple Custom Hooks",
      "code": "function CustomHooksDemo() {\n  return <div>Custom Hooks Component</div>;\n}",
      "output": "Custom Hooks Component",
      "explanation": "A minimal component demonstrating custom hooks."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Custom Hooks\" />",
      "output": "Custom Hooks",
      "explanation": "Passes data via props in a custom hooks context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to custom hooks."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Custom Hooks', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Custom Hooks React JS",
      "explanation": "Renders collections — common with custom hooks."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Custom Hooks</p></Wrapper>",
      "output": "Custom Hooks",
      "explanation": "Component composition pattern for custom hooks."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain custom hooks to a beginner.",
      "answer": "Custom Hooks is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use custom hooks?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with custom hooks?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does custom hooks compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for custom hooks.",
      "answer": "Production apps use custom hooks for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing custom hooks\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with custom hooks."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand custom hooks before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Custom Hooks Feature",
    "description": "Create a real-world component or module that demonstrates custom hooks in action.",
    "checklist": [
      "Implement core custom hooks functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of custom hooks?",
      "options": [
        "To style components",
        "To work with custom hooks concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with custom hooks concepts effectively",
      "explanation": "Custom Hooks is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for custom hooks?",
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
      "question": "When should you use custom hooks?",
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
      "question": "What is a common mistake with custom hooks?",
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
      "question": "How does custom hooks help in real projects?",
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
    "Custom Hooks: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what custom hooks is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Custom Hooks",
      "description": "Write a simple example demonstrating custom hooks.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Custom Hooks with Data",
      "description": "Use sample data to practice custom hooks.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Custom Hooks Output",
      "description": "Log the expected output for a custom hooks exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Custom Hooks",
      "description": "Combine custom hooks with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Custom Hooks",
      "description": "Refactor given code to use custom hooks properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Custom Hooks",
      "description": "Fix the bug related to custom hooks.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Custom Hooks",
      "description": "Build a small feature using custom hooks.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Custom Hooks Architecture",
      "description": "Design a scalable pattern with custom hooks.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Custom Hooks example</div>;\n}",
    "solution": "function App() {\n  return <div>Custom Hooks example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the custom hooks example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Custom Hooks Mini Challenge",
    "requirements": [
      "Demonstrate custom hooks in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
