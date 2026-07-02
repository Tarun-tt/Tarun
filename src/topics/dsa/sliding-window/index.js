// Auto-generated topic: Sliding Window
// Course: dsa

export default {
  "id": "sliding-window",
  "title": "Sliding Window",
  "definition": "Sliding Window is a fundamental concept in TanStack Query that every developer should master.",
  "deepExplanation": "Understanding sliding window deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Sliding Window syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  solve   ┌─────────────┐\n│  Input   │ ───────► │  Algorithm  │\n│  Array   │ ◄─────── │  Sliding   │\n└──────────┘  output  └─────────────┘",
  "analogy": "Sliding Window works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Getting Started with Sliding Window",
      "code": "// Sliding Window - Example 1\nconst config = { feature: \"sliding-window\" };\nconsole.log(config);",
      "output": "{ feature: \"sliding-window\" }",
      "explanation": "Foundation setup for sliding window."
    },
    {
      "title": "Common Pattern",
      "code": "// Sliding Window - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using sliding window."
    },
    {
      "title": "Async Flow",
      "code": "// Sliding Window - Example 3\nasync function load() {\n  return { topic: \"sliding-window\" };\n}",
      "output": "{ topic: \"sliding-window\" }",
      "explanation": "Async patterns with sliding window."
    },
    {
      "title": "Error Handling",
      "code": "// Sliding Window - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in sliding window."
    },
    {
      "title": "Best Practice",
      "code": "// Sliding Window - Example 5\nconst NAMESPACE = \"dsa/sliding-window\";\nconsole.log(NAMESPACE);",
      "output": "dsa/sliding-window",
      "explanation": "Organized naming for sliding window."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain sliding window to a beginner.",
      "answer": "Sliding Window is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use sliding window?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with sliding window?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does sliding window compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for sliding window.",
      "answer": "Production apps use sliding window for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing sliding window\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with sliding window."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand sliding window before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Sliding Window Feature",
    "description": "Create a real-world component or module that demonstrates sliding window in action.",
    "checklist": [
      "Implement core sliding window functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of sliding window?",
      "options": [
        "To style components",
        "To work with sliding window concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with sliding window concepts effectively",
      "explanation": "Sliding Window is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for sliding window?",
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
      "question": "When should you use sliding window?",
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
      "question": "What is a common mistake with sliding window?",
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
      "question": "How does sliding window help in real projects?",
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
    "Sliding Window: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what sliding window is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Sliding Window",
      "description": "Write a simple example demonstrating sliding window.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Sliding Window with Data",
      "description": "Use sample data to practice sliding window.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Sliding Window Output",
      "description": "Log the expected output for a sliding window exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Sliding Window",
      "description": "Combine sliding window with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Sliding Window",
      "description": "Refactor given code to use sliding window properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Sliding Window",
      "description": "Fix the bug related to sliding window.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Sliding Window",
      "description": "Build a small feature using sliding window.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Sliding Window Architecture",
      "description": "Design a scalable pattern with sliding window.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Sliding Window DSA problem\nfunction solve(input) {\n  // Tarun Tiwari's solution\n  return input;\n}",
    "solution": "// Sliding Window DSA problem\nfunction solve(input) {\n  // Tarun Tiwari's solution\n  return input;\n}\n// Solution: see examples above",
    "hint": "Try modifying the sliding window example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Sliding Window Mini Challenge",
    "requirements": [
      "Demonstrate sliding window in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
