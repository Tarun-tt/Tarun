// Auto-generated topic: Recursion
// Course: dsa

export default {
  "id": "recursion",
  "title": "Recursion",
  "definition": "Recursion is a fundamental concept in TanStack Query that every developer should master.",
  "deepExplanation": "Understanding recursion deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Recursion syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  solve   ┌─────────────┐\n│  Input   │ ───────► │  Algorithm  │\n│  Array   │ ◄─────── │  Recursio  │\n└──────────┘  output  └─────────────┘",
  "analogy": "Recursion is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Getting Started with Recursion",
      "code": "// Recursion - Example 1\nconst config = { feature: \"recursion\" };\nconsole.log(config);",
      "output": "{ feature: \"recursion\" }",
      "explanation": "Foundation setup for recursion."
    },
    {
      "title": "Common Pattern",
      "code": "// Recursion - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using recursion."
    },
    {
      "title": "Async Flow",
      "code": "// Recursion - Example 3\nasync function load() {\n  return { topic: \"recursion\" };\n}",
      "output": "{ topic: \"recursion\" }",
      "explanation": "Async patterns with recursion."
    },
    {
      "title": "Error Handling",
      "code": "// Recursion - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in recursion."
    },
    {
      "title": "Best Practice",
      "code": "// Recursion - Example 5\nconst NAMESPACE = \"dsa/recursion\";\nconsole.log(NAMESPACE);",
      "output": "dsa/recursion",
      "explanation": "Organized naming for recursion."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain recursion to a beginner.",
      "answer": "Recursion is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use recursion?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with recursion?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does recursion compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for recursion.",
      "answer": "Production apps use recursion for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing recursion\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with recursion."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand recursion before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Recursion Feature",
    "description": "Create a real-world component or module that demonstrates recursion in action.",
    "checklist": [
      "Implement core recursion functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of recursion?",
      "options": [
        "To style components",
        "To work with recursion concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with recursion concepts effectively",
      "explanation": "Recursion is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for recursion?",
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
      "question": "When should you use recursion?",
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
      "question": "What is a common mistake with recursion?",
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
      "question": "How does recursion help in real projects?",
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
    "Recursion: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what recursion is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Recursion",
      "description": "Write a simple example demonstrating recursion.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Recursion with Data",
      "description": "Use sample data to practice recursion.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Recursion Output",
      "description": "Log the expected output for a recursion exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Recursion",
      "description": "Combine recursion with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Recursion",
      "description": "Refactor given code to use recursion properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Recursion",
      "description": "Fix the bug related to recursion.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Recursion",
      "description": "Build a small feature using recursion.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Recursion Architecture",
      "description": "Design a scalable pattern with recursion.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Recursion DSA problem\nfunction solve(input) {\n  // Tarun Tiwari's solution\n  return input;\n}",
    "solution": "// Recursion DSA problem\nfunction solve(input) {\n  // Tarun Tiwari's solution\n  return input;\n}\n// Solution: see examples above",
    "hint": "Try modifying the recursion example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Recursion Mini Challenge",
    "requirements": [
      "Demonstrate recursion in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
