// Auto-generated topic: Filter
// Course: javascript

export default {
  "id": "filter",
  "title": "Filter",
  "definition": "Filter is a fundamental concept in JavaScript that every developer should master.",
  "deepExplanation": "Understanding filter deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Filter syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│   Source    │ ──► │  Filter     │ ──► │   Output    │\n│   Code      │     │  Processing  │     │   Result    │\n└─────────────┘     └──────────────┘     └─────────────┘",
  "analogy": "Filter is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Basic Filter",
      "code": "// Example 1: Basic usage\nconst value = \"filter\";\nconsole.log(value);",
      "output": "filter",
      "explanation": "Introduces the core idea behind filter."
    },
    {
      "title": "Practical Filter",
      "code": "// Example 2: Real-world pattern\nfunction demo() {\n  return \"Filter works\";\n}\nconsole.log(demo());",
      "output": "Filter works",
      "explanation": "Shows how filter appears in everyday code."
    },
    {
      "title": "With Variables",
      "code": "// Example 3: Combined with variables\nconst name = \"React Mastery\";\nconst msg = `Learning ${name} - Filter`;\nconsole.log(msg);",
      "output": "Learning React Mastery - Filter",
      "explanation": "Combines filter with other JS fundamentals."
    },
    {
      "title": "Data Transformation",
      "code": "// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);",
      "output": "[2, 4, 6]",
      "explanation": "Demonstrates practical data handling related to filter."
    },
    {
      "title": "Error-Safe Pattern",
      "code": "// Example 5: Safe usage\ntry {\n  const data = { topic: \"filter\" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}",
      "output": "filter",
      "explanation": "Shows defensive coding when working with filter."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain filter to a beginner.",
      "answer": "Filter is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use filter?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with filter?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does filter compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for filter.",
      "answer": "Production apps use filter for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing filter\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with filter."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand filter before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Filter Feature",
    "description": "Create a real-world component or module that demonstrates filter in action.",
    "checklist": [
      "Implement core filter functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of filter?",
      "options": [
        "To style components",
        "To work with filter concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with filter concepts effectively",
      "explanation": "Filter is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for filter?",
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
      "question": "When should you use filter?",
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
      "question": "What is a common mistake with filter?",
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
      "question": "How does filter help in real projects?",
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
    "Filter: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what filter is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Filter",
      "description": "Write a simple example demonstrating filter.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Filter with Data",
      "description": "Use sample data to practice filter.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Filter Output",
      "description": "Log the expected output for a filter exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Filter",
      "description": "Combine filter with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Filter",
      "description": "Refactor given code to use filter properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Filter",
      "description": "Fix the bug related to filter.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Filter",
      "description": "Build a small feature using filter.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Filter Architecture",
      "description": "Design a scalable pattern with filter.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Filter in JavaScript\nconst result = \"Hello from Filter\";\nconsole.log(result);",
    "solution": "// Filter in JavaScript\nconst result = \"Hello from Filter\";\nconsole.log(result);\n// Solution: see examples above",
    "hint": "Try modifying the filter example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Filter Mini Challenge",
    "requirements": [
      "Demonstrate filter in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
