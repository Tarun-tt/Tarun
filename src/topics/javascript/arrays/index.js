// Auto-generated topic: Arrays
// Course: javascript

export default {
  "id": "arrays",
  "title": "Arrays",
  "definition": "Arrays is a fundamental concept in JavaScript that every developer should master.",
  "deepExplanation": "Understanding arrays deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Arrays syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│   Source    │ ──► │  Arrays     │ ──► │   Output    │\n│   Code      │     │  Processing  │     │   Result    │\n└─────────────┘     └──────────────┘     └─────────────┘",
  "analogy": "Arrays is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Basic Arrays",
      "code": "// Example 1: Basic usage\nconst value = \"arrays\";\nconsole.log(value);",
      "output": "arrays",
      "explanation": "Introduces the core idea behind arrays."
    },
    {
      "title": "Practical Arrays",
      "code": "// Example 2: Real-world pattern\nfunction demo() {\n  return \"Arrays works\";\n}\nconsole.log(demo());",
      "output": "Arrays works",
      "explanation": "Shows how arrays appears in everyday code."
    },
    {
      "title": "With Variables",
      "code": "// Example 3: Combined with variables\nconst name = \"React Mastery\";\nconst msg = `Learning ${name} - Arrays`;\nconsole.log(msg);",
      "output": "Learning React Mastery - Arrays",
      "explanation": "Combines arrays with other JS fundamentals."
    },
    {
      "title": "Data Transformation",
      "code": "// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);",
      "output": "[2, 4, 6]",
      "explanation": "Demonstrates practical data handling related to arrays."
    },
    {
      "title": "Error-Safe Pattern",
      "code": "// Example 5: Safe usage\ntry {\n  const data = { topic: \"arrays\" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}",
      "output": "arrays",
      "explanation": "Shows defensive coding when working with arrays."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain arrays to a beginner.",
      "answer": "Arrays is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use arrays?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with arrays?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does arrays compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for arrays.",
      "answer": "Production apps use arrays for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing arrays\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with arrays."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand arrays before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Arrays Feature",
    "description": "Create a real-world component or module that demonstrates arrays in action.",
    "checklist": [
      "Implement core arrays functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of arrays?",
      "options": [
        "To style components",
        "To work with arrays concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with arrays concepts effectively",
      "explanation": "Arrays is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for arrays?",
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
      "question": "When should you use arrays?",
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
      "question": "What is a common mistake with arrays?",
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
      "question": "How does arrays help in real projects?",
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
    "Arrays: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what arrays is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Arrays",
      "description": "Write a simple example demonstrating arrays.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Arrays with Data",
      "description": "Use sample data to practice arrays.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Arrays Output",
      "description": "Log the expected output for a arrays exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Arrays",
      "description": "Combine arrays with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Arrays",
      "description": "Refactor given code to use arrays properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Arrays",
      "description": "Fix the bug related to arrays.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Arrays",
      "description": "Build a small feature using arrays.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Arrays Architecture",
      "description": "Design a scalable pattern with arrays.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Arrays in JavaScript\nconst result = \"Hello from Arrays\";\nconsole.log(result);",
    "solution": "// Arrays in JavaScript\nconst result = \"Hello from Arrays\";\nconsole.log(result);\n// Solution: see examples above",
    "hint": "Try modifying the arrays example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Arrays Mini Challenge",
    "requirements": [
      "Demonstrate arrays in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
