// Auto-generated topic: Time & Space Complexity
// Course: dsa

export default {
  "id": "complexity",
  "title": "Time & Space Complexity",
  "definition": "Time & Space Complexity is a fundamental concept in TanStack Query that every developer should master.",
  "deepExplanation": "Understanding time & space complexity deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Time & Space Complexity syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  solve   ┌─────────────┐\n│  Input   │ ───────► │  Algorithm  │\n│  Array   │ ◄─────── │  Time & S  │\n└──────────┘  output  └─────────────┘",
  "analogy": "Time & Space Complexity works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Getting Started with Time & Space Complexity",
      "code": "// Time & Space Complexity - Example 1\nconst config = { feature: \"complexity\" };\nconsole.log(config);",
      "output": "{ feature: \"complexity\" }",
      "explanation": "Foundation setup for time & space complexity."
    },
    {
      "title": "Common Pattern",
      "code": "// Time & Space Complexity - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using time & space complexity."
    },
    {
      "title": "Async Flow",
      "code": "// Time & Space Complexity - Example 3\nasync function load() {\n  return { topic: \"complexity\" };\n}",
      "output": "{ topic: \"complexity\" }",
      "explanation": "Async patterns with time & space complexity."
    },
    {
      "title": "Error Handling",
      "code": "// Time & Space Complexity - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in time & space complexity."
    },
    {
      "title": "Best Practice",
      "code": "// Time & Space Complexity - Example 5\nconst NAMESPACE = \"dsa/complexity\";\nconsole.log(NAMESPACE);",
      "output": "dsa/complexity",
      "explanation": "Organized naming for time & space complexity."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain time & space complexity to a beginner.",
      "answer": "Time & Space Complexity is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use time & space complexity?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with time & space complexity?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does time & space complexity compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for time & space complexity.",
      "answer": "Production apps use time & space complexity for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing time & space complexity\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with time & space complexity."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand time & space complexity before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Time & Space Complexity Feature",
    "description": "Create a real-world component or module that demonstrates time & space complexity in action.",
    "checklist": [
      "Implement core time & space complexity functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of time & space complexity?",
      "options": [
        "To style components",
        "To work with time & space complexity concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with time & space complexity concepts effectively",
      "explanation": "Time & Space Complexity is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for time & space complexity?",
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
      "question": "When should you use time & space complexity?",
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
      "question": "What is a common mistake with time & space complexity?",
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
      "question": "How does time & space complexity help in real projects?",
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
    "Time & Space Complexity: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what time & space complexity is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Time & Space Complexity",
      "description": "Write a simple example demonstrating time & space complexity.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Time & Space Complexity with Data",
      "description": "Use sample data to practice time & space complexity.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Time & Space Complexity Output",
      "description": "Log the expected output for a time & space complexity exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Time & Space Complexity",
      "description": "Combine time & space complexity with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Time & Space Complexity",
      "description": "Refactor given code to use time & space complexity properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Time & Space Complexity",
      "description": "Fix the bug related to time & space complexity.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Time & Space Complexity",
      "description": "Build a small feature using time & space complexity.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Time & Space Complexity Architecture",
      "description": "Design a scalable pattern with time & space complexity.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Time & Space Complexity DSA problem\nfunction solve(input) {\n  // Tarun Tiwari's solution\n  return input;\n}",
    "solution": "// Time & Space Complexity DSA problem\nfunction solve(input) {\n  // Tarun Tiwari's solution\n  return input;\n}\n// Solution: see examples above",
    "hint": "Try modifying the time & space complexity example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Time & Space Complexity Mini Challenge",
    "requirements": [
      "Demonstrate time & space complexity in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
