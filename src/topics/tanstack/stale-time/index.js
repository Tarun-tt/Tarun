// Auto-generated topic: staleTime
// Course: tanstack

export default {
  "id": "stale-time",
  "title": "staleTime",
  "definition": "staleTime is a fundamental concept in TanStack Query that every developer should master.",
  "deepExplanation": "Understanding staletime deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// staleTime syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  query   ┌─────────────┐\n│ Component│ ───────► │ Query Cache │\n│          │ ◄─────── │  staleTim  │\n└──────────┘  data    └─────────────┘",
  "analogy": "staleTime is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Getting Started with staleTime",
      "code": "// staleTime - Example 1\nconst config = { feature: \"stale-time\" };\nconsole.log(config);",
      "output": "{ feature: \"stale-time\" }",
      "explanation": "Foundation setup for staletime."
    },
    {
      "title": "Common Pattern",
      "code": "// staleTime - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using staletime."
    },
    {
      "title": "Async Flow",
      "code": "// staleTime - Example 3\nasync function load() {\n  return { topic: \"stale-time\" };\n}",
      "output": "{ topic: \"stale-time\" }",
      "explanation": "Async patterns with staletime."
    },
    {
      "title": "Error Handling",
      "code": "// staleTime - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in staletime."
    },
    {
      "title": "Best Practice",
      "code": "// staleTime - Example 5\nconst NAMESPACE = \"tanstack/stale-time\";\nconsole.log(NAMESPACE);",
      "output": "tanstack/stale-time",
      "explanation": "Organized naming for staletime."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain staletime to a beginner.",
      "answer": "staleTime is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use staletime?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with staletime?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does staletime compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for staletime.",
      "answer": "Production apps use staletime for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing staletime\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with staletime."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand staletime before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a staleTime Feature",
    "description": "Create a real-world component or module that demonstrates staletime in action.",
    "checklist": [
      "Implement core staletime functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of staletime?",
      "options": [
        "To style components",
        "To work with staletime concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with staletime concepts effectively",
      "explanation": "staleTime is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for staletime?",
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
      "question": "When should you use staletime?",
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
      "question": "What is a common mistake with staletime?",
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
      "question": "How does staletime help in real projects?",
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
    "staleTime: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what staletime is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic staleTime",
      "description": "Write a simple example demonstrating staletime.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "staleTime with Data",
      "description": "Use sample data to practice staletime.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "staleTime Output",
      "description": "Log the expected output for a staletime exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine staleTime",
      "description": "Combine staletime with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor staleTime",
      "description": "Refactor given code to use staletime properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug staleTime",
      "description": "Fix the bug related to staletime.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with staleTime",
      "description": "Build a small feature using staletime.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "staleTime Architecture",
      "description": "Design a scalable pattern with staletime.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "import { useQuery } from '@tanstack/react-query';\n// staleTime example\nconst { data } = useQuery({ queryKey: ['staleTime'], queryFn: () => [] });",
    "solution": "import { useQuery } from '@tanstack/react-query';\n// staleTime example\nconst { data } = useQuery({ queryKey: ['staleTime'], queryFn: () => [] });\n// Solution: see examples above",
    "hint": "Try modifying the staletime example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "staleTime Mini Challenge",
    "requirements": [
      "Demonstrate staletime in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
