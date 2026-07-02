// Auto-generated topic: Prototype
// Course: javascript

export default {
  "id": "prototype",
  "title": "Prototype",
  "definition": "Prototype is a fundamental concept in JavaScript that every developer should master.",
  "deepExplanation": "Understanding prototype deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Prototype syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│   Source    │ ──► │  Prototype  │ ──► │   Output    │\n│   Code      │     │  Processing  │     │   Result    │\n└─────────────┘     └──────────────┘     └─────────────┘",
  "analogy": "Prototype is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Basic Prototype",
      "code": "// Example 1: Basic usage\nconst value = \"prototype\";\nconsole.log(value);",
      "output": "prototype",
      "explanation": "Introduces the core idea behind prototype."
    },
    {
      "title": "Practical Prototype",
      "code": "// Example 2: Real-world pattern\nfunction demo() {\n  return \"Prototype works\";\n}\nconsole.log(demo());",
      "output": "Prototype works",
      "explanation": "Shows how prototype appears in everyday code."
    },
    {
      "title": "With Variables",
      "code": "// Example 3: Combined with variables\nconst name = \"React Mastery\";\nconst msg = `Learning ${name} - Prototype`;\nconsole.log(msg);",
      "output": "Learning React Mastery - Prototype",
      "explanation": "Combines prototype with other JS fundamentals."
    },
    {
      "title": "Data Transformation",
      "code": "// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);",
      "output": "[2, 4, 6]",
      "explanation": "Demonstrates practical data handling related to prototype."
    },
    {
      "title": "Error-Safe Pattern",
      "code": "// Example 5: Safe usage\ntry {\n  const data = { topic: \"prototype\" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}",
      "output": "prototype",
      "explanation": "Shows defensive coding when working with prototype."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain prototype to a beginner.",
      "answer": "Prototype is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use prototype?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with prototype?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does prototype compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for prototype.",
      "answer": "Production apps use prototype for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing prototype\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with prototype."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand prototype before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Prototype Feature",
    "description": "Create a real-world component or module that demonstrates prototype in action.",
    "checklist": [
      "Implement core prototype functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of prototype?",
      "options": [
        "To style components",
        "To work with prototype concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with prototype concepts effectively",
      "explanation": "Prototype is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for prototype?",
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
      "question": "When should you use prototype?",
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
      "question": "What is a common mistake with prototype?",
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
      "question": "How does prototype help in real projects?",
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
    "Prototype: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what prototype is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Prototype",
      "description": "Write a simple example demonstrating prototype.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Prototype with Data",
      "description": "Use sample data to practice prototype.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Prototype Output",
      "description": "Log the expected output for a prototype exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Prototype",
      "description": "Combine prototype with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Prototype",
      "description": "Refactor given code to use prototype properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Prototype",
      "description": "Fix the bug related to prototype.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Prototype",
      "description": "Build a small feature using prototype.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Prototype Architecture",
      "description": "Design a scalable pattern with prototype.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Prototype in JavaScript\nconst result = \"Hello from Prototype\";\nconsole.log(result);",
    "solution": "// Prototype in JavaScript\nconst result = \"Hello from Prototype\";\nconsole.log(result);\n// Solution: see examples above",
    "hint": "Try modifying the prototype example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Prototype Mini Challenge",
    "requirements": [
      "Demonstrate prototype in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
