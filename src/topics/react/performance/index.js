// Auto-generated topic: Performance
// Course: react

export default {
  "id": "performance",
  "title": "Performance",
  "definition": "Performance is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding performance deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Performance syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Performance   │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Performance works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Simple Performance",
      "code": "function PerformanceDemo() {\n  return <div>Performance Component</div>;\n}",
      "output": "Performance Component",
      "explanation": "A minimal component demonstrating performance."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Performance\" />",
      "output": "Performance",
      "explanation": "Passes data via props in a performance context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to performance."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Performance', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Performance React JS",
      "explanation": "Renders collections — common with performance."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Performance</p></Wrapper>",
      "output": "Performance",
      "explanation": "Component composition pattern for performance."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain performance to a beginner.",
      "answer": "Performance is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use performance?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with performance?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does performance compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for performance.",
      "answer": "Production apps use performance for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing performance\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with performance."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand performance before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Performance Feature",
    "description": "Create a real-world component or module that demonstrates performance in action.",
    "checklist": [
      "Implement core performance functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of performance?",
      "options": [
        "To style components",
        "To work with performance concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with performance concepts effectively",
      "explanation": "Performance is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for performance?",
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
      "question": "When should you use performance?",
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
      "question": "What is a common mistake with performance?",
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
      "question": "How does performance help in real projects?",
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
    "Performance: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what performance is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Performance",
      "description": "Write a simple example demonstrating performance.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Performance with Data",
      "description": "Use sample data to practice performance.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Performance Output",
      "description": "Log the expected output for a performance exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Performance",
      "description": "Combine performance with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Performance",
      "description": "Refactor given code to use performance properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Performance",
      "description": "Fix the bug related to performance.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Performance",
      "description": "Build a small feature using performance.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Performance Architecture",
      "description": "Design a scalable pattern with performance.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Performance example</div>;\n}",
    "solution": "function App() {\n  return <div>Performance example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the performance example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Performance Mini Challenge",
    "requirements": [
      "Demonstrate performance in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
