// Auto-generated topic: Selectors
// Course: redux

export default {
  "id": "selectors",
  "title": "Selectors",
  "definition": "Selectors is a fundamental concept in Redux Toolkit that every developer should master.",
  "deepExplanation": "Understanding selectors deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Selectors syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌────────┐  dispatch  ┌─────────┐\n│   UI   │ ──────────► │  Store  │\n│        │ ◄────────── │ Selector │\n└────────┘  subscribe  └─────────┘",
  "analogy": "Selectors is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Getting Started with Selectors",
      "code": "// Selectors - Example 1\nconst config = { feature: \"selectors\" };\nconsole.log(config);",
      "output": "{ feature: \"selectors\" }",
      "explanation": "Foundation setup for selectors."
    },
    {
      "title": "Common Pattern",
      "code": "// Selectors - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using selectors."
    },
    {
      "title": "Async Flow",
      "code": "// Selectors - Example 3\nasync function load() {\n  return { topic: \"selectors\" };\n}",
      "output": "{ topic: \"selectors\" }",
      "explanation": "Async patterns with selectors."
    },
    {
      "title": "Error Handling",
      "code": "// Selectors - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in selectors."
    },
    {
      "title": "Best Practice",
      "code": "// Selectors - Example 5\nconst NAMESPACE = \"redux/selectors\";\nconsole.log(NAMESPACE);",
      "output": "redux/selectors",
      "explanation": "Organized naming for selectors."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain selectors to a beginner.",
      "answer": "Selectors is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use selectors?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with selectors?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does selectors compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for selectors.",
      "answer": "Production apps use selectors for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing selectors\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with selectors."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand selectors before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Selectors Feature",
    "description": "Create a real-world component or module that demonstrates selectors in action.",
    "checklist": [
      "Implement core selectors functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of selectors?",
      "options": [
        "To style components",
        "To work with selectors concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with selectors concepts effectively",
      "explanation": "Selectors is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for selectors?",
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
      "question": "When should you use selectors?",
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
      "question": "What is a common mistake with selectors?",
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
      "question": "How does selectors help in real projects?",
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
    "Selectors: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what selectors is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Selectors",
      "description": "Write a simple example demonstrating selectors.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Selectors with Data",
      "description": "Use sample data to practice selectors.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Selectors Output",
      "description": "Log the expected output for a selectors exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Selectors",
      "description": "Combine selectors with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Selectors",
      "description": "Refactor given code to use selectors properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Selectors",
      "description": "Fix the bug related to selectors.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Selectors",
      "description": "Build a small feature using selectors.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Selectors Architecture",
      "description": "Design a scalable pattern with selectors.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "import { createSlice } from '@reduxjs/toolkit';\n// Selectors example\nconst slice = createSlice({\n  name: 'Selectors',\n  initialState: {},\n  reducers: {},\n});",
    "solution": "import { createSlice } from '@reduxjs/toolkit';\n// Selectors example\nconst slice = createSlice({\n  name: 'Selectors',\n  initialState: {},\n  reducers: {},\n});\n// Solution: see examples above",
    "hint": "Try modifying the selectors example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Selectors Mini Challenge",
    "requirements": [
      "Demonstrate selectors in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
