// Auto-generated topic: gcTime
// Course: tanstack

export default {
  "id": "gc-time",
  "title": "gcTime",
  "definition": "gcTime is a fundamental concept in TanStack Query that every developer should master.",
  "deepExplanation": "Understanding gctime deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// gcTime syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  query   ┌─────────────┐\n│ Component│ ───────► │ Query Cache │\n│          │ ◄─────── │  gcTime    │\n└──────────┘  data    └─────────────┘",
  "analogy": "gcTime is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Getting Started with gcTime",
      "code": "// gcTime - Example 1\nconst config = { feature: \"gc-time\" };\nconsole.log(config);",
      "output": "{ feature: \"gc-time\" }",
      "explanation": "Foundation setup for gctime."
    },
    {
      "title": "Common Pattern",
      "code": "// gcTime - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using gctime."
    },
    {
      "title": "Async Flow",
      "code": "// gcTime - Example 3\nasync function load() {\n  return { topic: \"gc-time\" };\n}",
      "output": "{ topic: \"gc-time\" }",
      "explanation": "Async patterns with gctime."
    },
    {
      "title": "Error Handling",
      "code": "// gcTime - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in gctime."
    },
    {
      "title": "Best Practice",
      "code": "// gcTime - Example 5\nconst NAMESPACE = \"tanstack/gc-time\";\nconsole.log(NAMESPACE);",
      "output": "tanstack/gc-time",
      "explanation": "Organized naming for gctime."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain gctime to a beginner.",
      "answer": "gcTime is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use gctime?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with gctime?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does gctime compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for gctime.",
      "answer": "Production apps use gctime for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing gctime\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with gctime."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand gctime before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a gcTime Feature",
    "description": "Create a real-world component or module that demonstrates gctime in action.",
    "checklist": [
      "Implement core gctime functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of gctime?",
      "options": [
        "To style components",
        "To work with gctime concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with gctime concepts effectively",
      "explanation": "gcTime is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for gctime?",
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
      "question": "When should you use gctime?",
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
      "question": "What is a common mistake with gctime?",
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
      "question": "How does gctime help in real projects?",
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
    "gcTime: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what gctime is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic gcTime",
      "description": "Write a simple example demonstrating gctime.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "gcTime with Data",
      "description": "Use sample data to practice gctime.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "gcTime Output",
      "description": "Log the expected output for a gctime exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine gcTime",
      "description": "Combine gctime with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor gcTime",
      "description": "Refactor given code to use gctime properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug gcTime",
      "description": "Fix the bug related to gctime.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with gcTime",
      "description": "Build a small feature using gctime.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "gcTime Architecture",
      "description": "Design a scalable pattern with gctime.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "import { useQuery } from '@tanstack/react-query';\n// gcTime example\nconst { data } = useQuery({ queryKey: ['gcTime'], queryFn: () => [] });",
    "solution": "import { useQuery } from '@tanstack/react-query';\n// gcTime example\nconst { data } = useQuery({ queryKey: ['gcTime'], queryFn: () => [] });\n// Solution: see examples above",
    "hint": "Try modifying the gctime example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "gcTime Mini Challenge",
    "requirements": [
      "Demonstrate gctime in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
