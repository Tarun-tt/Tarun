// Auto-generated topic: Generators
// Course: javascript

export default {
  "id": "generators",
  "title": "Generators",
  "definition": "Generators is a fundamental concept in JavaScript that every developer should master.",
  "deepExplanation": "Understanding generators deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Generators syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│   Source    │ ──► │  Generators │ ──► │   Output    │\n│   Code      │     │  Processing  │     │   Result    │\n└─────────────┘     └──────────────┘     └─────────────┘",
  "analogy": "Think of Generators as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Basic Generators",
      "code": "// Example 1: Basic usage\nconst value = \"generators\";\nconsole.log(value);",
      "output": "generators",
      "explanation": "Introduces the core idea behind generators."
    },
    {
      "title": "Practical Generators",
      "code": "// Example 2: Real-world pattern\nfunction demo() {\n  return \"Generators works\";\n}\nconsole.log(demo());",
      "output": "Generators works",
      "explanation": "Shows how generators appears in everyday code."
    },
    {
      "title": "With Variables",
      "code": "// Example 3: Combined with variables\nconst name = \"React Mastery\";\nconst msg = `Learning ${name} - Generators`;\nconsole.log(msg);",
      "output": "Learning React Mastery - Generators",
      "explanation": "Combines generators with other JS fundamentals."
    },
    {
      "title": "Data Transformation",
      "code": "// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);",
      "output": "[2, 4, 6]",
      "explanation": "Demonstrates practical data handling related to generators."
    },
    {
      "title": "Error-Safe Pattern",
      "code": "// Example 5: Safe usage\ntry {\n  const data = { topic: \"generators\" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}",
      "output": "generators",
      "explanation": "Shows defensive coding when working with generators."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain generators to a beginner.",
      "answer": "Generators is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use generators?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with generators?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does generators compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for generators.",
      "answer": "Production apps use generators for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing generators\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with generators."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand generators before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Generators Feature",
    "description": "Create a real-world component or module that demonstrates generators in action.",
    "checklist": [
      "Implement core generators functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of generators?",
      "options": [
        "To style components",
        "To work with generators concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with generators concepts effectively",
      "explanation": "Generators is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for generators?",
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
      "question": "When should you use generators?",
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
      "question": "What is a common mistake with generators?",
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
      "question": "How does generators help in real projects?",
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
    "Generators: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what generators is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Generators",
      "description": "Write a simple example demonstrating generators.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Generators with Data",
      "description": "Use sample data to practice generators.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Generators Output",
      "description": "Log the expected output for a generators exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Generators",
      "description": "Combine generators with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Generators",
      "description": "Refactor given code to use generators properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Generators",
      "description": "Fix the bug related to generators.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Generators",
      "description": "Build a small feature using generators.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Generators Architecture",
      "description": "Design a scalable pattern with generators.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Generators in JavaScript\nconst result = \"Hello from Generators\";\nconsole.log(result);",
    "solution": "// Generators in JavaScript\nconst result = \"Hello from Generators\";\nconsole.log(result);\n// Solution: see examples above",
    "hint": "Try modifying the generators example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Generators Mini Challenge",
    "requirements": [
      "Demonstrate generators in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
