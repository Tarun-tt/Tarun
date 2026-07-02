// Auto-generated topic: Two Pointers
// Course: dsa

export default {
  "id": "two-pointers",
  "title": "Two Pointers",
  "definition": "Two Pointers is a fundamental concept in TanStack Query that every developer should master.",
  "deepExplanation": "Understanding two pointers deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Two Pointers syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  solve   ┌─────────────┐\n│  Input   │ ───────► │  Algorithm  │\n│  Array   │ ◄─────── │  Two Poin  │\n└──────────┘  output  └─────────────┘",
  "analogy": "Two Pointers is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Getting Started with Two Pointers",
      "code": "// Two Pointers - Example 1\nconst config = { feature: \"two-pointers\" };\nconsole.log(config);",
      "output": "{ feature: \"two-pointers\" }",
      "explanation": "Foundation setup for two pointers."
    },
    {
      "title": "Common Pattern",
      "code": "// Two Pointers - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using two pointers."
    },
    {
      "title": "Async Flow",
      "code": "// Two Pointers - Example 3\nasync function load() {\n  return { topic: \"two-pointers\" };\n}",
      "output": "{ topic: \"two-pointers\" }",
      "explanation": "Async patterns with two pointers."
    },
    {
      "title": "Error Handling",
      "code": "// Two Pointers - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in two pointers."
    },
    {
      "title": "Best Practice",
      "code": "// Two Pointers - Example 5\nconst NAMESPACE = \"dsa/two-pointers\";\nconsole.log(NAMESPACE);",
      "output": "dsa/two-pointers",
      "explanation": "Organized naming for two pointers."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain two pointers to a beginner.",
      "answer": "Two Pointers is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use two pointers?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with two pointers?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does two pointers compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for two pointers.",
      "answer": "Production apps use two pointers for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing two pointers\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with two pointers."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand two pointers before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Two Pointers Feature",
    "description": "Create a real-world component or module that demonstrates two pointers in action.",
    "checklist": [
      "Implement core two pointers functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of two pointers?",
      "options": [
        "To style components",
        "To work with two pointers concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with two pointers concepts effectively",
      "explanation": "Two Pointers is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for two pointers?",
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
      "question": "When should you use two pointers?",
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
      "question": "What is a common mistake with two pointers?",
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
      "question": "How does two pointers help in real projects?",
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
    "Two Pointers: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what two pointers is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Two Pointers",
      "description": "Write a simple example demonstrating two pointers.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Two Pointers with Data",
      "description": "Use sample data to practice two pointers.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Two Pointers Output",
      "description": "Log the expected output for a two pointers exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Two Pointers",
      "description": "Combine two pointers with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Two Pointers",
      "description": "Refactor given code to use two pointers properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Two Pointers",
      "description": "Fix the bug related to two pointers.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Two Pointers",
      "description": "Build a small feature using two pointers.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Two Pointers Architecture",
      "description": "Design a scalable pattern with two pointers.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Two Pointers DSA problem\nfunction solve(input) {\n  // Tarun Tiwari's solution\n  return input;\n}",
    "solution": "// Two Pointers DSA problem\nfunction solve(input) {\n  // Tarun Tiwari's solution\n  return input;\n}\n// Solution: see examples above",
    "hint": "Try modifying the two pointers example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Two Pointers Mini Challenge",
    "requirements": [
      "Demonstrate two pointers in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
