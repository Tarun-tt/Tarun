// Auto-generated topic: Normalization
// Course: redux

export default {
  "id": "normalization",
  "title": "Normalization",
  "definition": "Normalization is a fundamental concept in Redux Toolkit that every developer should master.",
  "deepExplanation": "Understanding normalization deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Normalization syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌────────┐  dispatch  ┌─────────┐\n│   UI   │ ──────────► │  Store  │\n│        │ ◄────────── │ Normaliz │\n└────────┘  subscribe  └─────────┘",
  "analogy": "Think of Normalization as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Getting Started with Normalization",
      "code": "// Normalization - Example 1\nconst config = { feature: \"normalization\" };\nconsole.log(config);",
      "output": "{ feature: \"normalization\" }",
      "explanation": "Foundation setup for normalization."
    },
    {
      "title": "Common Pattern",
      "code": "// Normalization - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using normalization."
    },
    {
      "title": "Async Flow",
      "code": "// Normalization - Example 3\nasync function load() {\n  return { topic: \"normalization\" };\n}",
      "output": "{ topic: \"normalization\" }",
      "explanation": "Async patterns with normalization."
    },
    {
      "title": "Error Handling",
      "code": "// Normalization - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in normalization."
    },
    {
      "title": "Best Practice",
      "code": "// Normalization - Example 5\nconst NAMESPACE = \"redux/normalization\";\nconsole.log(NAMESPACE);",
      "output": "redux/normalization",
      "explanation": "Organized naming for normalization."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain normalization to a beginner.",
      "answer": "Normalization is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use normalization?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with normalization?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does normalization compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for normalization.",
      "answer": "Production apps use normalization for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing normalization\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with normalization."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand normalization before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Normalization Feature",
    "description": "Create a real-world component or module that demonstrates normalization in action.",
    "checklist": [
      "Implement core normalization functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of normalization?",
      "options": [
        "To style components",
        "To work with normalization concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with normalization concepts effectively",
      "explanation": "Normalization is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for normalization?",
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
      "question": "When should you use normalization?",
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
      "question": "What is a common mistake with normalization?",
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
      "question": "How does normalization help in real projects?",
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
    "Normalization: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what normalization is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Normalization",
      "description": "Write a simple example demonstrating normalization.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Normalization with Data",
      "description": "Use sample data to practice normalization.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Normalization Output",
      "description": "Log the expected output for a normalization exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Normalization",
      "description": "Combine normalization with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Normalization",
      "description": "Refactor given code to use normalization properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Normalization",
      "description": "Fix the bug related to normalization.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Normalization",
      "description": "Build a small feature using normalization.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Normalization Architecture",
      "description": "Design a scalable pattern with normalization.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "import { createSlice } from '@reduxjs/toolkit';\n// Normalization example\nconst slice = createSlice({\n  name: 'Normalization',\n  initialState: {},\n  reducers: {},\n});",
    "solution": "import { createSlice } from '@reduxjs/toolkit';\n// Normalization example\nconst slice = createSlice({\n  name: 'Normalization',\n  initialState: {},\n  reducers: {},\n});\n// Solution: see examples above",
    "hint": "Try modifying the normalization example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Normalization Mini Challenge",
    "requirements": [
      "Demonstrate normalization in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
