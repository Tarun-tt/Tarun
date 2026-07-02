// Auto-generated topic: Prefetch
// Course: tanstack

export default {
  "id": "prefetch",
  "title": "Prefetch",
  "definition": "Prefetch is a fundamental concept in TanStack Query that every developer should master.",
  "deepExplanation": "Understanding prefetch deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Prefetch syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  query   ┌─────────────┐\n│ Component│ ───────► │ Query Cache │\n│          │ ◄─────── │  Prefetch  │\n└──────────┘  data    └─────────────┘",
  "analogy": "Prefetch works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Getting Started with Prefetch",
      "code": "// Prefetch - Example 1\nconst config = { feature: \"prefetch\" };\nconsole.log(config);",
      "output": "{ feature: \"prefetch\" }",
      "explanation": "Foundation setup for prefetch."
    },
    {
      "title": "Common Pattern",
      "code": "// Prefetch - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using prefetch."
    },
    {
      "title": "Async Flow",
      "code": "// Prefetch - Example 3\nasync function load() {\n  return { topic: \"prefetch\" };\n}",
      "output": "{ topic: \"prefetch\" }",
      "explanation": "Async patterns with prefetch."
    },
    {
      "title": "Error Handling",
      "code": "// Prefetch - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in prefetch."
    },
    {
      "title": "Best Practice",
      "code": "// Prefetch - Example 5\nconst NAMESPACE = \"tanstack/prefetch\";\nconsole.log(NAMESPACE);",
      "output": "tanstack/prefetch",
      "explanation": "Organized naming for prefetch."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain prefetch to a beginner.",
      "answer": "Prefetch is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use prefetch?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with prefetch?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does prefetch compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for prefetch.",
      "answer": "Production apps use prefetch for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing prefetch\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with prefetch."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand prefetch before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Prefetch Feature",
    "description": "Create a real-world component or module that demonstrates prefetch in action.",
    "checklist": [
      "Implement core prefetch functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of prefetch?",
      "options": [
        "To style components",
        "To work with prefetch concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with prefetch concepts effectively",
      "explanation": "Prefetch is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for prefetch?",
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
      "question": "When should you use prefetch?",
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
      "question": "What is a common mistake with prefetch?",
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
      "question": "How does prefetch help in real projects?",
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
    "Prefetch: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what prefetch is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Prefetch",
      "description": "Write a simple example demonstrating prefetch.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Prefetch with Data",
      "description": "Use sample data to practice prefetch.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Prefetch Output",
      "description": "Log the expected output for a prefetch exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Prefetch",
      "description": "Combine prefetch with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Prefetch",
      "description": "Refactor given code to use prefetch properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Prefetch",
      "description": "Fix the bug related to prefetch.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Prefetch",
      "description": "Build a small feature using prefetch.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Prefetch Architecture",
      "description": "Design a scalable pattern with prefetch.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "import { useQuery } from '@tanstack/react-query';\n// Prefetch example\nconst { data } = useQuery({ queryKey: ['Prefetch'], queryFn: () => [] });",
    "solution": "import { useQuery } from '@tanstack/react-query';\n// Prefetch example\nconst { data } = useQuery({ queryKey: ['Prefetch'], queryFn: () => [] });\n// Solution: see examples above",
    "hint": "Try modifying the prefetch example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Prefetch Mini Challenge",
    "requirements": [
      "Demonstrate prefetch in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
