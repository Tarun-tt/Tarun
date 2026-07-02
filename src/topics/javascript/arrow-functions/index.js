// Auto-generated topic: Arrow Functions
// Course: javascript

export default {
  "id": "arrow-functions",
  "title": "Arrow Functions",
  "definition": "Arrow Functions is a fundamental concept in JavaScript that every developer should master.",
  "deepExplanation": "Understanding arrow functions deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Arrow Functions syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│   Source    │ ──► │  Arrow Functions │ ──► │   Output    │\n│   Code      │     │  Processing  │     │   Result    │\n└─────────────┘     └──────────────┘     └─────────────┘",
  "analogy": "Arrow Functions is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Basic Arrow Functions",
      "code": "// Example 1: Basic usage\nconst value = \"arrow-functions\";\nconsole.log(value);",
      "output": "arrow-functions",
      "explanation": "Introduces the core idea behind arrow functions."
    },
    {
      "title": "Practical Arrow Functions",
      "code": "// Example 2: Real-world pattern\nfunction demo() {\n  return \"Arrow Functions works\";\n}\nconsole.log(demo());",
      "output": "Arrow Functions works",
      "explanation": "Shows how arrow functions appears in everyday code."
    },
    {
      "title": "With Variables",
      "code": "// Example 3: Combined with variables\nconst name = \"React Mastery\";\nconst msg = `Learning ${name} - Arrow Functions`;\nconsole.log(msg);",
      "output": "Learning React Mastery - Arrow Functions",
      "explanation": "Combines arrow functions with other JS fundamentals."
    },
    {
      "title": "Data Transformation",
      "code": "// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);",
      "output": "[2, 4, 6]",
      "explanation": "Demonstrates practical data handling related to arrow functions."
    },
    {
      "title": "Error-Safe Pattern",
      "code": "// Example 5: Safe usage\ntry {\n  const data = { topic: \"arrow-functions\" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}",
      "output": "arrow-functions",
      "explanation": "Shows defensive coding when working with arrow functions."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain arrow functions to a beginner.",
      "answer": "Arrow Functions is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use arrow functions?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with arrow functions?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does arrow functions compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for arrow functions.",
      "answer": "Production apps use arrow functions for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing arrow functions\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with arrow functions."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand arrow functions before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Arrow Functions Feature",
    "description": "Create a real-world component or module that demonstrates arrow functions in action.",
    "checklist": [
      "Implement core arrow functions functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of arrow functions?",
      "options": [
        "To style components",
        "To work with arrow functions concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with arrow functions concepts effectively",
      "explanation": "Arrow Functions is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for arrow functions?",
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
      "question": "When should you use arrow functions?",
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
      "question": "What is a common mistake with arrow functions?",
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
      "question": "How does arrow functions help in real projects?",
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
    "Arrow Functions: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what arrow functions is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Arrow Functions",
      "description": "Write a simple example demonstrating arrow functions.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Arrow Functions with Data",
      "description": "Use sample data to practice arrow functions.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Arrow Functions Output",
      "description": "Log the expected output for a arrow functions exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Arrow Functions",
      "description": "Combine arrow functions with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Arrow Functions",
      "description": "Refactor given code to use arrow functions properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Arrow Functions",
      "description": "Fix the bug related to arrow functions.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Arrow Functions",
      "description": "Build a small feature using arrow functions.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Arrow Functions Architecture",
      "description": "Design a scalable pattern with arrow functions.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Arrow Functions in JavaScript\nconst result = \"Hello from Arrow Functions\";\nconsole.log(result);",
    "solution": "// Arrow Functions in JavaScript\nconst result = \"Hello from Arrow Functions\";\nconsole.log(result);\n// Solution: see examples above",
    "hint": "Try modifying the arrow functions example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Arrow Functions Mini Challenge",
    "requirements": [
      "Demonstrate arrow functions in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
