// Auto-generated topic: Extra Reducers
// Course: redux

export default {
  "id": "extra-reducers",
  "title": "Extra Reducers",
  "definition": "Extra Reducers is a fundamental concept in Redux Toolkit that every developer should master.",
  "deepExplanation": "Understanding extra reducers deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Extra Reducers syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌────────┐  dispatch  ┌─────────┐\n│   UI   │ ──────────► │  Store  │\n│        │ ◄────────── │ Extra Re │\n└────────┘  subscribe  └─────────┘",
  "analogy": "Extra Reducers works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Getting Started with Extra Reducers",
      "code": "// Extra Reducers - Example 1\nconst config = { feature: \"extra-reducers\" };\nconsole.log(config);",
      "output": "{ feature: \"extra-reducers\" }",
      "explanation": "Foundation setup for extra reducers."
    },
    {
      "title": "Common Pattern",
      "code": "// Extra Reducers - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using extra reducers."
    },
    {
      "title": "Async Flow",
      "code": "// Extra Reducers - Example 3\nasync function load() {\n  return { topic: \"extra-reducers\" };\n}",
      "output": "{ topic: \"extra-reducers\" }",
      "explanation": "Async patterns with extra reducers."
    },
    {
      "title": "Error Handling",
      "code": "// Extra Reducers - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in extra reducers."
    },
    {
      "title": "Best Practice",
      "code": "// Extra Reducers - Example 5\nconst NAMESPACE = \"redux/extra-reducers\";\nconsole.log(NAMESPACE);",
      "output": "redux/extra-reducers",
      "explanation": "Organized naming for extra reducers."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain extra reducers to a beginner.",
      "answer": "Extra Reducers is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use extra reducers?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with extra reducers?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does extra reducers compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for extra reducers.",
      "answer": "Production apps use extra reducers for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing extra reducers\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with extra reducers."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand extra reducers before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Extra Reducers Feature",
    "description": "Create a real-world component or module that demonstrates extra reducers in action.",
    "checklist": [
      "Implement core extra reducers functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of extra reducers?",
      "options": [
        "To style components",
        "To work with extra reducers concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with extra reducers concepts effectively",
      "explanation": "Extra Reducers is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for extra reducers?",
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
      "question": "When should you use extra reducers?",
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
      "question": "What is a common mistake with extra reducers?",
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
      "question": "How does extra reducers help in real projects?",
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
    "Extra Reducers: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what extra reducers is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Extra Reducers",
      "description": "Write a simple example demonstrating extra reducers.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Extra Reducers with Data",
      "description": "Use sample data to practice extra reducers.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Extra Reducers Output",
      "description": "Log the expected output for a extra reducers exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Extra Reducers",
      "description": "Combine extra reducers with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Extra Reducers",
      "description": "Refactor given code to use extra reducers properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Extra Reducers",
      "description": "Fix the bug related to extra reducers.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Extra Reducers",
      "description": "Build a small feature using extra reducers.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Extra Reducers Architecture",
      "description": "Design a scalable pattern with extra reducers.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "import { createSlice } from '@reduxjs/toolkit';\n// Extra Reducers example\nconst slice = createSlice({\n  name: 'Extra Reducers',\n  initialState: {},\n  reducers: {},\n});",
    "solution": "import { createSlice } from '@reduxjs/toolkit';\n// Extra Reducers example\nconst slice = createSlice({\n  name: 'Extra Reducers',\n  initialState: {},\n  reducers: {},\n});\n// Solution: see examples above",
    "hint": "Try modifying the extra reducers example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Extra Reducers Mini Challenge",
    "requirements": [
      "Demonstrate extra reducers in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
