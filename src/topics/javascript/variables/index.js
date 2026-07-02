// Auto-generated topic: Variables
// Course: javascript

export default {
  "id": "variables",
  "title": "Variables",
  "definition": "Variables is a fundamental concept in JavaScript that every developer should master.",
  "deepExplanation": "Understanding variables deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "let name = 'Ava';\nconst age = 25;\nvar legacy = true; // avoid",
  "visualDiagram": "┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│   Source    │ ──► │  Variables  │ ──► │   Output    │\n│   Code      │     │  Processing  │     │   Result    │\n└─────────────┘     └──────────────┘     └─────────────┘",
  "analogy": "Variables is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Basic Variables",
      "code": "// Example 1: Basic usage\nconst value = \"variables\";\nconsole.log(value);",
      "output": "variables",
      "explanation": "Introduces the core idea behind variables."
    },
    {
      "title": "Practical Variables",
      "code": "// Example 2: Real-world pattern\nfunction demo() {\n  return \"Variables works\";\n}\nconsole.log(demo());",
      "output": "Variables works",
      "explanation": "Shows how variables appears in everyday code."
    },
    {
      "title": "With Variables",
      "code": "// Example 3: Combined with variables\nconst name = \"React Mastery\";\nconst msg = `Learning ${name} - Variables`;\nconsole.log(msg);",
      "output": "Learning React Mastery - Variables",
      "explanation": "Combines variables with other JS fundamentals."
    },
    {
      "title": "Data Transformation",
      "code": "// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);",
      "output": "[2, 4, 6]",
      "explanation": "Demonstrates practical data handling related to variables."
    },
    {
      "title": "Error-Safe Pattern",
      "code": "// Example 5: Safe usage\ntry {\n  const data = { topic: \"variables\" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}",
      "output": "variables",
      "explanation": "Shows defensive coding when working with variables."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain variables to a beginner.",
      "answer": "Variables is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use variables?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with variables?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does variables compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for variables.",
      "answer": "Production apps use variables for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing variables\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with variables."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand variables before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Variables Feature",
    "description": "Create a real-world component or module that demonstrates variables in action.",
    "checklist": [
      "Implement core variables functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of variables?",
      "options": [
        "To style components",
        "To work with variables concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with variables concepts effectively",
      "explanation": "Variables is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for variables?",
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
      "question": "When should you use variables?",
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
      "question": "What is a common mistake with variables?",
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
      "question": "How does variables help in real projects?",
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
    "Variables: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what variables is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Variables",
      "description": "Write a simple example demonstrating variables.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Variables with Data",
      "description": "Use sample data to practice variables.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Variables Output",
      "description": "Log the expected output for a variables exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Variables",
      "description": "Combine variables with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Variables",
      "description": "Refactor given code to use variables properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Variables",
      "description": "Fix the bug related to variables.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Variables",
      "description": "Build a small feature using variables.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Variables Architecture",
      "description": "Design a scalable pattern with variables.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Variables in JavaScript\nconst result = \"Hello from Variables\";\nconsole.log(result);",
    "solution": "// Variables in JavaScript\nconst result = \"Hello from Variables\";\nconsole.log(result);\n// Solution: see examples above",
    "hint": "Try modifying the variables example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Variables Mini Challenge",
    "requirements": [
      "Demonstrate variables in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
