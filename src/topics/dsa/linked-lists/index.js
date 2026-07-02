// Auto-generated topic: Linked Lists
// Course: dsa

export default {
  "id": "linked-lists",
  "title": "Linked Lists",
  "definition": "Linked Lists is a fundamental concept in TanStack Query that every developer should master.",
  "deepExplanation": "Understanding linked lists deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Linked Lists syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  solve   ┌─────────────┐\n│  Input   │ ───────► │  Algorithm  │\n│  Array   │ ◄─────── │  Linked L  │\n└──────────┘  output  └─────────────┘",
  "analogy": "Linked Lists is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Getting Started with Linked Lists",
      "code": "// Linked Lists - Example 1\nconst config = { feature: \"linked-lists\" };\nconsole.log(config);",
      "output": "{ feature: \"linked-lists\" }",
      "explanation": "Foundation setup for linked lists."
    },
    {
      "title": "Common Pattern",
      "code": "// Linked Lists - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using linked lists."
    },
    {
      "title": "Async Flow",
      "code": "// Linked Lists - Example 3\nasync function load() {\n  return { topic: \"linked-lists\" };\n}",
      "output": "{ topic: \"linked-lists\" }",
      "explanation": "Async patterns with linked lists."
    },
    {
      "title": "Error Handling",
      "code": "// Linked Lists - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in linked lists."
    },
    {
      "title": "Best Practice",
      "code": "// Linked Lists - Example 5\nconst NAMESPACE = \"dsa/linked-lists\";\nconsole.log(NAMESPACE);",
      "output": "dsa/linked-lists",
      "explanation": "Organized naming for linked lists."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain linked lists to a beginner.",
      "answer": "Linked Lists is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use linked lists?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with linked lists?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does linked lists compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for linked lists.",
      "answer": "Production apps use linked lists for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing linked lists\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with linked lists."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand linked lists before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Linked Lists Feature",
    "description": "Create a real-world component or module that demonstrates linked lists in action.",
    "checklist": [
      "Implement core linked lists functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of linked lists?",
      "options": [
        "To style components",
        "To work with linked lists concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with linked lists concepts effectively",
      "explanation": "Linked Lists is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for linked lists?",
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
      "question": "When should you use linked lists?",
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
      "question": "What is a common mistake with linked lists?",
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
      "question": "How does linked lists help in real projects?",
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
    "Linked Lists: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what linked lists is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Linked Lists",
      "description": "Write a simple example demonstrating linked lists.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Linked Lists with Data",
      "description": "Use sample data to practice linked lists.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Linked Lists Output",
      "description": "Log the expected output for a linked lists exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Linked Lists",
      "description": "Combine linked lists with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Linked Lists",
      "description": "Refactor given code to use linked lists properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Linked Lists",
      "description": "Fix the bug related to linked lists.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Linked Lists",
      "description": "Build a small feature using linked lists.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Linked Lists Architecture",
      "description": "Design a scalable pattern with linked lists.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Linked Lists DSA problem\nfunction solve(input) {\n  // Tarun Tiwari's solution\n  return input;\n}",
    "solution": "// Linked Lists DSA problem\nfunction solve(input) {\n  // Tarun Tiwari's solution\n  return input;\n}\n// Solution: see examples above",
    "hint": "Try modifying the linked lists example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Linked Lists Mini Challenge",
    "requirements": [
      "Demonstrate linked lists in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
