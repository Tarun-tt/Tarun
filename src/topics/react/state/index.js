// Auto-generated topic: State
// Course: react

export default {
  "id": "state",
  "title": "State",
  "definition": "State is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding state deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "const [count, setCount] = useState(0);\nsetCount(c => c + 1);",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    State        │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "State works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Simple State",
      "code": "function StateDemo() {\n  return <div>State Component</div>;\n}",
      "output": "State Component",
      "explanation": "A minimal component demonstrating state."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"State\" />",
      "output": "State",
      "explanation": "Passes data via props in a state context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to state."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['State', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "State React JS",
      "explanation": "Renders collections — common with state."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>State</p></Wrapper>",
      "output": "State",
      "explanation": "Component composition pattern for state."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain state to a beginner.",
      "answer": "State is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use state?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with state?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does state compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for state.",
      "answer": "Production apps use state for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing state\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with state."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand state before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a State Feature",
    "description": "Create a real-world component or module that demonstrates state in action.",
    "checklist": [
      "Implement core state functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of state?",
      "options": [
        "To style components",
        "To work with state concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with state concepts effectively",
      "explanation": "State is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for state?",
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
      "question": "When should you use state?",
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
      "question": "What is a common mistake with state?",
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
      "question": "How does state help in real projects?",
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
    "State: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what state is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic State",
      "description": "Write a simple example demonstrating state.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "State with Data",
      "description": "Use sample data to practice state.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "State Output",
      "description": "Log the expected output for a state exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine State",
      "description": "Combine state with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor State",
      "description": "Refactor given code to use state properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug State",
      "description": "Fix the bug related to state.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with State",
      "description": "Build a small feature using state.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "State Architecture",
      "description": "Design a scalable pattern with state.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>State example</div>;\n}",
    "solution": "function App() {\n  return <div>State example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the state example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "State Mini Challenge",
    "requirements": [
      "Demonstrate state in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
