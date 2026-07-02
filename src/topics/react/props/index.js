// Auto-generated topic: Props
// Course: react

export default {
  "id": "props",
  "title": "Props",
  "definition": "Props is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding props deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "function Card({ title, children }) {\n  return <div><h2>{title}</h2>{children}</div>;\n}",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Props        │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Props works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Simple Props",
      "code": "function PropsDemo() {\n  return <div>Props Component</div>;\n}",
      "output": "Props Component",
      "explanation": "A minimal component demonstrating props."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Props\" />",
      "output": "Props",
      "explanation": "Passes data via props in a props context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to props."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Props', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Props React JS",
      "explanation": "Renders collections — common with props."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Props</p></Wrapper>",
      "output": "Props",
      "explanation": "Component composition pattern for props."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain props to a beginner.",
      "answer": "Props is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use props?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with props?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does props compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for props.",
      "answer": "Production apps use props for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing props\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with props."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand props before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Props Feature",
    "description": "Create a real-world component or module that demonstrates props in action.",
    "checklist": [
      "Implement core props functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of props?",
      "options": [
        "To style components",
        "To work with props concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with props concepts effectively",
      "explanation": "Props is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for props?",
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
      "question": "When should you use props?",
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
      "question": "What is a common mistake with props?",
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
      "question": "How does props help in real projects?",
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
    "Props: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what props is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Props",
      "description": "Write a simple example demonstrating props.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Props with Data",
      "description": "Use sample data to practice props.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Props Output",
      "description": "Log the expected output for a props exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Props",
      "description": "Combine props with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Props",
      "description": "Refactor given code to use props properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Props",
      "description": "Fix the bug related to props.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Props",
      "description": "Build a small feature using props.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Props Architecture",
      "description": "Design a scalable pattern with props.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Props example</div>;\n}",
    "solution": "function App() {\n  return <div>Props example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the props example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Props Mini Challenge",
    "requirements": [
      "Demonstrate props in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
