// Auto-generated topic: Provider
// Course: tanstack

export default {
  "id": "provider",
  "title": "Provider",
  "definition": "Provider is a fundamental concept in TanStack Query that every developer should master.",
  "deepExplanation": "Understanding provider deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Provider syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  query   ┌─────────────┐\n│ Component│ ───────► │ Query Cache │\n│          │ ◄─────── │  Provider  │\n└──────────┘  data    └─────────────┘",
  "analogy": "Provider works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Getting Started with Provider",
      "code": "// Provider - Example 1\nconst config = { feature: \"provider\" };\nconsole.log(config);",
      "output": "{ feature: \"provider\" }",
      "explanation": "Foundation setup for provider."
    },
    {
      "title": "Common Pattern",
      "code": "// Provider - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using provider."
    },
    {
      "title": "Async Flow",
      "code": "// Provider - Example 3\nasync function load() {\n  return { topic: \"provider\" };\n}",
      "output": "{ topic: \"provider\" }",
      "explanation": "Async patterns with provider."
    },
    {
      "title": "Error Handling",
      "code": "// Provider - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in provider."
    },
    {
      "title": "Best Practice",
      "code": "// Provider - Example 5\nconst NAMESPACE = \"tanstack/provider\";\nconsole.log(NAMESPACE);",
      "output": "tanstack/provider",
      "explanation": "Organized naming for provider."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain provider to a beginner.",
      "answer": "Provider is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use provider?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with provider?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does provider compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for provider.",
      "answer": "Production apps use provider for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing provider\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with provider."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand provider before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Provider Feature",
    "description": "Create a real-world component or module that demonstrates provider in action.",
    "checklist": [
      "Implement core provider functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of provider?",
      "options": [
        "To style components",
        "To work with provider concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with provider concepts effectively",
      "explanation": "Provider is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for provider?",
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
      "question": "When should you use provider?",
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
      "question": "What is a common mistake with provider?",
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
      "question": "How does provider help in real projects?",
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
    "Provider: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what provider is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Provider",
      "description": "Write a simple example demonstrating provider.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Provider with Data",
      "description": "Use sample data to practice provider.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Provider Output",
      "description": "Log the expected output for a provider exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Provider",
      "description": "Combine provider with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Provider",
      "description": "Refactor given code to use provider properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Provider",
      "description": "Fix the bug related to provider.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Provider",
      "description": "Build a small feature using provider.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Provider Architecture",
      "description": "Design a scalable pattern with provider.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "import { useQuery } from '@tanstack/react-query';\n// Provider example\nconst { data } = useQuery({ queryKey: ['Provider'], queryFn: () => [] });",
    "solution": "import { useQuery } from '@tanstack/react-query';\n// Provider example\nconst { data } = useQuery({ queryKey: ['Provider'], queryFn: () => [] });\n// Solution: see examples above",
    "hint": "Try modifying the provider example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Provider Mini Challenge",
    "requirements": [
      "Demonstrate provider in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
