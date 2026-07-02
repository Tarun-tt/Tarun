// Auto-generated topic: Hoisting
// Course: javascript

export default {
  "id": "hoisting",
  "title": "Hoisting",
  "definition": "Hoisting is a fundamental concept in JavaScript that every developer should master.",
  "deepExplanation": "Understanding hoisting deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Hoisting syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│   Source    │ ──► │  Hoisting   │ ──► │   Output    │\n│   Code      │     │  Processing  │     │   Result    │\n└─────────────┘     └──────────────┘     └─────────────┘",
  "analogy": "Hoisting works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Basic Hoisting",
      "code": "// Example 1: Basic usage\nconst value = \"hoisting\";\nconsole.log(value);",
      "output": "hoisting",
      "explanation": "Introduces the core idea behind hoisting."
    },
    {
      "title": "Practical Hoisting",
      "code": "// Example 2: Real-world pattern\nfunction demo() {\n  return \"Hoisting works\";\n}\nconsole.log(demo());",
      "output": "Hoisting works",
      "explanation": "Shows how hoisting appears in everyday code."
    },
    {
      "title": "With Variables",
      "code": "// Example 3: Combined with variables\nconst name = \"React Mastery\";\nconst msg = `Learning ${name} - Hoisting`;\nconsole.log(msg);",
      "output": "Learning React Mastery - Hoisting",
      "explanation": "Combines hoisting with other JS fundamentals."
    },
    {
      "title": "Data Transformation",
      "code": "// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);",
      "output": "[2, 4, 6]",
      "explanation": "Demonstrates practical data handling related to hoisting."
    },
    {
      "title": "Error-Safe Pattern",
      "code": "// Example 5: Safe usage\ntry {\n  const data = { topic: \"hoisting\" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}",
      "output": "hoisting",
      "explanation": "Shows defensive coding when working with hoisting."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain hoisting to a beginner.",
      "answer": "Hoisting is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use hoisting?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with hoisting?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does hoisting compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for hoisting.",
      "answer": "Production apps use hoisting for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing hoisting\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with hoisting."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand hoisting before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Hoisting Feature",
    "description": "Create a real-world component or module that demonstrates hoisting in action.",
    "checklist": [
      "Implement core hoisting functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of hoisting?",
      "options": [
        "To style components",
        "To work with hoisting concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with hoisting concepts effectively",
      "explanation": "Hoisting is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for hoisting?",
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
      "question": "When should you use hoisting?",
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
      "question": "What is a common mistake with hoisting?",
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
      "question": "How does hoisting help in real projects?",
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
    "Hoisting: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what hoisting is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Hoisting",
      "description": "Write a simple example demonstrating hoisting.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Hoisting with Data",
      "description": "Use sample data to practice hoisting.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Hoisting Output",
      "description": "Log the expected output for a hoisting exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Hoisting",
      "description": "Combine hoisting with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Hoisting",
      "description": "Refactor given code to use hoisting properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Hoisting",
      "description": "Fix the bug related to hoisting.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Hoisting",
      "description": "Build a small feature using hoisting.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Hoisting Architecture",
      "description": "Design a scalable pattern with hoisting.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Hoisting in JavaScript\nconst result = \"Hello from Hoisting\";\nconsole.log(result);",
    "solution": "// Hoisting in JavaScript\nconst result = \"Hello from Hoisting\";\nconsole.log(result);\n// Solution: see examples above",
    "hint": "Try modifying the hoisting example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Hoisting Mini Challenge",
    "requirements": [
      "Demonstrate hoisting in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
