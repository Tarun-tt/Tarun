// Auto-generated topic: Reduce
// Course: javascript

export default {
  "id": "reduce",
  "title": "Reduce",
  "definition": "Reduce is a fundamental concept in JavaScript that every developer should master.",
  "deepExplanation": "Understanding reduce deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Reduce syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│   Source    │ ──► │  Reduce     │ ──► │   Output    │\n│   Code      │     │  Processing  │     │   Result    │\n└─────────────┘     └──────────────┘     └─────────────┘",
  "analogy": "Reduce is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Basic Reduce",
      "code": "// Example 1: Basic usage\nconst value = \"reduce\";\nconsole.log(value);",
      "output": "reduce",
      "explanation": "Introduces the core idea behind reduce."
    },
    {
      "title": "Practical Reduce",
      "code": "// Example 2: Real-world pattern\nfunction demo() {\n  return \"Reduce works\";\n}\nconsole.log(demo());",
      "output": "Reduce works",
      "explanation": "Shows how reduce appears in everyday code."
    },
    {
      "title": "With Variables",
      "code": "// Example 3: Combined with variables\nconst name = \"React Mastery\";\nconst msg = `Learning ${name} - Reduce`;\nconsole.log(msg);",
      "output": "Learning React Mastery - Reduce",
      "explanation": "Combines reduce with other JS fundamentals."
    },
    {
      "title": "Data Transformation",
      "code": "// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);",
      "output": "[2, 4, 6]",
      "explanation": "Demonstrates practical data handling related to reduce."
    },
    {
      "title": "Error-Safe Pattern",
      "code": "// Example 5: Safe usage\ntry {\n  const data = { topic: \"reduce\" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}",
      "output": "reduce",
      "explanation": "Shows defensive coding when working with reduce."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain reduce to a beginner.",
      "answer": "Reduce is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use reduce?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with reduce?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does reduce compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for reduce.",
      "answer": "Production apps use reduce for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing reduce\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with reduce."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand reduce before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Reduce Feature",
    "description": "Create a real-world component or module that demonstrates reduce in action.",
    "checklist": [
      "Implement core reduce functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of reduce?",
      "options": [
        "To style components",
        "To work with reduce concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with reduce concepts effectively",
      "explanation": "Reduce is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for reduce?",
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
      "question": "When should you use reduce?",
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
      "question": "What is a common mistake with reduce?",
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
      "question": "How does reduce help in real projects?",
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
    "Reduce: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what reduce is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Reduce",
      "description": "Write a simple example demonstrating reduce.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Reduce with Data",
      "description": "Use sample data to practice reduce.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Reduce Output",
      "description": "Log the expected output for a reduce exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Reduce",
      "description": "Combine reduce with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Reduce",
      "description": "Refactor given code to use reduce properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Reduce",
      "description": "Fix the bug related to reduce.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Reduce",
      "description": "Build a small feature using reduce.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Reduce Architecture",
      "description": "Design a scalable pattern with reduce.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Reduce in JavaScript\nconst result = \"Hello from Reduce\";\nconsole.log(result);",
    "solution": "// Reduce in JavaScript\nconst result = \"Hello from Reduce\";\nconsole.log(result);\n// Solution: see examples above",
    "hint": "Try modifying the reduce example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Reduce Mini Challenge",
    "requirements": [
      "Demonstrate reduce in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
