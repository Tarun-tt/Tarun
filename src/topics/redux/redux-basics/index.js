// Auto-generated topic: Redux Basics
// Course: redux

export default {
  "id": "redux-basics",
  "title": "Redux Basics",
  "definition": "Redux Basics is a fundamental concept in Redux Toolkit that every developer should master.",
  "deepExplanation": "Understanding redux basics deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Redux Basics syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌────────┐  dispatch  ┌─────────┐\n│   UI   │ ──────────► │  Store  │\n│        │ ◄────────── │ Redux Ba │\n└────────┘  subscribe  └─────────┘",
  "analogy": "Redux Basics is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Getting Started with Redux Basics",
      "code": "// Redux Basics - Example 1\nconst config = { feature: \"redux-basics\" };\nconsole.log(config);",
      "output": "{ feature: \"redux-basics\" }",
      "explanation": "Foundation setup for redux basics."
    },
    {
      "title": "Common Pattern",
      "code": "// Redux Basics - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using redux basics."
    },
    {
      "title": "Async Flow",
      "code": "// Redux Basics - Example 3\nasync function load() {\n  return { topic: \"redux-basics\" };\n}",
      "output": "{ topic: \"redux-basics\" }",
      "explanation": "Async patterns with redux basics."
    },
    {
      "title": "Error Handling",
      "code": "// Redux Basics - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in redux basics."
    },
    {
      "title": "Best Practice",
      "code": "// Redux Basics - Example 5\nconst NAMESPACE = \"redux/redux-basics\";\nconsole.log(NAMESPACE);",
      "output": "redux/redux-basics",
      "explanation": "Organized naming for redux basics."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain redux basics to a beginner.",
      "answer": "Redux Basics is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use redux basics?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with redux basics?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does redux basics compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for redux basics.",
      "answer": "Production apps use redux basics for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing redux basics\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with redux basics."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand redux basics before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Redux Basics Feature",
    "description": "Create a real-world component or module that demonstrates redux basics in action.",
    "checklist": [
      "Implement core redux basics functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of redux basics?",
      "options": [
        "To style components",
        "To work with redux basics concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with redux basics concepts effectively",
      "explanation": "Redux Basics is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for redux basics?",
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
      "question": "When should you use redux basics?",
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
      "question": "What is a common mistake with redux basics?",
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
      "question": "How does redux basics help in real projects?",
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
    "Redux Basics: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what redux basics is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Redux Basics",
      "description": "Write a simple example demonstrating redux basics.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Redux Basics with Data",
      "description": "Use sample data to practice redux basics.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Redux Basics Output",
      "description": "Log the expected output for a redux basics exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Redux Basics",
      "description": "Combine redux basics with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Redux Basics",
      "description": "Refactor given code to use redux basics properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Redux Basics",
      "description": "Fix the bug related to redux basics.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Redux Basics",
      "description": "Build a small feature using redux basics.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Redux Basics Architecture",
      "description": "Design a scalable pattern with redux basics.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "import { createSlice } from '@reduxjs/toolkit';\n// Redux Basics example\nconst slice = createSlice({\n  name: 'Redux Basics',\n  initialState: {},\n  reducers: {},\n});",
    "solution": "import { createSlice } from '@reduxjs/toolkit';\n// Redux Basics example\nconst slice = createSlice({\n  name: 'Redux Basics',\n  initialState: {},\n  reducers: {},\n});\n// Solution: see examples above",
    "hint": "Try modifying the redux basics example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Redux Basics Mini Challenge",
    "requirements": [
      "Demonstrate redux basics in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
