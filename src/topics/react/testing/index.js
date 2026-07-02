// Auto-generated topic: Testing
// Course: react

export default {
  "id": "testing",
  "title": "Testing",
  "definition": "Testing is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding testing deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Testing syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Testing      │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Think of Testing as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Simple Testing",
      "code": "function TestingDemo() {\n  return <div>Testing Component</div>;\n}",
      "output": "Testing Component",
      "explanation": "A minimal component demonstrating testing."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Testing\" />",
      "output": "Testing",
      "explanation": "Passes data via props in a testing context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to testing."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Testing', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Testing React JS",
      "explanation": "Renders collections — common with testing."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Testing</p></Wrapper>",
      "output": "Testing",
      "explanation": "Component composition pattern for testing."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain testing to a beginner.",
      "answer": "Testing is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use testing?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with testing?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does testing compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for testing.",
      "answer": "Production apps use testing for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing testing\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with testing."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand testing before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Testing Feature",
    "description": "Create a real-world component or module that demonstrates testing in action.",
    "checklist": [
      "Implement core testing functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of testing?",
      "options": [
        "To style components",
        "To work with testing concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with testing concepts effectively",
      "explanation": "Testing is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for testing?",
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
      "question": "When should you use testing?",
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
      "question": "What is a common mistake with testing?",
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
      "question": "How does testing help in real projects?",
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
    "Testing: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what testing is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Testing",
      "description": "Write a simple example demonstrating testing.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Testing with Data",
      "description": "Use sample data to practice testing.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Testing Output",
      "description": "Log the expected output for a testing exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Testing",
      "description": "Combine testing with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Testing",
      "description": "Refactor given code to use testing properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Testing",
      "description": "Fix the bug related to testing.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Testing",
      "description": "Build a small feature using testing.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Testing Architecture",
      "description": "Design a scalable pattern with testing.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Testing example</div>;\n}",
    "solution": "function App() {\n  return <div>Testing example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the testing example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Testing Mini Challenge",
    "requirements": [
      "Demonstrate testing in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
