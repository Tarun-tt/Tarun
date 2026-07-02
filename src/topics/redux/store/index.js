// Auto-generated topic: Store
// Course: redux

export default {
  "id": "store",
  "title": "Store",
  "definition": "Store is a fundamental concept in Redux Toolkit that every developer should master.",
  "deepExplanation": "Understanding store deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Store syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌────────┐  dispatch  ┌─────────┐\n│   UI   │ ──────────► │  Store  │\n│        │ ◄────────── │ Store    │\n└────────┘  subscribe  └─────────┘",
  "analogy": "Store works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Getting Started with Store",
      "code": "// Store - Example 1\nconst config = { feature: \"store\" };\nconsole.log(config);",
      "output": "{ feature: \"store\" }",
      "explanation": "Foundation setup for store."
    },
    {
      "title": "Common Pattern",
      "code": "// Store - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using store."
    },
    {
      "title": "Async Flow",
      "code": "// Store - Example 3\nasync function load() {\n  return { topic: \"store\" };\n}",
      "output": "{ topic: \"store\" }",
      "explanation": "Async patterns with store."
    },
    {
      "title": "Error Handling",
      "code": "// Store - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in store."
    },
    {
      "title": "Best Practice",
      "code": "// Store - Example 5\nconst NAMESPACE = \"redux/store\";\nconsole.log(NAMESPACE);",
      "output": "redux/store",
      "explanation": "Organized naming for store."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain store to a beginner.",
      "answer": "Store is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use store?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with store?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does store compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for store.",
      "answer": "Production apps use store for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing store\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with store."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand store before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Store Feature",
    "description": "Create a real-world component or module that demonstrates store in action.",
    "checklist": [
      "Implement core store functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of store?",
      "options": [
        "To style components",
        "To work with store concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with store concepts effectively",
      "explanation": "Store is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for store?",
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
      "question": "When should you use store?",
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
      "question": "What is a common mistake with store?",
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
      "question": "How does store help in real projects?",
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
    "Store: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what store is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Store",
      "description": "Write a simple example demonstrating store.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Store with Data",
      "description": "Use sample data to practice store.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Store Output",
      "description": "Log the expected output for a store exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Store",
      "description": "Combine store with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Store",
      "description": "Refactor given code to use store properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Store",
      "description": "Fix the bug related to store.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Store",
      "description": "Build a small feature using store.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Store Architecture",
      "description": "Design a scalable pattern with store.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "import { createSlice } from '@reduxjs/toolkit';\n// Store example\nconst slice = createSlice({\n  name: 'Store',\n  initialState: {},\n  reducers: {},\n});",
    "solution": "import { createSlice } from '@reduxjs/toolkit';\n// Store example\nconst slice = createSlice({\n  name: 'Store',\n  initialState: {},\n  reducers: {},\n});\n// Solution: see examples above",
    "hint": "Try modifying the store example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Store Mini Challenge",
    "requirements": [
      "Demonstrate store in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
