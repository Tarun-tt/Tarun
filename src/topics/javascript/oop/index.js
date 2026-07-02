// Auto-generated topic: OOP
// Course: javascript

export default {
  "id": "oop",
  "title": "OOP",
  "definition": "OOP is a fundamental concept in JavaScript that every developer should master.",
  "deepExplanation": "Understanding oop deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// OOP syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│   Source    │ ──► │  OOP        │ ──► │   Output    │\n│   Code      │     │  Processing  │     │   Result    │\n└─────────────┘     └──────────────┘     └─────────────┘",
  "analogy": "OOP is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Basic OOP",
      "code": "// Example 1: Basic usage\nconst value = \"oop\";\nconsole.log(value);",
      "output": "oop",
      "explanation": "Introduces the core idea behind oop."
    },
    {
      "title": "Practical OOP",
      "code": "// Example 2: Real-world pattern\nfunction demo() {\n  return \"OOP works\";\n}\nconsole.log(demo());",
      "output": "OOP works",
      "explanation": "Shows how oop appears in everyday code."
    },
    {
      "title": "With Variables",
      "code": "// Example 3: Combined with variables\nconst name = \"React Mastery\";\nconst msg = `Learning ${name} - OOP`;\nconsole.log(msg);",
      "output": "Learning React Mastery - OOP",
      "explanation": "Combines oop with other JS fundamentals."
    },
    {
      "title": "Data Transformation",
      "code": "// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);",
      "output": "[2, 4, 6]",
      "explanation": "Demonstrates practical data handling related to oop."
    },
    {
      "title": "Error-Safe Pattern",
      "code": "// Example 5: Safe usage\ntry {\n  const data = { topic: \"oop\" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}",
      "output": "oop",
      "explanation": "Shows defensive coding when working with oop."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain oop to a beginner.",
      "answer": "OOP is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use oop?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with oop?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does oop compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for oop.",
      "answer": "Production apps use oop for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing oop\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with oop."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand oop before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a OOP Feature",
    "description": "Create a real-world component or module that demonstrates oop in action.",
    "checklist": [
      "Implement core oop functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of oop?",
      "options": [
        "To style components",
        "To work with oop concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with oop concepts effectively",
      "explanation": "OOP is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for oop?",
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
      "question": "When should you use oop?",
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
      "question": "What is a common mistake with oop?",
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
      "question": "How does oop help in real projects?",
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
    "OOP: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what oop is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic OOP",
      "description": "Write a simple example demonstrating oop.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "OOP with Data",
      "description": "Use sample data to practice oop.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "OOP Output",
      "description": "Log the expected output for a oop exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine OOP",
      "description": "Combine oop with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor OOP",
      "description": "Refactor given code to use oop properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug OOP",
      "description": "Fix the bug related to oop.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with OOP",
      "description": "Build a small feature using oop.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "OOP Architecture",
      "description": "Design a scalable pattern with oop.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// OOP in JavaScript\nconst result = \"Hello from OOP\";\nconsole.log(result);",
    "solution": "// OOP in JavaScript\nconst result = \"Hello from OOP\";\nconsole.log(result);\n// Solution: see examples above",
    "hint": "Try modifying the oop example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "OOP Mini Challenge",
    "requirements": [
      "Demonstrate oop in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
