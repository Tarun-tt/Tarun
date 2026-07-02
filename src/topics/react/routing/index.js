// Auto-generated topic: Routing
// Course: react

export default {
  "id": "routing",
  "title": "Routing",
  "definition": "Routing is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding routing deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Routing syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Routing      │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Think of Routing as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Simple Routing",
      "code": "function RoutingDemo() {\n  return <div>Routing Component</div>;\n}",
      "output": "Routing Component",
      "explanation": "A minimal component demonstrating routing."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Routing\" />",
      "output": "Routing",
      "explanation": "Passes data via props in a routing context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to routing."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Routing', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Routing React JS",
      "explanation": "Renders collections — common with routing."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Routing</p></Wrapper>",
      "output": "Routing",
      "explanation": "Component composition pattern for routing."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain routing to a beginner.",
      "answer": "Routing is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use routing?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with routing?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does routing compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for routing.",
      "answer": "Production apps use routing for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing routing\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with routing."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand routing before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Routing Feature",
    "description": "Create a real-world component or module that demonstrates routing in action.",
    "checklist": [
      "Implement core routing functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of routing?",
      "options": [
        "To style components",
        "To work with routing concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with routing concepts effectively",
      "explanation": "Routing is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for routing?",
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
      "question": "When should you use routing?",
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
      "question": "What is a common mistake with routing?",
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
      "question": "How does routing help in real projects?",
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
    "Routing: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what routing is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Routing",
      "description": "Write a simple example demonstrating routing.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Routing with Data",
      "description": "Use sample data to practice routing.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Routing Output",
      "description": "Log the expected output for a routing exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Routing",
      "description": "Combine routing with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Routing",
      "description": "Refactor given code to use routing properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Routing",
      "description": "Fix the bug related to routing.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Routing",
      "description": "Build a small feature using routing.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Routing Architecture",
      "description": "Design a scalable pattern with routing.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Routing example</div>;\n}",
    "solution": "function App() {\n  return <div>Routing example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the routing example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Routing Mini Challenge",
    "requirements": [
      "Demonstrate routing in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
