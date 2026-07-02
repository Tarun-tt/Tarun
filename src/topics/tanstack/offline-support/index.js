// Auto-generated topic: Offline Support
// Course: tanstack

export default {
  "id": "offline-support",
  "title": "Offline Support",
  "definition": "Offline Support is a fundamental concept in TanStack Query that every developer should master.",
  "deepExplanation": "Understanding offline support deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Offline Support syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  query   ┌─────────────┐\n│ Component│ ───────► │ Query Cache │\n│          │ ◄─────── │  Offline   │\n└──────────┘  data    └─────────────┘",
  "analogy": "Offline Support is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Getting Started with Offline Support",
      "code": "// Offline Support - Example 1\nconst config = { feature: \"offline-support\" };\nconsole.log(config);",
      "output": "{ feature: \"offline-support\" }",
      "explanation": "Foundation setup for offline support."
    },
    {
      "title": "Common Pattern",
      "code": "// Offline Support - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using offline support."
    },
    {
      "title": "Async Flow",
      "code": "// Offline Support - Example 3\nasync function load() {\n  return { topic: \"offline-support\" };\n}",
      "output": "{ topic: \"offline-support\" }",
      "explanation": "Async patterns with offline support."
    },
    {
      "title": "Error Handling",
      "code": "// Offline Support - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in offline support."
    },
    {
      "title": "Best Practice",
      "code": "// Offline Support - Example 5\nconst NAMESPACE = \"tanstack/offline-support\";\nconsole.log(NAMESPACE);",
      "output": "tanstack/offline-support",
      "explanation": "Organized naming for offline support."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain offline support to a beginner.",
      "answer": "Offline Support is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use offline support?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with offline support?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does offline support compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for offline support.",
      "answer": "Production apps use offline support for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing offline support\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with offline support."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand offline support before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Offline Support Feature",
    "description": "Create a real-world component or module that demonstrates offline support in action.",
    "checklist": [
      "Implement core offline support functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of offline support?",
      "options": [
        "To style components",
        "To work with offline support concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with offline support concepts effectively",
      "explanation": "Offline Support is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for offline support?",
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
      "question": "When should you use offline support?",
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
      "question": "What is a common mistake with offline support?",
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
      "question": "How does offline support help in real projects?",
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
    "Offline Support: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what offline support is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Offline Support",
      "description": "Write a simple example demonstrating offline support.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Offline Support with Data",
      "description": "Use sample data to practice offline support.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Offline Support Output",
      "description": "Log the expected output for a offline support exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Offline Support",
      "description": "Combine offline support with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Offline Support",
      "description": "Refactor given code to use offline support properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Offline Support",
      "description": "Fix the bug related to offline support.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Offline Support",
      "description": "Build a small feature using offline support.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Offline Support Architecture",
      "description": "Design a scalable pattern with offline support.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "import { useQuery } from '@tanstack/react-query';\n// Offline Support example\nconst { data } = useQuery({ queryKey: ['Offline Support'], queryFn: () => [] });",
    "solution": "import { useQuery } from '@tanstack/react-query';\n// Offline Support example\nconst { data } = useQuery({ queryKey: ['Offline Support'], queryFn: () => [] });\n// Solution: see examples above",
    "hint": "Try modifying the offline support example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Offline Support Mini Challenge",
    "requirements": [
      "Demonstrate offline support in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
