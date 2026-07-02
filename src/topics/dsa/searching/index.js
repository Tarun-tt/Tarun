// Auto-generated topic: Binary Search
// Course: dsa

export default {
  "id": "searching",
  "title": "Binary Search",
  "definition": "Binary Search is a fundamental concept in TanStack Query that every developer should master.",
  "deepExplanation": "Understanding binary search deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Binary Search syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  solve   ┌─────────────┐\n│  Input   │ ───────► │  Algorithm  │\n│  Array   │ ◄─────── │  Binary S  │\n└──────────┘  output  └─────────────┘",
  "analogy": "Think of Binary Search as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Getting Started with Binary Search",
      "code": "// Binary Search - Example 1\nconst config = { feature: \"searching\" };\nconsole.log(config);",
      "output": "{ feature: \"searching\" }",
      "explanation": "Foundation setup for binary search."
    },
    {
      "title": "Common Pattern",
      "code": "// Binary Search - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using binary search."
    },
    {
      "title": "Async Flow",
      "code": "// Binary Search - Example 3\nasync function load() {\n  return { topic: \"searching\" };\n}",
      "output": "{ topic: \"searching\" }",
      "explanation": "Async patterns with binary search."
    },
    {
      "title": "Error Handling",
      "code": "// Binary Search - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in binary search."
    },
    {
      "title": "Best Practice",
      "code": "// Binary Search - Example 5\nconst NAMESPACE = \"dsa/searching\";\nconsole.log(NAMESPACE);",
      "output": "dsa/searching",
      "explanation": "Organized naming for binary search."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain binary search to a beginner.",
      "answer": "Binary Search is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use binary search?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with binary search?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does binary search compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for binary search.",
      "answer": "Production apps use binary search for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing binary search\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with binary search."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand binary search before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Binary Search Feature",
    "description": "Create a real-world component or module that demonstrates binary search in action.",
    "checklist": [
      "Implement core binary search functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of binary search?",
      "options": [
        "To style components",
        "To work with binary search concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with binary search concepts effectively",
      "explanation": "Binary Search is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for binary search?",
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
      "question": "When should you use binary search?",
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
      "question": "What is a common mistake with binary search?",
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
      "question": "How does binary search help in real projects?",
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
    "Binary Search: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what binary search is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Binary Search",
      "description": "Write a simple example demonstrating binary search.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Binary Search with Data",
      "description": "Use sample data to practice binary search.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Binary Search Output",
      "description": "Log the expected output for a binary search exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Binary Search",
      "description": "Combine binary search with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Binary Search",
      "description": "Refactor given code to use binary search properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Binary Search",
      "description": "Fix the bug related to binary search.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Binary Search",
      "description": "Build a small feature using binary search.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Binary Search Architecture",
      "description": "Design a scalable pattern with binary search.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Binary Search DSA problem\nfunction solve(input) {\n  // Tarun Tiwari's solution\n  return input;\n}",
    "solution": "// Binary Search DSA problem\nfunction solve(input) {\n  // Tarun Tiwari's solution\n  return input;\n}\n// Solution: see examples above",
    "hint": "Try modifying the binary search example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Binary Search Mini Challenge",
    "requirements": [
      "Demonstrate binary search in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
