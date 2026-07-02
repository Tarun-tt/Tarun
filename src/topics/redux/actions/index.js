// Auto-generated topic: Actions
// Course: redux

export default {
  "id": "actions",
  "title": "Actions",
  "definition": "Actions is a fundamental concept in Redux Toolkit that every developer should master.",
  "deepExplanation": "Understanding actions deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Actions syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌────────┐  dispatch  ┌─────────┐\n│   UI   │ ──────────► │  Store  │\n│        │ ◄────────── │ Actions  │\n└────────┘  subscribe  └─────────┘",
  "analogy": "Think of Actions as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Getting Started with Actions",
      "code": "// Actions - Example 1\nconst config = { feature: \"actions\" };\nconsole.log(config);",
      "output": "{ feature: \"actions\" }",
      "explanation": "Foundation setup for actions."
    },
    {
      "title": "Common Pattern",
      "code": "// Actions - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using actions."
    },
    {
      "title": "Async Flow",
      "code": "// Actions - Example 3\nasync function load() {\n  return { topic: \"actions\" };\n}",
      "output": "{ topic: \"actions\" }",
      "explanation": "Async patterns with actions."
    },
    {
      "title": "Error Handling",
      "code": "// Actions - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in actions."
    },
    {
      "title": "Best Practice",
      "code": "// Actions - Example 5\nconst NAMESPACE = \"redux/actions\";\nconsole.log(NAMESPACE);",
      "output": "redux/actions",
      "explanation": "Organized naming for actions."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain actions to a beginner.",
      "answer": "Actions is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use actions?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with actions?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does actions compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for actions.",
      "answer": "Production apps use actions for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing actions\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with actions."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand actions before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Actions Feature",
    "description": "Create a real-world component or module that demonstrates actions in action.",
    "checklist": [
      "Implement core actions functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of actions?",
      "options": [
        "To style components",
        "To work with actions concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with actions concepts effectively",
      "explanation": "Actions is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for actions?",
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
      "question": "When should you use actions?",
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
      "question": "What is a common mistake with actions?",
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
      "question": "How does actions help in real projects?",
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
    "Actions: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what actions is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Actions",
      "description": "Write a simple example demonstrating actions.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Actions with Data",
      "description": "Use sample data to practice actions.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Actions Output",
      "description": "Log the expected output for a actions exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Actions",
      "description": "Combine actions with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Actions",
      "description": "Refactor given code to use actions properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Actions",
      "description": "Fix the bug related to actions.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Actions",
      "description": "Build a small feature using actions.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Actions Architecture",
      "description": "Design a scalable pattern with actions.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "import { createSlice } from '@reduxjs/toolkit';\n// Actions example\nconst slice = createSlice({\n  name: 'Actions',\n  initialState: {},\n  reducers: {},\n});",
    "solution": "import { createSlice } from '@reduxjs/toolkit';\n// Actions example\nconst slice = createSlice({\n  name: 'Actions',\n  initialState: {},\n  reducers: {},\n});\n// Solution: see examples above",
    "hint": "Try modifying the actions example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Actions Mini Challenge",
    "requirements": [
      "Demonstrate actions in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
