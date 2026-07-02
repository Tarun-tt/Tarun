// Auto-generated topic: Thunk
// Course: redux

export default {
  "id": "thunk",
  "title": "Thunk",
  "definition": "Thunk is a fundamental concept in Redux Toolkit that every developer should master.",
  "deepExplanation": "Understanding thunk deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Thunk syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌────────┐  dispatch  ┌─────────┐\n│   UI   │ ──────────► │  Store  │\n│        │ ◄────────── │ Thunk    │\n└────────┘  subscribe  └─────────┘",
  "analogy": "Thunk works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Getting Started with Thunk",
      "code": "// Thunk - Example 1\nconst config = { feature: \"thunk\" };\nconsole.log(config);",
      "output": "{ feature: \"thunk\" }",
      "explanation": "Foundation setup for thunk."
    },
    {
      "title": "Common Pattern",
      "code": "// Thunk - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using thunk."
    },
    {
      "title": "Async Flow",
      "code": "// Thunk - Example 3\nasync function load() {\n  return { topic: \"thunk\" };\n}",
      "output": "{ topic: \"thunk\" }",
      "explanation": "Async patterns with thunk."
    },
    {
      "title": "Error Handling",
      "code": "// Thunk - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in thunk."
    },
    {
      "title": "Best Practice",
      "code": "// Thunk - Example 5\nconst NAMESPACE = \"redux/thunk\";\nconsole.log(NAMESPACE);",
      "output": "redux/thunk",
      "explanation": "Organized naming for thunk."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain thunk to a beginner.",
      "answer": "Thunk is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use thunk?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with thunk?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does thunk compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for thunk.",
      "answer": "Production apps use thunk for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing thunk\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with thunk."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand thunk before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Thunk Feature",
    "description": "Create a real-world component or module that demonstrates thunk in action.",
    "checklist": [
      "Implement core thunk functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of thunk?",
      "options": [
        "To style components",
        "To work with thunk concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with thunk concepts effectively",
      "explanation": "Thunk is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for thunk?",
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
      "question": "When should you use thunk?",
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
      "question": "What is a common mistake with thunk?",
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
      "question": "How does thunk help in real projects?",
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
    "Thunk: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what thunk is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Thunk",
      "description": "Write a simple example demonstrating thunk.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Thunk with Data",
      "description": "Use sample data to practice thunk.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Thunk Output",
      "description": "Log the expected output for a thunk exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Thunk",
      "description": "Combine thunk with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Thunk",
      "description": "Refactor given code to use thunk properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Thunk",
      "description": "Fix the bug related to thunk.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Thunk",
      "description": "Build a small feature using thunk.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Thunk Architecture",
      "description": "Design a scalable pattern with thunk.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "import { createSlice } from '@reduxjs/toolkit';\n// Thunk example\nconst slice = createSlice({\n  name: 'Thunk',\n  initialState: {},\n  reducers: {},\n});",
    "solution": "import { createSlice } from '@reduxjs/toolkit';\n// Thunk example\nconst slice = createSlice({\n  name: 'Thunk',\n  initialState: {},\n  reducers: {},\n});\n// Solution: see examples above",
    "hint": "Try modifying the thunk example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Thunk Mini Challenge",
    "requirements": [
      "Demonstrate thunk in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
