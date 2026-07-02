// Auto-generated topic: useEffect
// Course: react

export default {
  "id": "use-effect",
  "title": "useEffect",
  "definition": "useEffect is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding useeffect deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "useEffect(() => {\n  // side effect\n  return () => cleanup();\n}, [deps]);",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    useEffect    │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "useEffect is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Simple useEffect",
      "code": "function UseEffectDemo() {\n  return <div>useEffect Component</div>;\n}",
      "output": "useEffect Component",
      "explanation": "A minimal component demonstrating useeffect."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"useEffect\" />",
      "output": "useEffect",
      "explanation": "Passes data via props in a useeffect context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to useeffect."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['useEffect', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "useEffect React JS",
      "explanation": "Renders collections — common with useeffect."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>useEffect</p></Wrapper>",
      "output": "useEffect",
      "explanation": "Component composition pattern for useeffect."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain useeffect to a beginner.",
      "answer": "useEffect is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use useeffect?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with useeffect?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does useeffect compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for useeffect.",
      "answer": "Production apps use useeffect for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing useeffect\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with useeffect."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand useeffect before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a useEffect Feature",
    "description": "Create a real-world component or module that demonstrates useeffect in action.",
    "checklist": [
      "Implement core useeffect functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of useeffect?",
      "options": [
        "To style components",
        "To work with useeffect concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with useeffect concepts effectively",
      "explanation": "useEffect is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for useeffect?",
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
      "question": "When should you use useeffect?",
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
      "question": "What is a common mistake with useeffect?",
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
      "question": "How does useeffect help in real projects?",
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
    "useEffect: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what useeffect is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic useEffect",
      "description": "Write a simple example demonstrating useeffect.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "useEffect with Data",
      "description": "Use sample data to practice useeffect.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "useEffect Output",
      "description": "Log the expected output for a useeffect exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine useEffect",
      "description": "Combine useeffect with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor useEffect",
      "description": "Refactor given code to use useeffect properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug useEffect",
      "description": "Fix the bug related to useeffect.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with useEffect",
      "description": "Build a small feature using useeffect.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "useEffect Architecture",
      "description": "Design a scalable pattern with useeffect.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>useEffect example</div>;\n}",
    "solution": "function App() {\n  return <div>useEffect example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the useeffect example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "useEffect Mini Challenge",
    "requirements": [
      "Demonstrate useeffect in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
