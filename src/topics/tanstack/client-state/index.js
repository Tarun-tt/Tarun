// Auto-generated topic: Client State
// Course: tanstack

export default {
  "id": "client-state",
  "title": "Client State",
  "definition": "Client State is a fundamental concept in TanStack Query that every developer should master.",
  "deepExplanation": "Understanding client state deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Client State syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  query   ┌─────────────┐\n│ Component│ ───────► │ Query Cache │\n│          │ ◄─────── │  Client S  │\n└──────────┘  data    └─────────────┘",
  "analogy": "Client State is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Getting Started with Client State",
      "code": "// Client State - Example 1\nconst config = { feature: \"client-state\" };\nconsole.log(config);",
      "output": "{ feature: \"client-state\" }",
      "explanation": "Foundation setup for client state."
    },
    {
      "title": "Common Pattern",
      "code": "// Client State - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using client state."
    },
    {
      "title": "Async Flow",
      "code": "// Client State - Example 3\nasync function load() {\n  return { topic: \"client-state\" };\n}",
      "output": "{ topic: \"client-state\" }",
      "explanation": "Async patterns with client state."
    },
    {
      "title": "Error Handling",
      "code": "// Client State - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in client state."
    },
    {
      "title": "Best Practice",
      "code": "// Client State - Example 5\nconst NAMESPACE = \"tanstack/client-state\";\nconsole.log(NAMESPACE);",
      "output": "tanstack/client-state",
      "explanation": "Organized naming for client state."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain client state to a beginner.",
      "answer": "Client State is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use client state?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with client state?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does client state compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for client state.",
      "answer": "Production apps use client state for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing client state\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with client state."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand client state before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Client State Feature",
    "description": "Create a real-world component or module that demonstrates client state in action.",
    "checklist": [
      "Implement core client state functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of client state?",
      "options": [
        "To style components",
        "To work with client state concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with client state concepts effectively",
      "explanation": "Client State is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for client state?",
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
      "question": "When should you use client state?",
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
      "question": "What is a common mistake with client state?",
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
      "question": "How does client state help in real projects?",
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
    "Client State: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what client state is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Client State",
      "description": "Write a simple example demonstrating client state.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Client State with Data",
      "description": "Use sample data to practice client state.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Client State Output",
      "description": "Log the expected output for a client state exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Client State",
      "description": "Combine client state with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Client State",
      "description": "Refactor given code to use client state properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Client State",
      "description": "Fix the bug related to client state.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Client State",
      "description": "Build a small feature using client state.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Client State Architecture",
      "description": "Design a scalable pattern with client state.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "import { useQuery } from '@tanstack/react-query';\n// Client State example\nconst { data } = useQuery({ queryKey: ['Client State'], queryFn: () => [] });",
    "solution": "import { useQuery } from '@tanstack/react-query';\n// Client State example\nconst { data } = useQuery({ queryKey: ['Client State'], queryFn: () => [] });\n// Solution: see examples above",
    "hint": "Try modifying the client state example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Client State Mini Challenge",
    "requirements": [
      "Demonstrate client state in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
