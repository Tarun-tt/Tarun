// Auto-generated topic: Retry
// Course: tanstack

export default {
  "id": "retry",
  "title": "Retry",
  "definition": "Retry is a fundamental concept in TanStack Query that every developer should master.",
  "deepExplanation": "Understanding retry deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Retry syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  query   ┌─────────────┐\n│ Component│ ───────► │ Query Cache │\n│          │ ◄─────── │  Retry     │\n└──────────┘  data    └─────────────┘",
  "analogy": "Retry works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Getting Started with Retry",
      "code": "// Retry - Example 1\nconst config = { feature: \"retry\" };\nconsole.log(config);",
      "output": "{ feature: \"retry\" }",
      "explanation": "Foundation setup for retry."
    },
    {
      "title": "Common Pattern",
      "code": "// Retry - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using retry."
    },
    {
      "title": "Async Flow",
      "code": "// Retry - Example 3\nasync function load() {\n  return { topic: \"retry\" };\n}",
      "output": "{ topic: \"retry\" }",
      "explanation": "Async patterns with retry."
    },
    {
      "title": "Error Handling",
      "code": "// Retry - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in retry."
    },
    {
      "title": "Best Practice",
      "code": "// Retry - Example 5\nconst NAMESPACE = \"tanstack/retry\";\nconsole.log(NAMESPACE);",
      "output": "tanstack/retry",
      "explanation": "Organized naming for retry."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain retry to a beginner.",
      "answer": "Retry is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use retry?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with retry?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does retry compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for retry.",
      "answer": "Production apps use retry for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing retry\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with retry."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand retry before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Retry Feature",
    "description": "Create a real-world component or module that demonstrates retry in action.",
    "checklist": [
      "Implement core retry functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of retry?",
      "options": [
        "To style components",
        "To work with retry concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with retry concepts effectively",
      "explanation": "Retry is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for retry?",
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
      "question": "When should you use retry?",
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
      "question": "What is a common mistake with retry?",
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
      "question": "How does retry help in real projects?",
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
    "Retry: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what retry is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Retry",
      "description": "Write a simple example demonstrating retry.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Retry with Data",
      "description": "Use sample data to practice retry.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Retry Output",
      "description": "Log the expected output for a retry exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Retry",
      "description": "Combine retry with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Retry",
      "description": "Refactor given code to use retry properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Retry",
      "description": "Fix the bug related to retry.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Retry",
      "description": "Build a small feature using retry.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Retry Architecture",
      "description": "Design a scalable pattern with retry.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "import { useQuery } from '@tanstack/react-query';\n// Retry example\nconst { data } = useQuery({ queryKey: ['Retry'], queryFn: () => [] });",
    "solution": "import { useQuery } from '@tanstack/react-query';\n// Retry example\nconst { data } = useQuery({ queryKey: ['Retry'], queryFn: () => [] });\n// Solution: see examples above",
    "hint": "Try modifying the retry example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Retry Mini Challenge",
    "requirements": [
      "Demonstrate retry in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
