// Auto-generated topic: Accessibility
// Course: react

export default {
  "id": "accessibility",
  "title": "Accessibility",
  "definition": "Accessibility is a fundamental concept in React that every developer should master.",
  "deepExplanation": "Understanding accessibility deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Accessibility syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  props   ┌──────────────┐\n│  Parent  │ ───────► │    Accessibility   │\n│ Component│ ◄─────── │   Component  │\n└──────────┘ children └──────────────┘",
  "analogy": "Think of Accessibility as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Simple Accessibility",
      "code": "function AccessibilityDemo() {\n  return <div>Accessibility Component</div>;\n}",
      "output": "Accessibility Component",
      "explanation": "A minimal component demonstrating accessibility."
    },
    {
      "title": "With Props",
      "code": "function Card({ title }) {\n  return <article><h3>{title}</h3></article>;\n}\n// <Card title=\"Accessibility\" />",
      "output": "Accessibility",
      "explanation": "Passes data via props in a accessibility context."
    },
    {
      "title": "With State",
      "code": "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
      "output": "0 (clickable)",
      "explanation": "Interactive example related to accessibility."
    },
    {
      "title": "List Rendering",
      "code": "const items = ['Accessibility', 'React', 'JS'];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      "output": "Accessibility React JS",
      "explanation": "Renders collections — common with accessibility."
    },
    {
      "title": "Composition",
      "code": "function Wrapper({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n// <Wrapper><p>Accessibility</p></Wrapper>",
      "output": "Accessibility",
      "explanation": "Component composition pattern for accessibility."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain accessibility to a beginner.",
      "answer": "Accessibility is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use accessibility?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with accessibility?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does accessibility compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for accessibility.",
      "answer": "Production apps use accessibility for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing accessibility\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with accessibility."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand accessibility before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Accessibility Feature",
    "description": "Create a real-world component or module that demonstrates accessibility in action.",
    "checklist": [
      "Implement core accessibility functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of accessibility?",
      "options": [
        "To style components",
        "To work with accessibility concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with accessibility concepts effectively",
      "explanation": "Accessibility is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for accessibility?",
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
      "question": "When should you use accessibility?",
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
      "question": "What is a common mistake with accessibility?",
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
      "question": "How does accessibility help in real projects?",
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
    "Accessibility: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what accessibility is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Accessibility",
      "description": "Write a simple example demonstrating accessibility.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Accessibility with Data",
      "description": "Use sample data to practice accessibility.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Accessibility Output",
      "description": "Log the expected output for a accessibility exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Accessibility",
      "description": "Combine accessibility with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Accessibility",
      "description": "Refactor given code to use accessibility properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Accessibility",
      "description": "Fix the bug related to accessibility.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Accessibility",
      "description": "Build a small feature using accessibility.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Accessibility Architecture",
      "description": "Design a scalable pattern with accessibility.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "function App() {\n  return <div>Accessibility example</div>;\n}",
    "solution": "function App() {\n  return <div>Accessibility example</div>;\n}\n// Solution: see examples above",
    "hint": "Try modifying the accessibility example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Accessibility Mini Challenge",
    "requirements": [
      "Demonstrate accessibility in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
