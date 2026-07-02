// Auto-generated topic: Refetch
// Course: tanstack

export default {
  "id": "refetch",
  "title": "Refetch",
  "definition": "Refetch is a fundamental concept in TanStack Query that every developer should master.",
  "deepExplanation": "Understanding refetch deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Refetch syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  query   ┌─────────────┐\n│ Component│ ───────► │ Query Cache │\n│          │ ◄─────── │  Refetch   │\n└──────────┘  data    └─────────────┘",
  "analogy": "Think of Refetch as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Getting Started with Refetch",
      "code": "// Refetch - Example 1\nconst config = { feature: \"refetch\" };\nconsole.log(config);",
      "output": "{ feature: \"refetch\" }",
      "explanation": "Foundation setup for refetch."
    },
    {
      "title": "Common Pattern",
      "code": "// Refetch - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using refetch."
    },
    {
      "title": "Async Flow",
      "code": "// Refetch - Example 3\nasync function load() {\n  return { topic: \"refetch\" };\n}",
      "output": "{ topic: \"refetch\" }",
      "explanation": "Async patterns with refetch."
    },
    {
      "title": "Error Handling",
      "code": "// Refetch - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in refetch."
    },
    {
      "title": "Best Practice",
      "code": "// Refetch - Example 5\nconst NAMESPACE = \"tanstack/refetch\";\nconsole.log(NAMESPACE);",
      "output": "tanstack/refetch",
      "explanation": "Organized naming for refetch."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain refetch to a beginner.",
      "answer": "Refetch is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use refetch?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with refetch?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does refetch compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for refetch.",
      "answer": "Production apps use refetch for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing refetch\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with refetch."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand refetch before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Refetch Feature",
    "description": "Create a real-world component or module that demonstrates refetch in action.",
    "checklist": [
      "Implement core refetch functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of refetch?",
      "options": [
        "To style components",
        "To work with refetch concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with refetch concepts effectively",
      "explanation": "Refetch is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for refetch?",
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
      "question": "When should you use refetch?",
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
      "question": "What is a common mistake with refetch?",
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
      "question": "How does refetch help in real projects?",
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
    "Refetch: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what refetch is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Refetch",
      "description": "Write a simple example demonstrating refetch.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Refetch with Data",
      "description": "Use sample data to practice refetch.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Refetch Output",
      "description": "Log the expected output for a refetch exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Refetch",
      "description": "Combine refetch with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Refetch",
      "description": "Refactor given code to use refetch properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Refetch",
      "description": "Fix the bug related to refetch.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Refetch",
      "description": "Build a small feature using refetch.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Refetch Architecture",
      "description": "Design a scalable pattern with refetch.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "import { useQuery } from '@tanstack/react-query';\n// Refetch example\nconst { data } = useQuery({ queryKey: ['Refetch'], queryFn: () => [] });",
    "solution": "import { useQuery } from '@tanstack/react-query';\n// Refetch example\nconst { data } = useQuery({ queryKey: ['Refetch'], queryFn: () => [] });\n// Solution: see examples above",
    "hint": "Try modifying the refetch example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Refetch Mini Challenge",
    "requirements": [
      "Demonstrate refetch in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
